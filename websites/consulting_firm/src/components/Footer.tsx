import Link from 'next/link';
import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300">
      <div className="grid-container section-compact">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">
                  Corporate
                </span>
                <span className="text-xs text-slate-400 -mt-1">
                  Consultancy
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Trusted business consulting partner for enterprise executives and decision makers worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@corporate-consultancy.com"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase text-sm tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  News & Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase text-sm tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#strategy"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Strategy Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services#digital"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#operations"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Operations Excellence
                </Link>
              </li>
              <li>
                <Link
                  href="/services#risk"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Risk Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase text-sm tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  123 Business Ave<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:info@corporate-consultancy.com"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  info@corporate-consultancy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Corporate Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-slate-500 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-slate-500 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
