
import React from 'react';
import { Edit, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface ProfileFieldProps {
  label: string;
  value?: string;
  icon: React.ReactNode;
  editable?: boolean;
}

const ProfileField: React.FC<ProfileFieldProps> = ({ 
  label, 
  value, 
  icon,
  editable = true 
}) => {
  const handleEdit = () => {
    toast({
      title: `Edit ${label}`,
      description: `This would open an input to edit your ${label.toLowerCase()}`,
    });
  };

  return (
    <div className="profile-field group animate-fade-in">
      <div className="text-primary/80">{icon}</div>
      <div className="flex-1">
        <div className="profile-label">{label}</div>
        {value ? (
          <div className="profile-value">{value}</div>
        ) : (
          <div className="text-muted-foreground italic text-sm">Not provided</div>
        )}
      </div>
      {editable && (
        <div className="field-action">
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-8 w-8 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
            onClick={handleEdit}
          >
            {value ? <Edit className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileField;
