import type { TechItem } from '../types';

import { 
  SiEspressif, SiMicropython, SiDeepseek, SiClaude
} from 'react-icons/si';

import { VscJson } from 'react-icons/vsc'; // For REST API
import { FaBrain } from 'react-icons/fa6'; // For Gen AI, CV
import { LuBrainCircuit } from 'react-icons/lu'; // Alternative AI icon

const GeminiLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '1em', height: '1em' }}>
    <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" fill="url(#gemini-grad)" />
    <defs>
      <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4285F4" />
        <stop offset="33%" stopColor="#EA4335" />
        <stop offset="66%" stopColor="#FBBC05" />
        <stop offset="100%" stopColor="#34A853" />
      </linearGradient>
    </defs>
  </svg>
);

const AntigravityLogo = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '1em', height: '1em', padding: '0.1em' }}>
    <path d="M 15 90 Q 50 -20 85 90" stroke="url(#ag-grad)" strokeWidth="18" strokeLinecap="round" />
    <defs>
      <linearGradient id="ag-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1E88E5" />
        <stop offset="50%" stopColor="#43A047" />
        <stop offset="100%" stopColor="#FF9800" />
      </linearGradient>
    </defs>
  </svg>
);

export const techStack: TechItem[] = [
  // ================= LANGUAGES =================
  { id: 'python', name: 'Python', category: 'languages', icon: <i className="devicon-python-plain colored"></i>, brandColor: '#3776AB' },
  { id: 'javascript', name: 'JavaScript', category: 'languages', icon: <i className="devicon-javascript-plain colored"></i>, brandColor: '#F7DF1E' },
  { id: 'cpp', name: 'C++', category: 'languages', icon: <i className="devicon-cplusplus-plain colored"></i>, brandColor: '#00599C' },
  { id: 'html5', name: 'HTML5', category: 'languages', icon: <i className="devicon-html5-plain colored"></i>, brandColor: '#E34F26' },
  { id: 'css3', name: 'CSS3', category: 'languages', icon: <i className="devicon-css3-plain colored"></i>, brandColor: '#1572B6' },

  // ================= WEB & FRAMEWORKS =================
  { id: 'react', name: 'React', category: 'web', icon: <i className="devicon-react-original colored"></i>, brandColor: '#61DAFB' },
  { id: 'nextjs', name: 'Next.js', category: 'web', icon: <i className="devicon-nextjs-plain"></i>, brandColor: '#ffffff' }, 
  { id: 'nodejs', name: 'Node.js', category: 'web', icon: <i className="devicon-nodejs-plain colored"></i>, brandColor: '#339933' },
  { id: 'firebase', name: 'Firebase', category: 'web', icon: <i className="devicon-firebase-plain colored"></i>, brandColor: '#FFCA28' },
  { id: 'rest-api', name: 'REST API', category: 'web', icon: <VscJson />, brandColor: '#007ACC' },

  // ================= AI =================
  { id: 'gemini', name: 'Google Gemini', category: 'ai', icon: <GeminiLogo />, brandColor: '#8E75B2' },
  { id: 'ai-studio', name: 'Google AI Studio', category: 'ai', icon: <i className="devicon-google-plain colored"></i>, brandColor: '#4285F4' },
  { id: 'deepseek', name: 'DeepSeek', category: 'ai', icon: <SiDeepseek />, brandColor: '#4D8AF0' },
  { id: 'claude', name: 'Claude', category: 'ai', icon: <SiClaude />, brandColor: '#CC8C68' },
  { id: 'gen-ai', name: 'Generative AI', category: 'ai', icon: <LuBrainCircuit />, brandColor: '#00E676' },
  { id: 'cv', name: 'Computer Vision', category: 'ai', icon: <FaBrain />, brandColor: '#FF4081' },

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
