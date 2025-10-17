import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <div className="font-semibold text-slate-900 dark:text-white mb-1">
              Email
            </div>
            <a
              href="mailto:info@corporate-consultancy.com"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              info@corporate-consultancy.com
            </a>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <div className="font-semibold text-slate-900 dark:text-white mb-1">
              Phone
            </div>
            <a
              href="tel:+15551234567"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              +1 (555) 123-4567
            </a>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <div className="font-semibold text-slate-900 dark:text-white mb-1">
              Office
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              123 Business Ave<br />
              New York, NY 10001
            </p>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <div className="font-semibold text-slate-900 dark:text-white mb-1">
              Hours
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              Monday - Friday<br />
              9:00 AM - 6:00 PM EST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
