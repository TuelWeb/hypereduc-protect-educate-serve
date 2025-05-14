
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AssociationSection from "@/components/AssociationSection";
import ActionsSection from "@/components/ActionsSection";
import ResourcesSection from "@/components/ResourcesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AssociationSection />
        <ActionsSection />
        <ResourcesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
