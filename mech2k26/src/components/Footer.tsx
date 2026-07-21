import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/mea-cit-939522334', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://www.instagram.com/mechnotron_2k26?igsh=MWR5eHd3cXIwbm1sbQ==', label: 'Instagram' },
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-lg border-t border-primary/20 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Mechnotron 2k26. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                aria-label={social.label}
                className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
