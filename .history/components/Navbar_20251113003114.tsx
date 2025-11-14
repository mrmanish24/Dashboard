import { Moon } from "lucide-react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      collaspbutton
      <div className="flex justify-between items-center gap-4">
        <Link href="/">Dashboard</Link>
        <Moon />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}