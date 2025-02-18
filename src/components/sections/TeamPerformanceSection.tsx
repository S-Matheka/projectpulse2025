import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface TeamPerformanceSectionProps {
    isDarkMode: boolean;
}

const teamData = {
    total: {
        callVolume: '268',
        liveConversations: '72',
        vehicleConversations: '44',
        appointments: '24/49',
        appointmentRequests: '74'
    },
    agents: [
        {
            name: 'Sarah Wilson',
            callVolume: '89',
            liveConversations: '26',
            vehicleConversations: '16',
            appointments: '9/21',
            appointmentRequests: '27'
        },
        {
            name: 'Tom Davis',
            callVolume: '76',
            liveConversations: '20',
            vehicleConversations: '14',
            appointments: '7/13',
            appointmentRequests: '22'
        },
        {
            name: 'John Smith',
            callVolume: '65',
            liveConversations: '18',
            vehicleConversations: '10',
            appointments: '6/12',
            appointmentRequests: '19'
        },
        {
            name: 'Mike Johnson',
            callVolume: '38',
            liveConversations: '8',
            vehicleConversations: '4',
            appointments: '2/3',
            appointmentRequests: '6'
        }
    ]
};

export const TeamPerformanceSection = ({ isDarkMode }: TeamPerformanceSectionProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Team Performance
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

            <div className={`rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800/90 border border-gray-700/50' : 'bg-white border border-gray-200'
                }`}>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className={isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400">
                                    Agent
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400">
                                    Call Volume
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400">
                                    Live Conversations
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400">
                                    Vehicle Conversations
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400">
                                    Firm vs. Soft Appointments
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400">
                                    Appointment Requests
                                </th>
                            </tr>
                        </thead>
                        <tbody className={`divide-y divide-gray-200 dark:divide-gray-700 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'
                            }`}>
                            <tr className={`font-medium ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                                }`}>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'
                                    }`}>
                                    Total
                                </td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'
                                    }`}>
                                    {teamData.total.callVolume}
                                </td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'
                                    }`}>
                                    {teamData.total.liveConversations}
                                </td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'
                                    }`}>
                                    {teamData.total.vehicleConversations}
                                </td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'
                                    }`}>
                                    {teamData.total.appointments}
                                </td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'
                                    }`}>
                                    {teamData.total.appointmentRequests}
                                </td>
                            </tr>
                            {teamData.agents.map((agent, index) => (
                                <tr key={index} className={`
                  transition-colors duration-150
                  ${isDarkMode
                                        ? 'hover:bg-gray-700/50'
                                        : 'hover:bg-gray-50'
                                    }
                `}>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'
                                        }`}>
                                        {agent.name}
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        {agent.callVolume}
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        {agent.liveConversations}
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        {agent.vehicleConversations}
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        {agent.appointments}
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        {agent.appointmentRequests}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};