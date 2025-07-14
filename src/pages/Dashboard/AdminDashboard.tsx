import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  School, 
  Users, 
  FileText, 
  MessageSquare, 
  Settings,
  Search,
  ChevronDown,
  TrendingUp,
  // Download,
  // Eye,
  // Trash2,
  MoreHorizontal,
  Send,
  Smile,
  X,
  FileIcon
} from 'lucide-react';
// import { useAuth } from '../../context/AuthContext';

interface StatCard {
  title: string;
  value: string;
  change: string;
  icon: string;
}

interface School {
  id: string;
  name: string;
  studentNumber: number;
  joiningDate: string;
  accreditationPeriod: string;
  status?: 'pending' | 'approved';
}

interface Evaluator {
  id: string;
  name: string;
  operatingLocation: string;
  joiningDate: string;
  workingPeriod: string;
}

interface Report {
  id: string;
  name: string;
  schoolLocation: string;
  evaluatorName: string;
  uploadDate: string;
  schoolName: string;
  documents: string[];
}

interface Message {
  id: string;
  sender: string;
  role: string;
  message: string;
  timestamp: string;
  avatar: string;
  type: 'headmaster' | 'evaluator' | 'trainer';
}

interface MessageTab {
  id: string;
  label: string;
  count: number;
  type: 'all' | 'headmaster' | 'evaluator' | 'trainer';
}

