import AppAreaChart from "@/components/AppAreaChart";
import Barchart from "@/components/Barchart";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="rounded-lg bg-primary-foreground p-4  ">
        <Barchart />
      </div>
      <div className="rounded-lg bg-primary-foreground p-4 lg:col-span-2"></div>
      <div className="rounded-lg bg-primary-foreground p-4">test</div>
      <div className="rounded-lg bg-primary-foreground p-4">test</div>
      <div className="rounded-lg bg-primary-foreground p-4 lg:col-span-2">
        <AppAreaChart />
      </div>
      <div className="rounded-lg bg-primary-foreground p-4">test</div>
    </div>
  );
}
