'use client';

import { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { postFormData } from '@/libs/postFormData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const result = await postFormData(formData);
      
      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="scroll-snap-section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-button px-4 py-2 mb-6">
            <Send className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-semibold">Get in Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to
            <span className="gradient-text"> Transform Your Business?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Schedule a free consultation to discuss your challenges and discover 
            how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Tell Us About Your Needs *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none"
                  placeholder="Describe your business challenges and goals..."
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <p className="text-emerald-700 dark:text-emerald-400 font-medium">
                    Thank you! We'll be in touch within 24 hours.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-700 dark:text-red-400 font-medium">
                    {errorMessage}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Schedule Free Consultation'}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email Us</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Get in touch via email
                </p>
                <a href="mailto:contact@eliteconsulting.com" className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  contact@eliteconsulting.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Call Us</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Mon-Fri 9am-6pm EST
                </p>
                <a href="tel:+15551234567" className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Visit Us</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  123 Business Plaza<br />
                  Suite 500<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
