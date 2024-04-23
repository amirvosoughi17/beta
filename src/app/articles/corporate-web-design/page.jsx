import Image from 'next/image'
import React from 'react'

import EducationalBanner from '@/assets/corporate-banner.svg'



import { FaRegDotCircle } from "react-icons/fa";
import Link from 'next/link'

export const metadata = {
    title: 'مقالات ویکسل / طراحی وبسایت شرکتی',
    charset: 'UTF-8',
    description: 'وبسایت شرکتی چیست؟ , برسی ویژگی های وبسایت شرکتی , طراحی وبسایت شرکتی در ویکسل',
    openGraph: {
        title: 'مقالات ویکسل / طراحی وبسایت شرکتی',
        description: 'وبسایت شرکتی چیست؟ , برسی ویژگی های وبسایت شرکتی , طراحی وبسایت شرکتی در ویکسل',
        images: EducationalBanner,
        charset: 'UTF-8'
    },
};
export default function CorporateBlog() {
    const startupBlogLink = 'https://ponisha.ir/blog/%d8%a7%d8%b3%d8%aa%d8%a7%d8%b1%d8%aa-%d8%a2%d9%be/';
    const responsiveDesignBlogLink = 'https://fa.wikipedia.org/wiki/%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C_%D9%88%D8%A8_%D9%88%D8%A7%DA%A9%D9%86%D8%B4%E2%80%8C%DA%AF%D8%B1%D8%A7#:~:text=%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C%20%D9%88%D8%A8%20%D9%88%D8%A7%DA%A9%D9%86%D8%B4%E2%80%8C%DA%AF%D8%B1%D8%A7%20%DB%8C%D8%A7%20%D8%B1%DB%8C%D8%B3%D9%BE%D8%A7%D9%86%D8%B3%DB%8C%D9%88%20%28%D8%A8%D9%87%20%D8%A7%D9%86%DA%AF%D9%84%DB%8C%D8%B3%DB%8C%3A%20responsive,%DA%A9%D9%88%D8%A6%D8%B1%DB%8C%E2%80%8C%D9%87%D8%A7%DB%8C%20CSS3%20%D8%B3%D8%A7%D8%B2%DA%AF%D8%A7%D8%B1%20%D8%A7%D8%B3%D8%AA.%20%5B%DB%B1%5D%20%5B%DB%B2%5D%20%5B%DB%B3%5D%20%5B%DB%B4%5D';
    const seoBlogLink = 'https://wixel.org/articles/technical-seo-optimization';
    const exclusiveDesignAndReadyDifferentBlogLink = 'https://wixel.org/articles/exclusive-design-vs-ready-template';
    return (
        <div className='w-full min-h-[5000px] bg-[#e5e7ef] max-w-full  overflow-x-hidden'>
            <div className="w-full h-full flex items-start   justify-start gap-5 px-0 md:px-4 lg:px-[40px] py-8">
                <div className="w-[100%] lg:w-[75%] h-full   rounded-lg py-[20px] flex items-center justify-center">
                    <div className="flex flex-col  py-10 w-[100%] md:w-[90%] lg:w-[85%] h-full  bg-white rounded-lg shadow-lg">
                        <div className="mt-5 mb-[60px]">
                            <h1 className='text-center text-[25px] md:text-3xl font-bold text-[--color-primary]'>طراحی وبسایت شرکتی</h1>
                        </div>
                        <div className="flex flex-col  gap-5 px-[15px] sm:px-[30px] md:px-[60px]">
                            <div className="flex flex-col gap-[70px] ">
                                <div className="">
                                    <Image
                                        src={EducationalBanner}
                                        className='md:w-full  mb-10 '
                                        alt='طراحی سایت شرکتی'
                                    />
                                </div>
                                <div className="flex flex-col gap-7">
                                    <h1
                                        id='introduction'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>پیش گفتار</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] md:leading-[45px]   text-gray-600 '>
                                        با طراحی یک وبسایت شرکتی، شما می‌توانید حضور آنلاین قوی و حرفه‌ای برای کسب و کار خود ایجاد کنید. وبسایت شرکتی، به عنوان یک نماینده دیجیتال برای شرکت یا سازمان شما، به مشتریان و مخاطبان شما اعتماد بیشتری القا می‌کند و امکان ارتباط و ارائه خدمات بهتر را فراهم می‌آورد.

                                        در این نوشتار، به بررسی اهمیت و برتری‌های طراحی یک وبسایت شرکتی خواهیم پرداخت و نحوه تأثیرگذاری آن در رشد و توسعه کسب و کار شما را بررسی خواهیم کرد. همچنین، با استفاده از تجربیات و مطالعات موردی، به نحوه طراحی و بهینه‌سازی وبسایت شرکتی به منظور جلب توجه مخاطبان و افزایش نرخ تبدیل مشتریان می‌پردازیم.
                                    </h3>
                                </div>
                                <div className="flex flex-col" >
                                    <div className="flex flex-col gap-7">
                                        <h1
                                            id='what-is-corporate-website'
                                            className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                            سایت شرکتی چیست؟</h1>
                                        <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600 '>
                                            <b>وبسایت شرکتی به عنوان یک نماینده دیجیتال برای یک شرکت یا سازمان عمل می‌کند و نقش اساسی در ایجاد حضور آنلاین قوی و حرفه‌ای برای کسب و کار دارد. این نوع وبسایت به طور معمول به منظور ارتباط با مشتریان، ارائه خدمات و محصولات، اطلاع‌رسانی درباره شرکت، ارائه اخبار و مقالات مربوط به صنعت و فعالیت‌های شرکت، و نمایش آخرین پروژه‌ها و موفقیت‌های شرکت استفاده می‌شود.</b>
                                            <br />
                                            سایت شرکتی باید دارای طراحی حرفه‌ای، سازماندهی مناسب، و محتوای به‌روز و جذاب باشد تا به خوبی نمایانگر ارزش‌ها، محصولات و خدمات شرکت باشد و اعتماد مخاطبان را به شرکت افزایش دهد. این وبسایت‌ها معمولاً شامل صفحاتی مانند صفحه‌ی اصلی، درباره ما، خدمات، محصولات، پروژه‌ها، اخبار، تماس با ما و صفحات بلاگ هستند.
                                            <br />
                                            به طور کلی، سایت شرکتی به عنوان یک وسیله ارتباطی قوی و حرفه‌ای با مشتریان، پیشنهاد دهندگان، و همکاران عمل می‌کند و در تقویت برند و شناخته شدن شرکت بسیار مؤثر است.
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-7" >
                                    <h1
                                        id='corporate-website-is-suitable-for'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        سایت شرکتی برای چه سازمان هایی مناسب است؟</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600'>
                                        سایت شرکتی یک ابزار بسیار مهم برای ارتباط با مخاطبان و ارائه خدمات و محصولات به شیوه‌ای حرفه‌ای و جذاب است. <b>این نوع وبسایت برای انواع سازمان‌ها و شرکت‌ها از جمله کوچک، متوسط ​​و بزرگ، شرکت‌های خصوصی و دولتی، استارتاپ‌ها، شرکت‌های فناوری، شرکت‌های خدماتی، شرکت‌های مشاوره، و حتی فعالان فردی و آموزشی مناسب است</b>.
                                        <br />
                                        <strong>برای سازمان‌های کوچک و استارتاپ‌ها، سایت شرکتی ابزاری بسیار قابل اعتماد و کارآمد است که به آن‌ها کمک می‌کند تا حضور آنلاین قوی‌تری داشته باشند و بازاریابی و فروش خود را بهبود بخشند</strong>. این امکان را به آن‌ها می‌دهد که با مخاطبان خود ارتباط برقرار کنند و اطلاعات لازم را درباره خدمات و محصولات خود ارائه دهند
                                        <br />
                                        به طور مشابه، برای شرکت‌های بزرگ و شرکت‌های فناوری، سایت شرکتی یک وسیله بسیار اساسی برای نمایش نقشهای مختلف شرکت، محصولات و خدمات، و همچنین به ارتباط برقراری با مشتریان و همکاران است.
                                        <br />
                                        همچنین، سایت شرکتی برای فعالان فردی و آموزشی نیز مناسب است. این افراد می‌توانند از طریق سایت شرکتی خود، خدمات و محصولات خود را معرفی کنند، نمونه‌کارها و پروژه‌های خود را به نمایش بگذارند، و به طور کلی شخصیت و حرفه‌ایت خود را برجسته کنند.
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-7" >
                                    <h1
                                        id='website-for-startups'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        طراحی سایت مناسب استارت اپ ها</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600'>
                                        طراحی سایت مناسب برای <Link className='underline text-blue-700' href={startupBlogLink}>استارتاپ‌ها</Link> امری بسیار اساسی و حیاتی است زیرا یک وبسایت مناسب قادر است به شرکت‌های جوان کمک کند تا در بازار رقابتی امروزی برجسته شوند و رشد و توسعه خود را افزایش دهند. وبسایت برای استارتاپ‌ها فراتر از یک صفحه اینترنتی ساده است؛ بلکه یک ابزار برجسته برای تبلیغ، بازاریابی، ارتباط با مشتریان و جلب سرمایه‌گذاری است.
                                        <br />
                                        با طراحی یک وبسایت مناسب، استارتاپ‌ها می‌توانند بهترین نمایندگان خدمات و محصولات خود را به جامعه معرفی کنند و بازاریابی قوی‌تری داشته باشند. وبسایت مناسب برای استارتاپ‌ها باید به گونه‌ای طراحی شود که ارزش آنها را به دقت انعکاس دهد، مخاطبان را جلب کند و اعتماد آنها را برای همکاری و خرید افزایش دهد.
                                        <br />
                                        به عنوان یک استارتاپ، داشتن یک وبسایت مناسب به شما کمک می‌کند تا رشد و توسعه را بیشتر کنید، محصولات و خدمات خود را بهتر به مخاطبان معرفی کنید و در نهایت، موفقیت بیشتری کسب کنید.
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-7" >
                                    <h1
                                        id='corporate-website-is-not-suitable-for'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        وبسایت شرکتی برای چه سازمان هایی مناسب نیست</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600'>
                                        وبسایت شرکتی، برای هر سازمانی مناسب نیست و ممکن است برخی از سازمان‌ها به دلایل مختلف از استفاده از این نوع وبسایت خودداری کنند. برخی از این دلایل عبارتند از:
                                        <br />
                                        <strong>کوچکی و حجم کم فعالیت</strong>: برای برخی از کسب و کارها یا سازمان‌های کوچک، داشتن یک وبسایت شرکتی ممکن است به دلیل کمبود منابع مالی و انسانی، نیازمندی‌ها و یا عدم توانایی در بهره‌برداری از ویژگی‌های آن، مناسب نباشد.
                                        <br />
                                        <strong>فعالیت در صنایع خاص</strong>: برخی از صنایع ممکن است به دلیل خصوصیات خود، نیازی به داشتن یک وبسایت شرکتی نداشته باشند، مثلاً صنایعی که فعالیتشان به صورت آفلاین و در محدوده محلی است.
                                        <br />
                                        <strong>استفاده از دیگر راهکارها</strong>: برخی سازمان‌ها از راهکارهای دیگری مانند صفحات فیس‌بوک یا اینستاگرام برای حضور آنلاین استفاده می‌کنند و احساس نیاز به داشتن یک وبسایت شرکتی نمی‌کنند.
                                        <br />
                                        <strong>هزینه‌ی بالا</strong>: طراحی، توسعه و نگهداری یک وبسایت شرکتی هزینه‌های قابل توجهی دارد و برای برخی از سازمان‌ها ممکن است این هزینه‌ها بیش از حد باشد و نتوانند آن را تحمل کنند.
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-7" >
                                    <h1
                                        id='corporate-website-facilities'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        امکانات یک وبسایت شرکتی</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600'>
                                        وبسایت یک شرکت ابزاری حیاتی است که می‌تواند نقش بسیار مهمی در توسعه و رشد آن شرکت داشته باشد. امکانات یک وبسایت شرکتی باید با دقت و با توجه به نیازهای مخاطبان و هدف اصلی شرکت طراحی شود. در زیر، به برخی از امکانات ویژه و مهم یک وبسایت شرکتی اشاره می‌کنیم:
                                        <br />
                                        <strong>طراحی واکنشگرا</strong>: وبسایت باید به طور کامل <Link className='underline text-blue-700' href={responsiveDesignBlogLink}>واکنشگرا</Link> باشد و بتواند به اندازه‌ی ممکن بر روی تمامی دستگاه‌ها به خوبی نمایش داده شود، از جمله کامپیوترها، تبلت‌ها و گوشی‌های هوشمند
                                        <br />
                                        <strong>بهینه‌سازی فنی</strong>: <Link className='underline text-blue-700' href={seoBlogLink}>بهینه‌سازی فنی</Link> وبسایت برای موتورهای جستجو از جمله گوگل بسیار حیاتی است. این به معنای بهبود قابلیت دسترسی و بهبود رتبه‌بندی در نتایج جستجو است
                                        <br />
                                        <strong>اطلاعات تماس</strong>: اطلاعات تماس شرکت، شماره تماس، آدرس و ایمیل باید به روشنی در وبسایت قابل دسترس باشد تا مشتریان بتوانند به راحتی با شما تماس بگیرند.
                                        <br />
                                        <strong>نمایش محصولات و خدمات</strong>: وبسایت باید قابلیت نمایش محصولات و خدمات شرکت را داشته باشد تا مشتریان بتوانند آنها را ببینند و خرید کنند.
                                        <br />
                                        با توجه به اهمیت وبسایت برای یک شرکت، انتخاب وب‌سایت مناسب و داشتن امکانات لازم برای ارتقا و توسعه کسب و کار بسیار حیاتی است.
                                    </h3>
                                </div>

                                <div className="flex flex-col gap-7" >
                                    <h1
                                        id='corporate-website-design-in-wixel'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        طراحی وبسایت شرکتی در ویکسل</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600'>
                                        در ویکسل، ما به شما دو راهکار برای طراحی وبسایت شرکتی ارائه می‌دهیم:
                                        <br />
                                        <strong>طراحی اختصاصی (کد نویسی)</strong>: اگر شما به دنبال یک وبسایت شرکتی منحصر به فرد با امکانات خاص و اختصاصی هستید، ما توانایی طراحی یک وبسایت اختصاصی با استفاده از کد نویسی را داریم. این راهکار به شما امکان می‌دهد تا یک وبسایت کاملاً سفارشی و با دقت بالا با توجه به نیازها و الزامات شما راه‌اندازی کنید.
                                        <br />
                                        <strong>طراحی با وردپرس</strong>: اگر به دنبال یک راه حل سریع‌تر و مدیریت آسان‌تر هستید، ما قابلیت طراحی وبسایت شما با استفاده از وردپرس را نیز داریم. با استفاده از این روش، شما می‌توانید به سرعت وبسایت خود را راه‌اندازی کنید و با افزودن محتوا و افزونه‌های متنوع، آن را به دلخواه خود شخصی‌سازی کنید.
                                        <br />
                                        <b>کاربران می‌توانند با ورود به پنل کاربری خود در وبسایت ما، نوع وبسایت مورد نظر خود را انتخاب کرده و با انتخاب ویژگی‌های مورد نیاز، سفارش خود را ثبت کنند. این امکان به شما این اطمینان را می‌دهد که وبسایت شما با دقت و با توجه به نیازهای ویژه شما طراحی شده است.</b>
                                        <br />
                                        <b> <Link className='underline text-blue-700' href={exclusiveDesignAndReadyDifferentBlogLink}>تفاوت های طراحی اختصاصی با آماده را در اینجا بخوانید</Link> </b>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block max-w-[27%] min-w-[27%] h-[600px] bg-white mt-[20px] rounded-lg shadow-lg ">
                    <div className="flex flex-col ">
                        <div className="w-full">
                            <ul className='flex flex-col gap-6 px-4 xl:px-10 py-10'>
                                <Link href='#introduction' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '> <FaRegDotCircle /> پیش گفتار</Link>
                                <Link href='#what-is-corporate-website' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '> <FaRegDotCircle /> وبسایت شخصی چیست؟</Link>
                                <Link href='#corporate-website-is-suitable-for' className='flex items-center gap-2 font-bold text-[17px]text-[--color-primary] '> <FaRegDotCircle /> سایت شرکتی برای چه سازمان هایی مناسب است؟</Link>
                                <Link href='#website-for-startups' className='flex items-center gap-2 font-bold text-[17px]text-[--color-primary] '> <FaRegDotCircle /> طراحی سایت مناسب استارت اپ ها</Link>
                                <Link href='#corporate-website-is-not-suitable-for' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '> <FaRegDotCircle />وبسایت شرکتی برای چه سازمان هایی مناسب نیست</Link>
                                <Link href='#corporate-website-facilities' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '><FaRegDotCircle />امکانات یک وبسایت شرکتی</Link>
                                <Link href='#corporate-website-design-in-wixel' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '><FaRegDotCircle /> طراحی وبسایت شرکتی در ویکسل</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}