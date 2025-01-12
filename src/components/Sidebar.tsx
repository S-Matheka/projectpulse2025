import React from 'react';
import { LayoutDashboard, BookOpen, Settings, HelpCircle, FileText, UserCircle, LineChart, LogOut } from 'lucide-react';

interface SidebarProps {
  onPageChange: (page: string) => void;
  activePage: string;
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  onDrawerOpen: (drawer: 'help' | 'resources' | 'profile') => void;
  onSignOut: () => void;
}

export const Sidebar = ({ 
  onPageChange, 
  activePage, 
  isOpen, 
  onClose, 
  isDarkMode, 
  onDrawerOpen,
  onSignOut 
}: SidebarProps) => {
  const menuItems = [
    { icon: <LayoutDashboard />, label: 'dashboard' },
    { icon: <LineChart />, label: 'sales leader' },
    { icon: <LineChart />, label: 'sales associate' },
    { icon: <LineChart />, label: 'marketing' },
    { icon: <BookOpen />, label: 'reports' },
    { icon: <Settings />, label: 'settings' },
    { icon: <HelpCircle />, label: 'help center', drawer: 'help' as const },
    { icon: <FileText />, label: 'resources', drawer: 'resources' as const },
    { icon: <UserCircle />, label: 'profile', drawer: 'profile' as const }
  ];

  return (
    <aside className={`
      fixed md:static inset-y-0 left-0 z-30
      w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-r ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => {
                    if (item.drawer) {
                      onDrawerOpen(item.drawer);
                    } else {
                      onPageChange(item.label);
                      onClose();
                    }
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
                    activePage === item.label 
                      ? 'bg-blue-500 text-white' 
                      : isDarkMode 
                        ? 'text-gray-200 hover:bg-gray-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                  } transition-colors`}
                >
                  {React.cloneElement(item.icon, { className: 'w-5 h-5' })}
                  <span className="font-medium capitalize">{item.label}</span>
                </button>
              </li>
            ))}

            {/* Sign Out Button - Now placed right after the menu items */}
            <li>
              <button
                onClick={onSignOut}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20' 
                    : 'bg-red-50 text-red-600 hover:bg-red-100'
                } transition-colors`}
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Sign out</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};