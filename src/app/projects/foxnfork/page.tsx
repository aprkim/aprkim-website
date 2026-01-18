import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fox & Fork — Case Study | April Kim',
  description:
    'A past exploration in food, community, and human connection. Learn about the journey of building Fox & Fork.',
};

function ArrowLeftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function getYouTubeEmbedUrl(url: string): string {
  if (!url) return '';

  // Already an embed URL
  if (url.includes('youtube.com/embed/') || url.includes('youtube-nocookie.com/embed/')) {
    // Convert to privacy-enhanced mode if not already
    return url.replace('youtube.com/embed/', 'youtube-nocookie.com/embed/');
  }

  let videoId = '';

  // Handle youtu.be/VIDEO_ID format
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) {
    videoId = shortMatch[1];
  }

  // Handle youtube.com/watch?v=VIDEO_ID format
  const longMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
  if (longMatch) {
    videoId = longMatch[1];
  }

  if (videoId) {
    return `https://www.youtube-nocookie.com/embed/${videoId}`;
  }

  return url;
}

const DEMO_VIDEO_URL = 'YOUTUBE_URL_HERE';

const keyTakeaways = [
  'Trust is a product feature',
  'Community grows slowly, and that\'s okay',
  '"Simple" is often the hardest design choice',
  'Real connection beats engagement metrics',
  'Many of these lessons still shape how I build today',
];

export default function FoxNForkPage() {
  const embedUrl = getYouTubeEmbedUrl(DEMO_VIDEO_URL);

  return (
    <main className="min-h-screen bg-[var(--color-background)] py-16 md:py-24">
      <article className="mx-auto max-w-[980px] px-5 md:px-8">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-brand)] transition-colors mb-12"
        >
          <ArrowLeftIcon />
          Back to Projects
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)]">
              Fox &amp; Fork
            </h1>
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border bg-[var(--color-soft-surface)] text-[var(--color-muted)] border-[var(--color-border)]">
              Past exploration · Archived
            </span>
          </div>
          <p className="text-xl md:text-2xl text-[var(--color-muted)] leading-relaxed max-w-2xl">
            A past exploration in food, community, and human connection.
          </p>
        </header>

        {/* Why I built it */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[var(--color-brand)] mb-6">
            Why I built it
          </h2>
          <div className="space-y-4 text-lg text-[var(--color-muted)] leading-relaxed max-w-3xl">
            <p>
              Fox &amp; Fork started from a simple curiosity: what happens when you
              design technology around food and people, instead of screens and
              efficiency?
            </p>
            <p>
              I wanted to explore how tools could support sharing, trust, and
              creativity in local communities.
            </p>
          </div>
        </section>

        {/* What it was */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[var(--color-brand)] mb-6">
            What it was
          </h2>
          <div className="space-y-4 text-lg text-[var(--color-muted)] leading-relaxed max-w-3xl">
            <p>
              Fox &amp; Fork was a social food-sharing and selling platform built
              around community, cooking, and connection.
            </p>
            <p>
              We launched MVP apps for iOS and Android and reached around 200 user
              accounts during beta testing.
            </p>
            <p>
              While the project is no longer active, it shaped how I think about
              community design and trust.
            </p>
          </div>
        </section>

        {/* Demo */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[var(--color-brand)] mb-6">
            Demo
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
            Here&apos;s a short demo from the early days.
          </p>
          {embedUrl && embedUrl !== 'YOUTUBE_URL_HERE' ? (
            <div className="relative w-full aspect-video rounded-[var(--radius)] overflow-hidden bg-[var(--color-soft-surface)] border border-[var(--color-border)]">
              <iframe
                src={embedUrl}
                title="Fox & Fork Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          ) : (
            <div className="relative w-full aspect-video rounded-[var(--radius)] overflow-hidden bg-[var(--color-soft-surface)] border border-[var(--color-border)] flex items-center justify-center">
              <div className="text-center text-[var(--color-muted)]">
                <VideoPlaceholderIcon />
                <p className="mt-3 text-sm">Video coming soon</p>
              </div>
            </div>
          )}
        </section>

        {/* Key takeaways */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[var(--color-brand)] mb-6">
            What I learned
          </h2>
          <div className="p-6 md:p-8 bg-[var(--color-brand-soft)] border border-[var(--color-border)] rounded-[var(--radius)]">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
              Key takeaways
            </h3>
            <ul className="space-y-3">
              {keyTakeaways.map((takeaway, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[var(--color-text)]"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] flex-shrink-0" />
                  <span className="leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footnote */}
        <section className="mb-16 pb-16 border-b border-[var(--color-border)]">
          <p className="text-[var(--color-muted)] italic">
            This project is no longer active, but it remains an important part of
            my journey.
          </p>
        </section>

        {/* Back link (bottom) */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-brand)] transition-colors"
        >
          <ArrowLeftIcon />
          Back to Projects
        </Link>
      </article>
    </main>
  );
}

function VideoPlaceholderIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}
