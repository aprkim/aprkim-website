import HomeSection from './Section';
import { L } from './L';

export default function WhyIBuild() {
  return (
    <HomeSection id="story" en="Why I build" ko="제가 만드는 이유">
      <div className="grid gap-4 text-lg leading-[1.7]">
        <p className="m-0 text-[21px] font-semibold leading-[1.5]">
          <L
            en="I started building because I couldn't speak English with confidence at work. So I made ChattingCat for non-native speakers, and it grew fast."
            ko="회사에서 영어로 자신 있게 말하지 못해서 만들기 시작했어요. 비원어민을 위한 ChattingCat을 만들었고, 빠르게 성장했어요."
          />
        </p>
        <p className="m-0">
          <L
            en="Then a lawsuit forced me to shut it down. I spent three years fighting it, and I won. It taught me to build with trust, clarity and the people using it in mind."
            ko="그러다 소송으로 문을 닫아야 했어요. 3년을 싸웠고, 이겼습니다. 그 시간이 신뢰와 명확함, 그리고 쓰는 사람을 먼저 생각하며 만드는 법을 가르쳐줬어요."
          />
        </p>
        <p className="m-0">
          <L
            en="Now I build carefully and in public, and I run a vibecoding community for women who want to make things too."
            ko="지금은 신중하게, 공개적으로 만들어요. 그리고 직접 만들어보고 싶은 여성들을 위한 바이브코딩 커뮤니티를 운영하고 있어요."
          />
        </p>
      </div>
    </HomeSection>
  );
}
