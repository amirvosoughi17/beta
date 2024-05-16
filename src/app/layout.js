
import "./globals.css";
import MainOpenGraphImage from '@/assets/main-open-graph-image.jpg';

export const metadata = {
  title: 'Wixel | ویکسل',
  charset: 'UTF-8',
  description: 'طراحی پیکسل به پیکسل وب سایت شما با ویکسل,  طراحی وبسایت اختصاصی و اماده با ظاهری چشم نواز و با بروزترین متد های روز برای کسب و کار شما با تیم ویکسل',
  openGraph: {
    title: 'Wixel | ویکسل',
    description: 'طراحی پیکسل به پیکسل وب سایت شما با ویکسل,  طراحی وبسایت اختصاصی و اماده با ظاهری چشم نواز و با بروزترین متد های روز برای کسب و کار شما با تیم ویکسل',
    images: MainOpenGraphImage,
    charset: 'UTF-8'
  },
};
export default function RootLayout({children}) {

  return (
    <html lang="en" dir="rtl">
      <head>
      <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" rel="stylesheet" type="text/css" />
      <meta name="theme-color" content="#5D5AFF"></meta>
      </head>
      <body className='font-vazirmatn min-h-screen bg-background font-sans antialiased'>
          <div className="mx-auto ">
            <div className="">
             {children}
            </div>
          </div>
      </body>
    </html>
  );
}
