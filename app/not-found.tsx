'use client';

import ButtonComponent from '@/components/ButtonComponent';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen [background:var(--home-bg)] text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <ButtonComponent
        onClick={() => window.location.href = '/'}
        className="px-6 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-md text-white font-semibold hover:opacity-85 transition-opacity"
      >
        Go back home
      </ButtonComponent>
    </div>
  );
}
