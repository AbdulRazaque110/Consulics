import Link from 'next/link';

export default function IftaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/" className="text-primary-600 hover:underline text-sm">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Understanding IFTA: The Basics
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          The <strong>International Fuel Tax Agreement (IFTA)</strong> is an agreement between U.S. states and Canadian provinces that streamlines the process of filing and paying fuel taxes for motor carriers.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Who Needs an IFTA License?</h2>
        <p>
          An <strong>IFTA license</strong> is required for trucking companies that operate vehicles with a <strong>gross weight of over 26,000 pounds</strong> and travel across multiple states or provinces.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How to Apply for an IFTA License</h2>
        <p>
          Motor carriers must apply with their state's <strong>Department of Motor Vehicles (DMV)</strong>. You will also receive <strong>IFTA decals</strong> for each vehicle in your fleet.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How Consulics Can Help</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Apply for your IFTA license</strong> online quickly.</li>
          <li><strong>Track your IFTA filings</strong> and ensure they are submitted on time.</li>
          <li><strong>Stay compliant</strong> with IFTA regulations.</li>
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