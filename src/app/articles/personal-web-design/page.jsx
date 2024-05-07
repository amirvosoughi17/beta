import Image from 'next/image'
import React from 'react'

import HostImage from '@/assets/01.svg'

export const metadata = {
    title: 'مقالات ویکسل / طراحی وبسایت شخصی',
    charset: 'UTF-8',
    description: 'وبسایت شخصی چیست و مناسب چه اشخاصی است؟',
    openGraph: {
        title: 'مقالات ویکسل / طراحی وبسایت شخصی ',
        description: 'وبسایت شخصی چیست و مناسب چه اشخاصی است؟',
        images: HostImage,
        charset: 'UTF-8'
    },
};

import { FaRegDotCircle } from "react-icons/fa";
import Link from 'next/link'

export default function Article1() {
    const FreeLancerLink = 'https://ponisha.ir/blog/%d9%81%d8%b1%db%8c%d9%84%d9%86%d8%b3%db%8c%d9%86%da%af-%da%86%db%8c%d8%b3%d8%aa-%d9%81%d8%b1%db%8c%d9%84%d9%86%d8%b3%d8%b1-%da%a9%db%8c%d8%b3%d8%aa/';
    const EntrepreneurLink = 'https://fa.wikipedia.org/wiki/%DA%A9%D8%A7%D8%B1%D8%A2%D9%81%D8%B1%DB%8C%D9%86#:~:text=%28%D8%A8%D8%AD%D8%AB%29%20%D9%BE%DB%8C%D8%B4%D9%86%D9%87%D8%A7%D8%AF%20%D8%B4%D8%AF%D9%87%20%D8%A7%D8%B2%20%D9%81%D9%88%D8%B1%DB%8C%D9%87%D9%94%20%DB%B2%DB%B0%DB%B2%DB%B2.%20%DA%A9%D8%A7%D8%B1%D8%A2%D9%81%D8%B1%DB%8C%D9%86%20%28%D8%A8%D9%87,%D8%A8%D8%B1%D8%A7%DB%8C%20%D8%B1%D8%B3%DB%8C%D8%AF%D9%86%20%D8%A8%D9%87%20%D9%87%D8%AF%D9%81%DB%8C%20%D9%85%D8%B4%D8%AE%D8%B5%20%D9%87%D8%AF%D8%A7%DB%8C%D8%AA%20%D9%85%DB%8C%20%DA%A9%D9%86%D8%AF.';
    const graphicDesignerLink = 'https://fa.wikipedia.org/wiki/%D8%B7%D8%B1%D8%A7%D8%AD_%DA%AF%D8%B1%D8%A7%D9%81%DB%8C%DA%A9'
    const whatisBlogLink = 'https://blog.faradars.org/%D9%88%D8%A8%D9%84%D8%A7%DA%AF-%DA%86%DB%8C%D8%B3%D8%AA/'
    const responsiveDesignLink = 'https://fa.wikipedia.org/wiki/%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C_%D9%88%D8%A8_%D9%88%D8%A7%DA%A9%D9%86%D8%B4%E2%80%8C%DA%AF%D8%B1%D8%A7#:~:text=%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C%20%D9%88%D8%A8%20%D9%88%D8%A7%DA%A9%D9%86%D8%B4%E2%80%8C%DA%AF%D8%B1%D8%A7%20%DB%8C%D8%A7%20%D8%B1%DB%8C%D8%B3%D9%BE%D8%A7%D9%86%D8%B3%DB%8C%D9%88%20%28%D8%A8%D9%87%20%D8%A7%D9%86%DA%AF%D9%84%DB%8C%D8%B3%DB%8C%3A%20responsive,%DA%A9%D9%88%D8%A6%D8%B1%DB%8C%E2%80%8C%D9%87%D8%A7%DB%8C%20CSS3%20%D8%B3%D8%A7%D8%B2%DA%AF%D8%A7%D8%B1%20%D8%A7%D8%B3%D8%AA.%20%5B%DB%B1%5D%20%5B%DB%B2%5D%20%5B%DB%B3%5D%20%5B%DB%B4%5D'
    const seoBlogLink = 'https://wixel.org/articles/technical-seo-optimization'
    return (
        <div className='w-full min-h-[5000px] bg-[#e5e7ef] max-w-full  overflow-x-hidden'>
            <div className="w-full h-full flex items-start   justify-start gap-5 px-0 md:px-4 lg:px-[40px] py-8">
                <div className="w-[100%] lg:w-[75%] h-full   rounded-lg py-[20px] flex items-center justify-center">
                    <div className="flex flex-col  py-10 w-[100%] md:w-[90%] lg:w-[85%] h-full  bg-white rounded-lg shadow-lg">
                        <div className="mt-5 mb-[60px]">
                            <h1 className='text-center text-[25px] md:text-3xl font-bold text-[--color-primary]'>طراحی وبسایت شخصی</h1>
                        </div>
                        <div className="flex flex-col  gap-5 px-[15px] sm:px-[30px] md:px-[60px]">
                            <div className="flex flex-col gap-[70px] ">
                                <div className="">
                                    <Image
                                        src={HostImage}
                                        className='md:w-full rounded-3xl mb-10 '
                                        alt='طراحی سایت شخصی'
                                    />
                                </div>
                                <div className="flex flex-col gap-7">
                                    <h1
                                        id='introduction'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>پیش گفتار</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] md:leading-[45px]   text-gray-600 '>
                                        طراحی یک وبسایت شخصی، نه تنها یک ابزار است برای نمایش هویت و شخصیت شما در دنیای دیجیتال، بلکه یک فرصت است برای ارتباط با دیگران و به اشتراک گذاری ایده‌ها، تجربیات و اطلاعات شما. این رسانه هماره به عنوان یک پلتفرم شخصی برای بیان خود و ارتباط با دیگران به کار می‌رود. در این مقاله، به بررسی اهمیت و منافع طراحی یک وبسایت شخصی، همچنین راهنمایی‌هایی برای شروع این فرآیند خواهیم پرداخت
                                    </h3>
                                </div>
                                <div className="flex flex-col" >
                                    <div className="flex flex-col gap-7">
                                        <h1
                                            id='what-is-personal-website'
                                            className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                            وبسایت شخصی چیست؟</h1>
                                        <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600 '>
                                            <b>وبسایت شخصی، به عنوان یک فضای دیجیتال شخصی، محیطی است که به شما امکان می‌دهد تا هویت، تجربیات، ایده‌ها و محصولات خود را به دیگران معرفی کنید.</b>
                                            این وبسایت هماره شامل بخش‌هایی مانند صفحه‌ی اصلی، درباره ما، خدمات یا محصولات، نمونه‌کارها، بلاگ و تماس با ما می‌شود.

                                            به راستی، وبسایت شخصی شما می‌تواند به عنوان یک نمایشگاه آنلاین از توانایی‌ها، اهداف و تجربیات شما عمل کند. این فضایی است که شما می‌توانید در آن به اشتراک گذاری دیدگاه‌ها، اطلاعات تخصصی، آموزش‌ها و حتی ایده‌های خلاقانه خود را با دنیا انجام دهید.
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-7" >
                                    <h1
                                        id='why-personal-website'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        چرا وبسایت شخصی؟</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600'>
                                        وبسایت شخصی به شما امکان می‌دهد تا حضور آنلاین شخصیت خود را بهبود دهید و به جامعه مجازی معرفی شوید. این ابزار مهم برای افرادی است که به دنبال ایجاد حضور آنلاین قوی، ارتباط بیشتر با مخاطبان و به اشتراک گذاری محتوا و تجربیات خود هستند.
                                        <br />
                                        در زیر برخی از دلایل اهمیت وبسایت شخصی را بررسی می‌کنیم:
                                        <br />
                                        <b>ارتباط مستقیم با مخاطبان</b>: با داشتن یک وبسایت شخصی، شما توانمند خواهید بود تا آشکارا با مخاطبان و پیروان خود ارتباط برقرار کنید، بدون واسطه و محدودیت‌های شبکه‌های اجتماعی
                                        <br />
                                        <b>نمایش مهارت‌ها و تخصص‌ها</b>: وبسایت شخصی به شما اجازه می‌دهد تا مهارت‌ها، تجربیات و تخصص‌های خود را به دیگران نشان دهید و رزومه‌ی آنلاینی قوی‌ای ایجاد کنید
                                        <br />
                                        <b>افزایش اعتبار و قابلیت اطمینان</b>: یک وبسایت شخصی، به عنوان یک منبع معتبر اطلاعات، اعتبار و قابلیت اطمینان شما را در نگاه دیگران افزایش می‌دهد و به آنها اعتماد بیشتری در ارتباط با شما می‌دهد.
                                        <br />

                                        <b>بهبود دسترسی به فرصت‌های شغلی</b>: وجود یک وبسایت شخصی می‌تواند به شما کمک کند تا بهبودی قابل توجهی در دسترسی به فرصت‌های شغلی و همکاری‌های حرفه‌ای داشته باشید
                                        <br />

                                        <b>ایجاد برند شخصی</b>: با استفاده از وبسایت شخصی، شما می‌توانید برند شخصی خود را بسازید و آن را به عنوان یک منحصر به فرد در بازار معرفی کنید.
                                        <br />
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-7" >
                                    <h1
                                        id='personal-website-is-suitable-for'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        وبسایت شخصی مناسب چه کسانی است؟</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600'>
                                        <strong>وبسایت شخصی یک ابزار قدرتمند برای افرادی است که به دنبال بالا بردن حضور آنلاین و ایجاد یک شناخت قوی در فضای دیجیتال هستند</strong>. در زیر به برخی از افرادی که نیاز به وبسایت شخصی دارند، پرداخته‌ایم:
                                        <br />
                                        <b>کسب و کارهای شخصی</b>: افرادی که کسب و کارهای خود را راه‌اندازی کرده‌اند یا به صورت آنلاین خدمات یا محصولاتی ارائه می‌دهند، به وبسایت شخصی نیاز دارند تا بهترین راه برای معرفی و تبلیغ خدمات یا محصولات خود را داشته باشند.
                                        <br />
                                        <b>وبلاگرها و نویسندگان</b>: افرادی که مطالب و محتوای ارزشمندی را تولید می‌کنند و می‌خواهند آن را با دیگران به اشتراک بگذارند، به وبسایت شخصی نیاز دارند تا بتوانند محتوای خود را به طور مستقل و متمرکز منتشر کنند.
                                        <br />

                                        <b><Link className='underline text-blue-700' href={EntrepreneurLink}>کارآفرینان</Link> و  <Link className='underline text-blue-700' href={FreeLancerLink}>فریلنسرها</Link></b>: افرادی که به صورت مستقل و بدون وابستگی به یک سازمان یا شرکت کار می‌کنند، به وبسایت شخصی نیاز دارند تا تخصص، تجربیات و نمونه کارهای خود را به دیگران نشان دهند و فرصت‌های شغلی جدیدی را کشف کنند
                                        <br />

                                        <b>هنرمندان و خلاقان</b>: هنرمندان، عکاسان، <Link href={graphicDesignerLink} className='underline text-blue-700'>طراحان گرافیک</Link> و سایر افرادی که اثر هنری یا خلاقانه خود را به دیگران نشان می‌دهند، به وبسایت شخصی نیاز دارند تا آثار خود را به طور کامل و قابل دسترس برای علاقه‌مندان به نمایش بگذارند.
                                        <br />

                                        <b>افرادی که به دنبال ارتقاء حضور آنلاین شخصی هستند</b>: افرادی که می‌خواهند شخصیت و شناخت خود را در فضای آنلاین بهبود بخشند، به وبسایت شخصی نیاز دارند تا به عنوان یک نقطه مرکزی برای تمام فعالیت‌ها و ارتباطات خود عمل کنند.
                                        <br />
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-7" >
                                    <h1
                                        id='personal-website-benefits'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        برتری های وبسایت شخصی</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600'>
                                        <strong>شناخت برند شخصی</strong>: وبسایت شخصی به شما اجازه می‌دهد تا برند و شخصیت خود را در فضای آنلاین بنا کنید و به افراد دیگر نشان دهید که کیستید و به چه می‌پردازید.
                                        <br />

                                        <strong>نمایش نمونه کارها و تجربیات</strong>: با داشتن یک وبسایت شخصی، می‌توانید نمونه کارها، تجربیات و دانش خود را به طور جامع به دیگران نشان دهید و از ارتباط مستقیم با مخاطبانتان بهره‌مند شوید.
                                        <br />
                                        <strong>ارتباط مستقیم با مخاطبان</strong>: از طریق وبسایت شخصی، می‌توانید با مخاطبان و مشتریان خود به صورت مستقیم ارتباط برقرار کنید و بازخوردهای آن‌ها را دریافت کنید.
                                        <br />
                                        <strong>افزایش اعتبار و اعتماد</strong>: یک وبسایت شخصی به شما اعتبار و اعتماد بیشتری را در میان مخاطبان و مشتریانتان فراهم می‌کند و از شناخته‌شدن بیشتر شما در صنعت و حوزه کاریتان حمایت می‌کند.
                                        <br />
                                        <strong>امکان گسترش و رشد</strong>: با داشتن یک وبسایت شخصی، می‌توانید برنامه‌های تبلیغاتی، بازاریابی و فروش خود را گسترش داده و به صورت مداوم رشد کنید.
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-7"  >
                                    <h1
                                        id='personal-website-facilities'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        امکانات وبسایت شخصی</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600'>
                                        مکانات وبسایت شخصی با ویژگی‌های منحصر به فرد خود، به شما امکانات متنوعی را برای ایجاد یک حضور آنلاین قدرتمند و موثر فراهم می‌کند. در زیر به برخی از این امکانات اشاره می‌کنیم:
                                        <br />
                                        <strong>نمایش نمونه کارها و پروژه‌ها</strong>: این امکان به شما اجازه می‌دهد تا نمونه کارها، پروژه‌ها، و ارتباطات حرفه‌ای خود را با دیگران به طور جامع و موثر نمایش دهید.
                                        <br />
                                        <strong><Link className='underline text-blue-700' href={whatisBlogLink}>بلاگ و مقالات</Link></strong>: ایجاد بخشی برای بلاگ یا مقالات، به شما اجازه می‌دهد تا محتوای ارزشمندی را در زمینه‌های مختلف به اشتراک بگذارید و بازدیدکنندگان خود را به وبسایتتان جذب کنید.
                                        <br />
                                        <strong>فرم تماس</strong>: اضافه کردن فرم تماس به وبسایت شخصی، به بازدیدکنندگان اجازه می‌دهد تا به راحتی با شما تماس بگیرند و ارتباط مستقیم با شما برقرار کنند.
                                        <br />
                                        <strong>نمایش‌دهنده آخرین فعالیت‌ها</strong>: این امکان به شما اجازه می‌دهد تا آخرین فعالیت‌ها و به روزرسانی‌های خود را به شکل اتوماتیک در وبسایت نمایش دهید و بازدیدکنندگانتان را به روز نگه دارید.
                                        <br />
                                        <strong>ارتباط با شبکه‌های اجتماعی</strong>: امکان افزودن دکمه‌ها و لینک‌های به شبکه‌های اجتماعی مختلف، به شما کمک می‌کند تا بازدیدکنندگانتان را به شبکه‌های اجتماعی خود متصل کنید و ارتباط بیشتری با آن‌ها برقرار کنید.
                                    </h3>
                                </div>

                                <div className="flex flex-col gap-7" >
                                    <h1
                                        id='personal-website-design-in-wixel'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        طراحی سایت شخصی در ویکسل
                                    </h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]   text-gray-600'>
                                        با طراحی سایت شخصی در ویکسل، شما به یک تجربه حرفه‌ای و منحصر به فرد در دنیای دیجیتال دست پیدا می‌کنید. ویکسل به عنوان یک استارتاپ مبتنی بر فناوری، ارائه دهنده خدمات طراحی و توسعه وبسایت‌های شخصی است. اینجا با تلفیق هویت و نیازهای شما با استفاده از ابزارهای مدرن، یک فضای دیجیتال شخصی و متفاوت را برای شما ایجاد می‌کنیم.                                    </h3>
                                    <br />
                                    ویژگی‌های برتر ما در طراحی و توسعه وبسایت شخصی شامل موارد زیر است:
                                    <br />
                                    <strong><Link className='underline text-blue-700' href={responsiveDesignLink}>طراحی واکنشگرا</Link></strong> وبسایت شخصی شما با استفاده از طراحی واکنشگرا، به طور اتوماتیک و بهینه برای همه دستگاه‌ها نمایش داده می‌شود
                                    <strong>سفارشی‌سازی</strong>: ما امکاناتی را فراهم می‌کنیم تا وبسایت شما بر اساس سلیقه و نیازهای شما سفارشی‌سازی شود
                                    <strong><Link className='underline text-blue-700' href={seoBlogLink}>بهینه‌سازی فنی</Link></strong>: وبسایت شما با استفاده از تکنولوژی‌های به‌روز و بهینه‌سازی فنی، برای موتورهای جستجو بهتر دیده می‌شود
                                    <strong>پشتیبانی ۲۴/۷</strong>: تیم پشتیبانی ما آماده پاسخگویی به هر گونه سوال یا مشکل شما در هر زمانی است

                                    با ویکسل، وبسایت شخصی خود را با بهترین استانداردها و تجربه کاربری عالی، به آسانی و با اطمینان بالا ایجاد کنید.
                                </div>

                                <div className="flex flex-col gap-7" >
                                    <h1
                                        id='conclusion'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        سخن آخر
                                    </h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]   text-gray-600'>
                                        در نهایت، طراحی یک وبسایت شخصی از اهمیت بسیاری برخوردار است. این فضای دیجیتال شماست که می‌توانید به اشتراک گذاری تجربیات، ایده‌ها و اطلاعات خود را در آن محقق کنید. از طریق وبسایت شخصی، می‌توانید حضور آنلاین خود را تقویت کنید، با دیگران ارتباط برقرار کنید و حتی فرصت‌های شغلی جدید را کشف کنید.

                                        با استفاده از خدمات ویکسل، ما به شما این امکان را می‌دهیم که به سرعت و با کیفیت، یک وبسایت شخصی منحصر به فرد و جذاب راه‌اندازی کنید. با تمام امکانات و ابزارهایی که ارائه می‌دهیم، ما می‌خواهیم تا وبسایت شما را به یک تجربه دیجیتال بی‌نظیر تبدیل کنیم و به شما کمک کنیم تا در دنیای آنلاین موفقیت بیشتری داشته باشید.
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
                                <Link href='#what-is-personal-website' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '> <FaRegDotCircle /> وبسایت شخصی چیست؟</Link>
                                <Link href='#why-personal-website' className='flex items-center gap-2 font-bold text-[17px]text-[--color-primary] '> <FaRegDotCircle />چرا وبسایت شخصی؟</Link>
                                <Link href='#personal-website-is-suitable-for' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '> <FaRegDotCircle />وبسایت شخصی مناسب چه کسانی است؟</Link>
                                <Link href='#personal-website-benefits' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '><FaRegDotCircle />برتری های وبسایت شخصی</Link>
                                <Link href='#personal-website-facilities' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '><FaRegDotCircle /> امکانات وبسایت شخصی</Link>
                                <Link href='#personal-website-design-in-wixel' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '><FaRegDotCircle />طراحی سایت شخصی در ویکسل</Link>
                                <Link href='#conclusion' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '> <FaRegDotCircle /> سخن آخر</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}