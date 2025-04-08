import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FolderKanban,
  DollarSign,
  BarChart3,
  ScrollText,
  Webhook,
  Key,
  Settings,
  Users,
  HelpCircle,
  Activity,
  LogOut,
} from 'lucide-react';

const navigation = [
  { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Projects', path: '/dashboard/projects', icon: FolderKanban },
  { name: 'Transactions', path: '/dashboard/transactions', icon: DollarSign },
  { name: 'Analytics', path: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Request Logs', path: '/dashboard/logs', icon: ScrollText },
  { name: 'Webhooks', path: '/dashboard/webhooks', icon: Webhook },
  { name: 'API Keys', path: '/dashboard/api-keys', icon: Key },
  { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  { name: 'Team', path: '/dashboard/team', icon: Users },
  { name: 'Support', path: '/dashboard/support', icon: HelpCircle },
  { name: 'System Status', path: '/dashboard/system-status', icon: Activity },
];

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <nav className="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-6">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            SessPay
          </Link>
        </div>
        <div className="px-4 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}