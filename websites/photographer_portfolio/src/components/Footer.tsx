import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 py-12 md:px-8 mt-20">
      <div className="neu-card max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-primary mb-4">Artistry</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Capturing life's most precious moments with elegance and artistic vision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-secondary hover:text-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary hover:text-accent transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-secondary hover:text-accent transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-secondary hover:text-accent transition-colors text-sm">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-secondary text-sm">Wedding Photography</li>
              <li className="text-secondary text-sm">Event Photography</li>
              <li className="text-secondary text-sm">Portrait Sessions</li>
              <li className="text-secondary text-sm">Corporate Events</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-secondary text-sm">
                <Mail size={16} className="mr-2" />
                <a href="mailto:hello@artistry.com" className="hover:text-accent transition-colors">
                  hello@artistry.com
                </a>
              </li>
              <li className="flex items-center text-secondary text-sm">
                <Phone size={16} className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start text-secondary text-sm">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Creative Street<br />Art District, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="pt-8 border-t border-secondary/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary text-sm mb-4 md:mb-0">
            {currentYear} Artistry Photography. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="neu-button p-2 hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="neu-button p-2 hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="neu-button p-2 hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
