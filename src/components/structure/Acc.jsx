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
      <div className="mt-[70px] w-[94%] sm:w-[85%] lg:w-[65%] xl:w-[55%] mx-auto ">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="item-1"
            className="border-b-0 bg-[#5D5AFF] text-start text-white py-1.5 px-3 rounded-xl mb-3"
          >
            <AccordionTrigger className=" hover:underline-offset-0 text-start text-sm sm:text-base lg:text-lg">
              چگونه می توانم یک وب سایت در ویکسل سفارش دهم؟
            </AccordionTrigger>
            <AccordionContent className=" tracking-wider  leading-[30px] ">
              برای سفارش وب سایت، ابتدا باید در وب سایت ما ثبت نام کنید. پس از
              ثبت نام، می توانید به داشبورد خود دسترسی داشته باشید که در آن
              گزینه هایی برای سفارش وب سایت ها بر اساس نیازها و ترجیحات خود پیدا
              خواهید کرد.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border-b-0 bg-transparent border-[0.5px] border-gray-700 py-1.5 px-3 rounded-xl mb-3"
          >
            <AccordionTrigger className="text-start text-sm sm:text-base lg:text-lg">
              چه گزینه هایی برای توسعه وب سایت وجود دارد؟
            </AccordionTrigger>
            <AccordionContent className=" tracking-wider  leading-[30px] ">
              در هر تعرفه، شما می توانید بین دو روش توسعه انتخاب کنید: طراحی
              اختصاصی (کدنویسی) یا استفاده از قالب های آماده (وردپرس). شما می
              توانید روشی را انتخاب کنید که به بهترین وجه با ترجیحات و نیازهای
              شما مطابقت دارد
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border-b-0 py-1.5 px-3 border-[0.5px] border-gray-700 rounded-xl mb-3"
          >
            <AccordionTrigger className="text-start text-sm sm:text-base lg:text-lg">
              چگونه تعرفه مورد نیاز خود را انتخاب کنم ؟
            </AccordionTrigger>
            <AccordionContent className=" tracking-wider  leading-[30px] ">
              وب سایت ما اطلاعات دقیقی در مورد هر تعرفه و روش توسعه ارائه می دهد
              تا به شما در تصمیم گیری آگاهانه کمک کند. علاوه بر این، تیم
              پشتیبانی مشتری ما برای کمک به شما در انتخاب گزینه هایی که به
              بهترین وجه با نیازهای شما مطابقت دارند، در دسترس هستند.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border-b-0 py-1.5 px-3 border-[0.5px] border-gray-700 rounded-xl mb-3"
          >
            <AccordionTrigger className="text-start text-sm sm:text-base lg:text-lg">
              پس از ثبت سفارش مراحل طراحی چگونه انجام میشود ؟
            </AccordionTrigger>
            <AccordionContent className=" tracking-wider  leading-[30px] ">
              پس از ثبت سفارش تیم ویکسل اطلاعات ارائه شده در سفارش شما را به دقت
              بررسی می کند. ما اطمینان می دهیم که تمام جزئیات لازم کامل و دقیق
              هستند. اگر همه چیز خوب به نظر برسد و هیچ مشکلی در اطلاعات ارائه
              شده وجود نداشته باشد، سفارش شما را می پذیریم. شما تاییدیه ای
              دریافت خواهید کرد که سفارش شما پذیرفته شده است.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="border-b-0 py-1.5 px-3  border-[0.5px] border-gray-700 rounded-xl mb-3"
          >
            <AccordionTrigger className="text-start text-sm sm:text-base lg:text-lg">
              چگونه وضعیت پیشرفت سفارش خود را پیگیری کنم؟
            </AccordionTrigger>
            <AccordionContent className=" tracking-wider  leading-[30px] ">
              در طول فرآیند توسعه، بروزرسانی‌های منظم در مورد پیشرفت وب‌سایت خود
              دریافت خواهید کرد. می توانید وضعیت سفارش خود را پیگیری کنید و از
              نقاط عطف به دست آمده مطلع شوید. این به‌روزرسانی‌ها شامل جزئیاتی
              درباره قابلیت هایی است که پیاده‌سازی شده‌اند و قابلیت هایی که در
              حال حاضر در حال انجام هستند.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-7"
            className="border-b-0 py-1.5 px-3  border-[0.5px] border-gray-700 rounded-xl mb-3"
          >
            <AccordionTrigger className="text-start text-sm sm:text-base lg:text-lg">
              زمان طراحی یک وبسایت چقدر است ؟
            </AccordionTrigger>
            <AccordionContent className=" tracking-wider  leading-[30px] ">
              زمان توسعه یک وب سایت به عوامل مختلفی مانند پیچیدگی آن، ویژگی های
              انتخاب شده و حجم کاری فعلی ما بستگی دارد. به طور معمول، ما یک بازه
              زمانی تخمینی را برای تکمیل پس از ثبت سفارش ارائه می دهیم و تلاش می
              کنیم تا وب سایت شما را در آن بازه زمانی تحویل دهیم
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-6"
            className="border-b-0 py-1.5 px-3  border-[0.5px] border-gray-700 rounded-xl mb-3"
          >
            <AccordionTrigger className="text-start text-sm sm:text-base lg:text-lg">
              چه زمانی وب سایت خود را دریافت خواهم کرد؟
            </AccordionTrigger>
            <AccordionContent className=" tracking-wider  leading-[30px] ">
              هنگامی که توسعه کامل شد و وب سایت شما با استانداردهای کیفیت ما
              مطابقت داشت، وب سایت نهایی را دریافت خواهید کرد. و دستورالعمل هایی
              در مورد نحوه دسترسی و مدیریت وب سایت جدید به شما ارائه می شود.
              لطفاً توجه داشته باشید که تحویل وب سایت مشروط به پرداخت هزینه
              توسعه انتخاب شده. است
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-8"
            className="border-b-0 py-1.5 px-3  border-[0.5px] border-gray-700 rounded-xl mb-3"
          >
            <AccordionTrigger className="text-start text-sm sm:text-base lg:text-lg">
              چگونگی راهنمایی برای ثبت سفارش 
            </AccordionTrigger>
            <AccordionContent className=" tracking-wider  leading-[30px] ">
            برای راهنمایی در مورد سفارش وب سایت خود یا هر سؤال دیگری، می توانید از طریق ایمیل، تلفن یا چت زنده با تیم پشتیبانی مشتری ما تماس بگیرید. تیم پشتیبانی اختصاصی ما برای کمک به شما در مورد هر گونه سوال یا نگرانی در دسترس است. علاوه بر این، می‌توانید به راحتی تیکت  از داشبورد خود برای کمک ارسال کنید.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Acc;
