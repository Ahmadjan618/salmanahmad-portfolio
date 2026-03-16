import React, { useState, useEffect, useRef, useContext } from 'react';
import {
  Terminal,
  Smartphone,
  Globe,
  MapPin,
  GraduationCap,
  ArrowUpRight,
  Menu,
  X,
  Github,
  Linkedin,
  Code2,
  Database,
  Layers,
  Sparkles,
  Phone,
  Sun,
  Moon
} from 'lucide-react';
import advertisingScaleImg from './advertisingscale.png';
import mediConnectImg from './MediConnect Pro.png';
import novaAestheticsImg from './Nova Aesthetics.png';
import alBarakahImg from './Al-Barakah Daals & Chawals.png';
import hopeMedicalImg from './Hope Medical.png';
import growthMarketingImg from './Growth Marketing Agency.png';
import myImg from './MyPhoto.png';

const MotionContext = React.createContext({ reduced: false });
const useReducedMotion = () => useContext(MotionContext).reduced;

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mediaQuery.matches);
    update();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', update);
    } else {
      mediaQuery.addListener(update);
    }
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', update);
      } else {
        mediaQuery.removeListener(update);
      }
    };
  }, []);

  return reduced;
};

const ACCENT_STYLES = {
  violet: {
    badge: 'border-violet-500/30 text-violet-500 bg-violet-500/10',
    heading: 'group-hover:text-violet-500',
    cta: 'hover:text-violet-500 hover:border-violet-500',
    overlay: 'from-violet-500/20',
  },
  cyan: {
    badge: 'border-cyan-500/30 text-cyan-500 bg-cyan-500/10',
    heading: 'group-hover:text-cyan-500',
    cta: 'hover:text-cyan-500 hover:border-cyan-500',
    overlay: 'from-cyan-500/25',
  },
  emerald: {
    badge: 'border-emerald-500/30 text-emerald-500 bg-emerald-500/10',
    heading: 'group-hover:text-emerald-500',
    cta: 'hover:text-emerald-500 hover:border-emerald-500',
    overlay: 'from-emerald-500/25',
  },
  fuchsia: {
    badge: 'border-fuchsia-500/30 text-fuchsia-500 bg-fuchsia-500/10',
    heading: 'group-hover:text-fuchsia-500',
    cta: 'hover:text-fuchsia-500 hover:border-fuchsia-500',
    overlay: 'from-fuchsia-500/25',
  },
  amber: {
    badge: 'border-amber-500/30 text-amber-500 bg-amber-500/10',
    heading: 'group-hover:text-amber-500',
    cta: 'hover:text-amber-500 hover:border-amber-500',
    overlay: 'from-amber-500/25',
  },
};

const NEUTRAL_BADGE = 'border-[var(--border)] text-[var(--text-muted)] bg-[var(--button-bg-ghost)]';

