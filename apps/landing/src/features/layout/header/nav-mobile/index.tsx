import { type Drawer, DrawerBackdrop, DrawerRoot } from "@mutuals/ui";
import NavMobileDrawer from "@/features/layout/header/nav-mobile/drawer";
import NavMobileNavbar from "@/features/layout/header/nav-mobile/navbar";

const NavMobile = {
  Drawer: NavMobileDrawer,
  Navbar: NavMobileNavbar,
  Root: ({ children, ...props }: Drawer.RootProps) => (
    <DrawerRoot initialFocusEl={() => null} size={"full"} {...props}>
      <DrawerBackdrop />

      {children}
    </DrawerRoot>
  ),
};

export default NavMobile;
