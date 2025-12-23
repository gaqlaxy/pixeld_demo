import { Project, Service, NavItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neon Horizon",
    category: "E-Commerce Experience",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
    description: "A futuristic shopping experience featuring 3D product previews and AI-driven recommendations.",
    client: "FutureRetail Inc.",
    role: "Full Stack Development, 3D Modeling",
    longDescription: "Neon Horizon redefines the online shopping experience by merging high-fidelity 3D assets with seamless purchasing flows. We utilized WebGL to allow users to inspect products in real-time, resulting in a 40% increase in conversion rates.",
    gallery: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Apex Finance",
    category: "FinTech Dashboard",
    image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop",
    year: "2023",
    description: "Real-time data visualization platform for high-frequency trading firms.",
    client: "Apex Capital",
    role: "Frontend Engineering, UX Design",
    longDescription: "Apex Finance required a dashboard capable of handling millions of data points per second without stutter. We built a custom rendering engine using Canvas API to ensure 60fps performance even during market volatility.",
    gallery: [
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Lumina Gallery",
    category: "Art Portfolio",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
    description: "Immersive virtual gallery space for contemporary digital artists.",
    client: "Lumina Foundation",
    role: "Creative Direction, Development",
    longDescription: "A digital sanctuary for art. Lumina Gallery uses smooth scroll jacking and ambient audio to create a contemplative space for viewing digital artworks. The layout adapts fluidly to any screen size, treating the interface itself as a frame.",
    gallery: [
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Echo SaaS",
    category: "Productivity Tool",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    year: "2023",
    description: "Collaborative workspace tool focusing on audio-first communication.",
    client: "Echo Systems",
    role: "Product Design, React Development",
    longDescription: "Echo SaaS needed to break the mold of sterile productivity tools. We injected personality through micro-interactions and a vibrant color palette, making the mundane task of project management feel like play.",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Creative Development",
    description: "We build award-winning websites using WebGL, React, and cutting-edge animation libraries.",
    icon: "code"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "User-centric design that balances aesthetic beauty with functional clarity.",
    icon: "pen-tool"
  },
  {
    id: 3,
    title: "Brand Strategy",
    description: "Defining your digital voice and visual identity to stand out in a crowded market.",
    icon: "target"
  },
  {
    id: 4,
    title: "Performance Optimization",
    description: "Ensuring your digital products run at 60fps across all devices.",
    icon: "zap"
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];