// Daurer Tech — site-wide config
export const SITE = {
  name: "Daurer Tech",
  whatsappNumber: "5519982395193",
  whatsappMessage: "Olá! Vim pelo site da Daurer Tech e quero falar com um especialista.",
};

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(message ?? SITE.whatsappMessage);
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}
