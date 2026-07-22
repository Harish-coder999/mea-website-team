
import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Instagram, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

import RevealOnScroll from '../components/RevealOnScroll';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message || !formData.phone) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address',
        variant: 'destructive',
      });
      return;
    }

    // Phone validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: 'Invalid Phone Number',
        description: 'Please enter a valid 10-digit phone number',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    // EmailJS Configuration

    const serviceID = 'service_ccoqe4o';
    const templateID = 'template_cvn94uh';
    const publicKey = 'y70_82eBlqQBe5JeK';

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_subject: formData.phone,
      user_message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        () => {
          toast({
            title: 'Message Sent!',
            description: "We'll get back to you soon.",
          });
          setFormData({ name: '', phone: '', email: '', message: '' });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          toast({
            title: 'Error Sending Message',
            description: 'Something went wrong. Please try again later.',
            variant: 'destructive',
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'CIT, Coimbatore, Tamil Nadu',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'mechnotron26@gmail.com',
    },
    {
      icon: Phone,
      title: 'Chairman',
      name: 'Athisivanantha Balan',
      content: '+91 9360034149',
    },
    {
      icon: Phone,
      title: 'Secretary',
      name: 'Alagusundaram',
      content: '+91 9965504499',
    },  
    {
      icon: Phone,
      title: 'Secretary',
      name: 'shree Veknesh Manikandan',
      content: '+91 7845042426',
    },
    {
      icon: Phone,
      title: 'Sponsorship',
      name: 'Jaya Vinish',
      content: '+91 63749 89310',
    },
    {
      icon: Phone,
      title: 'Website',
      name: 'Harish',
      content: '+91 63831 98095',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 animate-fade-in">
      <SEO 
        title="Contact Us" 
        description="Get in touch with the Mechnotron2k26 team. Find location, email, and phone contact details."
        url="https://mechnotron2k26.citmea.in/contact"
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-mechanical-rise px-4">
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold mb-4 text-yellow-400 alert-text">
            Get in Touch. Join the Race.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We’re Always on the Grid.
          </p>
        </div>

        <RevealOnScroll width="100%">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Contact Form + Follow Us */}
            <div className="animate-slide-in-left space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Your Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Enter your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-4 bg-accent text-accent-foreground rounded-lg font-semibold text-lg hover:shadow-[0_0_30px_hsl(5_85%_55%/0.6)] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      Sending...
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

              </form>

              {/* Social Media - Now in left column for desktop */}
              <div className="p-6 bg-card/50 backdrop-blur-lg rounded-lg border border-secondary/20">
                <h2 className="text-2xl font-bold mb-4 -text">
                  Follow Us
                </h2>
                <p className="text-muted-foreground mb-4">
                  Stay updated with the latest news and announcements
                </p>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://www.linkedin.com/in/mea-cit-939522334"
                    className="p-3 bg-secondary/20 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/mechnotron_2k26?igsh=MWR5eHd3cXIwbm1sbQ=="
                    className="p-3 bg-secondary/20 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Info + Map */}
            <div className="space-y-6 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <div className="p-6 bg-card/50 backdrop-blur-lg rounded-lg border border-primary/20">
                <h2 className="text-2xl font-bold mb-6 industrial-text">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    let content;

                    if (info.title === 'Location') {
                      content = (
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.content)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      );
                    } else if (info.title === 'Email') {
                      content = (
                        <a
                          href={`mailto:${info.content}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      );
                    } else if (info.title.includes('Phone') || info.title.includes('Sponsorship') || info.title.includes('Chairman') || info.title.includes('Secretary') || info.title.includes('Website')) {
                      content = (
                        <a
                          href={`tel:${info.content.replace(/\s/g, '')}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      );
                    } else {
                      content = <p className="text-muted-foreground">{info.content}</p>;
                    }

                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="p-3 bg-primary/20 rounded-lg">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {(info as any).name && (
                            <p className="text-sm text-primary font-medium mb-1">{(info as any).name}</p>
                          )}
                          {content}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Location Map */}
              <div className="p-6 bg-card/50 backdrop-blur-lg rounded-lg border border-secondary/20">
                <h2 className="text-2xl font-bold mb-4 steel-text">
                  Find Us
                </h2>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2328.5496214410573!2d77.0255911224497!3d11.028266934379705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858979f85136b%3A0xdd9ca28d3c37cf8a!2sCoimbatore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1721640749584!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default Contact;
