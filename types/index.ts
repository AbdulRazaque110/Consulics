// Global types for the application

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Invoice {
  id: string;
  userId: string;
  description: string;
  amount: number;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
  date: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ServiceRequest {
  id: string;
  userId: string;
  serviceType: 'tax' | 'trucking' | 'ifta' | 'irp';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  documents: DocumentUpload[];
  comments?: string;
  status: 'pending' | 'in-progress' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

export interface DocumentUpload {
  id: string;
  category: string;
  fileName: string;
  fileSize: number;
  fileUrl: string;
  uploadedAt: Date;
  comments?: string;
}

export interface ContactMessage {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: Date;
  read: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  date: string;
  readTime: number;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export type ServiceType = 'tax' | 'trucking' | 'ifta' | 'irp';
export type InvoiceStatus = 'paid' | 'pending' | 'overdue';
export type RequestStatus = 'pending' | 'in-progress' | 'completed';
