import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  GraduationCap, 
  Users, 
  FileText, 
  Bell, 
  Settings,
  Search,
  TrendingUp,
  // Plus,
  X,
  ChevronDown
} from 'lucide-react';
// import { useAuth } from '../../context/AuthContext';

interface StatCard {
  title: string;
  value: string;
  change: string;
  icon: string;
}

interface TrainingSession {
  id: string;
  sessionName: string;
  location: string;
  joiningDate: string;
  duration: string;
}

interface Report {
  id: string;
  reportName: string;
  schoolLocation: string;
  uploadDate: string;
}

interface AttendanceRecord {
  id: string;
  sessionName: string;
  location: string;
  joiningDate: string;
  attendanceDate: string;
  duration: string;
}

interface Notification {
  id: string;
  message: string;
  timestamp: string;
}

const TrainerDashboard: React.FC = () => {
  // const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [showCreateSessionModal, setShowCreateSessionModal] = useState<boolean>(false);
  const [showAddAttendanceModal, setShowAddAttendanceModal] = useState<boolean>(false);

  const stats: StatCard[] = [
    { title: 'Total Trainings', value: '5', change: '15%', icon: '$' },
    { title: 'Total Reports', value: '1000000', change: '15%', icon: '$' },
    { title: 'Total Participants', value: '1000000', change: '15%', icon: '$' }
  ];

  const trainingSessions: TrainingSession[] = Array(8).fill(null).map((_, i) => ({
    id: `session-${i}`,
    sessionName: 'Nairobi Trainings',
    location: 'Nairobi Kenya',
    joiningDate: '10/5/2025',
    duration: '2 Months'
  }));

  const reports: Report[] = Array(5).fill(null).map((_, i) => ({
    id: `report-${i}`,
    reportName: 'Kingston School Report',
    schoolLocation: 'Nairobi Kenya',
    uploadDate: '10/5/2025'
  }));

  const attendanceRecords: AttendanceRecord[] = Array(7).fill(null).map((_, i) => ({
    id: `attendance-${i}`,
    sessionName: 'Nairobi Trainings',
    location: 'Nairobi Kenya',
    joiningDate: '10/5/2025',
    attendanceDate: '10/5/2025',
    duration: '2 Months'
  }));

  const notifications: Notification[] = Array(9).fill(null).map((_, i) => ({
    id: `notification-${i}`,
    message: 'You have updated the kingston highschool report',
    timestamp: '30 min ago'
  }));

  const handleUpdate = (id: string): void => {
    console.log('Updating:', id);
  };

  const handleView = (id: string): void => {
    console.log('Viewing:', id);
  };

  const handleDelete = (id: string): void => {
    console.log('Deleting:', id);
  };

  const handleDownload = (id: string): void => {
    console.log('Downloading:', id);
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'training', label: 'Training', icon: GraduationCap },
    { id: 'attendance', label: 'Attendance', icon: Users },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp size={16} className="text-green-500 mr-1" />
                  <span className="text-sm text-green-500">{stat.change}</span>
                </div>
              </div>
              <div className="bg-[#1B365D] text-white p-3 rounded-lg">
                <span className="text-lg font-bold">{stat.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Training Sessions */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Training Sessions</h2>
            <button className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium">
              See All
            </button>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search session"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
              />
            </div>
            <select title='recent' className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joining Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {trainingSessions.slice(0, 3).map((session) => (
                <tr key={session.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{session.sessionName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{session.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{session.joiningDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{session.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Reports</h2>
            <button className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium">
              See All
            </button>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Report"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
              />
            </div>
            <select title='recent' className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Upload Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports.slice(0, 4).map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.reportName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.schoolLocation}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.uploadDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button
                      onClick={() => handleDownload(report.id)}
                      className="bg-[#1B365D] text-white px-3 py-1 rounded text-sm hover:bg-[#2563EB] transition-colors"
                    >
                      Download
                    </button>
                    <button
                      onClick={() => handleView(report.id)}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(report.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attendance Report Summary Chart */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Attendance Report Summary</h2>
        <div className="relative h-64">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-md border">
            <div className="text-2xl font-bold text-gray-900">220,342,123</div>
            <div className="text-sm text-gray-500">May</div>
          </div>
          <svg className="w-full h-full" viewBox="0 0 800 200">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1B365D" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#1B365D" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <path
              d="M 50 150 Q 150 120 200 130 T 350 100 T 500 80 T 650 90 T 750 120"
              stroke="#1B365D"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M 50 150 Q 150 120 200 130 T 350 100 T 500 80 T 650 90 T 750 120 L 750 200 L 50 200 Z"
              fill="url(#gradient)"
            />
            <circle cx="500" cy="80" r="6" fill="#1B365D" stroke="white" strokeWidth="2"/>
            <line x1="500" y1="80" x2="500" y2="40" stroke="#1B365D" strokeWidth="2" strokeDasharray="5,5"/>
          </svg>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-12">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>July</span>
            <span>Aug</span>
            <span>Sept</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 py-4">
            <span>260</span>
            <span>220</span>
            <span>180</span>
            <span>140</span>
          </div>
        </div>
      </div>

      {/* Recent Notifications */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Notification</h2>
            <select title='recent' className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Today</option>
            </select>
          </div>
          <div className="mt-4">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Recent Notification"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
              />
            </div>
          </div>
        </div>
        <div className="p-6 space-y-4">
          {notifications.slice(0, 2).map((notification) => (
            <div key={notification.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <p className="text-sm text-gray-900">{notification.message}</p>
              <span className="text-sm text-gray-500">{notification.timestamp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTraining = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Training</h1>
      
      {/* Total Trainings Stat */}
      <div className="bg-white rounded-lg p-6 shadow-sm border max-w-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Trainings</p>
            <p className="text-2xl font-bold text-gray-900">5</p>
            <div className="flex items-center mt-2">
              <TrendingUp size={16} className="text-green-500 mr-1" />
              <span className="text-sm text-green-500">15%</span>
            </div>
          </div>
          <div className="bg-[#1B365D] text-white p-3 rounded-lg">
            <span className="text-lg font-bold">$</span>
          </div>
        </div>
      </div>

      {/* Training Sessions */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Training Sessions</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => setShowCreateSessionModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Create Session
              </button>
              <button className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium">
                See All
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search session"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
              />
            </div>
            <select title='recent' className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joining Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {trainingSessions.map((session) => (
                <tr key={session.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{session.sessionName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{session.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{session.joiningDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{session.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button
                      onClick={() => handleUpdate(session.id)}
                      className="bg-[#1B365D] text-white px-3 py-1 rounded text-sm hover:bg-[#2563EB] transition-colors"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleView(session.id)}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(session.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAttendance = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
      
      {/* Total Participants Stat */}
      <div className="bg-white rounded-lg p-6 shadow-sm border max-w-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Participants</p>
            <p className="text-2xl font-bold text-gray-900">5</p>
            <div className="flex items-center mt-2">
              <TrendingUp size={16} className="text-green-500 mr-1" />
              <span className="text-sm text-green-500">15%</span>
            </div>
          </div>
          <div className="bg-[#1B365D] text-white p-3 rounded-lg">
            <span className="text-lg font-bold">$</span>
          </div>
        </div>
      </div>

      {/* Attendance Report Summary Chart */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Attendance Report Summary</h2>
        <div className="relative h-64">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-md border">
            <div className="text-2xl font-bold text-gray-900">220,342,123</div>
            <div className="text-sm text-gray-500">May</div>
          </div>
          <svg className="w-full h-full" viewBox="0 0 800 200">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1B365D" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#1B365D" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <path
              d="M 50 150 Q 150 120 200 130 T 350 100 T 500 80 T 650 90 T 750 120"
              stroke="#1B365D"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M 50 150 Q 150 120 200 130 T 350 100 T 500 80 T 650 90 T 750 120 L 750 200 L 50 200 Z"
              fill="url(#gradient)"
            />
            <circle cx="500" cy="80" r="6" fill="#1B365D" stroke="white" strokeWidth="2"/>
            <line x1="500" y1="80" x2="500" y2="40" stroke="#1B365D" strokeWidth="2" strokeDasharray="5,5"/>
          </svg>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-12">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>July</span>
            <span>Aug</span>
            <span>Sept</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 py-4">
            <span>260</span>
            <span>220</span>
            <span>180</span>
            <span>140</span>
          </div>
        </div>
      </div>

      {/* Attendance Reports */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Attendance Reports</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => setShowAddAttendanceModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Add new Attendance
              </button>
              <button className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium">
                See All
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Report"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
              />
            </div>
            <select title='recent' className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joining Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {attendanceRecords.map((record) => (
                <tr key={record.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.sessionName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.joiningDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.attendanceDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button
                      onClick={() => handleUpdate(record.id)}
                      className="bg-[#1B365D] text-white px-3 py-1 rounded text-sm hover:bg-[#2563EB] transition-colors"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleView(record.id)}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(record.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
      
      {/* Total Reports Stat */}
      <div className="bg-white rounded-lg p-6 shadow-sm border max-w-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Reports</p>
            <p className="text-2xl font-bold text-gray-900">5</p>
            <div className="flex items-center mt-2">
              <TrendingUp size={16} className="text-green-500 mr-1" />
              <span className="text-sm text-green-500">15%</span>
            </div>
          </div>
          <div className="bg-[#1B365D] text-white p-3 rounded-lg">
            <span className="text-lg font-bold">$</span>
          </div>
        </div>
      </div>

      {/* Attendance Report Summary Chart */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Attendance Report Summary</h2>
        <div className="relative h-64">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-md border">
            <div className="text-2xl font-bold text-gray-900">220,342,123</div>
            <div className="text-sm text-gray-500">May</div>
          </div>
          <svg className="w-full h-full" viewBox="0 0 800 200">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1B365D" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#1B365D" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <path
              d="M 50 150 Q 150 120 200 130 T 350 100 T 500 80 T 650 90 T 750 120"
              stroke="#1B365D"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M 50 150 Q 150 120 200 130 T 350 100 T 500 80 T 650 90 T 750 120 L 750 200 L 50 200 Z"
              fill="url(#gradient)"
            />
            <circle cx="500" cy="80" r="6" fill="#1B365D" stroke="white" strokeWidth="2"/>
            <line x1="500" y1="80" x2="500" y2="40" stroke="#1B365D" strokeWidth="2" strokeDasharray="5,5"/>
          </svg>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-12">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>July</span>
            <span>Aug</span>
            <span>Sept</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 py-4">
            <span>260</span>
            <span>220</span>
            <span>180</span>
            <span>140</span>
          </div>
        </div>
      </div>

      {/* Training Sessions */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Training Sessions</h2>
            <div className="flex space-x-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Create Session
              </button>
              <button className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium">
                See All
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search session"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
              />
            </div>
            <select title='recent' className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joining Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {trainingSessions.slice(0, 7).map((session) => (
                <tr key={session.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{session.sessionName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{session.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{session.joiningDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{session.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button
                      onClick={() => handleUpdate(session.id)}
                      className="bg-[#1B365D] text-white px-3 py-1 rounded text-sm hover:bg-[#2563EB] transition-colors"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleView(session.id)}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(session.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attendance Reports */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Attendance Reports</h2>
            <div className="flex space-x-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Add new Attendance
              </button>
              <button className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium">
                See All
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Report"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
              />
            </div>
            <select title='recent' className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joining Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {attendanceRecords.slice(0, 7).map((record) => (
                <tr key={record.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.sessionName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.joiningDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.attendanceDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button
                      onClick={() => handleUpdate(record.id)}
                      className="bg-[#1B365D] text-white px-3 py-1 rounded text-sm hover:bg-[#2563EB] transition-colors"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleView(record.id)}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(record.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
      
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Notification</h2>
            <select title='recent' className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Today</option>
            </select>
          </div>
          <div className="mt-4">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Recent Notification"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
              />
            </div>
          </div>
        </div>
        <div className="p-6 space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <p className="text-sm text-gray-900">{notification.message}</p>
              <span className="text-sm text-gray-500">{notification.timestamp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      
      {/* Personal Settings */}
      <div className="bg-white rounded-lg shadow-sm border p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">Personal Settings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Names</label>
            <input
              type="text"
              defaultValue="Mike David"
              className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:ring-0 focus:border-[#1B365D] bg-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
            <input
              type="text"
              defaultValue="Trainer"
              className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:ring-0 focus:border-[#1B365D] bg-transparent"
              readOnly
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              defaultValue="david@gmail.com"
              className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:ring-0 focus:border-[#1B365D] bg-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              defaultValue="0788888888"
              className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:ring-0 focus:border-[#1B365D] bg-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              defaultValue="Nairobi Kenya"
              className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:ring-0 focus:border-[#1B365D] bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-lg shadow-sm border p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">Notifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notification email</label>
            <input
              type="email"
              defaultValue="david@gmail.com"
              className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:ring-0 focus:border-[#1B365D] bg-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sms Notification Number</label>
            <input
              type="tel"
              defaultValue="0788888888"
              className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:ring-0 focus:border-[#1B365D] bg-transparent"
            />
          </div>
        </div>

        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Allowed Notifications</label>
          <div className="relative">
            <select title='Allowed Notifications' className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:ring-0 focus:border-[#1B365D] bg-transparent appearance-none">
              <option>All</option>
              <option>Email Only</option>
              <option>SMS Only</option>
              <option>None</option>
            </select>
            <ChevronDown size={20} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Data Backup */}
      <div className="bg-white rounded-lg shadow-sm border p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">Data Backup</h2>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Backup Frequency</label>
          <div className="relative">
            <select title='Backup Frequency' className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:ring-0 focus:border-[#1B365D] bg-transparent appearance-none">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
            <ChevronDown size={20} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'training':
        return renderTraining();
      case 'attendance':
        return renderAttendance();
      case 'reports':
        return renderReports();
      case 'notifications':
        return renderNotifications();
      case 'settings':
        return renderSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#1B365D] text-white flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold">Iqs Authority</h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-white text-[#1B365D]'
                    : 'text-white hover:bg-blue-700'
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {renderContent()}
        </div>
      </div>

      {/* Create Session Modal */}
      {showCreateSessionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Create New Session</h3>
              <button
                onClick={() => setShowCreateSessionModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Session Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
                  placeholder="Enter session name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
                  placeholder="Enter location"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
                  placeholder="Enter duration"
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowCreateSessionModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowCreateSessionModal(false)}
                  className="flex-1 bg-[#1B365D] text-white px-4 py-2 rounded-lg hover:bg-[#2563EB] transition-colors"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Attendance Modal */}
      {showAddAttendanceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Add New Attendance</h3>
              <button
                onClick={() => setShowAddAttendanceModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Session Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
                  placeholder="Enter session name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
                  placeholder="Enter location"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Attendance Date</label>
                <input 
                 title='date'
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowAddAttendanceModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowAddAttendanceModal(false)}
                  className="flex-1 bg-[#1B365D] text-white px-4 py-2 rounded-lg hover:bg-[#2563EB] transition-colors"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainerDashboard;