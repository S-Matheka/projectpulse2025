import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { SalesTeamSection } from './sections/SalesTeamSection';
import { InboundCallsSection } from './sections/InboundCallsSection';
import { PursueSection } from './sections/PursueSection';
import { CallsToReviewSection } from './sections/CallsToReviewSection';
import { MissedCallsSection } from './sections/MissedCallsSection';
import { TrendingTopicsSection } from './sections/TrendingTopicsSection';
import { HelpDrawer } from './drawers/HelpDrawer';
import { ResourcesDrawer } from './drawers/ResourcesDrawer';
import { ProfileDrawer } from './drawers/ProfileDrawer';
import { Genie } from './Genie';

interface DashboardProps {
  onSignOut: () => void;
}

export const Dashboard = ({ onSignOut }: DashboardProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeDrawer, setActiveDrawer] = useState<'help' | 'resources' | 'profile' | null>(null);
  const [showGenie, setShowGenie] = useState(false);

  return (
    <div className={`h-screen flex flex-col ${isDarkMode ? 'dark-theme' : 'bg-gray-50'}`}>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header 
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          isDarkMode={isDarkMode}
          onThemeToggle={() => setIsDarkMode(!isDarkMode)}
          onRefresh={() => {}}
          showGenie={showGenie}
          setShowGenie={setShowGenie}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 pt-[73px]">
        {/* Fixed Sidebar */}
        <div className="fixed left-0 top-[73px] bottom-[57px] w-64 z-40">
          <Sidebar 
            onPageChange={setActivePage} 
            activePage={activePage} 
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            isDarkMode={isDarkMode}
            onDrawerOpen={setActiveDrawer}
            onSignOut={onSignOut}
          />
        </div>

        {/* Main Content - Scrollable with left margin for sidebar */}
        <div className="flex-1 ml-64">
          {/* Scrollable Content */}
          <main className="h-[calc(100vh-130px)] overflow-y-auto">
            <div className="p-6 max-w-[1600px] mx-auto w-full space-y-6">
              <SalesTeamSection isDarkMode={isDarkMode} />
              <InboundCallsSection isDarkMode={isDarkMode} />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <PursueSection isDarkMode={isDarkMode} />
                  <CallsToReviewSection isDarkMode={isDarkMode} />
                </div>
                <div className="space-y-6">
                  <MissedCallsSection isDarkMode={isDarkMode} />
                  <TrendingTopicsSection isDarkMode={isDarkMode} />
                </div>
              </div>
            </div>
          </main>

          {/* Fixed Footer */}
          <footer className={`fixed bottom-0 left-64 right-0 py-4 px-6 border-t z-40 ${
            isDarkMode ? 'border-gray-700/50 bg-gray-800/95' : 'border-gray-200 bg-white'
          }`}>
            <div className="max-w-[1600px] mx-auto">
              <p className={`text-sm text-center ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                ©2024 by Creo Solutions
              </p>
            </div>
          </footer>
        </div>

        {/* Genie Drawer */}
        <Genie 
          isOpen={showGenie} 
          onClose={() => setShowGenie(false)} 
          isDarkMode={isDarkMode}
        />

        {/* Other Drawers */}
        <HelpDrawer 
          isOpen={activeDrawer === 'help'} 
          onClose={() => setActiveDrawer(null)} 
          isDarkMode={isDarkMode}
        />
        <ResourcesDrawer 
          isOpen={activeDrawer === 'resources'} 
          onClose={() => setActiveDrawer(null)} 
          isDarkMode={isDarkMode}
        />
        <ProfileDrawer 
          isOpen={activeDrawer === 'profile'} 
          onClose={() => setActiveDrawer(null)} 
          isDarkMode={isDarkMode}
          onSignOut={onSignOut}
        />
      </div>
    </div>
  );
};