const PROJECTS = [
  {
    title: 'Recipe Ecosystem',
    description:
      'A beautifully crafted Flutter mobile app with structured layouts and a seamless culinary journey, built with responsive UI patterns and performance-first widgets.',
    badges: [
      { label: 'Flutter', tone: 'violet' },
      { label: 'Mobile App', tone: 'neutral' },
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      alt: 'Recipe Ecosystem mobile app preview',
    },
    cta: { label: 'Request Demo', href: '#contact', external: false },
    accent: 'violet',
  },
  {
    title: 'Advertising Scale',
    description:
      'An AI-driven web platform delivering responsive, form-integrated business sites with rapid iteration and uncompromising quality.',
    badges: [
      { label: 'AI-Workflow', tone: 'cyan' },
      { label: 'Web Platform', tone: 'neutral' },
    ],
    image: {
      src: advertisingScaleImg,
      alt: 'Advertising Scale website preview',
    },
    cta: { label: 'Visit Live Site', href: 'https://advertisingscale.com/', external: true },
    accent: 'cyan',
  },
  {
    title: 'Growth Marketing Agency',
    description:
      'Conversion-optimized agency platform with modular sections, service and case study routes, and lead capture CTA systems.',
    badges: [
      { label: 'Marketing', tone: 'violet' },
      { label: 'SPA', tone: 'neutral' },
    ],
    image: {
      src: growthMarketingImg,
      alt: 'Growth marketing agency platform preview',
    },
    cta: { label: 'Visit Live Site', href: 'https://growthmarketingagency.netlify.app/', external: true },
    accent: 'violet',
  },

  {
    title: 'Nova Aesthetics',
    description:
      'Premium clinic website with dynamic theming, treatment pages, and scroll-triggered reveals built for high-end client conversions.',
    badges: [
      { label: 'Clinic Website', tone: 'fuchsia' },
      { label: 'Framer Motion', tone: 'neutral' },
    ],
    image: {
      src: novaAestheticsImg,
      alt: 'Nova Aesthetics clinic website preview',
    },
    cta: { label: 'Visit Live Site', href: 'https://nova-aesthetics.netlify.app/', external: true },
    accent: 'fuchsia',
  },
  {
    title: 'Al-Barakah Daals & Chawals',
    description:
      'Full-featured e-commerce for grains and spices with variant pricing, advanced filtering, and a complete cart plus checkout flow.',
    badges: [
      { label: 'E-commerce', tone: 'amber' },
      { label: 'React 19', tone: 'neutral' },
    ],
    image: {
      src: alBarakahImg,
      alt: 'Al-Barakah Daals and Chawals storefront preview',
    },
    cta: { label: 'Visit Live Site', href: 'https://al-barakah-shop.netlify.app/', external: true },
    accent: 'amber',
  },
  {
    title: 'Hope Medical',
    description:
      'Healthcare landing page with services, plans, doctor profiles, testimonials, and a streamlined appointment booking flow.',
    badges: [
      { label: 'Healthcare', tone: 'cyan' },
      { label: 'Landing Page', tone: 'neutral' },
    ],
    image: {
      src: hopeMedicalImg,
      alt: 'Hope Medical website preview',
    },
    cta: { label: 'Visit Live Site', href: 'https://medi-hope.netlify.app/', external: true },
    accent: 'cyan',
  },
  {
    title: 'MediConnect Pro',
    description:
      'Advanced healthcare platform with appointment booking, specialist discovery, and an AI-powered virtual health assistant with safety-first guidance.',
    badges: [
      { label: 'Healthcare', tone: 'emerald' },
      { label: 'AI Assistant', tone: 'neutral' },
    ],
    image: {
      src: mediConnectImg,
      alt: 'MediConnect Pro healthcare platform preview',
    },
    cta: { label: 'Visit Live Site', href: 'https://medical-pro.netlify.app/', external: true },
    accent: 'emerald',
  },
];

const CONTACT_EMAIL = 'salmanjan3009584@gmail.com';
const SOCIAL_LINKS = {
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
};

const Reveal = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return () => { };
    }
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return () => { };
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const getTranslate = () => {
    if (isVisible) return 'translate-y-0 translate-x-0';
    switch (direction) {
      case 'up':
        return 'translate-y-12';
      case 'down':
        return '-translate-y-12';
      case 'left':
        return 'translate-x-12';
      case 'right':
        return '-translate-x-12';
      default:
        return 'translate-y-12';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:duration-0 will-change-transform will-change-opacity ${isVisible ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'
        } ${getTranslate()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsEnabled(false);
      return () => { };
    }

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!finePointer.matches) {
      setIsEnabled(false);
      return () => { };
    }

    setIsEnabled(true);

    let requestRef;
    let mouse = { x: 0, y: 0 };

    const updatePosition = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const updateHoverState = (e) => {
      const target = e.target;
      setIsHovering(
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('hover-trigger')
      );
    };

    const render = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
      requestRef = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);
    requestRef = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
      cancelAnimationFrame(requestRef);
    };
  }, [prefersReducedMotion]);

  if (!isEnabled) return null;

  return (
    <div className="theme-cursor hidden lg:block pointer-events-none fixed inset-0 z-[100]">
      <div ref={dotRef} className="absolute left-0 top-0 will-change-transform">
        <div className={`w-3 h-3 bg-[var(--cursor-dot)] rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out ${isHovering ? 'scale-[3]' : 'scale-100'}`} />
      </div>
      <div ref={ringRef} className="absolute left-0 top-0 will-change-transform">
        <div className={`w-10 h-10 border border-[var(--cursor-ring)] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${isHovering ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`} />
      </div>
    </div>
  );
};

