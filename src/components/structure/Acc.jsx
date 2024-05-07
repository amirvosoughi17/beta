import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const Acc = () => {
  return (
    <div className="w-[95%] sm:w-[90%] max-w-[700px] mx-auto flex flex-col gap-10 mb-[300px]">
      <div className="flex flex-col gap-1.5 items-center">
        <h1 className="text-[26px] md:text-2xl font-semibold text-[#364163] ">
          سوالات متداول
        </h1>
        <p className="text-[14px] md:text-lg  text-[#3641637d]">
          سوال های پرتکرار شما از ویکسل
        </p>
        <span className="w-[70px] md:w-[90px] h-[8px] md:h-[9px] bg-[#5D5AFF] rounded-full mt-3"></span>
      </div>
      <div className="flex flex-col gap-2.5">
        <Accordion defaultExpanded className="bg-transparent rounded-lg border-[0.5px] border-gray-300 py-2">
          <AccordionSummary 
            aria-controls="panel1-content"
            id="panel1-header"
            className=" text-md sm:text-lg font-medium"
          >
            چه گزینه هایی برای توسعه وب سایت وجود دارد؟
          </AccordionSummary>
          <AccordionDetails className="text-gray-700 leading-7 text-sm sm:text-md">
            در هر تعرفه، شما می توانید بین دو روش توسعه انتخاب کنید: طراحی
            اختصاصی (کدنویسی) یا استفاده از قالب های آماده (وردپرس). شما می
            توانید روشی را انتخاب کنید که به بهترین وجه با ترجیحات و نیازهای شما
            مطابقت دارد
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-transparent rounded-lg border-[0.5px] border-gray-300 py-2">
          <AccordionSummary
            aria-controls="panel1-content"
            id="panel1-header"
            className=" text-md sm:text-lg font-medium"
          >
            چگونه تعرفه مورد نیاز خود را انتخاب کنم ؟
          </AccordionSummary>
          <AccordionDetails className="text-gray-700 leading-7 text-sm sm:text-md">
            وب سایت ما اطلاعات دقیقی در مورد هر تعرفه و روش توسعه ارائه می دهد
            تا به شما در تصمیم گیری آگاهانه کمک کند. علاوه بر این، تیم پشتیبانی
            مشتری ما برای کمک به شما در انتخاب گزینه هایی که به بهترین وجه با
            نیازهای شما مطابقت دارند، در دسترس هستند.
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-transparent rounded-lg border-[0.5px] border-gray-300 py-2">
          <AccordionSummary
            aria-controls="panel1-content"
            id="panel1-header"
            className=" text-md sm:text-lg font-medium"
          >
            زمان طراحی یک وبسایت چقدر است ؟
          </AccordionSummary>
          <AccordionDetails className="text-gray-700 leading-7 text-sm sm:text-md">
            زمان توسعه یک وب سایت به عوامل مختلفی مانند پیچیدگی آن، ویژگی های
            انتخاب شده و حجم کاری فعلی ما بستگی دارد. به طور معمول، ما یک بازه
            زمانی تخمینی را برای تکمیل پس از ثبت سفارش ارائه می دهیم و تلاش می
            کنیم تا وب سایت شما را در آن بازه زمانی تحویل دهیم
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-transparent rounded-lg border-[0.5px] border-gray-300 py-2">
          <AccordionSummary
            aria-controls="panel1-content"
            id="panel1-header"
            className=" text-md sm:text-lg font-medium"
          >
            پس از چه مراحلی وب سایت خود را دریافت میکنم
          </AccordionSummary>
          <AccordionDetails className="text-gray-700 leading-7 text-sm sm:text-md">
            زمانی که وب سایت شما با استانداردها و کیفیت لازم توسعه داده شده بود
            . وب سایت نهایی را دریافت خواهید کرد. و دستورالعمل هایی در مورد نحوه
            دسترسی و مدیریت وب سایت جدید به شما ارائه می شود. لطفاً توجه داشته
            باشید که تحویل وب سایت مشروط به پرداخت هزینه توسعه انتخاب شده. است
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Acc;
