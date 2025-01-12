import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X, Play, Pause, Volume2, FileText } from 'lucide-react';

interface CallViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  lead: any;
  type: 'call' | 'review';
  isDarkMode?: boolean;
}

const dummyTranscript = {
  'call': [
    { time: '0:00', speaker: 'Agent', text: 'Thank you for calling Creo Solutions, this is Sarah speaking. How may I assist you today?' },
    { time: '0:05', speaker: 'Customer', text: 'Hi, I\'m interested in the 2024 Honda Civic you have listed on your website.' },
    { time: '0:12', speaker: 'Agent', text: 'I\'d be happy to help you with information about the Honda Civic. Are you looking at a specific trim level?' },
    { time: '0:18', speaker: 'Customer', text: 'Yes, I\'m interested in the financing options for the Sport trim.' },
    { time: '0:25', speaker: 'Agent', text: 'Great choice! I can definitely help you with financing information for the Civic Sport. We currently have some excellent rates available.' }
  ],
  'review': [
    { time: '0:00', speaker: 'Agent', text: 'Thank you for calling Creo Solutions, this is Mike speaking. How can I help you today?' },
    { time: '0:05', speaker: 'Customer', text: 'I\'ve been trying to schedule a service appointment for the past hour and your website keeps giving me errors.' },
    { time: '0:15', speaker: 'Agent', text: 'I apologize for the inconvenience with our scheduling system. Let me help you schedule that appointment directly.' }
  ]
};

export const CallViewModal = ({ isOpen, onClose, lead, type, isDarkMode = false }: CallViewModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const duration = 180; // 3 minutes in seconds

  if (!lead) return null;

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className={`w-full max-w-2xl rounded-xl shadow-xl transform transition-all ${
          isDarkMode 
            ? 'bg-gray-800/95 border border-gray-700' 
            : 'bg-white'
        }`}>
          <div className={`flex justify-between items-center p-4 border-b ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <Dialog.Title className={`text-xl font-semibold ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              Call Details
            </Dialog.Title>
            <button 
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'hover:bg-gray-700 text-gray-400' 
                  : 'hover:bg-gray-100 text-gray-500'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Customer
                </p>
                <p className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                  {lead.name}
                </p>
              </div>
              <div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Phone
                </p>
                <p className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                  {lead.phone}
                </p>
              </div>
              {type === 'review' && (
                <div className="col-span-2">
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Reason for Review
                  </p>
                  <p className={`font-medium text-red-500 ${isDarkMode ? 'text-opacity-90' : ''}`}>
                    {lead.reason}
                  </p>
                </div>
              )}
            </div>

            <div>
              <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Call Recording
              </p>
              <div className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'
              }`}>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                      isDarkMode
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <div className="flex-1">
                    <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div 
                        className={`absolute h-full rounded-full ${
                          isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
                        }`}
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')}
                      </span>
                      <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Volume2 className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      defaultValue="100"
                      className={`w-20 ${isDarkMode ? 'accent-blue-500' : 'accent-blue-600'}`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowTranscript(!showTranscript)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isDarkMode
                    ? 'border border-gray-700 text-gray-300 hover:bg-gray-700'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>{showTranscript ? 'Hide Transcript' : 'View Transcript'}</span>
              </button>
            </div>

            {showTranscript && (
              <div className={`rounded-lg ${
                isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'
              }`}>
                <div className={`p-4 border-b ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <h4 className={`font-medium ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-900'
                  }`}>
                    Call Transcript
                  </h4>
                </div>
                <div className="p-4 max-h-[300px] overflow-y-auto">
                  <div className="space-y-4">
                    {dummyTranscript[type].map((entry, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className={`w-16 text-sm ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {entry.time}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className={`font-medium ${
                            entry.speaker === 'Agent'
                              ? isDarkMode ? 'text-blue-400' : 'text-blue-600'
                              : isDarkMode ? 'text-amber-400' : 'text-amber-600'
                          }`}>
                            {entry.speaker}:
                          </span>
                          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                            {entry.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div>
              <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Summary
              </p>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                {lead.summary}
              </p>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};