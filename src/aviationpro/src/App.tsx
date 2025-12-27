import { useState, useEffect } from 'react';
import { Calculator, Plane, Wind, MapPin, Navigation, FileText } from 'lucide-react';
import FlightPlanForm from './components/FlightPlanForm';
import WeatherCalculator from './components/WeatherCalculator';
import WeightBalanceCalculator from './components/WeightBalanceCalculator';
import CX6Calculator from './components/CX6Calculator';
import NavigationTools from './components/NavigationTools';
import FlightLogs from './components/FlightLogs';

function App() {
  const [activeTab, setActiveTab] = useState('planner');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const tabs = [
    { id: 'planner', label: 'Flight Planner', icon: Navigation },
    { id: 'cx6', label: 'CX-6 Computer', icon: Calculator },
    { id: 'weather', label: 'Weather Tools', icon: Wind },
    { id: 'performance', label: 'Performance', icon: Plane },
    { id: 'navigation', label: 'Navigation', icon: MapPin },
    { id: 'logs', label: 'Flight Logs', icon: FileText }
  ];

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b-2 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gray-800 border-theme-accent-dark shadow-lg shadow-theme-accent-dark/20' 
          : 'bg-white border-theme-accent shadow-lg shadow-theme-accent/10'
      }`}>
        <div className="w-full mx-auto px-2 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Plane className={`w-6 h-6 sm:w-8 sm:h-8 ${darkMode ? 'text-theme-accent-dark' : 'text-theme-accent'}`} />
                <div>
                  <h1 className="text-lg sm:text-2xl font-bold">AviationPro</h1>
                  <p className="text-xs sm:text-sm opacity-75 hidden xs:block">Professional Flight Planning Suite</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                onClick={() => window.open('https://foreflight.com', '_blank')}
                className={`p-1.5 sm:p-2 rounded-lg transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-theme-accent-dark' 
                    : 'bg-gray-100 hover:bg-gray-200 text-theme-accent'
                }`}
                title="Open ForeFlight Web"
              >
                <Plane className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <button
                onClick={() => window.open('https://pilot.garmin.com', '_blank')}
                className={`p-1.5 sm:p-2 rounded-lg transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-theme-accent-dark' 
                    : 'bg-gray-100 hover:bg-gray-200 text-theme-accent'
                }`}
                title="Open Garmin Pilot"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <button
                onClick={toggleDarkMode}
                className={`p-1.5 sm:p-2 rounded-lg transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <span className="text-base sm:text-xl">{darkMode ? '☀️' : '🌙'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className={`sticky top-20 z-40 border-b transition-colors duration-300 ${
        darkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="w-full mx-auto px-2 sm:px-4">
          <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab.id
                      ? darkMode
                        ? 'border-theme-accent-dark text-theme-accent-dark bg-gray-700'
                        : 'border-theme-accent text-theme-accent bg-theme-header'
                      : darkMode
                        ? 'border-transparent text-gray-300 hover:text-white hover:bg-gray-700'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="hidden xs:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full px-2 sm:px-4 py-4 sm:py-6">
        {activeTab === 'planner' && <FlightPlanForm darkMode={darkMode} />}
        {activeTab === 'cx6' && <CX6Calculator darkMode={darkMode} />}
        {activeTab === 'weather' && (
          <div className="space-y-6">
            <WeatherCalculator darkMode={darkMode} />
          </div>
        )}
        {activeTab === 'performance' && <WeightBalanceCalculator darkMode={darkMode} />}
        {activeTab === 'navigation' && <NavigationTools darkMode={darkMode} />}
        {activeTab === 'logs' && <FlightLogs darkMode={darkMode} />}
      </main>

      {/* Footer */}
      <footer className={`mt-12 border-t transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="w-full mx-auto px-4 py-6">
          <div className="text-center text-sm opacity-60">
            <p>© 2025 AviationPro Flight Planning Suite. For simulation purposes only.</p>
            <p className="mt-1">Always consult official publications and current weather for actual flight planning.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;