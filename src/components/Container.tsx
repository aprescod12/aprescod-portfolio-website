// components/Container.tsx
// A consistent centered layout wrapper used across pages

export default function Container({ children }: { children: React.ReactNode }) {
    return (
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        {/* Centered content container used across all pages */}
        {children}
      </div>
    );
  }