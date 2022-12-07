export const addHeaders = (columns) => {
  const headers = [];

  columns.forEach(column => {
    const currentHeader = {
      title: column.title,
      name: column.name,
      size: column.size,
      type: column.type,
      center: column.center,
      customRender: column.customRender || false,
    };

    headers.push(currentHeader);
  });

  return headers;
};
