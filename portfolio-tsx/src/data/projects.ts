import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'noctua',
    category: 'web',
    featured: true,
    image: '/noctua.webp',
    alt: 'Noctua: Your AI Student Buddy',
    tag: 'AI-Powered Web Application',
    tagVariant: 'default',
    title: 'Noctua: Your AI Student Buddy',
    description:
      'Meet Noctua: A brilliant, perpetually annoyed, and begrudgingly helpful owl AI study assistant that turns study sessions from a chore into an interactive experience. Built with a modern, responsive web application architecture, Noctua combines advanced language model APIs, secure cloud syncing, and reactive micro-interactions.',
    techStack: ['Next.js', 'LLM APIs', 'Cloud Sync', 'Capacitor'],
    links: [
      {
        href: 'https://ai-study-buddy-clean-nextjs.vercel.app/',
        label: 'Visit Website',
        icon: 'fa-solid fa-arrow-up-right-from-square',
      },
      {
        href: 'https://github.com/Kenjiroooo',
        label: 'Source Code',
        icon: 'fa-brands fa-github',
      },
    ],
  },
  {
    id: 'owl-assistant',
    category: 'web',
    image: '/owl.jpg',
    alt: 'OWL: AI-Integrated Student Assistant Prototype',
    tag: 'AI-Powered Assistant',
    tagVariant: 'default',
    title: 'OWL: AI-Integrated Student Assistant Prototype',
    description: 'A full-stack AI chatbot prototype built to modernize student support at Universidad de Dagupan. Powered by advanced Large Language Models (LLMs) and a centralized knowledge base, this system serves as an interactive platform for answering frequently asked questions, guiding campus navigation, and streamlining administrative assistance.',
    techStack: ['LLMs', 'Chatbot', 'Full-Stack'],
    links: [
      {
        href: 'https://github.com/Kenjiroooo/OWL---AI-Integrated-Student-Assistant',
        label: 'Source Code',
        icon: 'fa-brands fa-github',
      }
    ],
  },
  {
    id: 'robotics-arm',
    category: 'hardware',
    image: '/robotics-arm.webp',
    alt: '3D-Printed Robotic Arm Controller',
    tag: 'Embedded Systems / Mechanical Design',
    tagVariant: 'hardware',
    title: '3D-Printed Bionic Robotic Arm',
    description:
      'Engineered a fully articulated robotic arm controlled by a custom Arduino-based firmware. Integrated 4 servo motors mapping directly to joystick inputs for real-time kinematic control. The project demonstrates strong proficiency in low-level embedded C++, circuit design, and mechanical troubleshooting.',
    techStack: ['Arduino C++', 'Servo Kinetics', 'Circuit Design', '3D Assembly'],
    links: [
      {
        href: 'https://github.com/Kenjiroooo/School-output-and-practice-coding-projects/tree/main/Robotic%20Arm',
        label: 'Source Code',
        icon: 'fa-brands fa-github',
      },
    ],
  },
  {
    id: 'gagambot',
    category: 'hardware',
    image: '/spiderbot.webp',
    alt: 'Spider Bot (GAGAMBOT)',
    tag: 'Robotics / Hardware Integration',
    tagVariant: 'hardware',
    title: 'Spider Bot (GAGAMBOT)',
    description:
      'Developed an autonomous, multi-legged Spider Bot (GAGAMBOT) powered by an Arduino Nano controlling 12 MG90 servos. The system integrates a Raspberry Pi Zero 2W with a RPi Cam for computer vision/object tracking, operating via a logic shifter for safe UART communication. The robot is housed in custom 3D-printed parts and powered by two 18650 batteries using an XL4015 buck converter for voltage regulation.',
    techStack: ['Arduino Nano', 'RPi Zero 2W', '3D Printing'],
    links: [
      {
        href: 'https://github.com/Kenjiroooo/GAGAMBOT',
        label: 'Repository',
        icon: 'fa-brands fa-github',
      },
    ],
  },
  {
    id: 'bloodhunt-monopoly',
    category: 'web',
    image: '/project3.webp',
    alt: 'Bloodhunt Monopoly',
    tag: 'Full-Stack Web Game',
    tagVariant: 'default',
    title: 'Bloodhunt Monopoly',
    description:
      'Bloodhunt Monopoly is a custom-built browser game developed with HTML, CSS, and JavaScript, powered by Firebase Database and Hosting. It features a unique themed interface, interactive gameplay elements, and live web deployment, highlighting my skills in frontend design, game logic, and cloud integration.',
    techStack: ['HTML/CSS/JS', 'Firebase'],
    links: [
      {
        href: 'https://sakamoto-bloodhunt-monopoly.web.app/',
        label: 'Visit Website',
        icon: 'fa-solid fa-arrow-up-right-from-square',
      },
      {
        href: 'https://github.com/Kenjiroooo/Bloodhunt-monopoly',
        label: 'Source Code',
        icon: 'fa-brands fa-github',
      },
    ],
  },
];
