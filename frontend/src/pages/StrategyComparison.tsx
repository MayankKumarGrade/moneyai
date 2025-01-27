import { useState, useEffect } from "react";
import { fetchStrategies } from "../api/apiService";
import { Strategy } from "../types/types";
import { PerformanceChart } from "../components/Chart";

export default function StrategyComparison() {
  const [strategies, setStrategies] = useState<Strategy[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const strategyData: Strategy[] = await fetchStrategies();
        setStrategies(strategyData);
      } catch (error) {
        console.error("Error fetching strategies:", error);
      }
    };

    loadData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Strategy Comparison</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {strategies.map((strategy, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">{strategy.name}</h2>
            <p>ROI: {strategy.roi}%</p>
            <p>CAGR: {strategy.cagr}%</p>
            <p>Max Drawdown: {strategy.drawdown}%</p>

            <PerformanceChart
              data={strategy.performanceData.map((data) => ({
                date: data.date,
                value: data.value,
              }))}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
