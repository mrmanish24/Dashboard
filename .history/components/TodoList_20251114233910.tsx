import { Checkbox } from "@radix-ui/react-checkbox";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Label } from "@/components/ui/label";


const TodoList = () => {
  return (
    <div className="">
      <h2 className="text-lg font-semibold">Calendar</h2>

      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <Card>
          <div className="flex items-center gap-4">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm text-primary-foreground">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Label>
          </div>
        </Card>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
