import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface YourPerformanceProps {
    isDarkMode: boolean;
}

const performanceData = {
    metrics: [
        {
            name: 'Total Calls',
            you: 76, // Tom Davis
            goal: 80, // Adjusted theoretical goal
            topPerformer: 89, // Sarah Wilson
            trend: -13
        },
        {
            name: 'Live Conversations',
            you: 20, // Tom Davis
            goal: 25, // Adjusted theoretical goal
            topPerformer: 26, // Sarah Wilson
            trend: -6
        },
        {
            name: 'Vehicle Conversations',
            you: 14, // Tom Davis
            goal: 18, // Adjusted theoretical goal
            topPerformer: 16, // Sarah Wilson
            trend: -2
        },
        {
            name: 'Firm vs. Soft Appointments',
            you: '7/13', // Tom Davis
            goal: '8/15', // Adjusted theoretical goal
            topPerformer: '9/21', // Sarah Wilson
            trend: '-2/8'
        },
        {
            name: 'Appointment Requests',
            you: 22, // Tom Davis
            goal: 25, // Adjusted theoretical goal
            topPerformer: 27, // Sarah Wilson
            trend: -5
        }
    ]
};


export const YourPerformanceSection = ({ isDarkMode }: YourPerformanceProps) => {
    return (
        <div className={`rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800/90 border border-gray-700/50' : 'bg-white border border-gray-200'
            }`}>
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Your Performance
                </h2>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className={isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400">
                                Metric
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400">
                                You
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400">
                                Goal
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400">
                                Top Performer
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400">
                                Trend
                            </th>
                        </tr>
                    </thead>
                    <tbody className={`divide-y divide-gray-200 dark:divide-gray-700 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'
                        }`}>
                        {performanceData.metrics.map((metric, index) => (
                            <tr key={index} className={`
                transition-colors duration-150
                ${isDarkMode
                                    ? 'hover:bg-gray-700/50'
                                    : 'hover:bg-gray-50'
                                }
              `}>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'
                                    }`}>
                                    {metric.name}
                                </td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                    {metric.you}
                                </td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                    {metric.goal}
                                </td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                    {metric.topPerformer}
                                </td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm`}>
                                    <div className={`flex items-center space-x-1 ${metric.trend > 0 ? 'text-green-500' : 'text-red-500'
                                        }`}>
                                        {metric.trend > 0 ? (
                                            <TrendingUp className="w-4 h-4" />
                                        ) : (
                                            <TrendingDown className="w-4 h-4" />
                                        )}
                                        <span>{Math.abs(metric.trend)}%</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};