import React from 'react';
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Badge } from '@heroui/react';
import { useOrder } from './order-context';

export const Navbar: React.FC = () => {
  const { items } = useOrder();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <HeroNavbar maxWidth="xl" className="bg-background">
      <NavbarBrand>
        <Link href="#" className="font-bold text-inherit flex items-center gap-2">
          <Icon icon="lucide:sandwich" className="text-primary text-2xl" />
          <span className="text-xl">THE PRESS</span>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#menu">
            Menu
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#order">
            Order
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#instagram">
            Gallery
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#location">
            Location
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link 
            href="https://www.instagram.com/thepresschs/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
          >
            <Icon icon="lucide:instagram" className="text-foreground text-xl" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#order" variant="solid" className="relative px-6">
            {totalItems > 0 && (
              <Badge
                content={totalItems} 
                color="primary"
                size="sm" 
                placement="top-right"
                className="mr-1"
              />
            )}
            Order Now
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HeroNavbar>
  );
};