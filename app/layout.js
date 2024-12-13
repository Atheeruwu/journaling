import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import "react-quill-new/dist/quill.snow.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Journal",
  description: "",
};

export default function RootLayout({ children }) {
  // Fetch environment variables
  const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  // Check if the environment variables are available
  if (!clerkFrontendApi || !publishableKey) {
    return <p>Missing Clerk configuration</p>;
  }

  return (
    <ClerkProvider
      frontendApi={clerkFrontendApi}  // Adding frontendApi from environment variables
      publishableKey={publishableKey}  // Adding publishableKey from environment variables
    >
      <html lang="en">
        <body
          className={`${inter.className} bg-gradient-to-b from-pink-50 via-amber-50 to-pink-50`}
        >
          <div className="inset-0 bg-[url('/bg.jpg')] opacity-50 fixed -z-10" />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-pink-300 py-12 bg-opacity-10">
            <div className="container mx-auto px-4 text-center text-gray-900">
              <p>Done with love❤️</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
