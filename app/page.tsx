import Script from 'next/script';

export default function PickupScheduler() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Schedule Your Pickup
          </h1>
          <p className="text-lg text-gray-600">
            Reserve your pickup time at Lakeshire Farm
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/llzXWI8PWimTrsx1h7CW"
            style={{
              width: '100%',
              border: 'none',
              overflow: 'hidden',
              minHeight: '600px'
            }}
            scrolling="no"
            id="llzXWI8PWimTrsx1h7CW_1761395796848"
          />
        </div>
      </div>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </main>
  );
}
