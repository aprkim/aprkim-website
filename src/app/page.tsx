import {
  Navigation,
  HeroSplit,
  ProjectList,
  StoryBlock,
  OpportunitiesGrid,
  PersonalSection,
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
        <StoryBlock />
        <OpportunitiesGrid />
        <PersonalSection />
        <LinksSection />
        <SubscribeSection />
      </main>
      <Footer />
    </>
  );
}
