'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form data:', data);
      toast.success('Message sent! We\'ll contact you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      
      {/* Header */}
      <section className="bg-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-100">Get in touch with our team</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-4xl text-accent-500 mb-4 flex justify-center">
                <FiPhone />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">(555) 123-4567</p>
              <p className="text-sm text-gray-500">Available Mon-Fri 9am-6pm EST</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-4xl text-accent-500 mb-4 flex justify-center">
                <FiMail />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">info@consulics.com</p>
              <p className="text-sm text-gray-500">We respond within 24 hours</p>
            </div>

            {/* Address */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-4xl text-accent-500 mb-4 flex justify-center">
                <FiMapPin />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600 mb-4">123 Business St, Suite 100<br />New York, NY 10001</p>
              <p className="text-sm text-gray-500">Visit us by appointment</p>
            </div>
          </div>

          {/* Form and Schedule Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      {...register('firstName', { required: 'First name is required' })}
                      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      {...register('lastName', { required: 'Last name is required' })}
                      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Phone is required' })}
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                  <select
                    {...register('service')}
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select a service</option>
                    <option value="tax">Tax Services</option>
                    <option value="trucking">Trucking Services</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-700 text-white py-3 rounded font-semibold hover:bg-primary-800 transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Schedule Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Schedule a Consultation</h2>
              <p className="text-gray-600 mb-6">
                Ready to get started? Schedule a free consultation with one of our experts. We'll discuss your needs and create a custom plan for you.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-accent-500">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Free Consultation</h3>
                    <p className="text-sm text-gray-600">No obligation, completely free to discuss your needs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-accent-500">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Advice</h3>
                    <p className="text-sm text-gray-600">Get personalized recommendations from our specialists</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-accent-500">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Flexible Scheduling</h3>
                    <p className="text-sm text-gray-600">Choose a time that works best for you</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="w-full bg-accent-500 text-white py-3 rounded font-semibold hover:bg-accent-600 transition"
              >
                Schedule Now
              </button>

              <p className="text-center text-sm text-gray-500 mt-6">
                Or call us directly at <strong>(555) 123-4567</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
