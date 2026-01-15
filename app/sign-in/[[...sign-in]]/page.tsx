import { Footer } from '@/components/landing-page/Footer'
import { Navbar } from '@/components/landing-page/Navbar'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <>
            <Navbar />
            <div className="flex min-h-screen items-center justify-center">
                <SignIn />
            </div>
            <Footer />
        </>
    )
}