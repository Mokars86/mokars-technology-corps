
export enum ProjectStatus {
  COMPLETED = 'Completed',
  ONGOING = 'Ongoing',
  UPCOMING = 'Upcoming',
}

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  description: string;
  techStack: string[];
  impact: string;
  imageUrl: string;
  progress: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
