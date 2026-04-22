'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export default function AdBanner() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <div className="mt-10 bg-red-200 flex justify-center px-4">
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          minHeight: '120px',
          width: '100%',
        }}
        data-ad-client="ca-pub-9143074734471145"
        data-ad-slot="3478915894"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}