const AdminDashboard: React.FC = () => {
  // const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  // const [searchTerm, setSearchTerm] = useState<string>('');
  // const [sortBy, setSortBy] = useState<string>('latest');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [activeMessageTab, setActiveMessageTab] = useState<string>('all');
  const [showReportModal, setShowReportModal] = useState<boolean>(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  const stats: StatCard[] = [
    { title: 'Total Schools', value: '1000000', change: '15%', icon: '$' },
    { title: 'Total Evaluators', value: '1000000', change: '15%', icon: '$' },
    { title: 'Total Evaluations', value: '1000000', change: '15%', icon: '$' },
    { title: 'Total Reports', value: '1000000', change: '15%', icon: '$' }
  ];

  const recentSchools: School[] = [
    { id: '1', name: 'Kingston High School', studentNumber: 850000, joiningDate: '10/5/2025', accreditationPeriod: '2 Years' },
    { id: '2', name: 'Kingston High School', studentNumber: 850000, joiningDate: '10/5/2025', accreditationPeriod: '2 Years' },
    { id: '3', name: 'Kingston High School', studentNumber: 850000, joiningDate: '10/5/2025', accreditationPeriod: '2 Years' }
  ];

  const requestedSchools: School[] = [
    { id: '1', name: 'Kingston High School', studentNumber: 850000, joiningDate: '10/5/2025', accreditationPeriod: '2 Years', status: 'pending' },
    { id: '2', name: 'Kingston High School', studentNumber: 850000, joiningDate: '10/5/2025', accreditationPeriod: '2 Years', status: 'pending' },
    { id: '3', name: 'Kingston High School', studentNumber: 850000, joiningDate: '10/5/2025', accreditationPeriod: '2 Years', status: 'pending' }
  ];

  const accreditedSchools: School[] = Array(12).fill(null).map((_, i) => ({
    id: `acc-${i}`,
    name: 'Kingston High School',
    studentNumber: 850000,
    joiningDate: '10/5/2025',
    accreditationPeriod: '2 Years'
  }));

  const evaluators: Evaluator[] = Array(13).fill(null).map((_, i) => ({
    id: `eval-${i}`,
    name: 'Mike David',
    operatingLocation: 'Nairobi Kenya',
    joiningDate: '10/5/2025',
    workingPeriod: '2 Years'
  }));

  const reports: Report[] = Array(9).fill(null).map((_, i) => ({
    id: `report-${i}`,
    name: 'Kingston School Report',
    schoolLocation: 'Nairobi Kenya',
    evaluatorName: 'Mike Johnson',
    uploadDate: '10/5/2025',
    schoolName: 'Kingston High School',
    documents: ['Kingston High School report.pdf', 'Kingston High School report 2.pdf']
  }));

  const messageTabs: MessageTab[] = [
    { id: 'all', label: 'All messages', count: 8, type: 'all' },
    { id: 'headmaster', label: 'Headmaster', count: 3, type: 'headmaster' },
    { id: 'evaluator', label: 'Evaluator', count: 2, type: 'evaluator' },
    { id: 'trainer', label: 'Trainer', count: 3, type: 'trainer' }
  ];

  const allMessages: Message[] = [
    {
      id: '1',
      sender: 'Joe Swanson',
      role: 'Headmaster of Kingston HighSchool',
      message: 'You didn\'t get any ice cream?',
      timestamp: '27 seconds ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      type: 'headmaster'
    },
    {
      id: '2',
      sender: 'Meg Griffin',
      role: 'Sleeper Agent, Family Guy',
      message: 'Good Chris. I\'ve taught you well. You...',
      timestamp: 'Dec 7, 2022',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      type: 'evaluator'
    },
    {
      id: '3',
      sender: 'Mike Johnson',
      role: 'Senior Evaluator',
      message: 'The evaluation report has been completed...',
      timestamp: '2 hours ago',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      type: 'evaluator'
    },
    {
      id: '4',
      sender: 'Sarah Ahmed',
      role: 'Training Coordinator',
      message: 'Training session scheduled for next week...',
      timestamp: '1 day ago',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      type: 'trainer'
    },
    {
      id: '5',
      sender: 'David Wilson',
      role: 'Headmaster of Al-Noor Academy',
      message: 'Thank you for the accreditation approval...',
      timestamp: '2 days ago',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      type: 'headmaster'
    },
    {
      id: '6',
      sender: 'Lisa Thompson',
      role: 'Training Specialist',
      message: 'New training materials are ready...',
      timestamp: '3 days ago',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      type: 'trainer'
    },
    {
      id: '7',
      sender: 'Ahmed Hassan',
      role: 'Headmaster of Bright Future School',
      message: 'We need assistance with the application...',
      timestamp: '4 days ago',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      type: 'headmaster'
    },
    {
      id: '8',
      sender: 'Maria Rodriguez',
      role: 'Training Manager',
      message: 'Monthly training report attached...',
      timestamp: '5 days ago',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      type: 'trainer'
    }
  ];

  const getFilteredMessages = () => {
    if (activeMessageTab === 'all') return allMessages;
    return allMessages.filter(message => message.type === activeMessageTab);
  };

  const handleApprove = (schoolId: string): void => {
    console.log('Approving school:', schoolId);
  };

  const handleDeny = (schoolId: string): void => {
    console.log('Denying school:', schoolId);
  };

  const handleDownload = (reportId: string): void => {
    console.log('Downloading report:', reportId);
    // Simulate file download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'report.pdf';
    link.click();
  };

  const handleView = (report: Report): void => {
    setSelectedReport(report);
    setShowReportModal(true);
  };

  const handleDelete = (reportId: string): void => {
    console.log('Deleting report:', reportId);
  };

  const handleDownloadFromModal = (): void => {
    if (selectedReport) {
      console.log('Downloading report from modal:', selectedReport.id);
      // Simulate file download
      const link = document.createElement('a');
      link.href = '#';
      link.download = `${selectedReport.name}.pdf`;
      link.click();
    }
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'schools', label: 'Schools', icon: School },
    { id: 'evaluators', label: 'Evaluators', icon: Users },
    { id: 'evaluation-reports', label: 'Evaluation and Reports', icon: FileText },
    { id: 'messaging', label: 'Messaging', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Recent Schools */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Schools</h2>
            <button className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium">
              See All
            </button>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search School"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
              />
            </div>
            <select title="latest" className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joining Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accreditation Period</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentSchools.map((school) => (
                <tr key={school.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.studentNumber.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.joiningDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.accreditationPeriod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Requested Schools */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Requested Schools</h2>
            <button className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium">
              See All
            </button>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search School"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
              />
            </div>
            <select title='latest' className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joining Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accreditation Period</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requestedSchools.map((school) => (
                <tr key={school.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.studentNumber.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.joiningDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.accreditationPeriod}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button
                      onClick={() => handleApprove(school.id)}
                      className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2563EB] transition-colors"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDeny(school.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                    >
                      Deny
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Evaluators */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Evaluators</h2>
            <button className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium">
              See All
            </button>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Evaluator"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
              />
            </div>
            <select title='latest' className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evaluator Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operating Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joining Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Working Period</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {evaluators.slice(0, 3).map((evaluator) => (
                <tr key={evaluator.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{evaluator.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{evaluator.operatingLocation}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{evaluator.joiningDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{evaluator.workingPeriod}</td>
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
            <select title='latest' className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evaluator Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Upload Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports.slice(0, 7).map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.schoolLocation}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.evaluatorName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.uploadDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button
                      onClick={() => handleDownload(report.id)}
                      className="bg-[#1B365D] text-white px-3 py-1 rounded text-sm hover:bg-[#2563EB] transition-colors"
                    >
                      Download
                    </button>
                    <button
                      onClick={() => handleView(report)}
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
    </div>
  );

  const renderSchools = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Schools</h1>
      
      {/* Requested Schools */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Requested Schools (5)</h2>
            <button className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium">
              Load More
            </button>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search School"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
              />
            </div>
            <select title='latest' className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joining Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accreditation Period</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requestedSchools.map((school) => (
                <tr key={school.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.studentNumber.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.joiningDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.accreditationPeriod}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button
                      onClick={() => handleApprove(school.id)}
                      className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2563EB] transition-colors"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDeny(school.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                    >
                      Deny
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Accredited Schools */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Accredited Schools (30)</h2>
            <button className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium">
              Load More
            </button>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search School"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
              />
            </div>
            <select title='latest' className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joining Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accreditation Period</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {accreditedSchools.map((school) => (
                <tr key={school.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.studentNumber.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.joiningDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.accreditationPeriod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderEvaluators = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Evaluators</h1>
      
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Evaluators (80)</h2>
            <button className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium">
              Load More
            </button>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Evaluator"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
              />
            </div>
            <select title='latest' className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evaluator Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operating Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joining Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Working Period</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {evaluators.map((evaluator) => (
                <tr key={evaluator.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{evaluator.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{evaluator.operatingLocation}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{evaluator.joiningDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{evaluator.workingPeriod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderEvaluationReports = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Evaluation and Reports</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Schools Accreditation Summary</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart visualization would go here</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Evaluators Trend Summary</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart visualization would go here</p>
          </div>
        </div>
      </div>

      {/* Uploaded Reports */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Uploaded Reports (10)</h2>
            <button className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium">
              Load More
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
            <select title='latest' className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evaluator Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Upload Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports.map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.schoolLocation}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.evaluatorName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.uploadDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button
                      onClick={() => handleDownload(report.id)}
                      className="bg-[#1B365D] text-white px-3 py-1 rounded text-sm hover:bg-[#2563EB] transition-colors"
                    >
                      Download
                    </button>
                    <button
                      onClick={() => handleView(report)}
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
    </div>
  );

  const renderMessaging = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Messaging</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Messages List */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
              <span className="bg-[#1B365D] text-white text-xs px-2 py-1 rounded-full">
                {messageTabs.find(tab => tab.id === activeMessageTab)?.count || 0}
              </span>
            </div>
          </div>
          
          {/* Message Tabs */}
          <div className="border-b border-gray-200">
            {messageTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMessageTab(tab.id)}
                className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                  activeMessageTab === tab.id ? 'bg-[#1B365D] text-white' : 'text-gray-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${
                      activeMessageTab === tab.id ? 'bg-white text-[#1B365D]' : 'bg-[#1B365D] text-white'
                    }`}>
                      <MessageSquare size={16} />
                    </div>
                    <div>
                      <p className="font-medium">{tab.label}</p>
                      <div className="flex items-center space-x-1">
                        <div className="flex -space-x-1">
                          {getFilteredMessages().slice(0, 3).map((message, index) => (
                            <img 
                              key={index}
                              src={message.avatar} 
                              alt="" 
                              className="w-6 h-6 rounded-full border-2 border-white" 
                            />
                          ))}
                        </div>
                        <span className="text-sm">{tab.count} messages</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="p-4 space-y-4 overflow-y-auto" style={{ maxHeight: '400px' }}>
            {getFilteredMessages().map((message) => (
              <div 
                key={message.id} 
                onClick={() => setSelectedMessage(message)}
                className={`flex items-start space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedMessage?.id === message.id ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                }`}
              >
                <img src={message.avatar} alt={message.sender} className="w-10 h-10 rounded-full" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">{message.sender}</p>
                    <p className="text-xs text-gray-500">{message.timestamp}</p>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{message.role}</p>
                  <p className="text-sm text-gray-600 truncate">{message.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border flex flex-col">
          {selectedMessage ? (
            <>
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={selectedMessage.avatar} alt={selectedMessage.sender} className="w-10 h-10 rounded-full" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{selectedMessage.sender}</h3>
                      <p className="text-sm text-gray-500">{selectedMessage.role}</p>
                    </div>
                  </div>
                  <button title='more' className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>

              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                <div className="flex justify-end">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Hey Mike are you eagerly want to talk to joe ?</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500">Not yet ?</span>
                      <span className="text-xs text-blue-600">Yes</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#1B365D] text-white rounded-lg p-3 max-w-md">
                    <p className="text-sm">So... question. How long has Stewie been unconscious?</p>
                    <p className="text-xs text-blue-200 mt-2">April 23, 2023, 12:33 PM</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                    <p className="text-sm">{selectedMessage.message}</p>
                    <p className="text-xs text-gray-500 mt-2">{selectedMessage.timestamp}</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#1B365D] text-white rounded-lg p-3 max-w-md">
                    <p className="text-sm">Good Chris. I've taught you well. You have the right instincts. When you were babies, I used to knock you kids out every month or so. Some times by accident. Sometimes when the Patriots lost. You just gotta cover it up and everything works it self out. Meg, this is a list of hats. I need these by 4 o'clock.</p>
                    <p className="text-xs text-blue-200 mt-2">April 23, 2023, 12:33 PM</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <button title='smile' className="text-gray-400 hover:text-gray-600">
                    <Smile size={20} />
                  </button>
                  <input
                    type="text"
                    placeholder="What would you like to say?"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
                  />
                  <button title='send' className="bg-[#1B365D] text-white p-2 rounded-lg hover:bg-[#2563EB] transition-colors">
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Select a conversation to start messaging</p>
              </div>
            </div>
          )}
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Names</label>
            <input
              type="text"
              defaultValue="Mike David"
              className="w-full border-0 border-b border-gray-300 px-0 py-2 focus:ring-0 focus:border-[#1B365D] bg-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
            <input
              type="text"
              defaultValue="Admin"
              className="w-full border-0 border-b border-gray-300 px-0 py-2 focus:ring-0 focus:border-[#1B365D] bg-transparent"
              readOnly
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              defaultValue="david@gmail.com"
              className="w-full border-0 border-b border-gray-300 px-0 py-2 focus:ring-0 focus:border-[#1B365D] bg-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              defaultValue="0788888888"
              className="w-full border-0 border-b border-gray-300 px-0 py-2 focus:ring-0 focus:border-[#1B365D] bg-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              defaultValue="Nairobi Kenya"
              className="w-full border-0 border-b border-gray-300 px-0 py-2 focus:ring-0 focus:border-[#1B365D] bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-lg shadow-sm border p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">Notifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notification email</label>
            <input
              type="email"
              defaultValue="david@gmail.com"
              className="w-full border-0 border-b border-gray-300 px-0 py-2 focus:ring-0 focus:border-[#1B365D] bg-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sms Notification Number</label>
            <input
              type="tel"
              defaultValue="0788888888"
              className="w-full border-0 border-b border-gray-300 px-0 py-2 focus:ring-0 focus:border-[#1B365D] bg-transparent"
            />
          </div>
        </div>

        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Allowed Notifications</label>
          <div className="relative">
            <select title='latest' className="w-full lg:w-1/2 border-0 border-b border-gray-300 px-0 py-2 focus:ring-0 focus:border-[#1B365D] bg-transparent appearance-none">
              <option>All</option>
              <option>Email Only</option>
              <option>SMS Only</option>
              <option>None</option>
            </select>
            <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none lg:right-1/2 lg:mr-2" />
          </div>
        </div>
      </div>

      {/* Data Backup */}
      <div className="bg-white rounded-lg shadow-sm border p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">Data Backup</h2>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Backup Frequency</label>
          <div className="relative">
            <select title='period' className="w-full lg:w-1/2 border-0 border-b border-gray-300 px-0 py-2 focus:ring-0 focus:border-[#1B365D] bg-transparent appearance-none">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
            <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none lg:right-1/2 lg:mr-2" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'schools':
        return renderSchools();
      case 'evaluators':
        return renderEvaluators();
      case 'evaluation-reports':
        return renderEvaluationReports();
      case 'messaging':
        return renderMessaging();
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

      {/* Report View Modal */}
      {showReportModal && selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">View Report</h2>
                <button
                  onClick={() => setShowReportModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
                  <p className="text-gray-900">{selectedReport.schoolName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">School Location</label>
                  <p className="text-gray-900">{selectedReport.schoolLocation}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Evaluator Name</label>
                  <p className="text-gray-900">Mike Kingstone</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Uploaded Date</label>
                  <p className="text-gray-900">10 January 2025</p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Document</label>
                <div className="grid grid-cols-2 gap-4">
                  {selectedReport.documents.map((doc, index) => (
                    <div key={index} className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
                      <FileIcon size={48} className="text-gray-400 mb-2" />
                      <p className="text-sm text-gray-700 text-center">{doc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-start">
                <button
                  onClick={handleDownloadFromModal}
                  className="bg-[#1B365D] text-white px-6 py-2 rounded-lg hover:bg-[#2563EB] transition-colors"
                >
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;