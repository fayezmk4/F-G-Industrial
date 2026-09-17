const whatsappUrl =
  'https://wa.me/8801751130340?text=Hello%20F%26G%20Industrial%2C%20I%20would%20like%20to%20discuss%20a%20project.';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with F&G Industrial on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#128C7E]/30 transition-all duration-300 hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 md:bottom-7 md:right-7 md:h-16 md:w-16"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M19.11 17.2c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.97 2.62 1.11 2.8c.14.18 1.91 2.92 4.63 4.09.65.28 1.15.45 1.55.57.65.21 1.24.18 1.71.11.52-.08 1.6-.66 1.83-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32Z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16 3.2A12.8 12.8 0 0 0 5.09 22.7L3.2 28.8l6.3-1.85A12.8 12.8 0 1 0 16 3.2Zm0 23.47c-2.02 0-3.9-.6-5.47-1.63l-.39-.25-3.74 1.1 1.12-3.64-.26-.4A10.64 10.64 0 1 1 16 26.67Z"
          clipRule="evenodd"
        />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-concrete-950 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
