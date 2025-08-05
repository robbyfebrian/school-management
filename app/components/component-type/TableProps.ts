import { Teacher } from '../data-type/Teacher';

export type TableHead = {
  header: string;
  accessor: string;
  className?: string;
};

export type TableProps = {
  tableHeads: TableHead[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
};
