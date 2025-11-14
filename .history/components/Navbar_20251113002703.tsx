import { Moon } from "lucide-react"
import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      collaspbutton
      <div>
        <Link href="/">Dashboard</Link>
        <Moon/>
      </div>
    </nav>
  )
}