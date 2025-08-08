"use client";

import { LayoutDashboard, Menu, X, Home, Users, Settings, Briefcase, Newspaper, ChevronDown, Shield, FileText, XCircle, CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MetroLink from "./metro-link";
import { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHSEDropdownOpen, setIsHSEDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleHSEDropdown = () => setIsHSEDropdownOpen(!isHSEDropdownOpen);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About Us", icon: Users },
    { href: "/operation", label: "Operation", icon: Settings },
    { href: "/career", label: "Career", icon: Briefcase },
    { href: "/news", label: "News", icon: Newspaper },
  ];

  const hseItems = [
    { href: "/hse-logo", label: "Logo", icon: Shield },
    { href: "/hse-philosophy", label: "Philosophy", icon: Users },
    { href: "/hse-policy", label: "Policy", icon: FileText },
    { href: "/hse-dont-do", label: "Don'ts until Do's", icon: XCircle },
    { href: "/hse-passport", label: "Passport", icon: CreditCard },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="bg-[#1a2238] px-6 hidden lg:block">
        <div className="max-w-7xl mx-auto gap-6 h-[5rem] flex items-center">
          {/* <button className="hover:bg-[#f6c700] h-full aspect-square flex cursor-pointer transition-all duration-300 hover:scale-90 items-center bg-gray-700 justify-center">
            <LayoutDashboard />
          </button> */}
          <div className="flex flex-grow relative gap-4">
            <MetroLink href="/">Home</MetroLink>
            <MetroLink href="/about">About Us</MetroLink>
            <MetroLink href="/operation">Operational</MetroLink>
            <MetroLink href="/career">Career</MetroLink>
            
            {/* HSE Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleHSEDropdown}
                className="text-white  transition-all duration-300 font-medium px-4 py-2 flex items-center gap-2 hover:bg-[#f6c700] hover:bg-opacity-10 "
              >
                HSE
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${isHSEDropdownOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`
                absolute top-full left-0 mt-2 w-64 bg-[#1a2238] border border-gray-600  shadow-xl z-50
                transform transition-all duration-300 origin-top
                ${isHSEDropdownOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}
              `}>
                <div className="p-2">
                  <div className="grid grid-cols-2 gap-2">
                    {hseItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`
                            group relative overflow-hidden h-16 flex flex-col items-center justify-center
                            ${index === 0 ? 'bg-[#f6c700]' : index % 4 === 1 ? 'bg-blue-600' : index % 4 === 2 ? 'bg-green-600' : 'bg-purple-600'}
                            hover:scale-95 transition-all duration-300 cursor-pointer 
                            ${index === 0 ? 'col-span-2' : ''}
                          `}
                          onClick={() => setIsHSEDropdownOpen(false)}
                        >
                          <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300" />
                          <div className="relative flex flex-col items-center justify-center text-white">
                            <IconComponent 
                              size={18} 
                              className="mb-1 group-hover:scale-110 transition-transform duration-300" 
                            />
                            <span className="text-xs font-medium text-center leading-tight">
                              {item.label}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <MetroLink href="/news">News</MetroLink>
          </div>
          
          <div>
            <Image
              src="/skk-migas-logo.png"
              height={24}
              width={60}
              alt="SKK Migas Logo"
            />
          </div>
          <div>
            <Image src="/hcml-logo.png" height={24} width={72} alt="HCML Logo" />
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isHSEDropdownOpen && (
        <div 
          className="fixed inset-0 z-40 hidden lg:block" 
          onClick={() => setIsHSEDropdownOpen(false)}
        />
      )}

      {/* Mobile Header */}
      <div className="bg-[#1a2238] px-4 lg:hidden">
        <div className="h-[5rem] flex items-center justify-between">
          <button
            onClick={toggleSidebar}
            className="p-2 text-white hover:bg-[#f6c700] hover:text-[#1a2238] transition-all duration-300"
          >
            <Menu size={24} />
          </button>
          
          <div className="flex items-center gap-3">
            <Image
              src="/skk-migas-logo.png"
              height={20}
              width={50}
              alt="SKK Migas Logo"
            />
            <Image src="/hcml-logo.png" height={20} width={60} alt="HCML Logo" />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Mobile Metro Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-80 bg-[#1a2238] z-50 lg:hidden
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-600">
          <div className="flex items-center gap-3">
            <Image src="/hcml-logo.png" height={24} width={72} alt="HCML Logo" />
          </div>
          <button
            onClick={toggleSidebar}
            className="p-2 text-white hover:bg-[#f6c700] hover:text-[#1a2238] transition-all duration-300"
          >
            <X size={20} />
          </button>
        </div>

        {/* Metro Navigation Grid */}
        <div className="p-4">
          <div className="grid grid-cols-2 gap-3">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    group relative overflow-hidden 
                    ${index === 0 ? 'col-span-2 h-24' : 'h-20'}
                    ${index % 3 === 0 ? 'bg-[#f6c700]' : index % 3 === 1 ? 'bg-blue-600' : 'bg-green-600'}
                    hover:scale-95 transition-all duration-300 cursor-pointer
                  `}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300" />
                  <div className="relative h-full flex flex-col items-center justify-center text-white p-3">
                    <IconComponent 
                      size={index === 0 ? 28 : 24} 
                      className="mb-1 group-hover:scale-110 transition-transform duration-300" 
                    />
                    <span className={`font-medium text-center leading-tight ${index === 0 ? 'text-sm' : 'text-xs'}`}>
                      {item.label}
                    </span>
                  </div>
                  
                  {/* Metro tile animation effect */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </Link>
              );
            })}
          </div>

          {/* HSE Section in Mobile */}
          <div className="mt-6">
            <h3 className="text-white text-sm font-medium mb-3 px-2">HSE</h3>
            <div className="grid grid-cols-2 gap-2">
              {hseItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      group relative overflow-hidden h-16
                      ${index === 0 ? 'bg-[#f6c700] col-span-2' : index % 4 === 1 ? 'bg-blue-600' : index % 4 === 2 ? 'bg-green-600' : 'bg-purple-600'}
                      hover:scale-95 transition-all duration-300 cursor-pointer
                    `}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300" />
                    <div className="relative h-full flex flex-col items-center justify-center text-white p-2">
                      <IconComponent 
                        size={16} 
                        className="mb-1 group-hover:scale-110 transition-transform duration-300" 
                      />
                      <span className="text-xs font-medium text-center leading-tight">
                        {item.label}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-600">
          <div className="flex items-center justify-center">
            <Image
              src="/skk-migas-logo.png"
              height={20}
              width={50}
              alt="SKK Migas Logo"
              className="opacity-60"
            />
          </div>
        </div>
      </div>
    </>
  );
}
