import Link from 'next/link';

export default function IrpPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/" className="text-primary-600 hover:underline text-sm">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        What Is IRP and Its Purpose?
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          The <strong>International Registration Plan (IRP)</strong> is a program that allows motor carriers to register their vehicles in one state and legally operate in multiple jurisdictions.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Legal Requirements</h2>
        <p>
          Motor carriers are required to obtain <strong>IRP registration</strong> if they operate vehicles with a <strong>gross weight of 26,000 pounds or more</strong> and travel between multiple jurisdictions.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">When Was IRP Introduced?</h2>
        <p>
          IRP was introduced in <strong>1973</strong> as a cooperative agreement between states, provinces, and territories to streamline commercial vehicle registration.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How Consulics Helps</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Applying for IRP registration</strong> quickly and easily.</li>
          <li><strong>Calculating fees</strong> based on your vehicles' mileage and jurisdictions.</li>
          <li><strong>Handling renewals</strong> and ensuring compliance.</li>
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