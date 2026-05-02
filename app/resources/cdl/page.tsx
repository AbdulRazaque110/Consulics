import Link from 'next/link';

export default function CdlPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/" className="text-primary-600 hover:underline text-sm">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        What is a CDL (Commercial Driver's License)?
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          A <strong>Commercial Driver's License (CDL)</strong> is a specialized driver's license required for individuals who operate large, heavy vehicles such as <strong>trucks</strong>, <strong>buses</strong>, and <strong>semi-trailers</strong>.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">CDL Requirements</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Minimum age</strong>: 18 years for intrastate, 21 years for interstate driving.</li>
          <li><strong>Medical exam</strong>: Pass a physical examination by a certified examiner.</li>
          <li><strong>Written test</strong>: Assess knowledge of traffic laws and safety procedures.</li>
          <li><strong>Road test</strong>: Demonstrate driving skills with the vehicle type.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Language Requirements</h2>
        <p>
          As of 2023, <strong>English proficiency</strong> is mandatory for CDL applicants, ensuring drivers can read and understand road signs and traffic regulations.
        </p>

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