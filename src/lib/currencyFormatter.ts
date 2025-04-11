/**
 * Currency formatting utilities for Rupiah (IDR) and Dollar (USD)
 */

/**
 * Format a number to Indonesian Rupiah (IDR) format
 * @param value - The number to format
 * @param withSymbol - Whether to include the 'Rp' symbol (default: true)
 * @param decimalDigits - Number of decimal digits (default: 0)
 * @returns Formatted string in Rupiah format
 */
export const formatRupiah = (
  value: number,
  withSymbol: boolean = true,
  decimalDigits: number = 0
): string => {
  // Handle invalid input
  if (isNaN(value) || value === null || value === undefined) {
    return withSymbol ? 'Rp 0' : '0';
  }

  // Format number with proper grouping and decimal digits
  const formattedValue = new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: decimalDigits,
    maximumFractionDigits: decimalDigits,
  }).format(value);

  // Return with or without symbol
  return withSymbol ? `Rp ${formattedValue}` : formattedValue;
};

/**
 * Format a number to US Dollar (USD) format
 * @param value - The number to format
 * @param withSymbol - Whether to include the '$' symbol (default: true)
 * @param decimalDigits - Number of decimal digits (default: 2)
 * @returns Formatted string in Dollar format
 */
export const formatDollar = (
  value: number,
  withSymbol: boolean = true,
  decimalDigits: number = 2
): string => {
  // Handle invalid input
  if (isNaN(value) || value === null || value === undefined) {
    return withSymbol ? '$0.00' : '0.00';
  }

  // Format number with proper grouping and decimal digits
  const formattedValue = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimalDigits,
    maximumFractionDigits: decimalDigits,
  }).format(value);

  // Return with or without symbol
  return withSymbol ? `$${formattedValue}` : formattedValue;
};