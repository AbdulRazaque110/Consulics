import Link from 'next/link';

export default function ForHireTagsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/" className="text-primary-600 hover:underline text-sm">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Understanding For-Hire Tags
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          <strong>For-hire tags</strong> are specialized registration plates issued to <strong>commercial vehicles</strong> used for transporting goods or passengers <strong>for compensation</strong>.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Who Needs For-Hire Tags?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Trucks and trailers</strong> used for freight delivery.</li>
          <li><strong>Taxis, buses, and limousines</strong> for passengers.</li>
          <li><strong>Specialized vehicles</strong> transporting goods for business.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Why Are They Important?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Legal compliance</strong>: Ensures vehicles are properly registered.</li>
          <li><strong>Insurance</strong>: Ensures correct business insurance coverage.</li>
          <li><strong>Clear identification</strong>: Distinguishes commercial from personal vehicles.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How Consulics Can Help</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Simple online registration</strong>: Submit forms online with ease.</li>
          <li><strong>Expert advice</strong>: Guide you through the application process.</li>
          <li><strong>Ongoing compliance</strong>: Help with renewals and regulations.</li>
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