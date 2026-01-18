"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { bulkAnalyzeAndCreateCandidates } from "@/app/actions/candidates";
import { HugeiconsIcon } from "@hugeicons/react";
import * as pdfjs from "pdfjs-dist";
import { CloudUploadIcon, LegalDocumentIcon } from "@hugeicons/core-free-icons";
import { toast } from "react-toastify";

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface BulkUploadDialogProps {
    jobId: string;
}

export function BulkUploadDialog({ jobId }: BulkUploadDialogProps) {
    const [open, setOpen] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files).filter(
                (file) => file.type === "application/pdf"
            );

            if (selectedFiles.length === 0) return;

            // Append new files to existing ones
            let combinedFiles = [...files, ...selectedFiles];

            // Remove duplicates (optional)
            combinedFiles = combinedFiles.filter(
                (file, index, self) =>
                    index === self.findIndex((f) => f.name === file.name)
            );

            // Limit to max 10 files
            if (combinedFiles.length > 10) {
                toast.warning("You can upload a maximum of 10 files at once.");
                combinedFiles = combinedFiles.slice(0, 10);
            }

            setFiles(combinedFiles);
        }
    };


    const handleUpload = async () => {
        if (files.length === 0) return;

        setUploading(true);
        try {
            const fileData = await Promise.all(
                files.map(async (file) => {
                    const arrayBuffer = await file.arrayBuffer();
                    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
                    let text = "";

                    for (let i = 1; i <= pdf.numPages; i++) {
                        const page = await pdf.getPage(i);
                        const content = await page.getTextContent();
                        text += content.items
                            .map((item: any) => ("str" in item ? item.str : ""))
                            .join(" ") + "\n";
                    }

                    return {
                        name: file.name,
                        text: text.trim(),
                    };
                })
            );

            const results = await bulkAnalyzeAndCreateCandidates(jobId, fileData);

            const successCount = results.filter(r => r.status === 'success').length;
            const errorCount = results.length - successCount;

            if (successCount > 0) {
                toast.success(`Successfully processed ${successCount} candidates!`);
            }
            if (errorCount > 0) {
                toast.error(`Failed to process ${errorCount} files.`);
                console.error("Bulk upload errors:", results.filter(r => r.status === 'error'));
            }

            if (successCount > 0) {
                setOpen(false);
                setFiles([]);
            }
        } catch (error) {
            console.error("Upload failed:", error);
            toast.error("An unexpected error occurred during upload.");
        } finally {
            setUploading(false);
        }
    };


    const removeFile = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="mb-6">
                    <HugeiconsIcon icon={CloudUploadIcon} className="mr-2 w-4 h-4" />
                    Bulk Upload Resumes
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Bulk Upload Resumes</DialogTitle>
                    <DialogDescription>
                        Upload up to 10 PDF resumes at once. AI will automatically extract candidate details and analyze them.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-muted-foreground/25 rounded-xl p-10 text-center cursor-pointer hover:bg-muted/30 transition-colors"
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            multiple
                            accept=".pdf"
                            onChange={handleFileChange}
                        />
                        <HugeiconsIcon icon={CloudUploadIcon} size={40} className="mx-auto mb-4 text-muted-foreground" />
                        <p className="text-sm font-medium">Click to select PDF resumes</p>
                        <p className="text-xs text-muted-foreground mt-1">Maximum 10 files (PDF only)</p>
                    </div>

                    {files.length > 0 && (
                        <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2">
                            {files.map((file, idx) => (
                                <div key={idx} className="flex items-center justify-between p-2 bg-muted/30 rounded-lg text-sm">
                                    <div className="flex items-center gap-2 overflow-hidden">
                                        <HugeiconsIcon icon={LegalDocumentIcon} size={16} className="text-primary flex-shrink-0" />
                                        <span className="truncate">{file.name}</span>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                                        onClick={() => removeFile(idx)}
                                    >
                                        ×
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex gap-3 justify-end">
                    <Button variant="outline" onClick={() => setOpen(false)} disabled={uploading}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpload} disabled={files.length === 0 || uploading}>
                        {uploading ? "Processing..." : `Upload ${files.length} Resumes`}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
