export type ModalType = 'about' | 'projects' | 'contact' | 'certifications' | 'paintings' | 'articles' | null;

export interface RoomItem {
  id: string;
  name: string;
  type: ModalType;
  top: string; // percentage
  left: string; // percentage
  width: string; // pixel or percentage
  height?: string;
  image: string;
  zIndex: number;
  tooltip: string;
  animation?: string;
  isInteractable: boolean;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Painting {
  id: number;
  title: string;
  image: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  image: string;
}