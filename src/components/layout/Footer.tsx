import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import Button from '../ui/Button';

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const footerLinks: {
    main: FooterLink[];
    services: FooterLink[];
    legal: FooterLink[];
  } = {
    main: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Media and News', href: '#media' }
    ],
    services: [
      { label: 'IQS Authority', href: '#authority' },
      { label: 'Accreditation', href: '#accreditation' },
      { label: 'Certified Schools', href: '#schools' },
      { label: 'Training', href: '#training' }
    ],
    legal: [
      { label: 'Terms of Use', href: '#terms' },
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Accreditation Company', href: '#company' }
    ]
  };

  const socialLinks: SocialLink[] = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-[#1B365D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-8">
          {/* Logo and Main Links */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">IQS Authority</div>
            <nav className="flex flex-col space-y-2">
              {footerLinks.main.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="flex flex-col space-y-2">
              {footerLinks.services.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <nav className="flex flex-col space-y-2">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter and Social */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Connect with our team</h3>
              <p className="text-blue-200 text-sm mb-4">
                Stay up to date with IQS Authority. Sign up for our newsletter.
              </p>
              
              <div className="flex flex-col space-y-4">
                <Button variant="secondary" className="w-full max-w-xs mx-auto" asChild onClick={() => {}}>
                  <a href="/auth/register">Register Now</a>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Manage Contact Preferences</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-12 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; 2024 IQS Authority. Subject to offering.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;