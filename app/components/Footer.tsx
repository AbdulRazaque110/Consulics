import React from 'react';
import Link from 'next/link';
import { FiFacebook, FiTwitter, FiLinkedin, FiYoutube, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Consulics</h3>
            <p className="text-gray-400 text-sm">
              Professional tax and trucking compliance services for businesses and individuals.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/services/tax" className="hover:text-white transition">Tax Services</Link></li>
              <li><Link href="/services/trucking" className="hover:text-white transition">Trucking Services</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/resources/hvut-2290" className="hover:text-white transition">HVUT 2290</Link></li>
              <li><Link href="/resources/ifta" className="hover:text-white transition">IFTA</Link></li>
              <li><Link href="/resources/irp" className="hover:text-white transition">IRP</Link></li>
              <li><Link href="/resources/apportioned-plates" className="hover:text-white transition">Apportioned Plates</Link></li>
              <li><Link href="/resources/for-hire-tags" className="hover:text-white transition">For-Hire Tags</Link></li>
              <li><Link href="/resources/motor-carrier-services" className="hover:text-white transition">Motor Carrier Services</Link></li>
              <li><Link href="/resources/operating-authority" className="hover:text-white transition">Operating Authority</Link></li>
              <li><Link href="/resources/overload-trip-permits" className="hover:text-white transition">Overload Trip Permits</Link></li>
            </ul>
          </div>

          {/* Resources Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 opacity-0">-</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/resources/ifta-irp-trip-permits" className="hover:text-white transition">IFTA & IRP Trip Permits</Link></li>
              <li><Link href="/resources/heavy-highway-tax" className="hover:text-white transition">Heavy Highway Tax</Link></li>
              <li><Link href="/resources/cdl" className="hover:text-white transition">CDL License</Link></li>
              <li><Link href="/resources/dmv-motor-carrier" className="hover:text-white transition">DMV Motor Carrier</Link></li>
              <li><Link href="/resources/usdot" className="hover:text-white transition">USDOT</Link></li>
              <li><Link href="/resources/fmcsa" className="hover:text-white transition">FMCSA</Link></li>
              <li><Link href="/resources/prism" className="hover:text-white transition">PRISM</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@consulics.com</li>
              <li>Phone: (555) 123-4567</li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2026 Consulics. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/consulics" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FiFacebook size={20} />
              </a>
              <a href="https://x.com/consulics" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FiTwitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/consulics" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FiLinkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@consulics" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FiYoutube size={20} />
              </a>
              <a href="https://www.instagram.com/consulics2290/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}