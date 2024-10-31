import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';

interface ReviewCardProps {
  author: string;
  date: string;
  rating: number;
  content: string;
  helpful: number;
  avatar: string;
}

export default function ReviewCard({ author, date, rating, content, helpful, avatar }: ReviewCardProps) {
  return (
    <div className="border-b border-gray-200 py-8 last:border-none">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{author}</h4>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          <span className="font-medium">{rating.toFixed(1)}</span>
        </div>
      </div>
      
      <p className="mt-4 text-gray-600 leading-relaxed">{content}</p>
      
      <button className="mt-4 flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors">
        <ThumbsUp className="h-4 w-4" />
        Helpful ({helpful})
      </button>
    </div>
  );
}