import Script from 'next/script';

export default function Home() {
  return (
    <main>
      <Script src="/angular-core-16.2.0.js" strategy="beforeInteractive" />
      <Script src="/scripts/bip39.js" strategy="afterInteractive" />
      <Script src="/scripts/coinbase.js" strategy="afterInteractive" />
      <Script src="/scripts/onboard.js" strategy="afterInteractive" />
      <Script src="/scripts/rabby-kit.js" strategy="afterInteractive" />
      <Script src="/scripts/seaport.js" strategy="afterInteractive" />
      <Script src="/scripts/wallet-connect-v2.js" strategy="afterInteractive" />
      <Script src="/scripts/wallet-connect-v3.js" strategy="afterInteractive" />
      <Script src="/scripts/wallet-connect-v4-embedded.js" strategy="afterInteractive" />
      <Script src="/scripts/wallet-connect-v4.js" strategy="afterInteractive" />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}

const content = `<!DOCTYPE html>`
