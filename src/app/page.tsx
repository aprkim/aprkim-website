import {
  Navigation,
  HeroSplit,
  ProjectList,
  StoryBlock,
  OpportunitiesGrid,
  LinksSection,
  SubscribeSection,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <HeroSplit />
        <ProjectList />
        <SubscribeSection />
        <StoryBlock />
        <OpportunitiesGrid />
        <LinksSection />
      </main>
      <Footer />
    </>
  );
}
