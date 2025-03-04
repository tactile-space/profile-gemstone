
import React from 'react';
import { cn } from '@/lib/utils';

type UserRole = 'Brand' | 'Influencer';

interface UserRoleBadgeProps {
  role: UserRole;
  className?: string;
}

const UserRoleBadge: React.FC<UserRoleBadgeProps> = ({ role, className }) => {
  const isInfluencer = role === 'Influencer';
  
  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 animate-fade-in",
        isInfluencer 
          ? "bg-blue-50 text-blue-700 border border-blue-200" 
          : "bg-purple-50 text-purple-700 border border-purple-200",
        className
      )}
    >
      {role}
    </div>
  );
};

export default UserRoleBadge;
