import type React from "react"
import { useState } from "react"
import {
  LayoutDashboard,
  School,
  FileText,
  History,
  Settings,
  Search,
  ChevronDown,
  TrendingUp,
  X,
  FileIcon,
  Upload,
} from "lucide-react"

interface StatCard {
  title: string
  value: string
  change: string
  icon: React.ReactNode
}

interface AssignedSchool {
  id: string
  schoolName: string
  studentNumber: number
  joiningDate: string
  assignitationPeriod: string
}

interface Report {
  id: string
  reportName: string
  schoolLocation: string
  uploadDate: string
}

interface HistoryItem {
  id: string
  action: string
  timestamp: string
}

const EvaluatorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard")
  const [showReportModal, setShowReportModal] = useState<boolean>(false)
  const [showAddReportModal, setShowAddReportModal] = useState<boolean>(false)
  const [showFeedbackModal, setShowFeedbackModal] = useState<boolean>(false)
  const [selectedReport, setSelectedReport] = useState<Report | null>(null)

  const stats: StatCard[] = [
    {
      title: "Assigned Schools",
      value: "5",
      change: "15%",
      icon: <span className="text-lg font-bold">$</span>,
    },
    {
      title: "Total Reports",
      value: "1000000",
      change: "15%",
      icon: <span className="text-lg font-bold">$</span>,
    },
  ]

  const assignedSchools: AssignedSchool[] = Array(3)
    .fill(null)
    .map((_, i) => ({
      id: `school-${i}`,
      schoolName: "Kingston High School",
      studentNumber: 850000,
      joiningDate: "10/5/2025",
      assignitationPeriod: "2 Years",
    }))

  const reports: Report[] = Array(8)
    .fill(null)
    .map((_, i) => ({
      id: `report-${i}`,
      reportName: "Kingston School Report",
      schoolLocation: "Nairobi Kenya",
      uploadDate: "10/5/2025",
    }))

  const historyItems: HistoryItem[] = Array(12)
    .fill(null)
    .map((_, i) => ({
      id: `history-${i}`,
      action: "You have updated the kingston highschool report",
      timestamp: "30 min ago",
    }))

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "schools", label: "Schools", icon: School },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "history", label: "History", icon: History },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  const ReportsTrendChart = () => (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Reports Trend Summary</h3>
      <div className="h-64">
        <svg className="w-full h-full" viewBox="0 0 800 200">
          {/* Chart bars */}
          {Array.from({ length: 12 }, (_, i) => (
            <rect
              key={i}
              x={50 + i * 60}
              y={50}
              width={40}
              height={120}
              fill="#1B365D"
              className="hover:fill-blue-700 transition-colors"
            />
          ))}

          {/* Y-axis labels */}
          <text x="20" y="60" className="text-xs fill-gray-500">
            200
          </text>
          <text x="20" y="100" className="text-xs fill-gray-500">
            150
          </text>
          <text x="20" y="140" className="text-xs fill-gray-500">
            100
          </text>
          <text x="20" y="180" className="text-xs fill-gray-500">
            50
          </text>
          <text x="30" y="195" className="text-xs fill-gray-500">
            0
          </text>

          {/* X-axis labels */}
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, i) => (
            <text key={month} x={70 + i * 60} y="195" textAnchor="middle" className="text-xs fill-gray-500">
              {month}
            </text>
          ))}
        </svg>
      </div>
    </div>
  )

  const handleViewReport = (report: Report) => {
    setSelectedReport(report)
    setShowReportModal(true)
  }

  const handleGiveFeedback = () => {
    setShowFeedbackModal(true)
  }

  const renderDashboard = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div className="bg-[#1B365D] text-white p-3 rounded-lg">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Assigned Schools */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Assigned Schools</h2>
            <button className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium">See All</button>
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
            <select title="period" className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  School Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joining Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assignitation Period
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {assignedSchools.map((school) => (
                <tr key={school.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.schoolName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {school.studentNumber.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.joiningDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.assignitationPeriod}</td>
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
            <button className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium">See All</button>
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
            <select title="period" className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  School Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Upload Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports.slice(0, 8).map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.reportName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.schoolLocation}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.uploadDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button className="bg-[#1B365D] text-white px-3 py-1 rounded text-sm hover:bg-[#2563EB] transition-colors">
                      Download
                    </button>
                    <button
                      onClick={() => handleViewReport(report)}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                    >
                      View
                    </button>
                    <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors">
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
  )

  const renderSchools = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Schools</h1>

      {/* Assigned Schools Stats */}
      <div className="bg-white rounded-lg p-6 shadow-sm border max-w-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Assigned Schools</p>
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

      {/* Assigned Schools Table */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Assigned Schools (3)</h2>
            <button className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium">Load More</button>
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
            <select title="period" className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  School Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joining Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assignitation Period
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {assignedSchools.map((school) => (
                <tr key={school.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.schoolName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {school.studentNumber.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.joiningDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{school.assignitationPeriod}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={handleGiveFeedback}
                      className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2563EB] transition-colors"
                    >
                      Give School Feedback
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderReports = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Reports</h1>

      {/* Stats Card */}
      <div className="bg-white rounded-lg p-6 shadow-sm border max-w-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Reports</p>
            <p className="text-2xl font-bold text-gray-900">1000000</p>
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

      {/* Reports Trend Chart */}
      <ReportsTrendChart />

      {/* Uploaded Reports */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Uploaded Reports</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowAddReportModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Add new Report
              </button>
              <button className="bg-[#1B365D] text-white px-4 py-2 rounded-lg text-sm font-medium">See All</button>
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
            <select title="period" className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  School Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Upload Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports.map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.reportName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.schoolLocation}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.uploadDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button className="bg-[#1B365D] text-white px-3 py-1 rounded text-sm hover:bg-[#2563EB] transition-colors">
                      Download
                    </button>
                    <button
                      onClick={() => handleViewReport(report)}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                    >
                      View
                    </button>
                    <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors">
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
  )

  const renderHistory = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">History</h1>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Recent action"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
              />
            </div>
            <select title="period" className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
              <option>Today</option>
            </select>
          </div>
        </div>
        <div className="p-6 space-y-4">
          {historyItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
            >
              <p className="text-sm text-gray-900">{item.action}</p>
              <span className="text-sm text-gray-500">{item.timestamp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Setting</h1>

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
              defaultValue="Evaluator"
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
            <select title="send" className="w-full lg:w-1/2 border-0 border-b border-gray-300 px-0 py-2 focus:ring-0 focus:border-[#1B365D] bg-transparent appearance-none">
              <option>All</option>
              <option>Email Only</option>
              <option>SMS Only</option>
              <option>None</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none lg:right-1/2 lg:mr-2"
            />
          </div>
        </div>
      </div>

      {/* Data Backup */}
      <div className="bg-white rounded-lg shadow-sm border p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">Data Backup</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Backup Frequency</label>
          <div className="relative">
            <select title="period" className="w-full lg:w-1/2 border-0 border-b border-gray-300 px-0 py-2 focus:ring-0 focus:border-[#1B365D] bg-transparent appearance-none">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none lg:right-1/2 lg:mr-2"
            />
          </div>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboard()
      case "schools":
        return renderSchools()
      case "reports":
        return renderReports()
      case "history":
        return renderHistory()
      case "settings":
        return renderSettings()
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#1B365D] text-white flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold">Iqs Authority</h1>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id ? "bg-white text-[#1B365D]" : "text-white hover:bg-blue-700"
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">{renderContent()}</div>
      </div>

      {/* View Report Modal */}
      {showReportModal && selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">View Report</h2>
                <button title="Close" onClick={() => setShowReportModal(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
                  <p className="text-gray-900">Kingston High School</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">School Location</label>
                  <p className="text-gray-900">Nairobi Kenya</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Document</label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
                    <FileIcon size={48} className="text-gray-400 mb-2" />
                    <p className="text-sm text-gray-700 text-center">Kingston High School report.pdf</p>
                  </div>
                  <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
                    <FileIcon size={48} className="text-gray-400 mb-2" />
                    <p className="text-sm text-gray-700 text-center">Kingston High School report 2.pdf</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-start">
                <button className="bg-[#1B365D] text-white px-6 py-2 rounded-lg hover:bg-[#2563EB] transition-colors">
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add New Report Modal */}
      {showAddReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Add New Report</h2>
                <button title="Close" onClick={() => setShowAddReportModal(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                  <select title="school" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
                    <option>Choose school Name</option>
                    <option>Kingston High School</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">School Location</label>
                  <select title="location" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
                    <option>Choose school Location</option>
                    <option>Nairobi Kenya</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Document</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Upload Report Document</p>
                </div>
              </div>

              <div className="flex justify-start">
                <button className="bg-[#1B365D] text-white px-6 py-2 rounded-lg hover:bg-[#2563EB] transition-colors">
                  Upload Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add School Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Add School FeedBack</h2>
                <button title="Close" onClick={() => setShowFeedbackModal(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Feedback Rating</label>
                  <select title="select rating" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
                    <option>Choose rating</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Average</option>
                    <option>Poor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Feedback Type</label>
                  <select title="select type" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent">
                    <option>Choose Feedback Type</option>
                    <option>Academic Performance</option>
                    <option>Infrastructure</option>
                    <option>Staff Quality</option>
                    <option>Student Behavior</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  rows={4}
                  placeholder="Feedback Description"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#1B365D] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Document</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Upload Supporting Document</p>
                </div>
              </div>

              <div className="flex justify-start">
                <button className="bg-[#1B365D] text-white px-6 py-2 rounded-lg hover:bg-[#2563EB] transition-colors">
                  Send Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EvaluatorDashboard
