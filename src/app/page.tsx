import Intro from '@/components/home/Intro';
import Latest from '@/components/home/Latest';
import Made from '@/components/home/Made';
import WhyIBuild from '@/components/home/WhyIBuild';
import Subscribe from '@/components/home/Subscribe';
import WorkWithMe from '@/components/home/WorkWithMe';
import ContactForm from '@/components/home/ContactForm';
import SiteFooter from '@/components/home/SiteFooter';
import Header from '@/components/home/Header';

export default function Home() {
  return (
    <main className="pb-20">
      <div className="px-gutter">
        <Header />
      </div>
      {/* Full-width hero: text starts on the gutter, photo runs to the right edge */}
      <Intro />
      <div className="px-gutter">
        {/* Sections start on the same line as the hero text; capped for readable line length */}
        <div className="max-w-[860px]">
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
