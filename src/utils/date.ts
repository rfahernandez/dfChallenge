const dateOptions = { month: 'long', day: 'numeric' } as Intl.DateTimeFormatOptions;
const yearOptions = { year: 'numeric' } as Intl.DateTimeFormatOptions;

export const getFormattedDate = (date: Date) => {
  const newDate = new Date(date);
  return `${newDate.toLocaleDateString('es-ES', dateOptions)}, ${newDate.toLocaleDateString('es-ES', yearOptions)}`;
};
