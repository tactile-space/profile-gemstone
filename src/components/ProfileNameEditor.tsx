
import React, { useState } from 'react';
import { Edit, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

interface ProfileNameEditorProps {
  initialName: string;
}

const ProfileNameEditor: React.FC<ProfileNameEditorProps> = ({ initialName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);
  const [tempName, setTempName] = useState(initialName);

  const handleStartEdit = () => {
    setTempName(name);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    if (tempName.trim()) {
      setName(tempName);
      setIsEditing(false);
      toast("Name updated", {
        description: "Your display name has been updated successfully",
      });
    }
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-2 animate-scale-in">
        <Input
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
          className="h-10 text-xl font-semibold max-w-[200px]"
          autoFocus
        />
        <div className="flex gap-1">
          <Button size="icon" variant="ghost" onClick={handleCancel} className="h-8 w-8 rounded-full hover:bg-red-50 hover:text-red-500">
            <X className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" onClick={handleSave} className="h-8 w-8 rounded-full hover:bg-green-50 hover:text-green-500">
            <Check className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center group">
      <h1 className="text-xl font-semibold">{name}</h1>
      <Button
        size="icon"
        variant="ghost"
        onClick={handleStartEdit}
        className="h-8 w-8 ml-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-primary/10 hover:text-primary"
      >
        <Edit className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
};

export default ProfileNameEditor;
