import { ChartContainer, type ChartConfig } from "@/components/ui/chart";



    const chartData = [
      { month: "January", desktop: 186 },
      { month: "February", desktop: 305 },
      { month: "March", desktop: 237 },
      { month: "April", desktop: 73 },
      { month: "May", desktop: 209 },
      { month: "June", desktop: 214 },
    ];

      const ChartConfig = {
        desktop: {
          label: "Desktop",
          color: "#2563eb",
        },
        mobile: {
          label: "Mobile",
          color: "#60a5fa",
        },
      } satisfies ChartConfig;

const Barchart = () => {


  

  return (
    <div>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                </ChartContainer>

    </div>
  )
}
export default Barchart