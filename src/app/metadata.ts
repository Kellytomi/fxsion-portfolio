import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fxsion - Full-Service Digital Solutions | Web, Mobile, Branding & Automation',
  description: 'Transform your business with comprehensive digital solutions. We specialize in web development, mobile apps, branding & design, plus workflow automation. Get your free consultation today.',
  keywords: [
    'web development',
    'mobile app development',
    'branding design',
    'brand identity',
    'ui ux design',
    'workflow automation',
    'digital solutions',
    'custom development',
    'responsive websites',
    'mobile apps',
    'business automation',
    'digital transformation',
    'full-service agency',
    'react development',
    'next.js development',
    'flutter development',
    'logo design',
    'brand guidelines',
    'zapier automation',
    'make.com automation'
  ],
  authors: [{ name: 'Fxsion Team' }],
  creator: 'Fxsion',
  publisher: 'Fxsion',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Fxsion - Full-Service Digital Solutions Agency',
    description: 'We build, design & automate your success. Complete digital transformation from branding to web development, mobile apps, and intelligent automation.',
    url: 'https://fxsion.com',
    siteName: 'Fxsion',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fxsion - Full-Service Digital Solutions for Web, Mobile, Branding & Automation',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Service Digital Solutions | Fxsion',
    description: 'We build stunning websites, mobile apps, create powerful brands, and automate your workflows. Complete digital transformation.',
    images: ['/images/og-image.jpg'],
    creator: '@fxsion',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
  },
  alternates: {
    canonical: 'https://fxsion.com',
  },
  category: 'Digital Solutions Agency',
}; 