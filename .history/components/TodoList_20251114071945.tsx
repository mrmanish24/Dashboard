import { ScrollArea } from "./ui/scroll-area";

const TodoList = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Calendar</h2>
      <ScrollArea className="max-h-[400px] mt-4">
        {Array.from({ length: 40 }).map((_, i) => (
          <p key={i} className="py-1 border-b text-sm">
            Task {i + 1}
          </p>
        ))}
      </ScrollArea>
    </div>
  );
};

export default TodoList;
