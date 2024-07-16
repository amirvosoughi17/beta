import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { ToastProvider } from "@/components/ui/toast";
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
      <head></head>
      <body className=" bg-neutral-900 text-white">
        <ToastProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
