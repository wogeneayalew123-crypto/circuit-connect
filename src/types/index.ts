import { LucideIcon } from 'lucide-react';

export interface User {
  id: string;
  name: string;
  avatar: string;
  specialties: string[];
  bio: string;
  rating: number;
  location?: string;
  experienceYears: number;
  isVerified: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
  type: 'text' | 'image' | 'file';
  fileUrl?: string;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  category: 'Smartphone' | 'Laptop' | 'Appliance' | 'Motherboard' | 'Tools';
  membersCount: number;
  isPrivate: boolean;
  lastMessage?: string;
  icon: LucideIcon;
}

export interface Call {
  id: string;
  participants: User[];
  startTime: string;
  status: 'active' | 'ended';
  isGroupCall: boolean;
}