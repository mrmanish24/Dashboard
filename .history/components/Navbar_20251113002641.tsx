import { Moon } from "lucide-react"
import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="flex">
      collaspbutton
      <div>
        <Link href="/">Dashboard</Link>
        <Moon/>
      </div>
    </nav>
  )
}