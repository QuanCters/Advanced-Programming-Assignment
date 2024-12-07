export type Transactions = {
  date_time: string;
  trans_no: string;
  credit: number;
  debit: number;
  detail: string;
  doc_no: string;
};

export const search = async (data: any) => {
  const response = await fetch(`http://127.0.0.1:8001/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error(response.statusText);
  const result = await response.json();

  const [jsonString, totalCounts] = result.output.split("\ntotal counts: ");
  const transactions: Transactions[] = JSON.parse(jsonString).map(
    (item: any) => {
      if (
        item.date_time &&
        typeof item.date_time === "string" &&
        item.date_time.includes("_")
      ) {
        const [date_time, doc_no] = item.date_time.split("_");
        return { ...item, date_time, doc_no };
      }
      return item;
    }
  );
  return transactions;
};
