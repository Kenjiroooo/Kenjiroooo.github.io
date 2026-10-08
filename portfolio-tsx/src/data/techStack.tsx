import type { TechItem } from '../types';

import { 
  SiEspressif, SiMicropython, SiDeepseek, SiClaude
} from 'react-icons/si';

import { VscJson } from 'react-icons/vsc'; // For REST API

const GeminiLogo = () => (
  <img src="/Gemini.png" alt="Gemini Logo" style={{ width: '1em', height: '1em' }} />
);

const AntigravityLogo = () => (
  <img src="/antigravity-logo.png" alt="Antigravity Logo" style={{ width: '1em', height: '1em' }} />
);

export const techStack: TechItem[] = [
  // ================= LANGUAGES =================
  { id: 'python', name: 'Python', category: 'languages', icon: <i className="devicon-python-plain colored"></i>, brandColor: '#3776AB' },
  { id: 'javascript', name: 'JavaScript', category: 'languages', icon: <i className="devicon-javascript-plain colored"></i>, brandColor: '#F7DF1E' },
  { id: 'cpp', name: 'C++', category: 'languages', icon: <i className="devicon-cplusplus-plain colored"></i>, brandColor: '#00599C' },
  { id: 'html5', name: 'HTML5', category: 'languages', icon: <i className="devicon-html5-plain colored"></i>, brandColor: '#E34F26' },
  { id: 'css3', name: 'CSS3', category: 'languages', icon: <i className="devicon-css3-plain colored"></i>, brandColor: '#1572B6' },
  { id: 'dart', name: 'Dart', category: 'languages', icon: <i className="devicon-dart-plain colored"></i>, brandColor: '#0175C2' },

  // ================= WEB & FRAMEWORKS =================
  { id: 'react', name: 'React', category: 'web', icon: <i className="devicon-react-original colored"></i>, brandColor: '#61DAFB' },
  { id: 'nextjs', name: 'Next.js', category: 'web', icon: <i className="devicon-nextjs-plain"></i>, brandColor: '#ffffff' }, 
  { id: 'nodejs', name: 'Node.js', category: 'web', icon: <i className="devicon-nodejs-plain colored"></i>, brandColor: '#339933' },
  { id: 'firebase', name: 'Firebase', category: 'web', icon: <i className="devicon-firebase-plain colored"></i>, brandColor: '#FFCA28' },
  { id: 'rest-api', name: 'REST API', category: 'web', icon: <VscJson />, brandColor: '#007ACC' },
  { id: 'flutter', name: 'Flutter', category: 'web', icon: <i className="devicon-flutter-plain colored"></i>, brandColor: '#02569B' },

  // ================= AI =================
  { id: 'gemini', name: 'Google Gemini', category: 'ai', icon: <GeminiLogo />, brandColor: '#8E75B2' },
  { id: 'ai-studio', name: 'Google AI Studio', category: 'ai', icon: <i className="devicon-google-plain colored"></i>, brandColor: '#4285F4' },
  { id: 'deepseek', name: 'DeepSeek', category: 'ai', icon: <SiDeepseek />, brandColor: '#4D8AF0' },
  { id: 'claude', name: 'Claude', category: 'ai', icon: <SiClaude />, brandColor: '#CC8C68' },

  // ================= EMBEDDED =================
  { id: 'arduino', name: 'Arduino', category: 'embedded', icon: <i className="devicon-arduino-plain colored"></i>, brandColor: '#00979D' },
  { id: 'esp32', name: 'ESP32', category: 'embedded', icon: <SiEspressif />, brandColor: '#E7352C' },
  { id: 'raspberrypi', name: 'Raspberry Pi', category: 'embedded', icon: <i className="devicon-raspberrypi-plain colored"></i>, brandColor: '#C51A4A' },
  { id: 'micropython', name: 'MicroPython', category: 'embedded', icon: <SiMicropython />, brandColor: '#ffffff' }, 

  // ================= TOOLS =================
  { id: 'git', name: 'Git', category: 'tools', icon: <i className="devicon-git-plain colored"></i>, brandColor: '#F05032' },
  { id: 'github', name: 'GitHub', category: 'tools', icon: <i className="devicon-github-original"></i>, brandColor: '#ffffff' },
  { id: 'vscode', name: 'VS Code', category: 'tools', icon: <i className="devicon-vscode-plain colored"></i>, brandColor: '#007ACC' },
  { id: 'antigravity', name: 'Antigravity', category: 'tools', icon: <AntigravityLogo />, brandColor: '#FF9800' },
];
