import AppAreaChart from "@/components/AppAreaChart";
import AppPieChart from "@/components/AppPieChart";
import Barchart from "@/components/Barchart";
import CardList from "@/components/CardList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="rounded-lg bg-primary-foreground p-4 lg:col-span-2 ">
        <Barchart />
      </div>
      <div className="rounded-lg bg-primary-foreground p-4 "><CardList title={"Popular Content"}/></div>
      <div className="rounded-lg bg-primary-foreground p-4"><AppPieChart/></div>
      <div className="rounded-lg bg-primary-foreground p-4">test</div>
      <div className="rounded-lg bg-primary-foreground p-4 lg:col-span-2">
        <AppAreaChart />
      </div>
      <div className="rounded-lg bg-primary-foreground p-4">test</div>
    </div>
  );
}
