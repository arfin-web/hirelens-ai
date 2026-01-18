# Hirelens AI 🚀

Hirelens AI is a modern, AI-powered recruitment platform designed to streamline the hiring process for recruiters and hiring managers. By leveraging advanced AI models, Hirelens AI automatically analyzes resumes against job descriptions, provides detailed match summaries, and ranks candidates to help you find the perfect fit faster.

## ✨ Key Features

- **AI-Powered Candidate Ranking**: Instantly rank candidates based on their match percentage with the job requirements.
- **Bulk PDF Resume Upload**: Upload up to 10 PDF resumes at once. AI automatically extracts candidate details and performs analysis using Gemini 1.5 Flash.
- **Intelligent Resume Analysis**: Detailed AI summaries of candidate strengths, experience, and potential skill gaps.
- **Recruitment Dashboard**: An intuitive overview of all your job postings, candidate pipelines, and key recruitment metrics.
- **Seamless Candidate Management**: Easily add, track, and manage candidates for multiple job roles.
- **Modern UI/UX**: A beautiful, responsive interface built with the latest web technologies for a premium experience.
- **Real-time Notifications**: Professional toast notifications for all system actions.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Database & Backend**: [Supabase](https://supabase.com/)
- **AI Integration**: [Google Gemini AI](https://deepmind.google/technologies/gemini/) via [Vercel AI SDK](https://sdk.vercel.ai/)
- **PDF Processing**: [pdfjs-dist](https://github.com/mozilla/pdf.js) for client-side text extraction
- **Icons**: [Hugeicons](https://hugeicons.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- A Clerk account for authentication
- A Supabase project
- A Google AI (Gemini) API Key

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/hirelens-ai.git
   cd hirelens-ai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your credentials:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open the app**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
