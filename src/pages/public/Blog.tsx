import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with SessPay Integration',
      excerpt: 'Learn how to integrate SessPay into your application in under 5 minutes with our step-by-step guide.',
      author: 'Michael Chen',
      date: 'Mar 15, 2025',
      category: 'Tutorial',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Best Practices for Session-Based Monetization',
      excerpt: 'Discover proven strategies for maximizing revenue with session-based content access control.',
      author: 'Sarah Johnson',
      date: 'Mar 12, 2025',
      category: 'Best Practices',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Introducing Advanced Analytics Dashboard',
      excerpt: 'Explore our new analytics features designed to give you deeper insights into your content monetization.',
      author: 'Emily Rodriguez',
      date: 'Mar 10, 2025',
      category: 'Product Update',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Latest Updates & Resources
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Stay up to date with the latest features, best practices, and developer resources
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                className="h-48 w-full object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="inline-flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      {post.category}
                    </span>
                    <button className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-indigo-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="px-6 py-6 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
            <div className="xl:w-0 xl:flex-1">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Want product news and updates?
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                Sign up for our newsletter to stay up to date.
              </p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-lg border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center rounded-lg border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Notify me
                </button>
              </form>
              <p className="mt-3 text-sm text-indigo-200">
                We care about your data. Read our{' '}
                <a href="#" className="font-medium text-white underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}