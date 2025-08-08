"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MetroLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function MetroLink({ href, children, className = "" }: MetroLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link 
      href={href} 
      className={`
        group relative px-4 py-2 
        font-medium text-sm tracking-wide
        flex items-center justify-center min-h-[2.5rem]
        transition-all duration-300 ease-out
        before:absolute before:inset-0 before:bg-[#f6c700] 
        before:transition-transform before:duration-300 before:ease-out
        hover:before:scale-x-100
        overflow-hidden
        ${isActive 
          ? 'text-[#1a2238] bg-[#f6c700] before:scale-x-100' 
          : 'text-white before:scale-x-0 before:origin-left hover:text-[#1a2238]'
        }
        ${className}
      `}
    >
      <span className="relative z-10">
        {children}
      </span>
      <div className={`
        absolute right-0 top-1/2 h-0.5 bg-[#f6c700] transform -translate-y-1/2 
        transition-all duration-300
        ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
      `}></div>
    </Link>
  );
} 