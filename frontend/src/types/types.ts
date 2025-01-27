export interface Portfolio {
    userId: string;
    totalValue: number;
    dailyPnL: number;
    winRate: number;
    assetAllocation: {
      stocks: number;
      bonds: number;
    };
  }
  
  export interface Strategy {
    name: string;
    roi: number; // Return on Investment
    cagr: number; // Compound Annual Growth Rate
    drawdown: number; // Maximum Drawdown
    performanceData: {
      date: string;
      value: number;
    }[];
  }
  
  export interface MarketUpdate {
    message: string;
    timestamp: string;
  }
  