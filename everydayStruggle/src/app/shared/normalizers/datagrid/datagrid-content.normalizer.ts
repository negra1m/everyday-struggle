import { Datagrid } from 'src/app/shared/components/datagrid/models/datagrid.model';

export const normalizeDatagrid = (datagrid, dataToExtract, customRenders, columns) => {
  const clonedDatagrid: Datagrid = {
    header: [],
    content: [],
    allData: [],
  };

  datagrid.forEach(datasource => {
    let selectedContent = {};
    const columnsToBePushed = [];

    dataToExtract.forEach(data => {
      const extracted = { [data]: datasource[data] };
      selectedContent = Object.assign(selectedContent, extracted);
    });

    Object.entries(selectedContent).forEach(data => {
      const currentColumn = columns.find(col => col.name === data[0]);
      const columnData = {
        name: data[0],
        content: data[1],
        customRender: customRenders.includes(data[0]),
        size: currentColumn.size,
        type: currentColumn.type,
        center: currentColumn.center,
      };

      columnsToBePushed.push(columnData);
    });

    clonedDatagrid.content.push(columnsToBePushed);
  });

  clonedDatagrid.header = [ ...columns ];
  clonedDatagrid.allData = [ ...datagrid ];
  return clonedDatagrid;
};
