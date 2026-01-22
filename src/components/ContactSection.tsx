'use client';

import { useState, FormEvent, useRef } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const honeypotRef = useRef<HTMLInputElement>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Reset errors
    setEmailError('');
    setMessageError('');

    // Honeypot check - if filled, silently "succeed" without sending
    if (honeypotRef.current?.value) {
      setStatus('success');
      return;
    }

    // Validation
    let hasError = false;

    if (!email.trim()) {
      setEmailError('Email is required');
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      hasError = true;
    }

    if (!message.trim()) {
      setMessageError('Message is required');
      hasError = true;
    }

    if (hasError) return;

    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xgoavboa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim() || 'Anonymous',
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-[var(--color-background)]"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[980px] px-5 md:px-8">
        <div className="text-center mb-12">
          <h2
            id="contact-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--color-text)] leading-tight mb-4 max-w-2xl mx-auto"
          >
            If something here <span className="italic">stayed with you</span>,
            I&apos;d love to hear from you.
          </h2>
          <p className="text-lg text-[var(--color-muted)] max-w-xl mx-auto">
            No pitch. No expectations. I read everything.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {status === 'success' ? (
            <div
              role="status"
              aria-live="polite"
              className="text-center py-12 px-6 bg-[var(--color-soft-surface)] rounded-[var(--radius)]"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--color-success-bg)] flex items-center justify-center">
                <CheckIcon />
              </div>
              <p className="text-lg font-medium text-[var(--color-text)] mb-2">
                Thanks — I&apos;ll read this soon.
              </p>
              <p className="text-[var(--color-muted)]">
                I appreciate you reaching out.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Honeypot field - hidden from humans */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">
                  Don&apos;t fill this out if you&apos;re human
                  <input
                    ref={honeypotRef}
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              {/* Name field (optional) */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--color-text)] mb-2"
                >
                  Name{' '}
                  <span className="text-[var(--color-muted)] font-normal">
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-[12px] text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent transition-shadow disabled:opacity-60"
                  placeholder="What should I call you?"
                />
              </div>

              {/* Email field (required) */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--color-text)] mb-2"
                >
                  Email <span className="text-[var(--color-accent)]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError('');
                  }}
                  disabled={status === 'submitting'}
                  aria-invalid={!!emailError}
                  aria-describedby={emailError ? 'email-error' : undefined}
                  className={`w-full px-4 py-3 bg-[var(--color-card)] border rounded-[12px] text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent transition-shadow disabled:opacity-60 ${
                    emailError
                      ? 'border-[var(--color-accent)]'
                      : 'border-[var(--color-border)]'
                  }`}
                  placeholder="you@example.com"
                />
                {emailError && (
                  <p
                    id="email-error"
                    role="alert"
                    className="mt-1.5 text-sm text-[var(--color-accent)]"
                  >
                    {emailError}
                  </p>
                )}
              </div>

              {/* Message field (required) */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--color-text)] mb-2"
                >
                  Message <span className="text-[var(--color-accent)]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (messageError) setMessageError('');
                  }}
                  disabled={status === 'submitting'}
                  rows={5}
                  aria-invalid={!!messageError}
                  aria-describedby={messageError ? 'message-error' : undefined}
                  className={`w-full px-4 py-3 bg-[var(--color-card)] border rounded-[12px] text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent transition-shadow resize-none disabled:opacity-60 ${
                    messageError
                      ? 'border-[var(--color-accent)]'
                      : 'border-[var(--color-border)]'
                  }`}
                  placeholder="What's on your mind?"
                />
                {messageError && (
                  <p
                    id="message-error"
                    role="alert"
                    className="mt-1.5 text-sm text-[var(--color-accent)]"
                  >
                    {messageError}
                  </p>
                )}
              </div>

              {/* Error message */}
              {status === 'error' && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="p-4 bg-[var(--color-accent-soft)] border border-[var(--color-accent)] rounded-[12px] text-[var(--color-text)]"
                >
                  <p className="text-sm">
                    Something went wrong. Please try again, or email me at{' '}
                    <a
                      href="mailto:aprkim@gmail.com"
                      className="text-[var(--color-brand)] underline hover:no-underline"
                    >
                      aprkim@gmail.com
                    </a>
                    .
                  </p>
                </div>
              )}

              {/* Privacy note */}
              <p className="text-xs text-[var(--color-muted)]">
                Your email is only used to reply.
              </p>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-6 py-3 bg-[var(--color-brand)] text-white font-medium rounded-[var(--radius)] hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <LoadingSpinner />
                    Sending...
                  </>
                ) : (
                  'Send'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-success-text)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function LoadingSpinner() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="animate-spin"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.25"
      />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
