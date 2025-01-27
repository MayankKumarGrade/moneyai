import { useState, useEffect } from "react";
import {
  fetchPortfolio,
  fetchStrategies,
  fetchMarketUpdates,
} from "../api/apiService";
import { Portfolio, Strategy, MarketUpdate } from "../types/types";
import { MetricsCard } from "../components/MetricsCard";
import { PerformanceChart } from "../components/Chart";
import { AssetAllocation } from "@/components/AssetAllocation";
import { RecentTransactions } from "@/components/RecentTransactions";

export default function Dashboard() {
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);
  const [strategies, setStrategies] = useState<Strategy[]>([]);
  const [marketUpdates, setMarketUpdates] = useState<MarketUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const portfolioData = await fetchPortfolio();
        const strategiesData = await fetchStrategies();
        const marketUpdatesData = await fetchMarketUpdates();

        setPortfolio(portfolioData);
        setStrategies(strategiesData);
        setMarketUpdates(marketUpdatesData);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching data:", error.message);
        } else {
          console.error("An unknown error occurred:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 p-6 space-y-6">
      <div className="text-center mb-8 animate-fadeIn">
        <h1 className="text-4xl font-semibold text-gray-900">Portfolio Analytics</h1>
        <p className="text-gray-500 mt-2">Track your investments in real-time</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCard
          title="Total Value"
          value="$124,500"
          change="2.3%"
          isPositive={true}
        />
        <MetricsCard
          title="Daily Change"
          value="$1,245"
          change="1.2%"
          isPositive={true}
        />
        <MetricsCard
          title="Monthly Return"
          value="$3,500"
          change="4.5%"
          isPositive={true}
        />
        <MetricsCard
          title="Annual Return"
          value="$12,450"
          change="15.3%"
          isPositive={true}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.map((item, index) => (
          <MetricsCard
            key={index}
            title={`Asset Allocation (Stocks: ${item.assetAllocation.stocks}%)`}
            value={`Total Value: $${item.totalValue}`}
          />
        ))}
      </div>

      {/* Market Updates */}
      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Market Updates</h2>
        {marketUpdates.length > 0 ? (
          marketUpdates.map((update, index) => (
            <div
              key={index}
              className="bg-gray-100 p-3 rounded-lg mb-3 shadow-sm hover:bg-gray-200 transition duration-300 transform hover:scale-105"
            >
              {update.message}
            </div>
          ))
        ) : (
          <>
            <div className="bg-gray-100 p-3 rounded-lg mb-3 hover:bg-gray-200 transition duration-300 transform hover:scale-105">
              Market up by 2% today
            </div>
            <div className="bg-gray-100 p-3 rounded-lg mb-3 hover:bg-gray-200 transition duration-300 transform hover:scale-105">
              NASDAQ sees a sharp dip
            </div>
            <div className="bg-gray-100 p-3 rounded-lg mb-3 hover:bg-gray-200 transition duration-300 transform hover:scale-105">
              Federal Reserve to announce new rates
            </div>
          </>
        )}
      </div>

      {/* Portfolio Growth Chart */}
      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Portfolio Growth</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PerformanceChart
            data={[
              { date: "Jan", value: 1000 },
              { date: "Feb", value: 1200 },
              { date: "Mar", value: 1100 },
              { date: "Apr", value: 1400 },
              { date: "May", value: 1300 },
              { date: "Jun", value: 1600 },
            ]}
          />
          <AssetAllocation />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <RecentTransactions />
      </div>

      {/* Strategies Performance */}
      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Strategies Performance</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {strategies.length > 0 ? (
            strategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-gray-900">{strategy.name}</h3>
                <p className="text-gray-700">ROI: {strategy.roi}%</p>
                <p className="text-gray-700">CAGR: {strategy.cagr}%</p>
                <p className="text-gray-700">Max Drawdown: {strategy.drawdown}%</p>
                <PerformanceChart data={strategy.performanceData} />
              </div>
            ))
          ) : (
            <>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <h3 className="text-lg font-semibold text-center">Strategy A</h3>
                <p>ROI: 12.5%</p>
                <p>CAGR: 10.2%</p>
                <p>Max Drawdown: 5.8%</p>
                <PerformanceChart
                  data={[
                    { date: "2023-01-01", value: 100 },
                    { date: "2023-02-01", value: 210 },
                    { date: "2023-03-01", value: 120 },
                  ]}
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <h3 className="text-lg font-semibold text-center">Strategy B</h3>
                <p>ROI: 8.5%</p>
                <p>CAGR: 7.8%</p>
                <p>Max Drawdown: 4.2%</p>
                <PerformanceChart
                  data={[
                    { date: "2023-01-01", value: 200 },
                    { date: "2023-02-01", value: 100 },
                    { date: "2023-03-01", value: 250 },
                  ]}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
