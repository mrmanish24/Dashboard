import { ChartConfig, ChartContainer } from "./ui/chart"
import { Label, Pie, PieChart } from "recharts";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

const AppPieChart = () => {
    const totalVisitor =   chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  return (
   <div className="">
      <h1>Total Visitors</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <PieChart>

        </PieChart>
        </ChartContainer>
        </div>
  )
}
export default AppPieChart