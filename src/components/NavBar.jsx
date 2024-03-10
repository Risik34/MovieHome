import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from '@nextui-org/react';
const NavBar=()=>{
    return (
        <>
            <Navbar className="bg-secondary text-text">
                <NavbarContent justify="start">
                    <NavbarMenuToggle/>
                    
                </NavbarContent>
                <NavbarContent justify="center">
                <p className="text-2xl font-anta">Movie Home</p>
                </NavbarContent>
                <NavbarContent justify="end">
                <Button>Explore</Button>
                </NavbarContent>
                <NavbarMenu className="text-center text-xl text-text bg-bg">
                    <NavbarMenuItem>
                        <Link href="/" color="primary">Home</Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <Link href="/webseries" >Webseries</Link>
                    </NavbarMenuItem>
                </NavbarMenu>
            </Navbar>
            
    </>
    )
}
export default NavBar;
