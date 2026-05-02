import Link from 'next/link';

export default function OperatingAuthorityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/" className="text-primary-600 hover:underline text-sm">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Operating Authority Services
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          <strong>Operating Authority</strong> refers to the legal permission granted to motor carriers to operate within specific states or across the country, issued by <strong>FMCSA</strong>.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Legal Requirements</h2>
        <p>Operating authority applies to commercial vehicles that transport:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Goods or freight</strong> across state or national borders.</li>
          <li><strong>Passengers</strong> in interstate travel.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How Consulics Can Help</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Application process</strong>: Helping you apply for USDOT numbers and FMCSA operating authority.</li>
          <li><strong>Ensuring compliance</strong>: Meeting all regulatory requirements.</li>
          <li><strong>Handling renewals</strong>: Keeping your credentials up to date.</li>
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