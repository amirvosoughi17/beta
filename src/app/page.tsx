import AppLayout from "@/components/provider/AppLayout";
import Blogs from "@/components/stracture/Blogs/Blogs";
import Light from "@/components/stracture/Lamp/Light";
import Grid from "@/components/stracture/ServicesGrid/Grid";
import Hero from "@/components/stracture/hero/Hero";
import ShowCases from "@/components/stracture/showcases/ShowCases";

export default function Home() {
  return (
    <AppLayout>
      <div className="w-full h-[1000px]">
        <Hero />
        <div className="hidden">
          <Grid />
          <Light />
          <ShowCases />
          <Blogs />
        </div>
      </div>
    </AppLayout>
  );
}