import Link from 'next/link';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Test Page</h1>
        <p className="text-gray-700 mb-8">
          This is a test page to verify that routing is working correctly with the base path.
        </p>
        <div className="space-y-4">
          <Link 
            href="/" 
            className="inline-block w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
          >
            Go to Home
          </Link>
          <div className="mt-8 p-4 bg-gray-100 rounded-md">
            <h2 className="font-semibold text-gray-800 mb-2">Environment Variables:</h2>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
              {JSON.stringify({
                'NEXT_PUBLIC_BASE_PATH': process.env.NEXT_PUBLIC_BASE_PATH || 'Not set',
                'NEXT_PUBLIC_SITE_URL': process.env.NEXT_PUBLIC_SITE_URL || 'Not set',
                'NODE_ENV': process.env.NODE_ENV || 'development'
              }, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
