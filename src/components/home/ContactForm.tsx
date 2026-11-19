'use client';

import { FormEvent, useRef, useState } from 'react';
import HomeSection from './Section';
import { L } from './L';
import { useLang } from './lang';
import { CONTACT_EMAIL } from './WorkWithMe';

/* Existing backend: Formspree forwards submissions to hello@aprkim.com. */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgoavboa';

/* value is what lands in the email subject; en/ko are the visible labels */
const topics = [
  { value: 'Brand partnership', en: 'Brand partnership', ko: '브랜드 협업' },
  { value: 'Speaking', en: 'Speaking', ko: '강연 · 워크숍' },
  { value: 'Product advising', en: 'Product advising', ko: '제품 · UX 자문' },
  { value: 'Co-creation', en: 'Co-creation', ko: '공동 제작' },
  { value: 'Just saying hi', en: 'Just saying hi', ko: '그냥 인사' },
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

const field =
  'w-full rounded-[10px] border border-line bg-bg px-[14px] py-3 text-base font-medium text-ink focus:border-transparent focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-violet disabled:opacity-60';
const label = 'grid gap-1.5 text-[13px] font-semibold text-muted';

/** Subject line Formspree uses for the notification email. */
function buildSubject(topic: string, name: string, email: string) {
  return `[${topic || 'Hello'}] ${name || email}`;
}

export default function ContactForm() {
  const lang = useLang();
  const ko = lang === 'ko';
  const [status, setStatus] = useState<Status>('idle');
  const [invalid, setInvalid] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const topic = String(data.get('topic') ?? '');
    const message = String(data.get('message') ?? '').trim();

    // Honeypot: bots fill the hidden field. Pretend it worked, send nothing.
    if (honeypotRef.current?.value) {
      setStatus('success');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email) || !message) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    setStatus('submitting');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name || 'Anonymous',
          email,
          topic: topic || 'Hello',
          message,
          language: lang,
          _subject: buildSubject(topic, name, email),
          _replyto: email,
        }),
      });
      if (res.ok) {
        form.reset();
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const busy = status === 'submitting';

  return (
    <HomeSection id="contact" en="Say hello" ko="연락하기">
      <p className="-mt-2 mb-5 text-muted">
        <L en="No pitch needed. I read everything." ko="부담 없이 보내주세요. 전부 읽어요." />
      </p>

      {status === 'success' ? (
        <div role="status" aria-live="polite" className="rounded-[18px] bg-soft p-6">
          <p className="m-0 text-lg font-semibold">
            <L en="Thanks, I'll read this soon." ko="고마워요. 곧 읽어볼게요." />
          </p>
          <p className="mb-0 mt-1 text-muted">
            <L en="I'll reply to the email you left." ko="남겨주신 이메일로 답장할게요." />
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="relative grid gap-[14px] rounded-[18px] bg-soft p-6"
        >
          {/* Honeypot: hidden from people and screen readers */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="website">
              Leave this empty
              <input ref={honeypotRef} type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="grid grid-cols-1 gap-[14px] min-[561px]:grid-cols-2">
            <label htmlFor="f-name" className={label}>
              <L en="Name (optional)" ko="이름 (선택)" />
              <input id="f-name" name="name" autoComplete="name" disabled={busy} className={field} />
            </label>
            <label htmlFor="f-email" className={label}>
              <L en="Email" ko="이메일" />
              <input
                id="f-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                disabled={busy}
                aria-invalid={invalid || undefined}
                className={field}
              />
            </label>
          </div>

          <label htmlFor="f-topic" className={label}>
            <L en="Topic" ko="주제" />
            <span className="relative block">
            <select
              id="f-topic"
              name="topic"
              defaultValue=""
              disabled={busy}
              className={`${field} cursor-pointer appearance-none pr-11`}
            >
              <option value="" disabled>
                {ko ? '주제를 골라주세요' : 'Choose a topic'}
              </option>
              {topics.map((t) => (
                <option key={t.value} value={t.value}>
                  {ko ? t.ko : t.en}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
            </span>
          </label>

          <label htmlFor="f-msg" className={label}>
            <L en="Message" ko="메시지" />
            <textarea
              id="f-msg"
              name="message"
              required
              disabled={busy}
              aria-invalid={invalid || undefined}
              className={`${field} min-h-[120px] resize-y`}
            />
          </label>

          <button
            type="submit"
            disabled={busy}
            className="inline-flex cursor-pointer items-center gap-2 justify-self-start rounded-[14px] border-0 bg-violet px-6 py-[14px] text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            {busy ? (
              <L en="Sending..." ko="보내는 중..." />
            ) : (
              <L en="Send" ko="보내기" />
            )}
          </button>

          <p className="m-0 text-[13.5px] text-muted" aria-live="polite">
            {invalid ? (
              <L en="Please add your email and a message." ko="이메일과 메시지를 입력해 주세요." />
            ) : status === 'error' ? (
              <L
                en={<>Something went wrong. Please try again, or write to {CONTACT_EMAIL}.</>}
                ko={<>전송에 실패했어요. 다시 시도하거나 {CONTACT_EMAIL} 으로 보내주세요.</>}
              />
            ) : (
              <L en="Your email is only used to reply." ko="이메일은 답장에만 써요." />
            )}
          </p>
        </form>
      )}
    </HomeSection>
  );
}
