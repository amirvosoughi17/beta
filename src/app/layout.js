
import "./globals.css";
import Navbar from "@/components/Navbar";
import ReduxProvider from "@/redux/ReduxProvider";
import { Toaster } from "@/components/ui/sonner"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}) {

  return (
    <html lang="en" dir="rtl">
      <head>
      <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" rel="stylesheet" type="text/css" />
      </head>
      <body className='font-vazirmatn min-h-screen bg-background font-sans antialiased'>
        <ReduxProvider>
          <div className="mx-auto ">
            <div className="">
             {children}
            </div>
            <Toaster />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
