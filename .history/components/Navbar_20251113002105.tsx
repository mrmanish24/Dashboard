import { Moon } from "lucide-react"
import Link from "next/link"

export const Navbar = () => {
  return (
    <nav>
      collaspbutton
      <div>
        <Link href="/google.com">Dashboard</Link>
        <Moon/>
      </div>
    </nav>
  )
}