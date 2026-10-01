"use client";

import { useEffect } from "react";

type CalendlyMessage = {
  event?: unknown;
};

type DataLayerEvent = {
  event: string;
  meeting_type?: string;
};

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

function getCalendlyDataLayerEvent(data: unknown): string | null {
  if (typeof data !== "object" || data === null) return null;

  const eventName = (data as CalendlyMessage).event;
  if (typeof eventName !== "string" || !eventName.startsWith("calendly.")) {
    return null;
  }

  if (eventName === "calendly.date_and_time_selected") {
    return "calendly_date_and_time_selected";
  }

  if (eventName === "calendly.event_scheduled") {
    return "calendly_event_scheduled";
  }

  return null;
}

export function CalendlyEventTracker() {
  useEffect(() => {
    function handleMessage(message: MessageEvent<unknown>) {
      const eventName = getCalendlyDataLayerEvent(message.data);
      if (!eventName) return;

      window.dataLayer ??= [];
      window.dataLayer.push(
        eventName === "calendly_event_scheduled"
          ? { event: eventName, meeting_type: "30-minute discovery call" }
          : { event: eventName },
      );
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}
