import Link from 'next/link';

export default function OverloadTripPermitsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/" className="text-primary-600 hover:underline text-sm">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Understanding Overload Trip Permits
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          An <strong>overload trip permit</strong> is a special permit that allows a commercial vehicle to transport goods exceeding standard weight limits.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Why Are They Necessary?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Prevent infrastructure damage</strong>: Roads and bridges have specific weight limits.</li>
          <li><strong>Ensure road safety</strong>: Proper authorization keeps roads safe.</li>
          <li><strong>Legal compliance</strong>: Avoid fines and vehicle impoundment.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How Do They Work?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Determine the weight</strong> of the load.</li>
          <li><strong>Apply for the permit</strong> through the state transportation agency.</li>
          <li><strong>Pay applicable fees</strong> based on weight, route, and distance.</li>
          <li><strong>Follow route restrictions</strong> as specified.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How Consulics Can Help</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Easy application process</strong>: File online through our platform.</li>
          <li><strong>State regulations guidance</strong>: Understand requirements for each state.</li>
          <li><strong>Route planning</strong>: Select proper routes for overweight transportation.</li>
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