import { useState } from 'react';
import { Calculator, Plane, Wind, MapPin, Navigation, FileText } from 'lucide-react';
import FlightPlanForm from './src/components/FlightPlanForm';
import WeatherCalculator from './src/components/WeatherCalculator';
import WeightBalanceCalculator from './src/components/WeightBalanceCalculator';
import CX6Calculator from './src/components/CX6Calculator';
import NavigationTools from './src/components/NavigationTools';
import FlightLogs from './src/components/FlightLogs';

type AviationProAppProps = {
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}

function AviationProApp({ darkMode = false, toggleDarkMode }: AviationProAppProps) {
  const [activeTab, setActiveTab] = useState('planner');

  const tabs = [
    { id: 'planner', label: 'Flight Planner', icon: Navigation },
    { id: 'cx6', label: 'CX-6 Computer', icon: Calculator },
    { id: 'weather', label: 'Weather Tools', icon: Wind },
    { id: 'performance', label: 'Performance', icon: Plane },
    { id: 'navigation', label: 'Navigation', icon: MapPin },
    { id: 'logs', label: 'Flight Logs', icon: FileText }
  ];

  // toggleDarkMode is provided by parent; if not provided, fall back to noop
  const localToggle = toggleDarkMode ?? (() => {});

  return (
    <div className={`aviation-scope min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className="flex items-center justify-between px-4 py-2 border-b border-gray-300 dark:border-gray-700">
        <h1 className="text-2xl font-bold">AviationPro</h1>
        <button onClick={localToggle} className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <nav className="flex space-x-2 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`flex items-center px-3 py-1 rounded transition-colors ${
              activeTab === tab.id 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <tab.icon className="w-4 h-4 mr-1" />
            {tab.label}
          </button>
        ))}
      </nav>
      <main className="p-4">
        {activeTab === 'planner' && <FlightPlanForm darkMode={darkMode} />}
        {activeTab === 'cx6' && <CX6Calculator darkMode={darkMode} />}
        {activeTab === 'weather' && <WeatherCalculator darkMode={darkMode} />}
        {activeTab === 'performance' && <WeightBalanceCalculator darkMode={darkMode} />}
        {activeTab === 'navigation' && <NavigationTools darkMode={darkMode} />}
        {activeTab === 'logs' && <FlightLogs darkMode={darkMode} />}
      </main>
    </div>
  );
}

export default AviationProApp;
