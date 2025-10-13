import NavMobileNavbar from "@/features/Layout/Header/NavMobile/Navbar";
import NavMobileDrawer from "@/features/Layout/Header/NavMobile/Drawer";
import { DrawerRoot, Drawer, DrawerBackdrop } from "@mutuals/ui";

const NavMobile = {
  Drawer: NavMobileDrawer,
  Navbar: NavMobileNavbar,
  Root: ({ children, ...props }: Drawer.RootProps) => (
    <DrawerRoot size={"full"} initialFocusEl={() => null} {...props}>
      <DrawerBackdrop />

      {children}
    </DrawerRoot>
  ),
};

export default NavMobile;
