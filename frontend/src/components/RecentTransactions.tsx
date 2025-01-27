import { Card } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const transactions = [
  { id: 1, type: "buy", asset: "AAPL", amount: "$1,200", date: "2024-02-20" },
  { id: 2, type: "sell", asset: "GOOGL", amount: "$2,300", date: "2024-02-19" },
  { id: 3, type: "buy", asset: "MSFT", amount: "$1,800", date: "2024-02-18" },
];

export function RecentTransactions() {
  return (
    <Card className="p-6 backdrop-blur-sm bg-white/90 animate-fadeIn">
      <h3 className="text-lg font-bold mb-4">Recent Transactions</h3>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-full ${transaction.type === "buy"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                  }`}
              >
                {transaction.type === "buy" ? (
                  <ArrowDownIcon className="w-4 h-4" />
                ) : (
                  <ArrowUpIcon className="w-4 h-4" />
                )}
              </div>
              <div>
                <p className="font-medium">{transaction.asset}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <p className="font-medium">{transaction.amount}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}