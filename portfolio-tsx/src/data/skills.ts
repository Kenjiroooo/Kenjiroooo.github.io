import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'fa-solid fa-code',
    items: [
      { icon: 'fa-brands fa-python', label: 'Python' },
      { icon: 'fa-brands fa-js', label: 'JavaScript' },
      { icon: 'fa-solid fa-c', label: 'C / C++' },
      { icon: 'fa-brands fa-java', label: 'Java' },
    ],
  },
  {
    id: 'embedded',
    title: 'Embedded & Hardware',
    icon: 'fa-solid fa-microchip',
    items: [
      { icon: 'fa-solid fa-microchip', label: 'Arduino / ESP32' },
      { icon: 'fa-solid fa-robot', label: 'Robotics Control' },
      { icon: 'fa-solid fa-wifi', label: 'IoT Architecture' },
      { icon: 'fa-solid fa-print', label: '3D Printing / CAD' },
    ],
  },
  {
    id: 'ai-web',
    title: 'AI & Web Tools',
    icon: 'fa-solid fa-laptop-code',
    items: [
      { icon: 'fa-solid fa-brain', label: 'AI Integration' },
      { icon: 'fa-brands fa-react', label: 'React ecosystem' },
      { icon: 'fa-brands fa-node-js', label: 'Node.js / APIs' },
      { icon: 'fa-solid fa-database', label: 'SQL / NoSQL' },
    ],
  },
];
