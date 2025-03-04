
import React, { useState } from 'react';
import { Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface ProfileAvatarProps {
  imageUrl?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ 
  imageUrl = "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleEdit = () => {
    toast({
      title: "Image upload feature",
      description: "This feature would allow uploading a new profile picture",
    });
  };

  return (
    <div className="relative w-32 h-32 mx-auto mb-6 animate-fade-in avatar-container floating">
      <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md avatar-glow">
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-shimmer bg-[length:400%_100%]" />
        )}
        <img
          src={imageUrl}
          alt="Profile"
          className="w-full h-full object-cover"
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="edit-overlay group cursor-pointer" onClick={handleEdit}>
        <Button 
          size="icon" 
          variant="ghost" 
          className="bg-white/50 backdrop-blur-md border border-white/60 text-white hover:bg-white/70 hover:scale-110 transition-all duration-300"
        >
          <Edit className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProfileAvatar;
