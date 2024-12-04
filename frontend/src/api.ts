export type Transactions = {
  date_time: string;
  trans_no: string;
  credit: number;
  debit: number;
  detail: string;
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
  console.log(result);
  // return result;s
};

const mockTransactions: Transactions[] = [
  {
    date_time: "2024-11-28T08:00:00Z", // ISO 8601 format
    trans_no: "TXN001",
    credit: 10000,
    debit: 0,
    detail: "Monthly salary deposited",
  },
  {
    date_time: "2024-11-28T12:45:00Z",
    trans_no: "TXN002",
    credit: 0,
    debit: 2500,
    detail: "Grocery shopping at SuperMart",
  },
  {
    date_time: "2024-11-29T09:15:00Z",
    trans_no: "TXN003",
    credit: 5000,
    debit: 0,
    detail: "Freelance project payment received",
  },
  {
    date_time: "2024-11-29T18:30:00Z",
    trans_no: "TXN004",
    credit: 0,
    debit: 1200,
    detail: "Electricity bill payment",
  },
  {
    date_time: "2024-11-30T10:20:00Z",
    trans_no: "TXN005",
    credit: 0,
    debit: 2000,
    detail: "Dining at Fancy Restaurant",
  },
  {
    date_time: "2024-12-01T08:30:00Z",
    trans_no: "TXN006",
    credit: 1500,
    debit: 0,
    detail: "Cashback from SuperMart purchase",
  },
];
