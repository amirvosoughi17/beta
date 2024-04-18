import Image from 'next/image'
import React from 'react'

import HostImage from '@/assets/01.svg'



import { FaRegDotCircle } from "react-icons/fa";
import Link from 'next/link'

export default function Article1() {
    const seoBlogLink = 'https://wixel.org/articles/technical-seo-optimization'
    const wordpressBlogLink = 'https://fa.wikipedia.org/wiki/%D9%88%D8%B1%D8%AF%D9%BE%D8%B1%D8%B3'
    const codingBlogLink = 'https://blog.faradars.org/%DA%A9%D8%AF-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-%DA%86%DB%8C%D8%B3%D8%AA/';
    const emailMarketingBlogLink = 'https://www.yektanet.com/blog/4590/%d8%a7%db%8c%d9%85%db%8c%d9%84-%d9%85%d8%a7%d8%b1%da%a9%d8%aa%db%8c%d9%86%da%af-%da%86%db%8c%d8%b3%d8%aa/'
    const woocommerceBlogLink = 'https://hamyarwp.com/what-is-woocommerce/'
    return (
        <div className='w-full min-h-[5000px] bg-[#e5e7ef] max-w-full  overflow-x-hidden'>
            <div className="w-full h-full flex items-start   justify-start gap-5 px-0 md:px-4 lg:px-[40px] py-8">
                <div className="w-[100%] lg:w-[75%] h-full   rounded-lg py-[20px] flex items-center justify-center">
                    <div className="flex flex-col  py-10 w-[100%] md:w-[90%] lg:w-[85%] h-full  bg-white rounded-lg shadow-lg">
                        <div className="mt-5 mb-[60px]">
                            <h1 className='text-center text-[25px] md:text-3xl font-bold text-[--color-primary]'>طراحی وبسایت فروشگاهی</h1>
                        </div>
                        <div className="flex flex-col  gap-5 px-[15px] sm:px-[30px] md:px-[60px]">
                            <div className="flex flex-col gap-[70px] ">
                                <div className="">
                                    <Image
                                        src={HostImage}
                                        className='md:w-full rounded-3xl mb-10 '
                                        alt='طراحی سایت فروشگاهی'
                                    />
                                </div>
                                <div className="flex flex-col gap-7">
                                    <h1
                                        id='introduction'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>پیش گفتار</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] md:leading-[45px]   text-gray-600 '>
                                        در دنیای امروز، ایجاد یک فروشگاه آنلاین نقش به‌سزایی در رشد و توسعه تجارت ایفا می‌کند. با توجه به افزایش نیاز مشتریان به تجربه خریدی آسان و مطمئن، ساختاری مدرن و کاربرپسند در دنیای دیجیتال امری اساسی است. ویکسل با درک عمیق از این نیازها، تعرفه‌های طراحی سایت فروشگاهی را ارائه می‌دهد تا به کسب‌وکارها کمک کند در دنیای رقابتی امروزی موفقیت‌آمیز عمل کنند.                                    </h3>
                                    <br />
                                    <strong>طراحی سایت فروشگاهی در ویکسل یک ترکیب هنر و فناوری است که باعث ایجاد تجربه خرید بی‌نظیر و چشم‌نواز برای مشتریان می‌شود. با در نظر گرفتن اصول طراحی رابط کاربری (UI) و تجربه کاربری (UX)، ما هر فروشگاه را بر اساس خصوصیات و محصولات منحصر به فردش شکل می‌دهیم. این طراحی‌ها، همچنین، از نظر تکنولوژیکی پیشرفته بوده و از جدیدترین ابزارها و روش‌های توسعه استفاده می‌کنند</strong>
                                    <br />
                                    تعرفه‌های طراحی سایت فروشگاهی در ویکسل با توجه به نیازها و امکانات متفاوت کسب‌وکارها دو گزینه فراهم می‌کنند. هر تعرفه، شامل امکانات مختلفی است که از ویژگی‌های مدیریت محتوا تا سیستم پرداخت آنلاین و امکانات بازاریابی جهت تقویت فروش، پوشش داده شده است.
                                </div>
                                <div className="flex flex-col" >
                                    <div className="flex flex-col gap-7">
                                        <h1
                                            id='ecommerce-website-usage'
                                            className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                            کاربرد وبسایت فروشگاهی</h1>
                                        <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600 '>
                                            وبسایت‌های فروشگاهی نقش بسیار مهمی در جهان دیجیتال امروزی ایفا می‌کنند. اینگونه وبسایت‌ها به کسب و کارها امکان می‌دهند تا محصولات و خدمات خود را به صورت آنلاین به مشتریان عرضه کنند و فرآیند خرید را برای مشتریان ساده‌تر و دسترس‌پذیرتر کنند. با استفاده از یک وبسایت فروشگاهی، کسب و کارها می‌توانند:
                                            <br />
                                            <b>گسترش دسترسی به مشتریان</b>: با داشتن یک وبسایت فروشگاهی، کسب و کارها دسترسی به بازارها و مشتریان جدید را افزایش می‌دهند، زیرا به صورت آنلاین قابل دسترس هستند و محصولات خود را به همه افرادی که به اینترنت دسترسی دارند، عرضه می‌کنند.
                                            <br />
                                            <b>افزایش فروش</b>: وبسایت فروشگاهی به کسب و کارها امکان می‌دهد تا فروش خود را افزایش دهند، زیرا مشتریان می‌توانند به راحتی و به هر زمانی که می‌خواهند، از طریق اینترنت به محصولات دسترسی پیدا کنند و خرید انجام دهند.
                                            <br />
                                            <b>ایجاد تجربه خرید آسان</b>: وبسایت‌های فروشگاهی معمولاً دارای ویژگی‌ها و ابزارهایی هستند که تجربه خرید مشتریان را بهبود می‌بخشند، از جمله سیستم جستجو، فیلترینگ محصولات، سیستم سبد خرید و درگاه‌های پرداخت امن. این امکانات باعث می‌شوند که خرید آنلاین برای مشتریان ساده‌تر و راحت‌تر باشد.
                                            <br />
                                            <b>تبلیغات و بازاریابی</b>: با داشتن یک وبسایت فروشگاهی، کسب و کارها می‌توانند به راحتی از ابزارهای دیجیتالی مختلف مانند تبلیغات گوگل، رسانه‌های اجتماعی و ایمیل مارکتینگ استفاده کنند تا محصولات خود را به مخاطبان مناسب تبلیغ کنند و فروش خود را افزایش دهند.
                                            <br />
                                            به طور کلی، وبسایت فروشگاهی یک ابزار حیاتی برای کسب و کارها است که به آن‌ها امکان می‌دهد تا با رقابت در بازار دیجیتال، محصولات و خدمات خود را به مشتریان عرضه کنند و رشد و توسعه بیشتری داشته باشند
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-7" >
                                    <h1
                                        id='advertising-and-marketing-with-ecommerce-website'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        تبلیغات و بازاریابی با وبسایت فروشگاهی</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600'>
                                        وبسایت فروشگاهی به عنوان یک ابزار بسیار قوی در دسترس کسب و کارها، امکانات فراوانی را برای تبلیغات و بازاریابی فراهم می‌کند. این امکانات باعث می‌شوند که کسب و کارها به صورت موثر‌تری با مخاطبان خود ارتباط برقرار کنند و فروش خود را افزایش دهند.
                                        <br />
                                        از جمله مزایای تبلیغات و بازاریابی با وبسایت فروشگاهی می‌توان به موارد زیر اشاره کرد:
                                        <br />
                                        <b>هدف‌گذاری دقیق</b>: با داشتن یک وبسایت فروشگاهی، کسب و کارها می‌توانند تبلیغات خود را به صورت دقیق به مخاطبان موردنظر هدف‌گذاری کنند. به کمک ابزارهایی مانند گوگل آنالیتیک، می‌توان اطلاعات دقیقی از مخاطبان وبسایت به دست آورد و تبلیغات را براساس این اطلاعات بهینه‌سازی کرد.
                                        <br />
                                        <b>افزایش نرخ تبدیل</b>: وبسایت فروشگاهی فرصت مناسبی را برای ارتباط مستقیم با مشتریان فراهم می‌کند. با استفاده از ابزارهای ارتباطی مانند چت آنلاین و فرم‌های تماس، کاربران می‌توانند به راحتی با کسب و کار در تعامل بوده و سوالات خود را مطرح کنند، که این امر منجر به افزایش نرخ تبدیل و افزایش فروش می‌شود.
                                        <br />
                                        <b>استفاده از ابزارهای تبلیغاتی مدرن</b>: وبسایت فروشگاهی امکان استفاده از ابزارهای تبلیغاتی مدرن مانند تبلیغات گوگل، رسانه‌های اجتماعی، وبلاگ و ایمیل مارکتینگ را فراهم می‌کند. این ابزارها به کسب و کارها اجازه می‌دهند تا تبلیغات خود را به مخاطبان مناسب و در زمان‌های مناسبی ارسال کنند و نتیجه بهتری کسب کنند.
                                        <br />
                                        <b>بهبود شناخت برند</b>: وبسایت فروشگاهی به عنوان یک پلتفرم مرکزی برای تمام فعالیت‌های آنلاین کسب و کار عمل می‌کند و باعث می‌شود که شناخت برند افزایش یابد. ارائه محتوای متنوع و مفید، تجربه خرید بهتر و ایجاد ارتباط مستقیم با مشتریان، باعث بهبود شناخت برند و اعتماد به آن می‌شود.
                                        <br />
                                        با این همه امکانات و ابزارهایی که وبسایت فروشگاهی فراهم می‌کند، تبلیغات و بازاریابی آنلاین برای کسب و کارها تبدیل به یک فرآیند بسیار موثر و کارآمد می‌شود که می‌تواند رشد و توسعه کسب و کار را بهبود بخشد
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-7" >
                                    <h1
                                        id='increase-sales-with-ecommerce-website'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        افزایش فروش با وبسایت فروشگاهی</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600'>
                                        وبسایت فروشگاهی ابزار بسیار قدرتمندی است که به کسب و کارها کمک می‌کند تا فروش خود را بهبود بخشند و به موفقیت بیشتری دست یابند. اینجا چندین راه برای افزایش فروش با استفاده از وبسایت فروشگاهی آمده است:
                                        <br />
                                        <b>تجربه خرید آسان</b>: یک وبسایت فروشگاهی با طراحی مناسب و رابط کاربری دوستانه، تجربه خریدی را برای مشتریان فراهم می‌کند که انگیزه آنها را برای ادامه خرید و افزایش سبد خریدشان افزایش می‌دهد.
                                        <br />
                                        <b>نمایش محصولات با جزئیات بیشتر</b>: ارائه محتوای جذاب و تصاویر با کیفیت از محصولات، به مشتریان اعتماد بیشتری به برند و محصولات شما می‌دهد و احتمال خرید آنها را افزایش می‌دهد.
                                        <br />
                                        <b>استفاده از تخفیفات و پیشنهادات ویژه</b>: ارائه تخفیفات، کد تخفیف و پیشنهادات ویژه به مشتریان، آنها را به خرید و انجام معامله ترغیب می‌کند و در نتیجه فروش شما افزایش می‌یابد.
                                        <br />
                                        <b>تحقیقات بازاریابی</b>: با استفاده از داده‌های تجاری و آمار فروش، می‌توانید رفتار مشتریان را بررسی کرده و به ساختار و محتوای وبسایت خود تغییراتی ایجاد کنید که بازدهی و فروش را بهبود بخشد.
                                        <br />
                                        <b>توسعه داده‌های مشتری</b>: با انجام فعالیت‌های مانند ایجاد حساب کاربری، اشتراک خبرنامه و ثبت نظرات، می‌توانید اطلاعات مشتریان خود را جمع‌آوری کرده و از آن برای ارتقاء خدمات و بهبود فرآیندهای فروش خود استفاده کنید.
                                        <br />
                                        با استفاده از این روش‌ها و استفاده بهینه از وبسایت فروشگاهی، می‌توانید بهبود قابل توجهی در فروش خود داشته باشید و رشد و توسعه کسب و کار خود را تسریع بخشید.
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-7" >
                                    <h1
                                        id='ecommerce-website-facilities'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        امکانات یک وبسایت فروشگاهی</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600'>
                                        <b>سیستم مدیریت محصولات</b>: این امکان به شما اجازه می‌دهد تا محصولات خود را به طور جزئی مدیریت کنید، از جمله تصاویر، توضیحات، قیمت‌ها و موجودی‌ها.
                                        <br />
                                        <b>سیستم سبد خرید و پرداخت آنلاین</b>: این امکان به مشتریان شما اجازه می‌دهد تا محصولات را به سبد خرید خود اضافه کنند و پس از انتخاب محصولات، پرداخت آنلاین را انجام دهند.
                                        <br />
                                        <b>سیستم امنیتی</b>: این امکان به شما اجازه می‌دهد تا اطلاعات حساس مشتریان خود را محافظت کنید، از جمله اطلاعات پرداختی و اطلاعات شخصی.
                                        <br />
                                        <b>سیستم ارسال و پیگیری سفارشات</b>: این امکان به شما اجازه می‌دهد تا سفارشات مشتریان را به راحتی پردازش کنید و آنها را از وضعیت سفارش خود آگاه کنید.
                                        <br />
                                        <b>سیستم نظرات و بازخوردها</b>: این امکان به مشتریان اجازه می‌دهد تا نظرات و بازخوردهای خود را درباره محصولات و خدمات شما ارسال کنند و به اشتراک بگذارند.
                                        <br />
                                        <b><Link className='underline text-blue-700' href={emailMarketingBlogLink}>سیستم اطلاع‌رسانی و ایمیل مارکتینگ</Link></b>: این امکان به شما اجازه می‌دهد تا اخبار، تخفیفات و پیشنهادات ویژه خود را به مشتریان ارسال کنید و با آنها در تماس باشید
                                        <br />
                                        <b>سیستم مدیریت موجودی</b>: امکان مدیریت موجودی محصولات و هشدار دادن در صورت کمبود موجودی به منظور جلوگیری از فروش محصولاتی که موجود نیستند.
                                        <br />
                                        <b>پشتیبانی از چند زبانه</b>: امکان ارائه وبسایت در چند زبان مختلف به منظور رسیدن به مشتریان بین المللی.
                                        <br />
                                        <b>گزارش‌گیری</b>: امکان ایجاد گزارشات و آمارهای مربوط به فروش، موجودی، بازدیدکنندگان و عملکرد وبسایت.
                                        <br />
                                        با استفاده از این امکانات، وبسایت فروشگاهی شما یک پلتفرم قدرتمند برای فروش محصولات خود خواهد بود که تجربه خرید لذت‌بخشی را برای مشتریانتان فراهم می‌کند و به رشد کسب و کار شما کمک می‌کند
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-7" >
                                    <h1
                                        id='order-ecommerce-website-in-wixel'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        سفارش وبسایت فروشگاهی در ویکسل</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600'>
                                        در ویکسل، ما امکان سفارش وبسایت فروشگاهی را با دو روش مختلف فراهم می‌کنیم: طراحی اختصاصی با استفاده از کد نویسی و طراحی با استفاده از وردپرس. هر یک از این روش‌ها ویژگی‌ها و مزایای خاص خود را دارند که به شما امکان می‌دهند وبسایتی منحصر به فرد و با کیفیت برای کسب و کار آنلاین خود ایجاد کنید.
                                        <br />
                                        <b>طراحی اختصاصی (کد نویسی)</b>: در این روش، وبسایت فروشگاهی شما با استفاده از <Link className='underline text-blue-700' href={codingBlogLink}>کد نویسی</Link> اختصاصی و به‌صورت کاملاً سفارشی طراحی می‌شود. این روش امکان ایجاد یک وبسایت دقیقاً مطابق با نیازها و خواسته‌های شما را فراهم می‌کند و به شما امکان می‌دهد که هر جزئیات و ویژگی مورد نظر خود را در وبسایت خود اعمال کنید.
                                        <br />
                                        طراحی با استفاده از <Link className='underline text-blue-700' href={wordpressBlogLink}>وردپرس</Link>: <b>وردپرس یک سیستم مدیریت محتوا</b> (CMS) محبوب است که امکانات فراوانی برای طراحی سایت‌های آموزشی ارائه می‌دهد
                                        با استفاده از وردپرس، می‌توانید به سرعت و با هزینه کمتر یک وب‌سایت فروشگاهی راه‌اندازی کنید و از امکانات مدیریت محتوا و گسترش آسان آن بهره‌مند شوید.
                                        این روش برای کسب و کارها و فردی که به دنبال یک راه حرفه‌ای و سریع برای طراحی و مدیریت وب‌سایت فروشگاهی خود هستند، مناسب است.
                                        <br />
                                        کاربران می‌توانند با ثبت‌نام در وبسایت ما و ورود به پنل کاربری خود، نوع ویژگی‌های مورد نیاز برای وبسایت فروشگاهی خود را انتخاب کنند و به راحتی سفارش دهند. سپس، تیم ما با شروع به کار بر اساس درخواست شما، وبسایت فروشگاهی مورد نظر شما را به طور دقیق و با کیفیت بالا طراحی و اجرا خواهد کرد.
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-7" >
                                    <h1
                                        id='ecommerce-web-design-with-wordpress'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        طراحی سایت فروشگاهی با وردپرس
                                    </h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600'>
                                        طراحی سایت فروشگاهی با وردپرس یک روش سریع و کارآمد برای ایجاد یک فروشگاه آنلاین قدرتمند و حرفه‌ای است. وردپرس به عنوان یک سیستم مدیریت محتوا (CMS) محبوب، امکانات گسترده‌ای را برای راه‌اندازی و مدیریت وبسایت‌های فروشگاهی فراهم می‌کند. در زیر به برخی از ویژگی‌ها و مزایای طراحی سایت فروشگاهی با وردپرس اشاره می‌کنیم:
                                        <br />
                                        <b>پلاگین‌های قدرتمند</b>: وردپرس دارای مجموعه‌ای از پلاگین‌های فوق‌العاده برای ایجاد وبسایت‌های فروشگاهی است. از جمله این پلاگین‌ها می‌توان به <Link className='underline text-blue-700' href={woocommerceBlogLink}>WooCommerce</Link> اشاره کرد که امکانات بسیاری برای ایجاد فروشگاه آنلاین، مدیریت محصولات، پرداخت‌ها، حمل و نقل و ... فراهم می‌کند.
                                        <br />
                                        <b>انعطاف‌پذیری و سهولت استفاده</b>: با استفاده از وردپرس، شما به راحتی می‌توانید وبسایت فروشگاهی خود را بر اساس نیازهای خود سفارشی‌سازی کنید. وردپرس از قالب‌های چند منظوره و قالب‌های ویژه فروشگاهی پشتیبانی می‌کند که به شما امکان می‌دهد ظاهر و امکانات وبسایت خود را به دلخواه تغییر دهید.
                                        امنیت: وردپرس به‌روزرسانی‌های مداومی دریافت می‌کند که امنیت وبسایت‌ها را تضمین می‌کند. همچنین، از طریق استفاده از پلاگین‌های امنیتی مانند Wordfence و Sucuri می‌توانید امنیت وبسایت خود را بهبود بخشید.
                                        <br />
                                        <b>بهینه‌سازی برای موتورهای جستجو</b>: وردپرس امکانات بسیاری برای <Link className='underline text-blue-700' href={seoBlogLink}>بهینه‌سازی موتورهای جستجو (SEO)</Link> را فراهم می‌کند، از جمله URL‌های دوست‌دار موتورهای جستجو، برچسب‌های تگ، توضیحات متای و ... که به بهبود رتبه‌بندی وبسایت شما در نتایج جستجو کمک می‌کنند
                                        <br />
                                        طراحی سایت فروشگاهی با وردپرس انتخاب عالی برای کسب‌وکارهای کوچک و متوسط است که می‌خواهند یک حضور آنلاین قدرتمند و قابل اعتماد داشته باشند. این روش سریع، قابل تنظیم و با کیفیت بالا امکان ایجاد فروشگاهی آنلاین با هزینه کمتر و در کوتاه‌ترین زمان ممکن را فراهم می‌کند.
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-7" >
                                    <h1
                                        id='exclusive-ecommerce-web-design'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        طراحی سایت فروشگاهی اختصاصی (کد نویسی)</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600'>
                                        <b>طراحی سایت فروشگاهی اختصاصی با استفاده از کد نویسی یک روش قدرتمند برای ایجاد یک فروشگاه آنلاین بسیار انعطاف‌پذیر و منحصر به فرد است. در این روش، تمامی جوانب و اجزای وبسایت به طور دقیق و با دقت بالا توسط توسعه‌دهندگان با استفاده از زبان‌های برنامه‌نویسی مانند HTML، CSS، JavaScript، Nodejs, PHP و ... طراحی و پیاده‌سازی می‌شوند</b>. در زیر به برخی از ویژگی‌ها و مزایای طراحی سایت فروشگاهی اختصاصی با کد نویسی اشاره می‌کنیم:
                                        <br />
                                        <b>یکتایی و شخصی‌سازی</b>: وبسایت فروشگاهی اختصاصی به شما امکان می‌دهد تا طراحی و عملکرد وبسایت خود را به طور کامل شخصی‌سازی کنید. شما کنترل کامل بر روی همه جوانب و اجزای وبسایت خود دارید و می‌توانید آن را بر اساس نیازهای خاص و برند خود تنظیم کنید.
                                        <br />
                                        <b>کنترل و مدیریت بالا</b>: طراحی سایت فروشگاهی اختصاصی به شما امکان می‌دهد که به طور کامل کنترل و مدیریت وبسایت خود را داشته باشید. شما می‌توانید به طور دقیق و حرفه‌ای مدیریت محتوا، محصولات، سفارشات، پرداخت‌ها و ... را انجام دهید و به راحتی تغییرات و بهبودهای مورد نیاز را اعمال کنید.
                                        <br />
                                        <b>امنیت بالا</b>: با طراحی و پیاده‌سازی اختصاصی، می‌توانید امنیت وبسایت خود را بهبود بخشیده و از حملات مخرب و نفوذهای امنیتی محافظت کنید.
                                        <br />
                                        <b>بهینه‌سازی برای موتورهای جستجو</b>: با طراحی اختصاصی، می‌توانید به طور دقیق و حرفه‌ای وبسایت خود را برای موتورهای جستجو بهینه کنید. این امکان به شما کمک می‌کند تا در نتایج جستجوی گوگل و سایر موتورهای جستجو بالاترین رتبه را کسب کنید و بیشترین ترافیک و بازدیدکننده را به وبسایت خود جذب کنید.
                                        <br />
                                        طراحی سایت فروشگاهی اختصاصی با کد نویسی یک انتخاب عالی برای کسب‌وکارهایی است که به دنبال یک فروشگاه آنلاین با امکانات بی‌نظیر، امنیت بالا و کنترل کامل هستند.
                                    </h3>
                                </div>

                                <div className="flex flex-col gap-7" >
                                    <h1
                                        id='conclusion'
                                        className='md:text-3xl text-2xl font-bold text-[--color-priamry]'>
                                        سخن آخر</h1>
                                    <h3 className='md:text-lg text-[16px] font-normal tracking-[1px] leading-[38px] md:leading-[45px]  text-gray-600'>
                                        در این نوشتار، به بررسی مزایا و ویژگی‌های طراحی وبسایت فروشگاهی اختصاصی با کد نویسی پرداختیم که به شما امکان می‌دهد یک فروشگاه آنلاین قدرتمند و منحصر به فرد راه‌اندازی کنید. با این روش، شما می‌توانید به طور کامل کنترل و مدیریت وبسایت خود داشته باشید، امنیت بالایی را برای فروشگاهتان فراهم کنید، و تجربه خرید آنلاینی منحصر به فردی را برای مشتریانتان ایجاد کنید. طراحی سایت فروشگاهی اختصاصی با کد نویسی، انتخابی عالی برای هر کسب‌وکاری است که به دنبال رشد و توسعه در دنیای آنلاین است.
                                        <br />
                                        با ویکسل، بهترین تیم توسعه دهنده و طراحی وبسایت‌های اختصاصی، آماده همکاری با شماست. ما با استفاده از تکنولوژی‌های برتر و استانداردهای به روز، به شما کمک می‌کنیم تا وبسایتی منحصر به فرد و قدرتمند داشته باشید که همه نیازهای کسب‌وکار شما را برآورده کند.
                                        <br />
                                        اگر به دنبال راه حرفه‌ای برای راه‌اندازی یک فروشگاه آنلاین با کیفیت و کارآمد هستید، با ما تماس بگیرید و با تیم ما از تجربه‌ای منحصر به فرد در دنیای دیجیتال بهره‌مند شوید.
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
                                <Link href='#ecommerce-website-usage' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '> <FaRegDotCircle /> کاربرد وبسایت فروشگاهی</Link>
                                <Link href='#advertising-and-marketing-with-ecommerce-website' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '> <FaRegDotCircle />  تبلیغات و بازاریابی با وبسایت فروشگاهی</Link>
                                <Link href='#increase-sales-with-ecommerce-website' className='flex items-center gap-2 font-bold text-[17px]text-[--color-primary] '> <FaRegDotCircle />افزایش فروش با وبسایت فروشگاهی</Link>
                                <Link href='#ecommerce-website-facilities' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '> <FaRegDotCircle /> امکانات یک وبسایت فروشگاهی</Link>
                                <Link href='#order-ecommerce-website-in-wixel' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '><FaRegDotCircle />سفارش وبسایت فروشگاهی در ویکسل</Link>
                                <Link href='#ecommerce-web-design-with-wordpress' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '><FaRegDotCircle /> طراحی سایت فروشگاهی با وردپرس</Link>
                                <Link href='#exclusive-ecommerce-web-design' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '><FaRegDotCircle />طراحی سایت فروشگاهی اختصاصی (کد نویسی)</Link>
                                <Link href='#conclusion' className='flex items-center gap-2 font-bold text-[17px] text-[--color-primary] '> <FaRegDotCircle /> سخن آخر</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}