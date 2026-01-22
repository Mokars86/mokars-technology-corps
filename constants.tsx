
import { Project, ProjectStatus, TeamMember, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'AgriSmart Hub',
    status: ProjectStatus.COMPLETED,
    description: 'An AI-powered platform for small-scale farmers to predict crop yields.',
    techStack: ['Python', 'TensorFlow', 'React'],
    impact: 'Increased yield for 500+ local farmers by 30%.',
    imageUrl: 'https://picsum.photos/seed/agri/800/600',
    progress: 100,
  },
  {
    id: '2',
    name: 'HealthBridge Mobile',
    status: ProjectStatus.ONGOING,
    description: 'Telemedicine application connecting rural patients with urban doctors.',
    techStack: ['Flutter', 'Node.js', 'PostgreSQL'],
    impact: 'Aims to reduce travel time for medical consultations by 80%.',
    imageUrl: 'https://picsum.photos/seed/health/800/600',
    progress: 65,
  },
  {
    id: '3',
    name: 'SolarGrid IoT',
    status: ProjectStatus.ONGOING,
    description: 'Smart monitoring system for community-owned solar mini-grids.',
    techStack: ['C++', 'MQTT', 'React Native'],
    impact: 'Optimizing energy distribution for 3 rural villages.',
    imageUrl: 'https://picsum.photos/seed/solar/800/600',
    progress: 40,
  },
  {
    id: '4',
    name: 'FinTech Inclusion',
    status: ProjectStatus.UPCOMING,
    description: 'Decentralized micro-loan platform for young entrepreneurs.',
    techStack: ['Solidity', 'Web3.js', 'Next.js'],
    impact: 'Empowering 1000+ youth with accessible capital.',
    imageUrl: 'https://picsum.photos/seed/fintech/800/600',
    progress: 0,
  },
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Moussa Kars',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in African tech development.',
    imageUrl: 'https://picsum.photos/seed/moussa/400/400',
  },
  {
    id: '2',
    name: 'Amina Diallo',
    role: 'Head of Engineering',
    bio: 'Software architect focused on scalable mobile solutions.',
    imageUrl: 'https://picsum.photos/seed/amina/400/400',
  },
  {
    id: '3',
    name: 'Kwame Osei',
    role: 'Project Manager',
    bio: 'Specialist in bridging technology with social impact.',
    imageUrl: 'https://picsum.photos/seed/kwame/400/400',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How AI is Transforming Agriculture in Sub-Saharan Africa',
    excerpt: 'Exploring the impact of predictive analytics on small-scale farming operations.',
    date: 'Oct 12, 2024',
    category: 'Technology',
    imageUrl: 'https://picsum.photos/seed/blog1/600/400',
  },
  {
    id: '2',
    title: 'Recruitment Drive: Join Our Winter Internship Program',
    excerpt: 'Mokars is looking for the brightest young minds to join our dev team.',
    date: 'Nov 05, 2024',
    category: 'Careers',
    imageUrl: 'https://picsum.photos/seed/blog2/600/400',
  },
  {
    id: '3',
    title: 'Building Resilience with Solar IoT Systems',
    excerpt: 'Case study on our latest energy project in the Sahel region.',
    date: 'Nov 20, 2024',
    category: 'Case Study',
    imageUrl: 'https://picsum.photos/seed/blog3/600/400',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah N.',
    role: 'NGO Partner',
    quote: 'Mokars Technology Corps delivered substantially more than we expected. Their commitment to social impact is genuine.',
    imageUrl: 'https://picsum.photos/seed/sarah/200/200',
  },
  {
    id: '2',
    name: 'David K.',
    role: 'Former Intern',
    quote: 'The mentorship I received at Mokars launched my career. I am now a Senior Dev at a major fintech.',
    imageUrl: 'https://picsum.photos/seed/david/200/200',
  },
  {
    id: '3',
    name: 'Ministry of Agriculture',
    role: 'Govt Partner',
    quote: 'The AgriSmart Hub has revolutionized how we collect data from rural farmers.',
    imageUrl: 'https://picsum.photos/seed/gov/200/200',
  },
];
