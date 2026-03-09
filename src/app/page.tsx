import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProvaVisual } from "@/components/sections/ProvaVisual";
import { SobreWorkshop } from "@/components/sections/SobreWorkshop";
import { OQueVaiAprender } from "@/components/sections/OQueVaiAprender";
import { ParaQuemE } from "@/components/sections/ParaQuemE";
import { Cronograma } from "@/components/sections/Cronograma";
import { Instrutor } from "@/components/sections/Instrutor";
import { Beneficios } from "@/components/sections/Beneficios";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Preco } from "@/components/sections/Preco";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProvaVisual />
        <SobreWorkshop />
        <OQueVaiAprender />
        <ParaQuemE />
        <Cronograma />
        <Instrutor />
        <Beneficios />
        <Depoimentos />
        <Preco />
        <CTAFinal />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
