'use client';

import { useState, FormEvent } from 'react';
import { postFormData } from '@/libs/postFormData';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields',
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address',
      });
      return;
    }

    setStatus({ type: 'loading' });

    try {
      const result = await postFormData({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        submittedAt: new Date().toISOString(),
      });

      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.',
      });
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 scroll-mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-block glass rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold gradient-text">CONTACT US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Form */}
        <div className="glass-strong rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl glass border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white placeholder-slate-500 transition-all"
                placeholder="John Doe"
                disabled={status.type === 'loading'}
              />
            </div>

            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl glass border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white placeholder-slate-500 transition-all"
                placeholder="john@example.com"
                disabled={status.type === 'loading'}
              />
            </div>

            {/* Message field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-xl glass border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white placeholder-slate-500 transition-all resize-none"
                placeholder="Tell us about your project or question..."
                disabled={status.type === 'loading'}
              />
            </div>

            {/* Status message */}
            {status.type === 'success' && (
              <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <p className="text-green-700 dark:text-green-300 text-sm">
                  {status.message}
                </p>
              </div>
            )}

            {status.type === 'error' && (
              <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                <p className="text-red-700 dark:text-red-300 text-sm">
                  {status.message}
                </p>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {status.type === 'loading' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Additional info */}
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              By submitting this form, you agree to our{' '}
              <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Privacy Policy
              </a>
              {' '}and{' '}
              <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Terms of Service
              </a>
              .
            </p>
          </div>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="glass-strong rounded-xl p-6 text-center">
            <div className="text-2xl mb-3">📧</div>
            <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">Email</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              hello@bizgrow.com
            </p>
          </div>

          <div className="glass-strong rounded-xl p-6 text-center">
            <div className="text-2xl mb-3">📞</div>
            <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">Phone</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              +1 (234) 567-890
            </p>
          </div>

          <div className="glass-strong rounded-xl p-6 text-center">
            <div className="text-2xl mb-3">💬</div>
            <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">Live Chat</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Available 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
