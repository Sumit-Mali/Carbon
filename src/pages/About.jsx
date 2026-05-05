import { motion } from 'framer-motion';
import { Shield, Award, Users, MapPin } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '20+', label: 'Years Experience', icon: Award },
    { value: '5000+', label: 'Installations', icon: Shield },
    { value: '500+', label: 'Happy Clients', icon: Users },
    { value: '30+', label: 'Cities Served', icon: MapPin }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description:
        'We deliver OEM-grade products that meet international standards and exceed customer expectations.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description:
        'Continuously advancing our technology to provide cutting-edge entertainment and security solutions.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description:
        'Building lasting relationships through reliable products and exceptional after-sales support.'
    },
    {
      icon: MapPin,
      title: 'Pan-India Presence',
      description:
        'Comprehensive sales and service network ensuring prompt support wherever you are.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-900/30 py-16" data-testid="about-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-4"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              ABOUT <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">CARBON</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Leading the way in bus entertainment and security solutions for over two decades
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                WHO <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">WE ARE</span>
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  CARBON is a brand of <strong className="text-white">Hi-Tech Computers India</strong>, headquartered at Trident Tower in Hubli. We specialize in providing advanced onboard entertainment and security solutions for buses and coaches.
                </p>
                <p>
                  With over 20 years of industry experience, we have established ourselves as a trusted partner for leading OEMs including Volvo, Tata Motors, Ashok Leyland, Scania, and MCV.
                </p>
                <p>
                  Our comprehensive product range includes roof monitors, head units, DVR systems, cameras, speakers, amplifiers, and complete VOD solutions - everything needed for modern passenger transport.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1605554743058-9bdef96d8d83?q=80&w=2070&auto=format&fit=crop"
                  alt="Bus Equipment"
                  className="rounded-sm shadow-2xl border border-slate-800"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-900/30" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`stat-card-${index}`}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-blue-400" />
                  </div>
                  <div
                    className="text-4xl md:text-5xl font-black text-white mb-2"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-32" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-4"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              OUR <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">Values</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`value-card-${index}`}
                  className="p-8 bg-slate-900/50 border border-slate-800 hover:bg-slate-900/80 transition-all duration-300 rounded-sm"
                >
                  <div className="w-16 h-16 mb-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-slate-900/30" data-testid="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-4"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              WHY <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">CHOOSE CARBON</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-900/50 border border-slate-800 rounded-sm"
            >
              <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">
                Proven Track Record
              </h3>
              <p className="text-slate-400 text-sm">
                Over 20 years of delivering reliable solutions to the commercial vehicle industry
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-900/50 border border-slate-800 rounded-sm"
            >
              <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">
                OEM Partnerships
              </h3>
              <p className="text-slate-400 text-sm">
                Trusted by global brands like Volvo, Tata, Ashok Leyland, Scania, and MCV
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-900/50 border border-slate-800 rounded-sm"
            >
              <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">
                Complete Solutions
              </h3>
              <p className="text-slate-400 text-sm">
                One-stop shop for all bus entertainment, surveillance, and power requirements
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-900/50 border border-slate-800 rounded-sm"
            >
              <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">
                Quality Assurance
              </h3>
              <p className="text-slate-400 text-sm">
                All products meet international standards and undergo rigorous testing
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-900/50 border border-slate-800 rounded-sm"
            >
              <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">
                Technical Support
              </h3>
              <p className="text-slate-400 text-sm">
                Comprehensive after-sales service and technical assistance across India
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-900/50 border border-slate-800 rounded-sm"
            >
              <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">
                Competitive Pricing
              </h3>
              <p className="text-slate-400 text-sm">
                Best value for money without compromising on quality or performance
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
