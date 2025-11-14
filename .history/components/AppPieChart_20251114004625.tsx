import { ChartContainer } from "./ui/chart"

const AppPieChart = () => {
  return (
   <div className="">
      <h1>Total Visitors</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        </ChartContainer>
        </div>
  )
}
export default AppPieChart