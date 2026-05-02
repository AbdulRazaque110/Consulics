import Link from 'next/link';

export default function IftaIrpTripPermitsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/" className="text-primary-600 hover:underline text-sm">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Understanding IFTA and IRP Trip Permits
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          Both <strong>IFTA</strong> and <strong>IRP trip permits</strong> are critical for motor carriers operating across multiple jurisdictions temporarily.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Why Are They Important?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Legal operation</strong>: Avoid fines and penalties.</li>
          <li><strong>Cost-effectiveness</strong>: Operate without full IFTA or IRP registration.</li>
          <li><strong>Compliance</strong>: Meet fuel tax and registration requirements.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How They Work</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>IFTA Trip Permits</strong>: For vehicles operating temporarily in IFTA member states.</li>
          <li><strong>IRP Trip Permits</strong>: For vehicles operating temporarily without IRP registration.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How Consulics Can Help</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Quick application</strong>: Apply online through our platform.</li>
          <li><strong>Permit requirements guidance</strong>: Understand each jurisdiction's rules.</li>
          <li><strong>Compliance assurance</strong>: Avoid fines and delays.</li>
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