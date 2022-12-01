export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);

  return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
};
