import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfoSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Contact Information
        </h2>
        <p className="text-secondary leading-relaxed mb-8">
          Prefer to reach out directly? Here's how you can contact us.
        </p>
      </div>

      <div className="space-y-6">
        <div className="neu-card p-6">
          <div className="flex items-start">
            <div className="neu-card-sm p-3 mr-4">
              <Mail size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <a
                href="mailto:hello@artistry.com"
                className="text-secondary hover:text-accent transition-colors"
              >
                hello@artistry.com
              </a>
            </div>
          </div>
        </div>

        <div className="neu-card p-6">
          <div className="flex items-start">
            <div className="neu-card-sm p-3 mr-4">
              <Phone size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Phone</h3>
              <a
                href="tel:+1234567890"
                className="text-secondary hover:text-accent transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>

        <div className="neu-card p-6">
          <div className="flex items-start">
            <div className="neu-card-sm p-3 mr-4">
              <MapPin size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Studio</h3>
              <p className="text-secondary">
                123 Creative Street<br />
                Art District, CA 90210
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="neu-card p-6">
        <h3 className="font-semibold text-foreground mb-3">Office Hours</h3>
        <div className="space-y-2 text-secondary text-sm">
          <div className="flex justify-between">
            <span>Monday - Friday</span>
            <span>9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span>10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span>By Appointment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
