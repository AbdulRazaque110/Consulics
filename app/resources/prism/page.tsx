import Link from 'next/link';

export default function PrismPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/" className="text-primary-600 hover:underline text-sm">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Understanding PRISM
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          <strong>PRISM</strong> (Performance and Registration Information Systems Management) is a <strong>state-federal program</strong> that integrates commercial vehicle registration and safety information.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How Does PRISM Work?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Vehicle registration</strong>: Ensures only properly registered vehicles operate.</li>
          <li><strong>Safety performance</strong>: Links registration to safety performance data.</li>
          <li><strong>Enforcement</strong>: Trucks not meeting safety standards are taken off the road.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Why is PRISM Important?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Highway safety</strong>: Reduces unsafe vehicles on roads.</li>
          <li><strong>Enforce compliance</strong>: Identifies non-compliant motor carriers.</li>
          <li><strong>Reduce accidents</strong>: Ensures only safe vehicles operate.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How Consulics Can Help</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Vehicle safety</strong>: Ensure vehicles meet FMCSA and PRISM standards.</li>
          <li><strong>Registration support</strong>: Navigate PRISM-related registration processes.</li>
          <li><strong>Compliance checks</strong>: Prepare for PRISM compliance audits.</li>
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