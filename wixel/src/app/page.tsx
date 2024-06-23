import AppLayout from "@/components/provider/AppLayout";
import Hero from "@/components/stracture/hero/Hero";
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <AppLayout>
      <div className="min-h-screen w-full px-4">
        <Hero />
      </div>
    </AppLayout>
  );
}
