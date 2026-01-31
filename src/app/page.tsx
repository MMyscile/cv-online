import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Skills from "@/components/Skills";
import FormationProgram from "@/components/FormationProgram";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <section id="presentation">
          <AnimatedSection>
            <VideoSection />
          </AnimatedSection>
        </section>
        <section id="skills">
          <AnimatedSection>
            <Skills />
          </AnimatedSection>
        </section>
        <section id="formation">
          <AnimatedSection>
            <FormationProgram />
          </AnimatedSection>
        </section>
        <section id="education">
          <AnimatedSection>
            <Education />
          </AnimatedSection>
        </section>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <footer className="bg-[var(--cv-green-dark)] text-[var(--cv-green-light)] text-center py-6 text-sm">
        © {new Date().getFullYear()} Michaël Myscile. Tous droits réservés.
      </footer>
    </>
  );
}
