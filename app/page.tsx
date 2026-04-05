'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiTrendingUp, FiShield, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
              Tax & Trucking <span className="text-accent-500">Done Right</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-100 mb-8">
              Complete tax and trucking compliance solutions for individuals, small businesses, and trucking companies.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/start-service"
                className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded font-semibold transition"
              >
                Start a Service <FiArrowRight className="ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-primary-700 text-white px-8 py-4 rounded font-semibold transition"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-accent-500 to-accent-600 rounded flex items-center justify-center">
                <span className="text-6xl font-bold opacity-20">Consulics</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions tailored to your needs</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition hover:-translate-y-2">
                <div className="text-4xl text-accent-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link href={service.link} className="text-primary-700 font-semibold hover:text-primary-900 flex items-center">
                  Learn more <FiArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Start Section */}
      <motion.section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Get Started in Minutes</h2>
            <p className="text-xl text-gray-600">Choose your service and complete your first step</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {quickStart.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-2 border-primary-200 rounded-lg p-8 hover:border-primary-700 transition"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-primary-700 mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link
                  href={item.cta_link}
                  className="inline-block bg-primary-700 text-white px-6 py-2 rounded hover:bg-primary-800 transition"
                >
                  {item.cta_text}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section className="py-20 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Consulics?</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants} className="flex gap-4">
                <FiCheck className="text-accent-500 text-2xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-100">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join hundreds of satisfied clients who trust Consulics with their tax and business compliance needs.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/start-service"
              className="inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 text-white px-8 py-4 rounded font-semibold transition"
            >
              Start Your Service Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white px-8 py-4 rounded font-semibold transition"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

const services = [
  {
    title: 'Tax Services',
    description: 'Individual and business tax filing, planning, and compliance',
    link: '/services/tax',
    icon: <FiTrendingUp />,
  },
  {
    title: 'Trucking Services',
    description: 'IFTA, IRP, DOT, and trucking company compliance',
    link: '/services/trucking',
    icon: '🚛',
  },
  {
    title: 'Consultation',
    description: 'Expert advice from experienced professionals',
    link: '/contact',
    icon: <FiShield />,
  },
  {
    title: 'Support',
    description: '24/7 customer support and document assistance',
    link: '/support',
    icon: <FiZap />,
  },
];

const quickStart = [
  {
    title: 'File My Taxes',
    description: 'Upload documents and complete your tax filing in minutes',
    cta_text: 'Start Filing',
    cta_link: '/start-service?type=tax',
  },
  {
    title: 'Start Trucking Company',
    description: 'Register your trucking business with all required approvals',
    cta_text: 'Start Company',
    cta_link: '/start-service?type=trucking',
  },
  {
    title: 'IFTA/IRP Services',
    description: 'Register for IFTA and IRP services quickly and easily',
    cta_text: 'Register Now',
    cta_link: '/start-service?type=ifta-irp',
  },
];

const benefits = [
  {
    title: 'Expert Team',
    description: 'Experienced tax and trucking professionals with years of industry knowledge',
  },
  {
    title: 'Fast Processing',
    description: 'Quick turnaround times without compromising on accuracy',
  },
  {
    title: 'Secure Platform',
    description: 'Bank-level security for all your sensitive documents and information',
  },
  {
    title: 'Affordable Pricing',
    description: 'Transparent, competitive pricing with no hidden fees',
  },
  {
    title: '24/7 Support',
    description: 'Responsive customer support team available when you need us',
  },
  {
    title: 'Guaranteed Compliance',
    description: 'Rest assured your documents meet all state and federal requirements',
  },
];
