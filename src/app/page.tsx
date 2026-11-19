import Intro from '@/components/home/Intro';
import Latest from '@/components/home/Latest';
import Made from '@/components/home/Made';
import WhyIBuild from '@/components/home/WhyIBuild';
import WorkWithMe from '@/components/home/WorkWithMe';
import ContactForm from '@/components/home/ContactForm';
import SiteFooter from '@/components/home/SiteFooter';
import { LangToggle } from '@/components/home/lang';

export default function Home() {
  return (
    <main className="mx-auto max-w-[1040px] px-6 pb-20">
      <header className="flex items-center justify-between pt-7">
        <span className="text-[17px] font-extrabold tracking-[-.01em]">April Kim</span>
        <LangToggle />
      </header>
      <Intro />
      <Latest />
      <Made />
      <WhyIBuild />
      <WorkWithMe />
      <ContactForm />
      <SiteFooter />
    </main>
  );
}
