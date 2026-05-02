import Link from 'next/link';

export default function HeavyHighwayTaxPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/" className="text-primary-600 hover:underline text-sm">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        What is Heavy Highway Use Tax (HVUT 2290)?
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          The <strong>Heavy Vehicle Use Tax (HVUT)</strong>, also known as <strong>Form 2290</strong>, is a federal tax imposed on owners of heavy trucks that operate on public highways with a gross weight of <strong>55,000 pounds or more</strong>.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Who Needs to File?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Trucking companies</strong> with large fleets.</li>
          <li><strong>Owner-operators</strong> with one or multiple trucks.</li>
          <li><strong>Anyone</strong> using a large vehicle for commercial purposes on U.S. highways.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How to File</h2>
        <p>To file you will need:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Truck information</strong> (VIN, weight).</li>
          <li><strong>Payment information</strong> to settle the tax due.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How Consulics Can Help</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Fast e-filing</strong>: Submit your HVUT 2290 quickly.</li>
          <li><strong>Accurate filings</strong>: Forms filled correctly and on time.</li>
          <li><strong>Secure payments</strong>: Pay taxes securely through our system.</li>
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