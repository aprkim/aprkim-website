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
    <main className="mx-auto max-w-[860px] px-6 pb-20">
      <Header />
      <Intro />
      <Latest />
      <Made />
      <WhyIBuild />
      <Subscribe />
      <WorkWithMe />
      <ContactForm />
      <SiteFooter />
    </main>
  );
}
