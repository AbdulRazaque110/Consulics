import Link from 'next/link';

export default function FmcsaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/" className="text-primary-600 hover:underline text-sm">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        What is the Federal Motor Carrier Safety Administration (FMCSA)?
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          The <strong>Federal Motor Carrier Safety Administration (FMCSA)</strong> is an agency of the U.S. <strong>Department of Transportation</strong> tasked with regulating the safety of commercial motor vehicles.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">FMCSA's Role</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Driver qualifications</strong>: Ensuring drivers meet health and licensing standards.</li>
          <li><strong>Vehicle safety standards</strong>: Inspection and maintenance guidelines.</li>
          <li><strong>Hours of service</strong>: Limiting driving hours to prevent fatigue.</li>
          <li><strong>Compliance and enforcement</strong>: Inspecting companies and imposing fines.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Why FMCSA Matters</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Safety compliance</strong>: Ensures commercial vehicles operate safely.</li>
          <li><strong>Legal requirements</strong>: Helps avoid penalties.</li>
          <li><strong>Public trust</strong>: Builds confidence in motor carriers.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How Consulics Can Help</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Operating Authority</strong>: USDOT number and FMCSA operating authority applications.</li>
          <li><strong>Compliance guidance</strong>: Hours of service and driver qualifications.</li>
          <li><strong>Audit preparation</strong>: Prepare for FMCSA audits and inspections.</li>
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