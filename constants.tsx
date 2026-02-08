
import { ServiceListing, BlogPost, BlogComment, JobPosting } from './types';

export const CATEGORIES = [
  'Design', 
  'Development', 
  'Writing', 
  'Marketing', 
  'Video', 
  'Music', 
  'AI/ML', 
  'Mobile Apps', 
  'SEO', 
  'Illustration', 
  'Data Science',
  'Voice Over'
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Looking for the right design workflow',
    author: 'Willin0503',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Willin',
    category: 'Design Systems',
    content: "So I haven't used a professional design portal before and have tried looking at other recommendations but wanted something more specific to myself and what I want from the workflow:\n\nI design high-fidelity prototypes, run user testing, and manage handoffs.\n\nIdeally I want a system that is a bit rugged as in it won't get damaged from large file uploads or complex layers. Reliable version control and real-time syncing are a must. I am cautious about pricing too.\n\nIf anyone can help it'd be greatly appreciated!",
    timestamp: '54m ago',
    votes: 42,
    commentCount: 4
  },
  {
    id: 'b2',
    title: 'The future of n8n in agency automation',
    author: 'AutoKing',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Auto',
    category: 'Automation',
    content: "We've been scaling our operations using n8n and the results are staggering. Is anyone else seeing a massive shift towards node-based logic over traditional coding for internal tools?",
    timestamp: '2h ago',
    votes: 128,
    commentCount: 15
  },
  {
    id: 'b3',
    title: 'Best practices for React 19 server components',
    author: 'DevGuru',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dev',
    category: 'Development',
    content: "With React 19 around the corner, how are you guys handling the transition? The new server components paradigm is changing everything about how we structure our elite marketplace nodes.",
    timestamp: '5h ago',
    votes: 89,
    commentCount: 23
  }
];

export const MOCK_BLOG_COMMENTS: BlogComment[] = [
  {
    id: 'c1',
    author: 'Center-88',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Center88',
    content: "Sounds like the Cenner Protocol 3.0! It handles massive payloads and has built-in versioning for elite creators.",
    timestamp: '49m ago',
    votes: 15,
    replies: [
      {
        id: 'c2',
        author: 'Willin0503',
        authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Willin',
        content: "I think that one is a bit above my price range 😅",
        timestamp: '44m ago',
        votes: 8,
        replies: [
          {
            id: 'c3',
            author: 'Center-88',
            authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Center88',
            content: "Look at the Starter Pro Gen 2. Can save a good chunk of change on those right now.",
            timestamp: '27m ago',
            votes: 5
          }
        ]
      }
    ]
  },
  {
    id: 'c4',
    author: 'DesignWizard',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wizard',
    content: "Have you considered the Adobe-Figma bridge? It's expensive but fits the 'rugged' requirement you're looking for.",
    timestamp: '15m ago',
    votes: 2
  }
];

