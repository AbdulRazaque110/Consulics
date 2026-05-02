import Link from 'next/link';

export default function DmvMotorCarrierPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/" className="text-primary-600 hover:underline text-sm">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        What are DMV Motor Carrier Services?
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          <strong>DMV Motor Carrier Services</strong> refer to the wide range of services provided by state <strong>Departments of Motor Vehicles</strong> to motor carriers and commercial vehicle operators.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Services Provided</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Vehicle Registration and Licensing</strong>: Issuing license plates and registering commercial vehicles.</li>
          <li><strong>Operating Authority</strong>: Helping obtain legal authority for interstate commerce.</li>
          <li><strong>Fuel Tax Filings</strong>: IFTA and IRP tax returns.</li>
          <li><strong>Permits</strong>: Trip permits, oversize load permits, and temporary permits.</li>
          <li><strong>Safety Compliance</strong>: Meeting FMCSA regulations.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How Consulics Can Help</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Registration</strong>: Quick vehicle registrations and DMV license plates.</li>
          <li><strong>Operating Authority</strong>: USDOT numbers and FMCSA operating authority.</li>
          <li><strong>Tax Filing</strong>: IFTA and IRP compliance.</li>
          <li><strong>Permit Applications</strong>: Streamlined permit process.</li>
          <li><strong>Compliance Assistance</strong>: Expert support for FMCSA and DOT regulations.</li>
        </ul>

        <div className="mt-10 p-6 bg-primary-50 rounded-2xl">
          <p className="text-lg font-semibold text-gray-900 mb-3">Have questions?</p>
          <Link href="/contact" className="bg-primary-700 text-white px-6 py-3 rounded-lg hover:bg-primary-800 transition">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}