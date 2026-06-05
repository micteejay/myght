/**
 * Shared contact/order settings.
 * Update these values to change the WhatsApp number and email recipient
 * across the entire app — no other code changes needed.
 */

// WhatsApp number in international format, digits only (no +, no spaces).
export const WHATSAPP_NUMBER = "2347030004503";

// Email address that receives order requests.
export const ORDER_EMAIL = "gbengafaboya@gmail.com";

// --- Derived helpers (do not edit) ---

/** Pretty display version, e.g. "+234 703 000 4503" */
export const WHATSAPP_DISPLAY = (() => {
  const n = WHATSAPP_NUMBER;
  if (n.startsWith("234") && n.length === 13) {
    return `+234 ${n.slice(3, 6)} ${n.slice(6, 9)} ${n.slice(9)}`;
  }
  return `+${n}`;
})();

/** tel: href, e.g. "tel:+2347030004503" */
export const WHATSAPP_TEL = `tel:+${WHATSAPP_NUMBER}`;

/** Base wa.me link */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