export const MOCK_LISTINGS: ServiceListing[] = [
  {
    id: '1',
    title: 'High-End Brand Identity Design',
    description: 'I will create a comprehensive brand identity including logos, typography, and color palettes that resonate with your target audience. Professional assets delivered in 4K resolution.',
    category: 'Design',
    price: 450,
    deliveryTime: '5 Days',
    freelancerId: 'f1',
    freelancerName: 'Alex Rivera',
    freelancerAvatar: 'https://picsum.photos/seed/alex/200',
    rating: 4.9,
    reviewsCount: 128,
    imageUrl: 'https://picsum.photos/seed/design1/800/600',
  },
  {
    id: '2',
    title: 'Next.js & Tailwind Expert Development',
    description: 'Build your dream web application with the latest tech stack. SEO optimized, responsive, and blazing fast performance is guaranteed.',
    category: 'Development',
    price: 1200,
    deliveryTime: '14 Days',
    freelancerId: 'f2',
    freelancerName: 'Sarah Chen',
    freelancerAvatar: 'https://picsum.photos/seed/sarah/200',
    rating: 5.0,
    reviewsCount: 45,
    imageUrl: 'https://picsum.photos/seed/dev1/800/600',
  },
  {
    id: '3',
    title: 'Professional SEO Copywriting',
    description: 'Engaging content that drives traffic and converts. I specialize in tech, lifestyle, and business blogs with 10 years of experience.',
    category: 'Writing',
    price: 85,
    deliveryTime: '2 Days',
    freelancerId: 'f3',
    freelancerName: 'Jordan Smith',
    freelancerAvatar: 'https://picsum.photos/seed/jordan/200',
    rating: 4.8,
    reviewsCount: 89,
    imageUrl: 'https://picsum.photos/seed/write1/800/600',
  },
  {
    id: '4',
    title: 'Social Media Growth Strategy',
    description: 'Complete audit and strategy for your Instagram and TikTok channels. Includes content calendar and engagement tactics.',
    category: 'Marketing',
    price: 300,
    deliveryTime: '7 Days',
    freelancerId: 'f4',
    freelancerName: 'Emma Watson',
    freelancerAvatar: 'https://picsum.photos/seed/emma/200',
    rating: 4.7,
    reviewsCount: 62,
    imageUrl: 'https://picsum.photos/seed/market1/800/600',
  },
  {
    id: '5',
    title: 'Cinematic Video Editing & Color Grading',
    description: 'Transform your raw footage into a masterpiece. Specializing in YouTube content and corporate advertisements.',
    category: 'Video',
    price: 250,
    deliveryTime: '4 Days',
    freelancerId: 'f5',
    freelancerName: 'Michael Baye',
    freelancerAvatar: 'https://picsum.photos/seed/mike/200',
    rating: 4.9,
    reviewsCount: 156,
    imageUrl: 'https://picsum.photos/seed/video1/800/600',
  },
  {
    id: '6',
    title: 'Custom Electronic Music Production',
    description: 'I will produce a unique track for your game, podcast, or video. Full commercial rights included.',
    category: 'Music',
    price: 150,
    deliveryTime: '3 Days',
    freelancerId: 'f6',
    freelancerName: 'DJ Neon',
    freelancerAvatar: 'https://picsum.photos/seed/neon/200',
    rating: 4.6,
    reviewsCount: 34,
    imageUrl: 'https://picsum.photos/seed/music1/800/600',
  },
  {
    id: '7',
    title: 'Advanced AI Image Generation Model Training',
    description: 'Train a custom Stable Diffusion or LoRA model on your specific art style or character. High-quality output and consultation.',
    category: 'AI/ML',
    price: 800,
    deliveryTime: '10 Days',
    freelancerId: 'f7',
    freelancerName: 'Dr. Neural',
    freelancerAvatar: 'https://picsum.photos/seed/neural/200',
    rating: 4.9,
    reviewsCount: 22,
    imageUrl: 'https://picsum.photos/seed/ai1/800/600',
  },
  {
    id: '8',
    title: 'iOS & Android E-commerce App Development',
    description: 'Full-stack mobile development using React Native. Includes payment gateway integration and push notifications.',
    category: 'Mobile Apps',
    price: 2500,
    deliveryTime: '30 Days',
    freelancerId: 'f8',
    freelancerName: 'Mobile Maestro',
    freelancerAvatar: 'https://picsum.photos/seed/mobile/200',
    rating: 5.0,
    reviewsCount: 18,
    imageUrl: 'https://picsum.photos/seed/mobile1/800/600',
  }
];

export const MOCK_JOBS: JobPosting[] = [
  {
    id: 'j1',
    title: 'Full-Scale FinTech Rebranding',
    description: 'We are seeking a top-tier design node to oversee a complete visual overhaul of our investment platform. Must have experience with high-fidelity UI and complex design systems.',
    category: 'Design',
    budgetRange: '€5,000 - €8,000',
    clientId: 'c1',
    clientName: 'Nexus Finance',
    clientAvatar: 'https://picsum.photos/seed/client1/100',
    postedAt: '2h ago',
    proposalsCount: 12,
    urgency: 'high'
  },
  {
    id: 'j2',
    title: 'Custom n8n Workflow Architecture',
    description: 'Need an automation architect to build a multi-node workflow connecting HubSpot, Stripe, and a custom PostgreSQL database. Efficiency is paramount.',
    category: 'AI/ML',
    budgetRange: '€2,000 - €3,500',
    clientId: 'c2',
    clientName: 'ScaleSync Inc.',
    clientAvatar: 'https://picsum.photos/seed/client2/100',
    postedAt: '5h ago',
    proposalsCount: 8,
    urgency: 'medium'
  },
  {
    id: 'j3',
    title: 'Cyberpunk Cinematic Trailer',
    description: 'Looking for a video editor and colorist to polish a 30-second teaser for an upcoming indie game. Raw 4K footage provided.',
    category: 'Video',
    budgetRange: '€1,500 - €2,500',
    clientId: 'c3',
    clientName: 'Neon Byte Games',
    clientAvatar: 'https://picsum.photos/seed/client3/100',
    postedAt: '1d ago',
    proposalsCount: 24,
    urgency: 'high'
  },
  {
    id: 'j4',
    title: 'Technical Whitepaper Copywriting',
    description: 'Seeking a writer with deep knowledge of Zero-Knowledge Proofs and Layer 2 scaling solutions to author a 15-page technical documentation.',
    category: 'Writing',
    budgetRange: '€800 - €1,200',
    clientId: 'c4',
    clientName: 'BlockCore Solutions',
    clientAvatar: 'https://picsum.photos/seed/client4/100',
    postedAt: '3h ago',
    proposalsCount: 4,
    urgency: 'low'
  }
];
