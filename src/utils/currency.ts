/**
 * The function takes a number with decimals and fix it to have just two decimals
 */
export const formatPoints = (amount?: number) =>
  amount
    ? amount
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : '';
