
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Settings, LogOut, Trash2, Shield, Bell, User, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';

interface SettingsOption {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

const SettingsModal: React.FC = () => {
  const handleAction = (action: string) => {
    toast(`${action} action`, {
      description: `You triggered the ${action} action`,
    });
  };

  const settingsOptions: SettingsOption[] = [
    {
      label: 'Account Information',
      icon: <User className="h-4 w-4 mr-2" />,
      onClick: () => handleAction('Account Information'),
      variant: 'ghost',
    },
    {
      label: 'Privacy & Security',
      icon: <Shield className="h-4 w-4 mr-2" />,
      onClick: () => handleAction('Privacy & Security'),
      variant: 'ghost',
    },
    {
      label: 'Notifications',
      icon: <Bell className="h-4 w-4 mr-2" />,
      onClick: () => handleAction('Notifications'),
      variant: 'ghost',
    },
    {
      label: 'Help & Support',
      icon: <HelpCircle className="h-4 w-4 mr-2" />,
      onClick: () => handleAction('Help & Support'),
      variant: 'ghost',
    },
    {
      label: 'Logout',
      icon: <LogOut className="h-4 w-4 mr-2" />,
      onClick: () => handleAction('Logout'),
      variant: 'outline',
    },
    {
      label: 'Delete Account',
      icon: <Trash2 className="h-4 w-4 mr-2" />,
      onClick: () => handleAction('Delete Account'),
      variant: 'destructive',
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow duration-200">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-gradient-soft animate-enter">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium">Account Settings</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 py-4">
          {settingsOptions.map((option, index) => (
            <React.Fragment key={option.label}>
              {index === 4 && <Separator className="my-2" />}
              <Button
                variant={option.variant}
                className="w-full justify-start text-left py-6"
                onClick={option.onClick}
              >
                {option.icon}
                {option.label}
              </Button>
            </React.Fragment>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
