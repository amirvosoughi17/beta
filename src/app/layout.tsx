import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";



export const metadata: Metadata = {
  title: "ویکسل",
  description:
    "طراحی پیکسل به پیکسل وب سایت شما با ویکسل,  طراحی وبسایت اختصاصی و اماده با ظاهری چشم نواز و با بروزترین متد های روز برای کسب و کار شما با تیم ویکسل",
  openGraph: {
    title: "Wixel | ویکسل",
    description:
      "طراحی پیکسل به پیکسل وب سایت شما با ویکسل,  طراحی وبسایت اختصاصی و اماده با ظاهری چشم نواز و با بروزترین متد های روز برای کسب و کار شما با تیم ویکسل",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Vazirmatn:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Italiana&family=Lalezar&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Vazirmatn:wght@100..900&display=swap" rel="stylesheet"></link>
        <meta name="theme-color" content="#5D5AFF"></meta>
      </head>

      <body className="font-vazirmatn min-h-screen bg-neutral-900 text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
