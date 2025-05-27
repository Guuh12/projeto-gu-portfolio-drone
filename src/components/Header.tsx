"use client";

import Link from 'next/link';
import { Instagram, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import * as React from "react";
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    href={href}
    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  // Original anchor links
  const baseNavItems = [
    { internalHref: '#about', label: 'Sobre' },
    { internalHref: '#portfolio', label: 'Portfolio' },
    { internalHref: '#contact', label: 'Contato' },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const getFullHref = (internalHref: string) => {
    if (pathname === '/') {
      return internalHref; 
    }
    return `/${internalHref}`;
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xll items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors" aria-label="Gustavo Futo Drones Home Page">
          GUSTAVO FUTO DRONES
        </Link>
        {/* Desktop Navigation centralizada */}
        <div className="flex-1 flex justify-center">
          <nav className="hidden md:flex items-center space-x-6">
            {baseNavItems.map((item) => (
              <NavLink key={item.label} href={getFullHref(item.internalHref)}>{item.label}</NavLink>
            ))}
            <a href="https://instagram.com/gus_futo_drone" target="_blank" rel="noopener noreferrer" aria-label="Gustavo Futo Instagram" className="text-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
          </nav>
        </div>
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] bg-background p-6">
              <nav className="flex flex-col space-y-4 mt-6">
                {baseNavItems.map((item) => (
                   <SheetClose asChild key={item.label}>
                     <NavLink href={getFullHref(item.internalHref)} onClick={closeMobileMenu}>{item.label}</NavLink>
                   </SheetClose>
                ))}
                 <SheetClose asChild>
                    <a href="https://instagram.com/gustavofuto" target="_blank" rel="noopener noreferrer" aria-label="Gustavo Futo Instagram" className="flex items-center space-x-2 text-sm font-medium text-foreground hover:text-primary transition-colors pt-2" onClick={closeMobileMenu}>
                      <Instagram size={20} />
                      <span>Instagram</span>
                    </a>
                 </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
