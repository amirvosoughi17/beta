import dynamic from "next/dynamic";
import AppLayout from "@/components/provider/AppLayout";
import Blogs from "@/components/stracture/Blogs/Blogs";
import Light from "@/components/stracture/Lamp/Light";
import { Grid } from "@/components/stracture/ServicesGrid/Grid";
import Hero from "@/components/stracture/hero/Hero";
import ShowCases from "@/components/stracture/showcases/ShowCases";
import CallWixel from "@/components/CallWixel";

export default function Home() {
  return (
    <div className=" ">
      <AppLayout>
        <div className="w-full  overflow-hidden">
          <div id="contact">
            <Hero />
          </div>
          <div id="services">
            <Grid />
          </div>
          <div id="showcases">
            <ShowCases />
          </div>
          {/* <Blogs /> */}
        </div>
        <div className=" fixed z-40 md:bottom-7  left-6 bottom-8 md:left-7">
          <CallWixel />
        </div>
      </AppLayout>
    </div>
  );
}
