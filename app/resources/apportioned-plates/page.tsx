import Link from 'next/link';

export default function ApportionedPlatesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/" className="text-primary-600 hover:underline text-sm">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Introduction to Apportioned Plates and Tags
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          An <strong>apportioned plate</strong> is a registration plate issued to a motor vehicle under the <strong>International Registration Plan (IRP)</strong>. It enables trucks and commercial vehicles to operate in several states without needing separate registration tags for each jurisdiction.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How Apportioned Plates Work</h2>
        <p>
          When a trucking company applies for an apportioned plate, they only need to register the vehicle in one state — their <strong>base jurisdiction</strong>. Registration fees are apportioned based on the <strong>mileage</strong> driven in each state.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Why Are They Important?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Simplify registration</strong>: One plate for multiple jurisdictions.</li>
          <li><strong>Reduce costs</strong>: Fees based on miles traveled.</li>
          <li><strong>Stay compliant</strong>: Comply with state and federal laws.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How Consulics Can Help</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Easy online application</strong>: File for apportioned tags directly through our platform.</li>
          <li><strong>Help with mileage reporting</strong>: We ensure correct miles reported in each state.</li>
          <li><strong>Ongoing compliance</strong>: We assist with renewals to avoid fines.</li>
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