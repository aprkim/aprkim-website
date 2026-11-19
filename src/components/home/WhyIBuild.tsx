import HomeSection from './Section';
import { L } from './L';

export default function WhyIBuild() {
  return (
    <HomeSection id="story" en="Why I build" ko="제가 만드는 이유">
      <div className="grid gap-4 text-lg leading-[1.7]">
        <p className="m-0 text-[21px] font-semibold leading-[1.5]">
          <L
            en="For years, I had ideas I couldn’t build myself, and it was frustrating. Now, with AI, I can."
            ko="오랫동안 아이디어는 있었지만 직접 만들 수 없어서 답답했어요. 이제는 AI로 직접 만들어요."
          />
        </p>
        <p className="m-0">
          <L
            en="So I’m finally making the things I always wanted to exist: tools that actually help in everyday life, and services that help people grow."
            ko="그래서 늘 있었으면 했던 것들을 하나씩 만들고 있어요. 일상에서 진짜 도움이 되는 도구, 그리고 사람을 성장시키는 서비스."
          />
        </p>
        <p className="m-0">
          <L
            en="Each one starts small. If it makes someone’s day a little easier, or helps them grow a little, it’s worth building."
            ko="모두 작게 시작해요. 누군가의 하루를 조금 편하게, 조금 더 자라게 한다면 만들 가치가 있다고 믿어요."
          />
        </p>
      </div>
    </HomeSection>
  );
}
