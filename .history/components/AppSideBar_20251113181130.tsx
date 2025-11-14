import {Home, Calendar, Search, Settings} from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from "./ui/sidebar";

const items = [
  { title: "Home", url: "/", icon: "Home" },
  {
    title: "Calendar",
    url: "#",
    icon: "Calendar",
  },
  {
    title: "Search",
    url: "#",
    icon: "Search",
  },
  {
    title: "Settings",
    url: "#",
    icon: "Settings",
  },
];


const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader/>
      <SidebarContent>
        <SidebarGroup>

        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter/>
    </Sidebar>
  )
}
export default AppSidebar