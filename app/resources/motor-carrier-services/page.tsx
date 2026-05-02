import Link from 'next/link';

export default function MotorCarrierServicesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/" className="text-primary-600 hover:underline text-sm">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        What are Motor Carrier Services?
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          Motor Carrier Services encompass a broad range of support that helps trucking companies comply with state and federal regulations.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Services Include</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Registration and licensing</strong>: Obtaining operating authority and vehicle registrations.</li>
          <li><strong>Compliance assistance</strong>: Ensuring businesses comply with FMCSA and DOT regulations.</li>
          <li><strong>Permits</strong>: Special permits for oversized loads and trip permits.</li>
          <li><strong>Tax filing</strong>: HVUT 2290, IFTA, and IRP registration.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Who Needs These Services?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Trucking companies</strong> with fleets of commercial vehicles.</li>
          <li><strong>Owner-operators</strong> and independent truckers.</li>
          <li><strong>Freight companies</strong> involved in transporting goods across states.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How Consulics Can Help</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Obtaining operating authority</strong>: USDOT number and FMCSA credentials.</li>
          <li><strong>Filing taxes</strong>: HVUT 2290, IFTA, and IRP.</li>
          <li><strong>Permit assistance</strong>: Trip permits and special operating permits.</li>
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