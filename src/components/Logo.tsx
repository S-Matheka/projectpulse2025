import React from 'react';
import { Boxes } from 'lucide-react';

interface LogoProps {
  isDarkMode: boolean;
}

export const Logo = ({ isDarkMode }: LogoProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Boxes className="w-8 h-8 text-[#e0a731]" />
      <div>
        <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Creo Solutions
        </h1>
      </div>
    </div>
  );
};