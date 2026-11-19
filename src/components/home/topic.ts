/*
 * Shared between Work with me (which picks a topic) and the contact form
 * (which receives it). `value` is what lands in the email subject.
 */
export const topics = [
  {
    value: 'Brand partnership',
    en: 'Brand partnership',
    ko: '브랜드 협업',
    hintEn: 'Tell me about your brand, the campaign idea, rough timing and budget.',
    hintKo: '브랜드와 캠페인 아이디어, 대략적인 일정과 예산을 알려주세요.',
  },
  {
    value: 'Speaking',
    en: 'Speaking',
    ko: '강연 · 워크숍',
    hintEn: 'What is the event, who is the audience, and when is it? English or Korean?',
    hintKo: '어떤 행사인지, 청중은 누구인지, 언제인지 알려주세요. 한국어와 영어 중 어떤 언어인가요?',
  },
  {
    value: 'Product advising',
    en: 'Product advising',
    ko: '제품 · UX 자문',
    hintEn: 'In 2 or 3 lines: what are you building, and where are you stuck?',
    hintKo: '2~3줄로 들려주세요. 무엇을 만들고 있고, 어디서 막혀 있나요?',
  },
  {
    value: 'Co-creation',
    en: 'Co-creation',
    ko: '공동 제작',
    hintEn: 'An app, a book, a video series? Share the early idea, even if it is rough.',
    hintKo: '앱, 책, 영상 시리즈? 아직 거친 아이디어여도 편하게 적어주세요.',
  },
  {
    value: 'Just saying hi',
    en: 'Just saying hi',
    ko: '그냥 인사',
    hintEn: 'Say hi, ask a question, or tell me what you are working on.',
    hintKo: '인사, 질문, 요즘 하고 있는 일, 무엇이든 좋아요.',
  },
] as const;

export const TOPIC_EVENT = 'aprkim:choose-topic';
