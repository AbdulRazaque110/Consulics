import Link from 'next/link';

export default function HvutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/" className="text-primary-600 hover:underline text-sm">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Understanding HVUT 2290 and Its Importance
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          The <strong>Heavy Vehicle Use Tax (HVUT) 2290</strong> is a tax levied on owners of heavy trucks and vehicles that operate on U.S. highways. The tax, paid to the <strong>IRS</strong>, applies to vehicles with a gross weight of <strong>55,000 pounds</strong> or more.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Who Is Required to File HVUT 2290?</h2>
        <p>
          If you are an owner-operator of a <strong>commercial truck</strong>, <strong>tractor</strong>, or <strong>heavy-duty vehicle</strong> with a gross weight of <strong>55,000 pounds or more</strong>, then you are required to file <strong>HVUT 2290</strong>.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How to File HVUT 2290</h2>
        <p>
          The IRS provides an electronic filing option, allowing business owners to file their <strong>2290 taxes online</strong>, saving time and reducing paperwork. To file, you'll need:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your <strong>vehicle information</strong> (VIN, gross weight, etc.)</li>
          <li>A <strong>payment method</strong> to pay your tax</li>
          <li><strong>IRS Form 2290</strong> completed correctly</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How Consulics Can Help</h2>
        <p>
          <strong>Consulics</strong> offers an easy, user-friendly platform to <strong>file your HVUT 2290 online</strong>. Our platform offers:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Fast, online filing</strong>: File your HVUT 2290 from the comfort of your home or office.</li>
          <li><strong>No hassle</strong>: Let us handle the technicalities and ensure your filing complies with IRS requirements.</li>
          <li><strong>Expert assistance</strong>: If you have questions or need support, we're here to help.</li>
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