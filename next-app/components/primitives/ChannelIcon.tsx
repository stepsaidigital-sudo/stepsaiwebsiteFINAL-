export type ChannelKey = "website" | "shopify" | "instagram" | "whatsapp" | "messenger" | "standalone"

export function ChannelIcon({ channel }: { channel: ChannelKey }) {
  switch (channel) {
    case "website":
      return (
        <svg viewBox="0 0 34 34" width="100%" height="100%">
          <circle cx="17" cy="17" r="15" fill="none" stroke="#3c3c48" strokeWidth="2" />
          <path
            d="M2 17h30M17 2c-5 4-7 9.5-7 15s2 11 7 15c5-4 7-9.5 7-15S22 6 17 2z"
            fill="none"
            stroke="#3c3c48"
            strokeWidth="2"
          />
        </svg>
      )
    case "shopify":
      return (
        <svg viewBox="0 0 34 34" width="100%" height="100%">
          <path d="M9 10.5 22.5 8l4 22-19.5 3.5L9 10.5z" fill="#95BF47" />
          <path d="M22.5 8l3 1 3.5 21-6 2.5L22.5 8z" fill="#5E8E3E" />
          <path
            d="M18.5 16.5c-.8-.4-2.6-.6-3.4.4-1.5-2 1.4-4.4 2.9-3.6l.5 3.2zm-2.8 4.2c1 .7 3 1 2.6 3-.3 2.2-3.6 2.4-5.3 1l.7-2c.9.6 2.3 1 2.5.3.2-.8-1.7-1.1-2.3-2.9-.7-2.2 1.6-4.5 4.4-3.6l-.5 2.4c-.7-.3-2.4-.5-2.4.7 0 .5.1.7.3 1.1z"
            fill="#fff"
          />
        </svg>
      )
    case "instagram":
      return (
        <svg viewBox="0 0 34 34" width="100%" height="100%">
          <rect x="2" y="2" width="30" height="30" rx="9" fill="url(#igg)" />
          <rect x="8" y="8" width="18" height="18" rx="5.5" fill="none" stroke="#fff" strokeWidth="2" />
          <circle cx="17" cy="17" r="4.5" fill="none" stroke="#fff" strokeWidth="2" />
          <circle cx="23" cy="11" r="1.3" fill="#fff" />
        </svg>
      )
    case "whatsapp":
      return (
        <svg viewBox="0 0 34 34" width="100%" height="100%">
          <circle cx="17" cy="17" r="15.5" fill="#25D366" />
          <path
            d="M17 7.5c-5.2 0-9.4 4.2-9.4 9.4 0 1.8.5 3.4 1.4 4.9L7.5 26.5l4.9-1.4a9.4 9.4 0 1 0 4.6-17.6z"
            fill="#fff"
          />
          <path
            d="M13.6 11.9c.9-.2 1 .3 1.4 1.3.4.9.5 1-.1 1.7-.4.5-.3.9.2 1.6.8 1.1 1.8 1.9 3 2.4.7.3 1 .2 1.4-.3.5-.7.7-.9 1.6-.5 1 .5 1.6.7 1.3 1.6-.9 2.6-4.6 1.6-7-.6-2.3-2.2-3.6-6.4-1.8-7.2z"
            fill="#25D366"
          />
        </svg>
      )
    case "messenger":
      return (
        <svg viewBox="0 0 34 34" width="100%" height="100%">
          <circle cx="17" cy="17" r="15.5" fill="url(#msg)" />
          <path
            d="M8.5 16.4c0-4.9 3.8-8.4 8.5-8.4s8.5 3.5 8.5 8.4-3.8 8.4-8.5 8.4c-.9 0-1.8-.1-2.6-.4l-2.9 1.3.1-2.9c-1.9-1.5-3.1-3.8-3.1-6.4z"
            fill="#fff"
          />
          <path d="m12 19.5 3.6-5.6 3 2.4 3.4-2.4-3.6 5.6-3-2.4-3.4 2.4z" fill="url(#msg)" />
        </svg>
      )
    case "standalone":
      return (
        <svg viewBox="0 0 34 34" width="100%" height="100%">
          <rect x="4" y="3" width="26" height="28" rx="6" fill="none" stroke="#2563eb" strokeWidth="2" />
          <path d="M11 12h12M11 17h12M11 22h7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
  }
}

export function BrandGradientDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <linearGradient id="igg" gradientUnits="userSpaceOnUse" x1="0" y1="34" x2="34" y2="0">
          <stop stopColor="#FFD600" />
          <stop offset=".35" stopColor="#FF7A00" />
          <stop offset=".62" stopColor="#FF0069" />
          <stop offset="1" stopColor="#7638FA" />
        </linearGradient>
        <linearGradient id="msg" gradientUnits="userSpaceOnUse" x1="6" y1="30" x2="28" y2="4">
          <stop stopColor="#0695FF" />
          <stop offset=".6" stopColor="#A334FA" />
          <stop offset="1" stopColor="#FF6968" />
        </linearGradient>
      </defs>
    </svg>
  )
}
