import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Logo({ className = "" }: { className?: string }) {
  const [showImage, setShowImage] = (useState as any)(true);

  return (
    <Link to="/" className={`group inline-flex items-center gap-2 ${className}`}>
      {showImage ? (
        <img
          src="/logo.png"
          alt="Grandma's Herbals"
          className="h-12 w-12 object-contain rounded-full"
          onError={() => setShowImage(false)}
        />
      ) : (
        <span className="relative grid h-9 w-9 place-items-center rounded-full bg-gradient-leaf text-primary-foreground shadow-soft transition-transform group-hover:rotate-6">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path
              d="M12 21c0-5 3-9 8-10-1 5-4 9-8 10ZM12 21c0-5-3-9-8-10 1 5 4 9 8 10ZM12 21V8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}

      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
          Grandma's Herbals
        </span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Botanical Wellness
        </span>
      </span>
    </Link>
  );
}