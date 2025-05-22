"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface AnalyticsProps {
  gtmId?: string;
  gaId?: string;
  fbPixelId?: string;
}

export default function Analytics({ gtmId, gaId, fbPixelId }: AnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Google Tag Manager
    if (gtmId && typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      document.head.appendChild(script);

      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
    }

    // Google Analytics 4
    if (gaId && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      
      gtag('js', new Date());
      gtag('config', gaId, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    // Facebook Pixel
    if (fbPixelId && typeof window !== 'undefined') {
      // Load Facebook Pixel
      (function(f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          if (n.callMethod) {
            n.callMethod.apply(n, arguments);
          } else {
            n.queue.push(arguments);
          }
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        if (s && s.parentNode) {
          s.parentNode.insertBefore(t, s);
        }
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', null, null, null);

      window.fbq('init', fbPixelId);
      window.fbq('track', 'PageView');
    }
  }, [gtmId, gaId, fbPixelId]);

  useEffect(() => {
    // Track page views on route changes
    const url = pathname + searchParams.toString();
    
    if (typeof window !== 'undefined') {
      // Google Analytics page view
      if (window.gtag) {
        window.gtag('config', gaId, {
          page_path: url,
        });
      }

      // Facebook Pixel page view
      if (window.fbq) {
        window.fbq('track', 'PageView');
      }
    }
  }, [pathname, searchParams, gaId]);

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      {gtmId && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      )}

      {/* Facebook Pixel (noscript) */}
      {fbPixelId && (
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      )}
    </>
  );
}

// Helper functions for tracking specific events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    // Google Analytics
    if (window.gtag) {
      window.gtag('event', eventName, parameters);
    }

    // Facebook Pixel
    if (window.fbq) {
      window.fbq('trackCustom', eventName, parameters);
    }
  }
};

export const trackConversion = (conversionType: 'lead' | 'contact' | 'audit_request', value?: number) => {
  if (typeof window !== 'undefined') {
    const eventData = {
      event_category: 'conversion',
      event_label: conversionType,
      value: value || 1
    };

    // Google Analytics conversion
    if (window.gtag) {
      window.gtag('event', 'conversion', eventData);
      window.gtag('event', conversionType, eventData);
    }

    // Facebook Pixel conversion
    if (window.fbq) {
      window.fbq('track', 'Lead', { content_name: conversionType });
    }
  }
}; 