const AnimatedRole = () => {
  const words = ['CREATIVE', 'FLUTTER', 'AI-ASSISTED', 'APP', 'ANDROID', 'IOS', 'WEB'];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return () => { };
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 500);
    }, 2800);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span className="inline-block whitespace-nowrap">CREATIVE</span>;
  }

  return (
    <span
      className={`inline-block whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform will-change-opacity ${fade ? 'opacity-100 blur-none scale-100 translate-y-0' : 'opacity-0 blur-md scale-95 translate-y-4'
        }`}
    >
      {words[index]}
    </span>
  );
};

const Tilt = ({ children, className = '' }) => {
  const ref = useRef(null);
  const glareRef = useRef(null);
  const frameRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (!ref.current || prefersReducedMotion) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      ref.current.style.transition = 'transform 0.1s ease-out';
      if (glareRef.current) {
        glareRef.current.style.opacity = '0.15';
        glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 60%)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    if (ref.current) {
      ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      ref.current.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
    }
    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
      className={`relative will-change-transform overflow-hidden ${className}`}
    >
      <div
        ref={glareRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-50 rounded-inherit"
        style={{
          opacity: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 60%)',
        }}
      />
      {children}
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const parallaxRef = useRef(null);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const lastFocusedElementRef = useRef(null);
  const bodyOverflowRef = useRef('');
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initialTheme = storedTheme || (systemPrefersLight ? 'light' : 'dark');
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = 'translate3d(0, 0, 0)';
      }
      return () => { };
    }

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!finePointer.matches) return () => { };

    let raf;
    const mouse = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const handleGlobalMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 40;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 40;
    };

    const update = () => {
      current.x += (mouse.x - current.x) * 0.08;
      current.y += (mouse.y - current.y) * 0.08;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate3d(${-current.x}px, ${-current.y}px, 0)`;
      }
      raf = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    raf = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      cancelAnimationFrame(raf);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (prefersReducedMotion || !finePointer.matches) {
      document.body.classList.remove('cursor-off');
      return () => { };
    }

    document.body.classList.add('cursor-off');
    return () => {
      document.body.classList.remove('cursor-off');
    };
  }, [prefersReducedMotion]);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const navLinks = ['About', 'Skills', 'Projects', 'Education'];
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (!isMenuOpen) return () => { };
    bodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = bodyOverflowRef.current;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return () => { };
    lastFocusedElementRef.current = document.activeElement;
    const menuElement = menuRef.current;
    const focusableSelector = 'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const getFocusable = () => {
      if (!menuElement) return [];
      return Array.from(menuElement.querySelectorAll(focusableSelector)).filter(
        (el) => !el.hasAttribute('disabled')
      );
    };

    const focusables = getFocusable();
    if (focusables.length) focusables[0].focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;

      const items = getFocusable();
      if (!items.length) {
        event.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (lastFocusedElementRef.current && lastFocusedElementRef.current.focus) {
        lastFocusedElementRef.current.focus();
      }
    };
  }, [isMenuOpen]);

  return (
    <MotionContext.Provider value={{ reduced: prefersReducedMotion }}>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans selection:bg-violet-500/30 overflow-x-hidden">
        <CustomCursor />
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[60] focus:rounded-full focus:bg-[var(--button-bg)] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[var(--button-text)]"
        >
          Skip to content
        </a>

        <div
          ref={parallaxRef}
          className="fixed inset-0 z-0 pointer-events-none opacity-40 theme-glow transition-transform duration-700 ease-out will-change-transform"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-600/20 blur-[120px] animate-pulse motion-reduce:animate-none" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/20 blur-[120px] animate-pulse motion-reduce:animate-none" style={{ animationDuration: '10s' }}></div>
        </div>

        <header className="fixed w-full z-50 top-0 px-4 py-4 md:px-6 md:py-6 transition-all duration-500 flex justify-center pointer-events-none">
          <div className={`pointer-events-auto flex items-center justify-between px-4 md:px-6 py-2 rounded-full border transition-all duration-500 ${scrolled ? 'bg-[var(--panel-strong)] backdrop-blur-xl border-[var(--border)] w-full max-w-4xl shadow-[0_20px_60px_var(--shadow)] supports-[backdrop-filter]:bg-[var(--panel)]' : 'bg-transparent border-transparent w-full max-w-7xl'
            }`}>
            <button
              type="button"
              className="text-xl md:text-2xl font-black tracking-tighter text-[var(--text-strong)] hover-trigger focus:outline-none hover:text-violet-400 transition-colors active:scale-95"
              onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })}
              aria-label="Back to top"
            >
              S<span className="text-violet-500">A</span>.
            </button>

            <nav className="hidden md:flex space-x-1 items-center bg-[var(--button-bg-ghost)] rounded-full px-2 py-1 border border-[var(--border-soft)]">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="px-4 py-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-strong)] rounded-full hover:bg-[var(--button-bg-ghost)] transition-all focus:outline-none focus:ring-2 focus:ring-violet-500/50 active:scale-95"
                >
                  {link}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 md:gap-4">
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-[var(--border)] bg-[var(--button-bg-ghost)] text-[var(--text-strong)] hover:bg-[var(--button-bg)] hover:text-[var(--button-text)] transition-all focus:outline-none focus:ring-2 focus:ring-violet-500/40 active:scale-95"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-pressed={theme === 'light'}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-[var(--button-text)] bg-[var(--button-bg)] rounded-full hover:scale-105 hover:shadow-[0_0_20px_var(--glow)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500/40 active:scale-95"
              >
                Let's Talk <ArrowUpRight size={16} />
              </button>

              <button
                type="button"
                className="md:hidden flex items-center justify-center w-12 h-12 text-[var(--text)] hover:text-[var(--text-strong)] bg-[var(--button-bg-ghost)] rounded-full border border-[var(--border)] focus:outline-none active:scale-90 transition-transform"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                ref={menuButtonRef}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </header>

        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMenuOpen
            ? 'opacity-100 backdrop-blur-3xl bg-[var(--panel-strong)] supports-[backdrop-filter]:bg-[var(--panel)] pointer-events-auto scale-100'
            : 'opacity-0 backdrop-blur-none bg-transparent pointer-events-none scale-95'
            }`}
          aria-hidden={!isMenuOpen}
        >
          <h2 id="mobile-menu-title" className="sr-only">Mobile navigation</h2>
          <div className="flex flex-col items-center justify-center min-h-full py-20 space-y-4">
            {navLinks.map((link, i) => (
              <button
                type="button"
                key={link}
                onClick={() => scrollToSection(link.toLowerCase())}
                className={`text-4xl sm:text-5xl font-black text-[var(--text-strong)] py-2 hover:text-violet-400 transition-all duration-500 focus:outline-none active:scale-90 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                style={{ transitionDelay: `${isMenuOpen ? (i * 100) + 100 : 0}ms` }}
              >
                {link}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className={`mt-10 px-10 py-4 text-xl font-bold text-[var(--button-text)] bg-[var(--button-bg)] rounded-full focus:outline-none active:scale-95 transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              style={{ transitionDelay: `${isMenuOpen ? 500 : 0}ms` }}
            >
              Let's Talk
            </button>
          </div>
        </div>

        <main className="relative z-10">
          <section className="min-h-[100dvh] flex flex-col justify-center px-6 lg:px-12 pt-24 pb-12">
            <div className="container mx-auto max-w-7xl">
              <Reveal delay={100}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--button-bg-ghost)] backdrop-blur-md mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-semibold tracking-wider uppercase text-[var(--text)]">Available for Work</span>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <h1 className="text-[13vw] sm:text-[11vw] lg:text-[8vw] leading-[0.9] font-black text-[var(--text-strong)] tracking-tighter mb-6">
                  <AnimatedRole /> <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400">
                    DEVELOPER.
                  </span>
                </h1>
              </Reveal>

              <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 mt-10 lg:mt-16 text-center lg:text-left">
                <Reveal delay={300} className="w-full lg:w-2/3">
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 max-w-3xl mx-auto lg:mx-0">
                    <Tilt className="shrink-0 rounded-full p-1 bg-gradient-to-tr from-violet-500 to-cyan-400 active:scale-95 cursor-pointer shadow-lg shadow-violet-500/20">
                      <img
                        src={myImg}
                        alt="Salman Ahmad"
                        className="w-24 h-24 md:w-24 md:h-24 rounded-full border-4 border-[var(--bg)] object-cover pointer-events-none animate-float sm:animate-none"
                      />
                    </Tilt>
                    <p className="text-lg md:text-2xl text-[var(--text-muted)] font-light leading-relaxed">
                      Hi, I'm <strong className="text-[var(--text-strong)] font-medium">Salman Ahmad</strong>. I engineer high-performance Flutter mobile apps and AI-assisted web experiences that redefine digital interaction.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={400} className="flex justify-center lg:justify-start gap-4 shrink-0">
                  <button
                    type="button"
                    onClick={() => scrollToSection('projects')}
                    className="w-16 h-16 rounded-full border border-[var(--border)] flex items-center justify-center hover:bg-[var(--button-bg)] hover:text-[var(--button-text)] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-violet-500 active:scale-90 animate-float sm:animate-none"
                    aria-label="View Projects"
                  >
                    <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-300" />
                  </button>
                  <div className="flex flex-col justify-center text-left">
                    <span className="text-sm font-bold text-[var(--text-strong)] uppercase tracking-widest">Explore</span>
                    <span className="text-xs text-[var(--text-soft)]">Selected Works</span>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <div className="py-8 lg:py-10 border-y border-[var(--border)] bg-[var(--panel)] backdrop-blur-md flex overflow-hidden whitespace-nowrap will-change-transform">
            <div className="marquee animate-[marquee_20s_linear_infinite] motion-reduce:animate-none flex gap-8 lg:gap-12 items-center">
              {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                  <span className="text-3xl lg:text-4xl font-black text-transparent [-webkit-text-stroke:1px_var(--marquee-stroke)]">FLUTTER DEV</span>
                  <Sparkles className="text-violet-500 shrink-0" size={24} />
                  <span className="text-3xl lg:text-4xl font-black text-[var(--text-strong)]">AI WORKFLOWS</span>
                  <Sparkles className="text-cyan-500 shrink-0" size={24} />
                  <span className="text-3xl lg:text-4xl font-black text-transparent [-webkit-text-stroke:1px_var(--marquee-stroke)]">DART EXPERT</span>
                  <Sparkles className="text-violet-500 shrink-0" size={24} />
                  <span className="text-3xl lg:text-4xl font-black text-[var(--text-strong)]">WEB CREATOR</span>
                  <Sparkles className="text-cyan-500 shrink-0" size={24} />
                </React.Fragment>
              ))}
            </div>
          </div>

          <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 scroll-mt-20">
            <div className="container mx-auto max-w-7xl">
              <div className="grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5">
                  <Reveal>
                    <h2 className="text-5xl md:text-6xl font-black text-[var(--text-strong)] mb-6 tracking-tighter">THE <br /><span className="text-violet-400">VISION.</span></h2>
                    <p className="text-xl text-[var(--text-muted)] font-light leading-relaxed mb-8">
                      Bridging traditional programming with cutting-edge AI. I do not just write code; I architect systems that solve problems beautifully and efficiently.
                    </p>
                  </Reveal>
                </div>
                <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                  <Reveal delay={200} className="h-full">
                    <Tilt className="bg-[var(--panel)] p-8 rounded-3xl border border-[var(--border-soft)] hover:border-violet-500/30 transition-colors duration-500 h-full group active:scale-[0.98] sm:active:scale-100">
                      <Terminal size={32} className="text-violet-400 mb-6 group-hover:scale-110 transition-transform duration-500" />
                      <h3 className="text-2xl font-bold text-[var(--text-strong)] mb-3">Logic First</h3>
                      <p className="text-[var(--text-muted)] leading-relaxed">Building robust logic using Dart and C++ as the foundation for scalable, high-performance applications.</p>
                    </Tilt>
                  </Reveal>
                  <Reveal delay={300} className="sm:mt-12 h-full">
                    <Tilt className="bg-[var(--panel)] p-8 rounded-3xl border border-[var(--border-soft)] hover:border-cyan-500/30 transition-colors duration-500 h-full group active:scale-[0.98] sm:active:scale-100">
                      <Smartphone size={32} className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500" />
                      <h3 className="text-2xl font-bold text-[var(--text-strong)] mb-3">Pixel Perfect</h3>
                      <p className="text-[var(--text-muted)] leading-relaxed">Crafting flawless, responsive UIs in Flutter that look native and feel incredibly smooth on any device.</p>
                    </Tilt>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="py-24 lg:py-32 bg-[var(--bg-alt)] px-6 lg:px-12 relative scroll-mt-20">
            <div className="container mx-auto max-w-7xl">
              <Reveal>
                <h2 className="text-sm font-bold tracking-[0.3em] text-[var(--text-muted)] uppercase mb-12">Arsenal / Tech Stack</h2>
              </Reveal>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {[
                  { title: 'Mobile & Flutter', icon: <Layers size={24} />, skills: ['Flutter UI', 'Dart', 'State Management', 'Firebase / Supabase'], color: 'from-blue-500/20 to-violet-500/20', border: 'hover:border-violet-500/50' },
                  { title: 'Web Engineering', icon: <Globe size={24} />, skills: ['AI-Assisted Development', 'React 19', 'TypeScript', 'Vite', 'React Router'], color: 'from-cyan-500/20 to-emerald-500/20', border: 'hover:border-cyan-500/50' },
                  { title: 'Product Systems', icon: <Database size={24} />, skills: ['Tailwind CSS', 'Framer Motion', 'AI Integrations', 'E-commerce Flows'], color: 'from-fuchsia-500/20 to-pink-500/20', border: 'hover:border-fuchsia-500/50' }
                ].map((cat, i) => (
                  <Reveal key={i} delay={i * 150}>
                    <Tilt className={`relative p-8 rounded-3xl bg-[var(--panel)] border border-[var(--border-soft)] backdrop-blur-sm transition-all duration-500 ${cat.border} group h-full active:scale-[0.98] sm:active:scale-100`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="relative z-10 pointer-events-none">
                        <div className="w-14 h-14 rounded-full bg-[var(--button-bg-ghost)] border border-[var(--border)] flex items-center justify-center text-[var(--text-strong)] mb-8 group-hover:scale-110 transition-transform duration-500">
                          {cat.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[var(--text-strong)] mb-6">{cat.title}</h3>
                        <ul className="space-y-4">
                          {cat.skills.map((skill, j) => (
                            <li key={j} className="text-[var(--text-muted)] flex items-center gap-3 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-soft)] group-hover:bg-[var(--button-bg)] transition-colors duration-500"></span> {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Tilt>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="py-24 lg:py-32 px-6 lg:px-12 scroll-mt-20">
            <div className="container mx-auto max-w-7xl">
              <Reveal>
                <h2 className="text-5xl md:text-7xl font-black text-[var(--text-strong)] mb-20 tracking-tighter">SELECTED <br /><span className="text-[var(--text-soft)]">WORKS.</span></h2>
              </Reveal>

              <div className="space-y-32">
                {PROJECTS.map((project, index) => {
                  const isEven = index % 2 === 0;
                  const accent = ACCENT_STYLES[project.accent] || ACCENT_STYLES.violet;
                  const textOrder = isEven ? 'order-2 lg:order-1' : 'order-2';
                  const imageOrder = isEven ? 'order-1 lg:order-2' : 'order-1';
                  const textDirection = isEven ? 'left' : 'right';
                  const imageDirection = isEven ? 'right' : 'left';
                  const textPadding = isEven ? '' : 'lg:pl-12';

                  return (
                    <article key={project.title} className="grid lg:grid-cols-2 gap-12 items-center group">
                      <Reveal direction={textDirection} className={textOrder}>
                        <div className={`space-y-6 ${textPadding}`}>
                          <div className="flex flex-wrap gap-3">
                            {project.badges.map((badge) => {
                              const badgeClass = badge.tone === 'neutral'
                                ? NEUTRAL_BADGE
                                : (ACCENT_STYLES[badge.tone] ? ACCENT_STYLES[badge.tone].badge : NEUTRAL_BADGE);
                              return (
                                <span
                                  key={`${project.title}-${badge.label}`}
                                  className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${badgeClass}`}
                                >
                                  {badge.label}
                                </span>
                              );
                            })}
                          </div>
                          <h3 className={`text-4xl md:text-5xl font-black text-[var(--text-strong)] ${accent.heading} transition-colors duration-300 cursor-default`}>{project.title}</h3>
                          <p className="text-lg md:text-xl text-[var(--text-muted)] font-light leading-relaxed">
                            {project.description}
                          </p>
                          <a
                            href={project.cta.href}
                            onClick={(event) => {
                              if (!project.cta.external && project.cta.href.startsWith('#')) {
                                event.preventDefault();
                                scrollToSection(project.cta.href.replace('#', ''));
                              }
                            }}
                            {...(project.cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className={`inline-flex items-center gap-2 text-[var(--text-strong)] font-bold transition-colors pb-1 border-b border-[var(--border)] focus:outline-none active:scale-95 ${accent.cta}`}
                          >
                            {project.cta.label} <ArrowUpRight size={18} />
                          </a>
                        </div>
                      </Reveal>
                      <Reveal direction={imageDirection} className={imageOrder}>
                        <Tilt className="active:scale-[0.98] sm:active:scale-100 cursor-pointer">
                          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[var(--panel)] border border-[var(--border)] shadow-[0_30px_60px_var(--shadow)]">
                            <div className={`absolute inset-0 bg-gradient-to-tr ${accent.overlay} to-transparent z-10 mix-blend-overlay pointer-events-none transition-opacity duration-700 group-hover:opacity-0`}></div>
                            <img
                              src={project.image.src}
                              alt={project.image.alt}
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none"
                            />
                          </div>
                        </Tilt>
                      </Reveal>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
          <section id="education" className="py-24 lg:py-32 bg-[var(--bg-alt)] px-6 lg:px-12 scroll-mt-20">
            <div className="container mx-auto max-w-7xl">
              <Reveal>
                <h2 className="text-5xl md:text-6xl font-black text-[var(--text-strong)] mb-14 tracking-tighter">EDUCATION <span className="text-[var(--text-soft)]">& GROWTH.</span></h2>
              </Reveal>

              <div className="grid lg:grid-cols-12 gap-10">
                <Reveal className="lg:col-span-4">
                  <div className="space-y-6">
                    <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                      A strong academic base combined with continuous, product-focused learning. I keep sharpening the stack that shows up in real, shipped work.
                    </p>
                    <div className="flex items-center gap-3 text-[var(--text-soft)] text-sm uppercase tracking-[0.3em]">
                      <span className="w-6 h-px bg-[var(--border)]" />
                      Always learning
                    </div>
                  </div>
                </Reveal>
                <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
                  <Reveal delay={150}>
                    <Tilt className="h-full bg-[var(--panel)] p-8 rounded-3xl border border-[var(--border-soft)] transition-colors duration-500 hover:border-violet-500/40 active:scale-[0.98] sm:active:scale-100">
                      <div className="w-14 h-14 rounded-full bg-[var(--button-bg-ghost)] border border-[var(--border)] flex items-center justify-center text-[var(--text-strong)] mb-6">
                        <GraduationCap size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text-strong)] mb-2">Formal Education</h3>
                      <p className="text-[var(--text-muted)] font-medium">FSc - Computer Science</p>
                      <p className="text-sm text-[var(--text-soft)] mt-4 leading-relaxed">
                        Completed FSc in Computer Science from FG Degree College Peshawar.
                      </p>
                    </Tilt>
                  </Reveal>
                  <Reveal delay={250}>
                    <Tilt className="h-full bg-[var(--panel)] p-8 rounded-3xl border border-[var(--border-soft)] transition-colors duration-500 hover:border-cyan-500/40 active:scale-[0.98] sm:active:scale-100">
                      <div className="w-14 h-14 rounded-full bg-[var(--button-bg-ghost)] border border-[var(--border)] flex items-center justify-center text-[var(--text-strong)] mb-6">
                        <Code2 size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text-strong)] mb-2">Advanced Specialization</h3>
                      <p className="text-[var(--text-muted)] font-medium">DIT • Flutter • Prompt Engineering</p>
                      <p className="text-sm text-[var(--text-soft)] mt-4 leading-relaxed">
                        Completed DIT from Quaid E Azam Degree College Peshawar. Mastered Flutter Development and Prompt Engineering from various Professional Online Courses and academies like Coursera, Udemy, and others.
                      </p>
                    </Tilt>
                  </Reveal>
                  <Reveal delay={250}>
                    <Tilt className="h-full bg-[var(--panel)] p-8 rounded-3xl border border-[var(--border-soft)] transition-colors duration-500 hover:border-cyan-500/40 active:scale-[0.98] sm:active:scale-100">
                      <div className="w-14 h-14 rounded-full bg-[var(--button-bg-ghost)] border border-[var(--border)] flex items-center justify-center text-[var(--text-strong)] mb-6">
                        <GraduationCap size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text-strong)] mb-2">Islamic Education</h3>
                      <p className="text-[var(--text-muted)] font-medium">Hifz e Quran • Darsi Nizami</p>
                      <p className="text-sm text-[var(--text-soft)] mt-4 leading-relaxed">
                        Completed 7 yaers(Darjas) of Darsi Nizami and Hifz e Quran from Jamia Uloom Ul Quran Peshawar.
                      </p>
                    </Tilt>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-24 lg:py-32 px-6 max-[449px]:px-3 lg:px-12 scroll-mt-20">
            <div className="container mx-auto max-w-7xl">
              <Reveal>
                <div className="relative overflow-hidden rounded-[32px] max-[449px]:rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 max-[449px]:p-3 sm:p-8 lg:p-16 shadow-[0_30px_80px_var(--shadow)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/15 via-transparent to-cyan-500/15 opacity-70"></div>
                  <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 sm:gap-10 lg:gap-12">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-black text-[var(--text-strong)] mb-6 tracking-tight">
                        Let's build a product your users remember.
                      </h2>
                      <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-8">
                        I partner with founders and teams to ship fast, premium interfaces with clean architecture and measurable impact.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {['Flutter Apps', 'AI-Assisted Web developement', 'E-commerce', 'Marketing Sites'].map((pill) => (
                          <span
                            key={pill}
                            className="px-4 py-2 rounded-full border border-[var(--border-soft)] bg-[var(--button-bg-ghost)] text-xs font-semibold uppercase tracking-wider text-[var(--text-soft)]"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-5 sm:space-y-6 px-3 sm:px-0 max-[449px]:px-0">
                      <div className="w-full box-border rounded-3xl max-[449px]:rounded-2xl border border-[var(--border-soft)] bg-[var(--panel-strong)] px-6 max-[449px]:px-3 py-5 sm:p-7 lg:p-8 space-y-5 sm:space-y-6">
                        <div className="flex items-start gap-4 max-[450px]:gap-3">
                          <div className="w-12 h-12 shrink-0 rounded-full bg-[var(--button-bg-ghost)] border border-[var(--border)] flex items-center justify-center text-[var(--text-strong)] max-[450px]:w-10 max-[450px]:h-10">
                            <Phone size={20} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs uppercase tracking-widest text-[var(--text-soft)]">Contact</p>
                            <p className="text-base sm:text-lg font-semibold text-[var(--text-strong)] break-words">{CONTACT_EMAIL}</p>
                            <p className="text-sm text-[var(--text-muted)]">Best for project briefs and timelines.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 max-[450px]:gap-3">
                          <div className="w-12 h-12 shrink-0 rounded-full bg-[var(--button-bg-ghost)] border border-[var(--border)] flex items-center justify-center text-[var(--text-strong)] max-[450px]:w-10 max-[450px]:h-10">
                            <MapPin size={20} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs uppercase tracking-widest text-[var(--text-soft)]">Availability</p>
                            <p className="text-base sm:text-lg font-semibold text-[var(--text-strong)]">Remote - Worldwide</p>
                            <p className="text-sm text-[var(--text-muted)]">Flexible across time zones.</p>
                          </div>
                        </div>
                      </div>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-bold text-[var(--button-text)] bg-[var(--button-bg)] rounded-full hover:shadow-[0_0_30px_var(--glow)] transition-all focus:outline-none focus:ring-2 focus:ring-violet-500/40 active:scale-95"
                      >
                        Start a Project <ArrowUpRight size={18} />
                      </a>
                      <p className="text-xs text-[var(--text-soft)] text-center">Response time usually within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="border-t border-[var(--border)] bg-[var(--panel-strong)] py-10 px-6 lg:px-12">
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-[var(--text-soft)]">© {currentYear} Salman Ahmad. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] text-sm font-semibold text-[var(--text-strong)] hover:border-violet-500 hover:text-violet-500 transition-colors"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] text-sm font-semibold text-[var(--text-strong)] hover:border-cyan-500 hover:text-cyan-500 transition-colors"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </MotionContext.Provider>
  );
};

export default App;
