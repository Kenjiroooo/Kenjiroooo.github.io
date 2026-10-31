import type { Education, Certification } from '../types';

export const educationList: Education[] = [
  {
    id: 'ud-2024',
    period: '2024 - Current',
    degree: 'B.S. Computer Engineering',
    institution: 'Universidad de Dagupan',
    location: 'Dagupan City, Pangasinan',
    description:
      'Focusing on embedded systems design, software engineering lifecycle, and advanced networking. Maintaining strong academic standing while prototyping independent robotics applications.',
  },
  {
    id: 'ieti-2022',
    period: '2022 - 2024',
    degree: 'B.S. Computer Engineering',
    institution: 'International Electronics and Technical Institute, Inc',
    location: 'San Pedro City, Laguna',
    description:
      'Built foundational knowledge in electronics, programming, and technical problem-solving.',
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    image: '/certificate.webp',
    alt: 'freeCodeCamp Responsive Web Design Developer Certification awarded to Kenji D. Sakamoto',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'April 30, 2026',
    credentialUrl: 'https://freecodecamp.org/certification/kenjiro/responsive-web-design-v9',
  },
  {
    id: 'cert-2',
    image: '/certificate2.webp',
    alt: 'freeCodeCamp Scientific Computing with Python Developer Certification awarded to Kenji D. Sakamoto',
    title: 'Scientific Computing with Python',
    issuer: 'freeCodeCamp',
    date: 'October 27, 2025',
    credentialUrl: 'https://freecodecamp.org/certification/kenjiro/scientific-computing-with-python-v7',
  },
  {
    id: 'cert-python',
    image: '/pythoncertificate.webp',
    alt: 'freeCodeCamp Python Developer Certification awarded to Kenji D. Sakamoto',
    title: 'Python',
    issuer: 'freeCodeCamp',
    date: 'August 5, 2026',
    credentialUrl: 'https://freecodecamp.org/certification/kenjiro/python-v9',
  },
  {
    id: 'cert-cisco',
    image: '/pythoncisco.png',
    alt: 'Cisco Networking Academy Python Essentials 1 certificate awarded to Kenji Sakamoto',
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'September 21, 2026',
  },
];
