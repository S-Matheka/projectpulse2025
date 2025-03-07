import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { SalesTeamModal } from '../modals/SalesTeamModal';

interface SalesTeamSectionProps {
    isDarkMode: boolean;
}

const salesData = {
    metrics: [
        {
            title: 'Total Call Volume',
            value: '268',
            topPerformer: { name: 'Sarah Wilson', value: '89' },
            worstPerformer: { name: 'Mike Johnson', value: '38' }
        },
        {
            title: 'Total Live Conversations',
            value: '72',
            topPerformer: { name: 'Sarah Wilson', value: '26' },
            worstPerformer: { name: 'Mike Johnson', value: '8' }
        },
        {
            title: 'Total Vehicle Conversations',
            value: '44',
            topPerformer: { name: 'Sarah Wilson', value: '16' },
            worstPerformer: { name: 'Mike Johnson', value: '4' }
        },
        {
            title: 'Firm vs. Soft Appointments',
            value: '24/49',
            topPerformer: { name: 'Sarah Wilson', value: '9/21' },
            worstPerformer: { name: 'Mike Johnson', value: '2/3' }
        },
        {
            title: 'Appointment Requests',
            value: '74',
            topPerformer: { name: 'Sarah Wilson', value: '27' },
            worstPerformer: { name: 'Mike Johnson', value: '6' }
        }
    ]
};

export const SalesTeamSection = ({ isDarkMode }: SalesTeamSectionProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Sales Team
                </h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className={`inline-flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${isDarkMode
                        ? 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30'
                        : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                        }`}
                >
                    View Details
                    <ChevronRight className="w-4 h-4 ml-1" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {salesData.metrics.map((metric, index) => (
                    <div
                        key={index}
                        className={`rounded-lg p-4 shadow-lg border ${isDarkMode
                            ? 'bg-gray-800/90 hover:bg-gray-800 border-gray-700/50 hover:border-gray-600'
                            : 'bg-white hover:bg-gray-50 border-gray-100 hover:border-gray-200'
                            } transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl`}
                    >
                        <h3 className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            {metric.title}
                        </h3>
                        <p className={`text-2xl font-bold mt-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'
                            }`}>
                            {metric.value}
                        </p>
                        <div className="mt-4 space-y-2">
                            <p className="text-sm">
                                <span className="text-green-500 font-medium">Most: </span>
                                <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'
                                    }`}>
                                    {metric.topPerformer.name} ({metric.topPerformer.value})
                                </span>
                            </p>
                            <p className="text-sm">
                                <span className="text-red-500 font-medium">Least: </span>
                                <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'
                                    }`}>
                                    {metric.worstPerformer.name} ({metric.worstPerformer.value})
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <SalesTeamModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                isDarkMode={isDarkMode}
            />
        </div>
    );
};