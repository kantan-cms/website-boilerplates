'use client';

import { useState } from 'react';
import { postFormData } from '@/libs/postFormData';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactFormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await postFormData(formData);

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your inquiry! We\'ll get back to you within 24 hours.',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit form. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="neu-card-lg p-8 md:p-12">
      <h2 className="text-3xl font-bold text-foreground mb-6">
        Send Us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-foreground font-medium mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="neu-card-inset w-full px-6 py-4 text-foreground placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-foreground font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="neu-card-inset w-full px-6 py-4 text-foreground placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-foreground font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="neu-card-inset w-full px-6 py-4 text-foreground placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="+1 (234) 567-890"
            />
          </div>

          <div>
            <label htmlFor="eventType" className="block text-foreground font-medium mb-2">
              Event Type *
            </label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="neu-card-inset w-full px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              <option value="">Select event type</option>
              <option value="wedding">Wedding</option>
              <option value="engagement">Engagement</option>
              <option value="corporate-event">Corporate Event</option>
              <option value="portrait">Portrait Session</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="eventDate" className="block text-foreground font-medium mb-2">
            Event Date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="neu-card-inset w-full px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-foreground font-medium mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="neu-card-inset w-full px-6 py-4 text-foreground placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
            placeholder="Tell us about your event, vision, and any specific requirements..."
          />
        </div>

        {/* Submit Status */}
        {submitStatus.type && (
          <div
            className={`neu-card p-4 flex items-center ${
              submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {submitStatus.type === 'success' ? (
              <CheckCircle size={20} className="mr-3 flex-shrink-0" />
            ) : (
              <AlertCircle size={20} className="mr-3 flex-shrink-0" />
            )}
            <span>{submitStatus.message}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="neu-button w-full py-4 font-semibold text-primary hover:text-accent disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <span className="mr-2">Sending...</span>
            </>
          ) : (
            <>
              <span className="mr-2">Send Message</span>
              <Send size={20} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
