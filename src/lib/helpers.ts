// src/lib/helpers.ts

export const peso = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 2,
});

export const num = new Intl.NumberFormat("es-MX");

export function pct(a: number, b: number) {
  return Math.round((a / Math.max(1, b)) * 100);
}

export function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
