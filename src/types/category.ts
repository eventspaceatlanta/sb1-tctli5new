import { LucideIcon } from 'lucide-react';

export interface SubSubCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
}

export interface SubCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
  subSubCategories?: SubSubCategory[];
}

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  count: number;
  description: string;
  path: string;
  image: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  highlights?: string[];
  subCategories?: SubCategory[];
}

export interface CategoryWithMeta extends Category {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}