
export interface Destination {
  id: string;
  title: string;
  category: 'hiking' | 'water' | 'heritage' | 'safari' | 'coastal';
  description: string;
  image: string;
  location: string;
  highlights: string[];
}

export interface InquiryFormState {
  step: number;
  profile: string;
  vibe: string[];
  duration: string;
  budget: string;
  dates: string;
  name: string;
  email: string;
  phone: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: 'landscape' | 'wildlife' | 'people' | 'heritage';
}
