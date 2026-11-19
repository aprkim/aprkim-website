'use client';

import { MouseEvent, ReactNode } from 'react';
import { TOPIC_EVENT } from './topic';

/**
 * A link to the contact form that also preselects a topic there. Without
 * JavaScript it is still a plain #contact link.
 */
export default function TopicLink({
  topic,
  className,
  children,
}: {
  topic: string;
  className?: string;
  children: ReactNode;
}) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent(TOPIC_EVENT, { detail: topic }));
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <a href="#contact" onClick={onClick} className={className}>
      {children}
    </a>
  );
}
