import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Activity,
  Shield,
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <nav className="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            SessPay
          </Link>
        </div>
        <div className="px-4">
          <NavItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
          <NavItem icon={<Users size={20} />} text="Users" />
          <NavItem icon={<Settings size={20} />} text="Settings" />
          <NavItem icon={<LogOut size={20} />} text="Logout" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Welcome back! Here's your overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Revenue"
            value="$12,426"
            change="+14.2%"
            trend="up"
            icon={<DollarSign className="h-6 w-6 text-green-600" />}
          />
          <StatCard
            title="Active Sessions"
            value="1,893"
            change="+7.4%"
            trend="up"
            icon={<Activity className="h-6 w-6 text-blue-600" />}
          />
          <StatCard
            title="Avg. Session Duration"
            value="24m 30s"
            change="-2.1%"
            trend="down"
            icon={<Clock className="h-6 w-6 text-orange-600" />}
          />
          <StatCard
            title="Failed Auth Attempts"
            value="23"
            change="-5.8%"
            trend="down"
            icon={<Shield className="h-6 w-6 text-red-600" />}
          />
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="divide-y divide-gray-200">
            <ActivityItem
              title="New session started"
              description="User ID: 8a7b6c5d"
              time="2 minutes ago"
              type="session"
            />
            <ActivityItem
              title="Payment received"
              description="$29.99 - Premium Plan"
              time="15 minutes ago"
              type="payment"
            />
            <ActivityItem
              title="Session expired"
              description="User ID: 4e3d2f1a"
              time="1 hour ago"
              type="session"
            />
            <ActivityItem
              title="New API key generated"
              description="For: Production Environment"
              time="2 hours ago"
              type="security"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, text, active = false }: { icon: React.ReactNode; text: string; active?: boolean }) {
  return (
    <button
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm ${
        active
          ? 'bg-indigo-50 text-indigo-600'
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </button>
  );
}

function StatCard({
  title,
  value,
  change,
  trend,
  icon,
}: {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-start mb-4">
        <div>{icon}</div>
        <span
          className={`flex items-center text-sm ${
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {change}
          {trend === 'up' ? (
            <ArrowUpRight size={16} className="ml-1" />
          ) : (
            <ArrowDownRight size={16} className="ml-1" />
          )}
        </span>
      </div>
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
    </div>
  );
}

function ActivityItem({
  title,
  description,
  time,
  type,
}: {
  title: string;
  description: string;
  time: string;
  type: 'session' | 'payment' | 'security';
}) {
  return (
    <div className="p-6 hover:bg-gray-50">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );
}