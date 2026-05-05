import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_gb2rpil", "template_euw29pl", formData, "lXUrv8rDnX8kzQNgq")
      .then(
        () => {
          toast.success("Message sent successfully!");
        },
        () => {
          toast.error("Failed to send message");
        },
      );
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: [
        "Hi-Tech Computers India",
        "60th Main Road",
        "Kubera Puram, Kusugal Rd",
        "Hubballi, Karnataka 580023",
      ],
    },
    {
      icon: Phone,
      title: "Contact",
      people: [
        {
          name: "Carbon Hi-Tech",
          phone: "+91 91488 25040",
          email: "admin@hitechit.com",
        },
        {
          name: "Nihal",
          phone: "+91 96635 54608",
          email: "nihal@hitechit.com",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-900/30 py-16" data-testid="contact-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-4"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              CONTACT <span className="text-blue-400">US</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Get in touch with our team for inquiries, quotes, and support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;

                  return (
                    <div
                      key={index}
                      className="p-6 bg-slate-900/50 border border-slate-800 rounded-sm"
                    >
                      <div className="w-12 h-12 mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>

                      <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-4">
                        {info.title}
                      </h3>

                      {/* Address */}
                      {info.content && (
                        <div className="text-slate-300 space-y-1">
                          {info.content.map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </div>
                      )}

                      {info.people && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {info.people.map((person, i) => (
                            <div key={i} className="space-y-2">
                              <p className="text-white font-semibold text-sm">
                                {person.name}
                              </p>

                              <a
                                href={`tel:${person.phone}`}
                                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm"
                              >
                                <Phone className="w-4 h-4 text-blue-400" />
                                {person.phone}
                              </a>

                              <a
                                href={`mailto:${person.email}`}
                                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm"
                              >
                                <Mail className="w-4 h-4 text-blue-400" />
                                {person.email}
                              </a>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-slate-900/50 border border-slate-800 rounded-sm"
              >
                <h2
                  className="text-2xl md:text-3xl font-bold tracking-tight uppercase mb-6"
                  style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                >
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} data-testid="contact-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-slate-300 uppercase tracking-wide mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        data-testid="contact-name-input"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 rounded-sm py-3 px-4 outline-none transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-slate-300 uppercase tracking-wide mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        data-testid="contact-email-input"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 rounded-sm py-3 px-4 outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-slate-300 uppercase tracking-wide mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        data-testid="contact-phone-input"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 rounded-sm py-3 px-4 outline-none transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold text-slate-300 uppercase tracking-wide mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        data-testid="contact-company-input"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 rounded-sm py-3 px-4 outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-300 uppercase tracking-wide mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      data-testid="contact-message-input"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 rounded-sm py-3 px-4 outline-none transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    data-testid="contact-submit-btn"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
