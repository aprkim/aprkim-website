import Intro from '@/components/home/Intro';
import Latest from '@/components/home/Latest';
import Made from '@/components/home/Made';
import WhyIBuild from '@/components/home/WhyIBuild';
import Subscribe from '@/components/home/Subscribe';
import WorkWithMe from '@/components/home/WorkWithMe';
import ContactForm from '@/components/home/ContactForm';
import SiteFooter from '@/components/home/SiteFooter';

export default function Home() {
  return (
    <main className="pb-20">
      {/* Full-width hero; the header sits inside it, over the photo */}
      <Intro />
      <div className="px-gutter">
        {/* Sections span the same gutters as the header: left on the hero
            text line, right on the language switch. Long paragraphs cap
            their own line length (see WhyIBuild). */}
        <div>
          <Latest />
          <Made />
          <WhyIBuild />
          <Subscribe />
          <WorkWithMe />
          <ContactForm />
          <SiteFooter />
        </div>
      </div>
    </main>
  );
}
