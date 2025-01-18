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
    { icon: <LayoutDashboard />, label: 'dashboard', title: 'Dashboard', type: 'page' },
    { icon: <LineChart />, label: 'sales leader', title: 'Sales Leader', type: 'page' },
    { icon: <LineChart />, label: 'sales associate', title: 'Sales Associate', type: 'page' },
    { icon: <LineChart />, label: 'marketing', title: 'Marketing', type: 'page' },
    { icon: <BookOpen />, label: 'reports', title: 'Reports', type: 'page' },
    { icon: <Settings />, label: 'settings', title: 'Settings', type: 'page' },
    { icon: <HelpCircle />, label: 'help center', drawer: 'help' as const, title: 'Help Center', type: 'drawer' },
    { icon: <FileText />, label: 'resources', drawer: 'resources' as const, title: 'Resources', type: 'drawer' },
    { icon: <UserCircle />, label: 'profile', drawer: 'profile' as const, title: 'Profile', type: 'drawer' }
  ];

  return (
    <div className={`
      fixed lg:static inset-y-0 left-0 z-40
      w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-r ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      h-full overflow-y-auto
    `}>
      <nav className="p-4">
        <div className="flex flex-col h-full">
          <div className="flex-1 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  if (item.type === 'drawer' && item.drawer) {
                    onDrawerOpen(item.drawer);
                  } else {
                    onPageChange(item.label);
                    onClose();
                  }
                }}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                  ${activePage === item.label 
                    ? 'bg-blue-500 text-white' 
                    : isDarkMode 
                      ? 'text-gray-200 hover:bg-gray-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }
                  transition-colors duration-200
                `}
              >
                {React.cloneElement(item.icon, { className: 'w-5 h-5' })}
                <span className="font-medium">{item.title}</span>
              </button>
            ))}
          </div>

          <button
            onClick={onSignOut}
            className={`
              w-full flex items-center space-x-3 px-4 py-3 rounded-lg mt-4
              ${isDarkMode 
                ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20' 
                : 'bg-red-50 text-red-600 hover:bg-red-100'
              }
              transition-colors duration-200
            `}
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign out</span>
          </button>
        </div>
      </nav>
    </div>
  );
};