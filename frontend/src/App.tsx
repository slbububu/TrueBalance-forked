import Header from "./Header";
import Table from "./Table";
import { useEffect, useState } from "react";
import type { TestData } from "./types/TestData";
import { getTestData } from "./util/api";
import type { TableColumn } from "./types/TableColumn";

const App: React.FC = () => {
  const [data, setData] = useState<TestData[]>([]);

  const columns: TableColumn[] = [
    { accessor: "ID", header: "ID" },
    { accessor: "Name", header: "Name" },
    { accessor: "BirthDate", header: "Birth Date" },
    { accessor: "Country", header: "Country" },
  ];

  useEffect(() => {
    getTestData().then(setData);
  }, []);

  return (
    <body className="font-display">
      <Header />
      <main>
        <h5 className="text-4xl p-8">Test Table</h5>
        <Table columns={columns} data={data} />
      </main>
    </body>
  );
};

export default App;
