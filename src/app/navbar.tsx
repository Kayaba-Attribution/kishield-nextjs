'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

const navItems = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contract Check', href: '/contract-check' },
  { label: 'Past Clients', href: '/past-clients' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          KISHIELD
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-1 flex-grow justify-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors ${
                pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button variant="ghost" className="hidden lg:block">
          Request Audit
        </Button>

        {/* Mobile menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg py-2 px-4 rounded-md hover:bg-gray-700 transition-colors ${
                    pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mt-4 w-full">Request Audit</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}