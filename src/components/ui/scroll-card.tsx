'use client';
import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ScrollCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const ScrollCardContainer = forwardRef<HTMLElement, ScrollCardProps>(
  ({ children, className, containerClassName }, ref) => {
    return (
      <main className={cn('bg-black', containerClassName)} ref={ref}>
        <div className={cn('flex flex-col items-center', className)}>
          {children}
        </div>
      </main>
    );
  }
);

interface ScrollCardItemProps {
  children: React.ReactNode;
  className?: string;
  stickyTop?: string;
}

export const ScrollCardItem = ({ children, className, stickyTop = "top-24 md:top-32" }: ScrollCardItemProps) => {
  return (
    <figure className={cn(`sticky ${stickyTop} min-h-[60vh] md:h-[80vh] flex items-center justify-center w-full px-4 mb-[20vh] md:mb-0`, className)}>
      {children}
    </figure>
  );
};

ScrollCardContainer.displayName = 'ScrollCardContainer';
