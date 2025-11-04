'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function Home() {
  const [bodyHtml, setBodyHtml] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true
    ;(async () => {
      try {
        const res = await fetch('/index.html', { cache: 'no-store' })
        if (!res.ok) throw new Error(`Failed to load index.html: ${res.status}`)
        const html = await res.text()
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, 'text/html')
        // Extract only the body to avoid duplicating <html>/<head> in App Router
        const body = doc.body?.innerHTML || ''
        if (isMounted) setBodyHtml(body)
      } catch (e) {
        if (isMounted) setError((e instanceof Error ? e.message : 'Unknown error'))
      }
    })()
    return () => { isMounted = false }
  }, [])

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

      {error ? (
        <div style={{ color: 'red', padding: 16 }}>Failed to load content: {error}</div>
      ) : bodyHtml ? (
        <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      ) : (
        <div style={{ padding: 16 }}>Loading…</div>
      )}
    </main>
  )
}
