import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'noctua',
    category: 'web',
    featured: true,
    image: '/noctua.png',
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
    id: 'robotics-arm',
    category: 'hardware',
    image: '/robotics-arm.png',
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
    image: '/spiderbot.png',
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
    image: '/project3.png',
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
  {
    id: 'smars',
    category: 'hardware',
    image: '/smars.png',
    alt: 'SMARS Line Following Robot',
    tag: 'Embedded Systems / Robotics',
    tagVariant: 'hardware',
    title: 'SMARS Line Following Robot',
    description:
      'Developed a SMARS-based autonomous line-following robot using Arduino Uno, L298P motor driver, GA12-N20 DC motors, and three IR line tracking sensors. The system processes real-time sensor input to detect and follow a predefined path by dynamically controlling motor movement. The robot is powered by a 9V battery and housed in a custom 3D-printed chassis.',
    techStack: ['Arduino Uno', 'C++', 'Robotics integration', '3D Assembly'],
    links: [
      {
        href: 'https://github.com/Kenjiroooo/School-output-and-practice-coding-projects/tree/main/SMARS%20Line%20Following%20Robot',
        label: 'Source Code',
        icon: 'fa-brands fa-github',
      },
    ],
  },
];
