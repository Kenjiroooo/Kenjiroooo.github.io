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
    alt: 'Certificate',
  },
  {
    id: 'cert-2',
    image: '/certificate2.webp',
    alt: 'Certificate',
  },
  {
    id: 'cert-python',
    image: '/pythoncertificate.webp',
    alt: 'Python Certificate',
  },
];
