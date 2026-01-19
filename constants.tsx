
import React from 'react';
import { SkillGroup, Project, Experience, Education, Testimonial } from './types';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "MERN Stack",
    items: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "REST APIs"]
  },
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "HTML5", "CSS3 / Sass"]
  },
  {
    category: "CMS & Platforms",
    items: ["WordPress (Full-stack)", "Headless CMS", "WooCommerce"]
  },
  {
    category: "Motion & Animation",
    items: ["GSAP (GreenSock)", "Locomotive Scroll", "Lenis"]
  },
  {
    category: "Interface Design",
    items: ["Tailwind CSS", "Material UI", "Styled Components", "Responsive Design", "Bootstrap"]
  },
  {
    category: "Tools",
    items: ["GitHub", "Netlify", "Photoshop"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Dark Saas Landing Page",
    year: "2024",
    description: "A high-performance landing page designed for maximum conversion and sleek dark aesthetics.",
    improvements: [
      "Enhanced user experience by 40%",
      "Improved site speed by 50%",
      "Increased mobile traffic by 35%"
    ],
    imageUrl: "https://picsum.photos/seed/saas1/1200/800",
    liveUrl: "#"
  },
  {
    title: "AI Startup Platform",
    year: "2023",
    description: "Modern dashboard and landing page for an AI-driven SEO automation tool.",
    improvements: [
      "Boosted conversion rate by 25%",
      "Reduced bounce rate by 15%",
      "Implemented server-side rendering for SEO"
    ],
    imageUrl: "https://picsum.photos/seed/ai2/1200/800",
    liveUrl: "#"
  },
  {
    title: "Light Modern Portfolio",
    year: "2022",
    description: "A clean, minimalist approach to portfolio design with fluid typography.",
    improvements: [
      "Optimized assets for 90+ Lighthouse score",
      "Accessible design system implementation",
      "Cross-browser compatibility (100%)"
    ],
    imageUrl: "https://picsum.photos/seed/port3/1200/800",
    liveUrl: "#"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Marketing Manager",
    company: "Asiatic Trade Marketing Services Ltd",
    location: "Dhaka",
    period: "2024 - Present",
    responsibilities: [
      "Strategic Team Leadership: Directing a cross-functional team to execute high-impact marketing services.",
      "Performance Mentorship: Actively mentoring team members through regular feedback sessions.",
      "Cross-functional execution: Ensuring all project deliverables meet strict quality standards."
    ]
  },
  {
    role: "Call Center Executive",
    company: "IELTS Doctor & EDU WIDE",
    location: "Dhaka",
    period: "2023 - 2024",
    responsibilities: [
      "Customer service excellence: Committed to providing world-class service.",
      "Active listening & CRM handling: Turning frustrated callers into loyal customers.",
      "Conflict resolution: Ensuring every interaction is documented accurately."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "BSc in CSE",
    institution: "Dhaka International University",
    period: "2021 - 2025"
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Brahmanbaria Polytechnic Institute",
    period: "2016 - 2020"
  }
];

export const EXPERTISE_AREAS = [
  "Design Thinking",
  "Web Development",
  "Leadership",
  "Problem Solving",
  "Management Skills",
  "Analysing & Management Tools"
];

export const LANGUAGES = [
  { name: "Bangla", level: 100 },
  { name: "English", level: 85 },
  { name: "Hindi", level: 70 }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Turner",
    role: "Marketing Manager @ TechStartups",
    content: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Olivia Green",
    role: "Head of Design @ GreenLeaf",
    content: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined.",
    avatar: "https://i.pravatar.cc/150?u=olivia"
  }
];
