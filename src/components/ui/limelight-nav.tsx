import React, { useState, useRef, useLayoutEffect } from 'react';

export type NavItem = {
  id: string | number;
  label: string;
  href?: string;
  onClick?: () => void;
};

type LimelightNavProps = {
  items: NavItem[];
  defaultActiveIndex?: number;
  onTabChange?: (index: number) => void;
  className?: string;
};

export const LimelightNav = ({
  items,
  defaultActiveIndex = 0,
  onTabChange,
  className,
}: LimelightNavProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (items.length === 0) return;
    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeIndex];
    
    if (limelight && activeItem) {
      const newLeft = activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2;
      limelight.style.left = `${newLeft}px`;

      if (!isReady) {
        setTimeout(() => setIsReady(true), 50);
      }
    }
  }, [activeIndex, isReady, items]);

  if (items.length === 0) return null; 

  const handleItemClick = (index: number, item: NavItem) => {
    setActiveIndex(index);
    onTabChange?.(index);
    if (item.onClick) {
      item.onClick();
    }
  };

  return (
    <nav className={`relative inline-flex items-center h-16 ${className}`}>
      {items.map((item, index) => (
          <a
            key={item.id}
            href={item.href}
            ref={el => (navItemRefs.current[index] = el)}
            className={`relative z-20 flex h-full cursor-pointer items-center justify-center px-4 md:px-5 font-medium transition-colors duration-300 text-[15px] md:text-base ${
              activeIndex === index ? 'text-white' : 'text-white/60 hover:text-white'
            }`}
            onClick={(e) => {
              if (item.onClick) {
                e.preventDefault();
              }
              handleItemClick(index, item);
            }}
          >
            {item.label}
          </a>
      ))}

      <div 
        ref={limelightRef}
        className={`absolute top-0 z-10 w-10 h-[3px] rounded-full bg-primary shadow-[0_10px_20px_var(--primary)] ${
          isReady ? 'transition-[left] duration-300 ease-out' : ''
        }`}
        style={{ left: '-999px' }}
      >
        <div className="absolute left-[-100%] top-[3px] w-[300%] h-12 [clip-path:polygon(20%_0%,80%_0%,100%_100%,0%_100%)] bg-gradient-to-b from-primary/20 to-transparent pointer-events-none" />
      </div>
    </nav>
  );
};
