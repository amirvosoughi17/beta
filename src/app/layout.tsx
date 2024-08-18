import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { UserProvider } from "@/context/UserContext";

export const metadata: Metadata = {
  title: "ویکسل",
  description:
    "طراحی پیکسل به پیکسل وب سایت شما با ویکسل,  طراحی وبسایت اختصاصی و اماده با ظاهری چشم نواز و با بروزترین متد های روز برای کسب و کار شما با تیم ویکسل",
  openGraph: {
    title: "Wixel | ویکسل",
    description:
      "طراحی پیکسل به پیکسل وب سایت شما با ویکسل,  طراحی وبسایت اختصاصی و اماده با ظاهری چشم نواز و با بروزترین متد های روز برای کسب و کار شما با تیم ویکسل",
    images: [
      {
        url: "/wixel-graph.svg",
        width: 800,
        height: 600,
        alt: "Wixel Website Graph",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="IR-fa" dir="rtl">
      <body className=" bg-neutral-900 text-white">
        <UserProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
