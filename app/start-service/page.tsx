'use client';

import { useState, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import FileUpload from '@/app/components/FileUpload';
import ServiceCard from '@/app/components/ServiceCard';
import toast, { Toaster } from 'react-hot-toast';

interface ServiceFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  comments?: string;
}

const documentCategories = {
  tax: [
    'Last Years Tax Returns',
    'Current Years W2',
    '2nd or 3rd W2 or Other Income',
    'Upload Driving License',
    'Personal Expenses Details',
    'Any Other Document',
  ],
  trucking: [
    'Upload Driving License',
    'Utility Bill (Gas, Electric, Truck Insurance)',
    'SSC Certificate (if registered)',
    'SS4 Issued by IRS',
    'County Tax Documents',
    'Other',
  ],
};

const services = [
  { id: 'tax', label: 'File My Taxes', icon: '📋' },
  { id: 'trucking', label: 'Start Trucking Company', icon: '🚛' },
  { id: 'ifta', label: 'File IFTA', icon: '🛣️' },
  { id: 'irp', label: 'Register IRP', icon: '📋' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.8 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function StartServicePageContent() {
  const searchParams = useSearchParams();
  const selectedService = searchParams.get('type') || 'tax';
  const [activeService, setActiveService] = useState(selectedService);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File[]>>({});
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ServiceFormData>();
  const [step, setStep] = useState(1);

  const selectedDocs = documentCategories[activeService as keyof typeof documentCategories] || [];

  const onSubmit = async (data: ServiceFormData) => {
    if (step === 1) {
      setStep(2);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      console.log('Uploaded files:', uploadedFiles);
      toast.success("Service request submitted! We'll contact you within 24 hours.");
      setStep(1);
      setUploadedFiles({});
    } catch (error) {
      toast.error('Failed to submit. Please try again.');
    }
  };

  const handleFileSelect = (files: FileList, category: string) => {
    setUploadedFiles({
      ...uploadedFiles,
      [category]: Array.from(files),
    });
  };

  const getTotalFiles = () => {
    return Object.values(uploadedFiles).reduce((total, files) => total + files.length, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />

      {/* Header */}
      <motion.section
        className="bg-primary-700 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Get Started</h1>
          <p className="text-xl text-gray-100">Choose your service and complete the form</p>
        </div>
      </motion.section>

      {/* Service Selection */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 text-gray-900 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => {
                  setActiveService(service.id);
                  setStep(1);
                  setUploadedFiles({});
                }}
                className={`p-6 rounded-lg font-semibold transition border-2 ${
                  activeService === service.id
                    ? 'border-accent-500 bg-accent-50 text-accent-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="text-4xl mb-2">{service.icon}</div>
                {service.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Which type of company is right for you */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#040C33] mb-4">
              Which type of company is right for you?
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {businessTypeCards.map((card, index) => {
              // Dynamic button text per card
              let buttonText = 'Get started →';
              if (card.title === 'EIN (Employer Identification Number)') buttonText = 'Get yours now →';
              if (card.title === 'Sole Proprietorship') buttonText = 'Start today →';
              if (card.title === 'LLC (Limited Liability Company)') buttonText = 'Register now →';
              if (card.title === 'S Corp') buttonText = 'File today →';
              if (card.title === 'C Corp') buttonText = 'Incorporate now →';
              if (card.title === 'Trucking Setup') buttonText = 'Get started →';

              return (
                <motion.div key={index} variants={itemVariants}>
                  <ServiceCard
                    title={card.title}
                    description={card.description}
                    showContactButton={true}
                    contactButtonText={buttonText}
                    contactButtonHref="/contact"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#040C33] mb-4">
            Use this space for a video clip or YouTube clip
          </h2>
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-gray-200 bg-slate-950/5 p-8">
            <div className="aspect-video rounded-[1.5rem] bg-slate-900/80 flex items-center justify-center text-slate-400">
              Video placeholder
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function StartServicePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <StartServicePageContent />
    </Suspense>
  );
}

const businessTypeCards = [
  {
    title: 'EIN (Employer Identification Number)',
    description: 'An EIN is a unique identifier for businesses, used to file taxes and manage employee payroll.',
  },
  {
    title: 'Sole Proprietorship',
    description: 'A business owned and operated by one person with simplicity but personal liability risks.',
  },
  {
    title: 'LLC (Limited Liability Company)',
    description: 'Provides liability protection with flexible tax options.',
  },
  {
    title: 'S Corp',
    description: 'Allows income pass-through taxation while offering limited liability protection.',
  },
  {
    title: 'C Corp',
    description: 'Separate legal entity taxed independently from shareholders.',
  },
  {
    title: 'Trucking Setup',
    description: 'Registering, licensing, and compliance setup for trucking businesses.',
  },
];