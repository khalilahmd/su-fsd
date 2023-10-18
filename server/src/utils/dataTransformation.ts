export const transformedData = (originalData: Record<string, string>[]) => {
  return originalData.map((item) => {
    const values = Object.values(item);

    return {
      [values[0].split(';')[0]]: values[0].split(';')[1],
    };
  });
};
