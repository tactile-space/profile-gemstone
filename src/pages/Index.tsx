
import React from 'react';
import { Mail, Phone, User } from 'lucide-react';
import ProfileAvatar from '@/components/ProfileAvatar';
import ProfileField from '@/components/ProfileField';
import SettingsModal from '@/components/SettingsModal';
import UserRoleBadge from '@/components/UserRoleBadge';
import ProfileNameEditor from '@/components/ProfileNameEditor';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-profile p-4 sm:p-6 bg-size-200">
      <div className="w-full max-w-md mx-auto">
        <div className="profile-card">
          <div className="relative p-6 pt-8">
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-blue-500/30 to-purple-500/30" />
            
            <ProfileAvatar />
            
            <div className="flex flex-col items-center mb-6 slide-up" style={{ animationDelay: "0.1s" }}>
              <ProfileNameEditor initialName="Jane Doe" />
              <UserRoleBadge role="Influencer" className="mt-2" />
            </div>
            
            <div className="space-y-3 mb-6">
              <div style={{ animationDelay: "0.2s" }}>
                <ProfileField 
                  label="Email" 
                  value="jane.doe@example.com" 
                  icon={<Mail className="h-5 w-5" />} 
                />
              </div>
              <div style={{ animationDelay: "0.3s" }}>
                <ProfileField 
                  label="Phone Number" 
                  value="" 
                  icon={<Phone className="h-5 w-5" />} 
                />
              </div>
              <div style={{ animationDelay: "0.4s" }}>
                <ProfileField 
                  label="Username" 
                  value="@janedoe" 
                  icon={<User className="h-5 w-5" />} 
                  editable={false}
                />
              </div>
            </div>
            
            <div className="flex justify-center slide-up" style={{ animationDelay: "0.5s" }}>
              <SettingsModal />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6 text-sm text-indigo-600/80 animate-fade-in slide-up" style={{ animationDelay: "0.6s" }}>
          <p>Tap on the edit icons to modify your profile information</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
