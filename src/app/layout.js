
import "./globals.css";
import Navbar from "@/components/structure/Navbar";
import ReduxProvider from "@/redux/ReduxProvider";
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "wixel",
  description: "",
};

export default function RootLayout({children}) {

  return (
    <html lang="en" dir="rtl">
      <head>
      <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" rel="stylesheet" type="text/css" />
      </head>
      <body className='font-vazirmatn min-h-screen bg-background font-sans antialiased'>
      <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
          >
        <ReduxProvider>
          <div className="mx-auto ">
            <div className="">
             {children}
            </div>
            <Toaster />
          </div>
        </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
