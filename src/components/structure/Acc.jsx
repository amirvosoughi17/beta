import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Acc = () => {
  return (
    <div className="mb-[280px]">
      <div className="flex flex-col gap-1.5 items-center">
        <h1 className="text-[26px] md:text-2xl font-semibold text-[#364163] ">
          سوالات متداول
        </h1>
        <p className="text-[14px] md:text-lg  text-[#3641637d]">
          سوال های پرتکرار شما از ویکسل
        </p>
        <span className="w-[70px] md:w-[90px] h-[8px] md:h-[9px] bg-[#5D5AFF] rounded-full mt-3"></span>
      </div>
      <div className="mt-[70px] w-[94%] sm:w-[85%] lg:w-[70%] xl:w-[60%] mx-auto ">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className='border-b-0 bg-[#313036] text-white py-1.5 px-3 rounded-xl mb-3'>
            <AccordionTrigger className=' hover:underline-offset-0'>تفاوت طراحی اختصاصی و اماده چیست ؟</AccordionTrigger>
            <AccordionContent className=' tracking-wider  leading-[30px] '>
            طراحی اختصاصی و اماده دو رویکرد مختلف در زمینه طراحی وب هستند. طراحی اختصاصی به معنای ایجاد یک وبسایت منحصر به فرد و بر اساس نیازها و خصوصیات خاص کسب‌وکار مشتری است. در این حالت، هر قسمت از وبسایت با دقت ویژه طراحی می‌شود تا بهترین تجربه کاربری را ارائه دهد.از طرف دیگر، طراحی اماده یک راهکار سریع‌تر و براساس قالب‌ها و ساختارهای آماده برای ایجاد وبسایت‌ها است. این رویکرد معمولاً از قالب‌ها، افزونه‌ها و تنظیمات پیش‌فرض برای سرعت بخشیدن به فرآیند ساخت وبسایت استفاده می‌کند. هرکدام از این رویکردها مزایا و معایب خود را دارند، و انتخاب بین آنها بستگی به اهداف، زمان، و بودجه پروژه دارد
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className='border-b-0 bg-transparent border-[0.5px] border-gray-700 py-1.5 px-3 rounded-xl mb-3'>
            <AccordionTrigger>پشتیبانی سایت بعد از طراحی چگونه خواهد بود ؟</AccordionTrigger>
            <AccordionContent className=' tracking-wider  leading-[30px] '>
            پس از راه‌اندازی وب‌سایت، به مدت سه ماه تا یک سال پشتیبانی جامع ارائه می‌شود. این پشتیبانی شامل رفع مشکلات فنی، پاسخ به سوالات مرتبط با استفاده از وب‌سایت، و ارائه راهنمایی‌های فنی می‌باشد. همچنین، تیم پشتیبانی ما آماده است تا در مواقع اضطراری و درخواست‌های اساسی به سرعت به شما کمک کند. هدف ما اطمینان حاصل کردن از عملکرد بهتر وب‌سایت شما و ارائه خدماتی که باعث رضایت شما می‌شود.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className='border-b-0 py-1.5 px-3 border-[0.5px] border-gray-700 rounded-xl mb-3'>
            <AccordionTrigger>ایا ویکسل سعو سایت من را تقویت میکند ؟</AccordionTrigger>
            <AccordionContent className=' tracking-wider  leading-[30px] '>
            بله، بهینه‌سازی وب سایت های ساخته شده در ویکسل جزءی اساسی از فرآیند توسعه وب‌سایت ما می‌باشد. ما خدمات SEO فنی ارائه می‌دهیم تا وب‌سایت شما با برتری در نتایج جستجو بدرخشد. این بهینه‌سازی از جمله بهبود ساختار، بهینه‌سازی محتوا، و استفاده از استراتژی‌های سئویی پیشرفته را دربرمی‌گیرد. هدف ما افزایش دید‌پذیری و جلب ترافیک از طریق موتورهای جستجو است تا کسب و کار شما در دنیای دیجیتال به موفقیت برسد.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className='border-b-0 py-1.5 px-3 border-[0.5px] border-gray-700 rounded-xl mb-3'>
            <AccordionTrigger>ایا ویکسل سعو سایت من را تقویت میکند ؟</AccordionTrigger>
            <AccordionContent className=' tracking-wider  leading-[30px] '>
            بله، بهینه‌سازی وب سایت های ساخته شده در ویکسل جزءی اساسی از فرآیند توسعه وب‌سایت ما می‌باشد. ما خدمات SEO فنی ارائه می‌دهیم تا وب‌سایت شما با برتری در نتایج جستجو بدرخشد. این بهینه‌سازی از جمله بهبود ساختار، بهینه‌سازی محتوا، و استفاده از استراتژی‌های سئویی پیشرفته را دربرمی‌گیرد. هدف ما افزایش دید‌پذیری و جلب ترافیک از طریق موتورهای جستجو است تا کسب و کار شما در دنیای دیجیتال به موفقیت برسد.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className='border-b-0 py-1.5 px-3 border-[0.5px] border-gray-700 rounded-xl mb-3'>
            <AccordionTrigger>ایا ویکسل سعو سایت من را تقویت میکند ؟</AccordionTrigger>
            <AccordionContent className=' tracking-wider  leading-[30px] '>
            بله، بهینه‌سازی وب سایت های ساخته شده در ویکسل جزءی اساسی از فرآیند توسعه وب‌سایت ما می‌باشد. ما خدمات SEO فنی ارائه می‌دهیم تا وب‌سایت شما با برتری در نتایج جستجو بدرخشد. این بهینه‌سازی از جمله بهبود ساختار، بهینه‌سازی محتوا، و استفاده از استراتژی‌های سئویی پیشرفته را دربرمی‌گیرد. هدف ما افزایش دید‌پذیری و جلب ترافیک از طریق موتورهای جستجو است تا کسب و کار شما در دنیای دیجیتال به موفقیت برسد.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Acc;
