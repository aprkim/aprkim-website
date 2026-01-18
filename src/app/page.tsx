import {
  Navigation,
  HeroSplit,
  ProjectList,
  StoryBlock,
  OpportunitiesGrid,
  PersonalSection,
  LinksSection,
  ClosingStatement,
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
        <ClosingStatement />
      </main>
      <Footer />
    </>
  );
}
