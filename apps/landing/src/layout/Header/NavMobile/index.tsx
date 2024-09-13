import NavMobileNavbar from "@/layout/Header/NavMobile/Navbar";
import NavMobileDrawer from "@/layout/Header/NavMobile/Drawer";
import { DrawerRoot, Drawer } from "@mutuals/ui";

const NavMobile = {
  Drawer: NavMobileDrawer,
  Navbar: NavMobileNavbar,
  Root: ({ children, ...props }: Drawer.RootProps) => (
    <DrawerRoot size={"full"} {...props}>
      {children}
    </DrawerRoot>
  ),
};

export default NavMobile;
