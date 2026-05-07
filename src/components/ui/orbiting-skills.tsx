"use client"
import React, { useEffect, useState, memo } from 'react';
import { Globe, Code, Flame } from 'lucide-react';
import { FaWordpress, FaFigma } from 'react-icons/fa';
import { SiFramer, SiOpenai } from 'react-icons/si';

type IconType = 'framer' | 'chatgpt' | 'figma' | 'wordpress' | 'code' | 'flame';
type GlowColor = 'cyan' | 'purple';

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
  framer: {
    component: () => <SiFramer className="w-full h-full text-white" />,
    color: '#ffffff'
  },
  chatgpt: {
    component: () => <SiOpenai className="w-full h-full text-white" />,
    color: '#ffffff'
  },
  figma: {
    component: () => <FaFigma className="w-full h-full text-white" />,
    color: '#ffffff'
  },
  wordpress: {
    component: () => <FaWordpress className="w-full h-full text-white" />,
    color: '#ffffff'
  },
  code: {
    component: () => <Code className="w-full h-full text-white" />,
    color: '#ffffff'
  },
  flame: {
    component: () => <Flame className="w-full h-full text-white" />,
    color: '#ffffff'
  }
};

const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

const useResponsiveConfig = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 480);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scale = isMobile ? 0.7 : 1;

  return [
    // Inner Orbit
    { id: 'framer', orbitRadius: 90 * scale, size: 40 * scale, speed: 0, iconType: 'framer' as IconType, phaseShift: Math.PI / 4, glowColor: 'cyan' as GlowColor, label: 'Framer' },
    { id: 'chatgpt', orbitRadius: 90 * scale, size: 40 * scale, speed: 0, iconType: 'chatgpt' as IconType, phaseShift: Math.PI, glowColor: 'cyan' as GlowColor, label: 'ChatGPT' },
    { id: 'figma', orbitRadius: 90 * scale, size: 40 * scale, speed: 0, iconType: 'figma' as IconType, phaseShift: -Math.PI / 4, glowColor: 'cyan' as GlowColor, label: 'Figma' },
    // Outer Orbit
    { id: 'wordpress', orbitRadius: 160 * scale, size: 45 * scale, speed: 0, iconType: 'wordpress' as IconType, phaseShift: Math.PI / 2.5, glowColor: 'purple' as GlowColor, label: 'WordPress' },
    { id: 'code', orbitRadius: 160 * scale, size: 45 * scale, speed: 0, iconType: 'code' as IconType, phaseShift: Math.PI * 0.95, glowColor: 'purple' as GlowColor, label: 'Development' },
    { id: 'flame', orbitRadius: 160 * scale, size: 45 * scale, speed: 0, iconType: 'flame' as IconType, phaseShift: -Math.PI / 4.5, glowColor: 'purple' as GlowColor, label: 'Performance' },
  ] as SkillConfig[];
};

const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2.5 bg-black/80 border border-white/10 backdrop-blur-md
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl hover:border-white/30'}
        `}
      >
        <SkillIcon type={iconType} />
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    cyan: { primary: 'rgba(56, 189, 248, 0.3)', secondary: 'rgba(56, 189, 248, 0.1)', border: 'rgba(56, 189, 248, 0.2)' },
    purple: { primary: 'rgba(129, 140, 248, 0.3)', secondary: 'rgba(129, 140, 248, 0.1)', border: 'rgba(129, 140, 248, 0.2)' }
  };
  const colors = glowColors[glowColor] || glowColors.cyan;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: `1px solid ${colors.border}`, boxShadow: `inset 0 0 20px ${colors.secondary}` }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

export default function OrbitingSkills() {
  const skillsConfig = useResponsiveConfig();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 480;
  const scale = isMobile ? 0.7 : 1;

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div 
        className="relative w-full aspect-square max-w-[400px] flex items-center justify-center"
      >
        {/* Central Icon */}
        <div className="w-14 h-14 md:w-20 md:h-20 bg-black/80 border border-white/20 rounded-full flex items-center justify-center z-10 relative shadow-2xl backdrop-blur-md">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl animate-pulse"></div>
          <div className="relative z-10 text-white">
            <Globe className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
          </div>
        </div>

        <GlowingOrbitPath radius={90 * scale} glowColor="cyan" animationDelay={0} />
        <GlowingOrbitPath radius={160 * scale} glowColor="purple" animationDelay={1.5} />

        {skillsConfig.map((config) => {
          const angle = config.phaseShift || 0;
          return <OrbitingSkill key={config.id} config={config} angle={angle} />;
        })}
      </div>
    </div>
  );
}
