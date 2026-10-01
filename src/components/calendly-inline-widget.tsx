"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";

const CALENDLY_WIDGET_SCRIPT =
  "https://assets.calendly.com/assets/external/widget.js";

interface CalendlyApi {
  initInlineWidget(options: {
    parentElement: HTMLElement;
    url: string;
  }): void;
}

declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

export function CalendlyInlineWidget({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  const initializeWidget = useCallback(() => {
    const container = containerRef.current;
    if (!container || !window.Calendly || initializedRef.current) return;

    window.Calendly.initInlineWidget({
      parentElement: container,
      url,
    });
    initializedRef.current = true;
  }, [url]);

  useEffect(() => {
    const container = containerRef.current;
    initializeWidget();

    return () => {
      initializedRef.current = false;
      container?.replaceChildren();
    };
  }, [initializeWidget]);

  return (
    <>
      <Script
        src={CALENDLY_WIDGET_SCRIPT}
        strategy="afterInteractive"
        onLoad={initializeWidget}
      />
      <div
        ref={containerRef}
        aria-label="Schedule a 30-minute discovery call"
        className="h-[700px] min-h-[700px] w-full overflow-hidden"
      />
    </>
  );
}
