import type { ReactNode } from 'react';

type Props = {
  id: string;
  title: string;
  actions?: ReactNode;
};

/** Standard section header: lowercase display title + 32px accent rule. */
export function SectionHeader({ id, title, actions }: Props) {
  return (
    <header className={`ea-section-header${actions ? ' ea-section-header--with-actions' : ''}`}>
      <div>
        <h2 id={id} className="ea-t-display ea-section-header__title">
          {title}
        </h2>
        <span className="ea-section-header__rule" aria-hidden="true" />
      </div>
      {actions}
    </header>
  );
}

export function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {dir === 'left' ? <polyline points="15,18 9,12 15,6" /> : <polyline points="9,18 15,12 9,6" />}
    </svg>
  );
}
