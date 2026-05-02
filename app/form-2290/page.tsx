import Link from 'next/link';
import { FiCheckCircle } from 'react-icons/fi';

export default function Form2290Page() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="bg-[#040C33] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fast, Secure 2290 Filing & Schedule 1 in Minutes
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            HVUT 2290 Services for Motor Carriers: Simplifying Compliance and Filing
          </p>
          <Link
            href="/start-service"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-block"
          >
            Start e-filing 2290 Now
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Effortless HVUT 2290 E-Filing',
                desc: 'Simplify your Heavy Vehicle Use Tax filing with a streamlined, user-friendly design, ideal for motor carriers and fleet operators.',
              },
              {
                title: 'Affordable & Transparent Pricing',
                desc: 'Start e-filing at an affordable price with no hidden fees, ensuring seamless cost-effective compliance for motor carriers.',
              },
              {
                title: 'Fast and Secure IRS Filing',
                desc: 'Get your HVUT 2290 e-filed securely and instantly, with quick IRS acceptance and fast access to your Schedule 1.',
              },
              {
                title: 'Flexible Payment Options',
                desc: 'Multiple payment methods including EFTPS, credit/debit cards, and check or money orders for convenient tax payments.',
              },
              {
                title: 'Automatic Tax Calculations',
                desc: 'Automatically calculate your HVUT 2290 tax based on truck weight and covered mileage for accurate filings.',
              },
              {
                title: 'Free VIN Correction Service',
                desc: 'Instantly correct Vehicle Identification Numbers for previously submitted HVUT 2290 returns.',
              },
              {
                title: 'Instant Schedule 1 Download',
                desc: 'Receive your IRS-accepted Schedule 1 immediately after e-filing your 2290.',
              },
              {
                title: 'Bulk Fleet Filing',
                desc: 'Efficiently file multiple vehicles in one session, simplifying the process for large fleets.',
              },
              {
                title: '24/7 Multilingual Support',
                desc: 'Get expert assistance in multiple languages including Spanish, around the clock.',
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <FiCheckCircle className="text-primary-600 mb-3" size={24} />
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-primary-700 text-white py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to File Your HVUT 2290?</h2>
        <p className="text-lg text-primary-100 mb-6">
          Join thousands of motor carriers who trust Consulics for fast, accurate 2290 filing.
        </p>
        <Link
          href="/start-service"
          className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
        >
          Start Filing Now
        </Link>
      </div>

      {/* Resources Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Learn More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/resources/hvut-2290" className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900">Understanding HVUT 2290</h3>
              <p className="text-sm text-gray-500 mt-1">Learn about the Heavy Vehicle Use Tax and its importance.</p>
            </Link>
            <Link href="/resources/heavy-highway-tax" className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900">Heavy Highway Use Tax</h3>
              <p className="text-sm text-gray-500 mt-1">Understand Form 2290 and how to file it correctly.</p>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}