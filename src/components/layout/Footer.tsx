import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-2xl font-semibold text-foreground tracking-tight">
              ATHLETIC
            </Link>
            <p className="mt-4 text-subtle">
              Premium sportswear for athletes and enthusiasts. Quality meets style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-subtle hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-subtle hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-subtle hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-subtle hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Brands
            </h4>
            <ul className="space-y-3">
              <li><span className="text-subtle">Nike</span></li>
              <li><span className="text-subtle">Adidas</span></li>
              <li><span className="text-subtle">Puma</span></li>
              <li><span className="text-subtle">Under Armour</span></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-subtle">
              Subscribe to our newsletter for exclusive deals.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-subtle text-xs">
            © 2024 Athletic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-subtle text-xs hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-subtle text-xs hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
