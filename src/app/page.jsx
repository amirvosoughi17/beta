import Layout from "@/components/Layout";
import Hero from "@/components/structure/Hero";
import Services from "@/components/structure/Services";



const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-[#F4F9FF] flex flex-col gap-1">
        <Hero />
        <Services />
      </div>
    </Layout>
  );
};

export default Home;