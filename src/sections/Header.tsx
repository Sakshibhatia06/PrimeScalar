"use client";
import LogoIcon from '@/assets/logo.svg';
import { Button } from '@/components/Button';
import MenuIcon from '@/assets/icon-menu.svg';
import Link from "next/link";
import { usePathname } from "next/navigation";


export const Header = () => {
  const pathname = usePathname();

  return <header className=" py-4 border-b border-white/15 md:border-none sticky top-0 z-50">
    <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
    <div className="container">
      <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
        <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
        <div>
          <div className='border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15'>
            <LogoIcon className="h-8 w-8" /></div>
        </div>
        <div className='hidden md:block'>
          <nav className="flex gap-8 text-sm">
            <Link
              href="/"
              className={pathname === "/" ? "text-purple-500 transition" : "text-white/70 hover:text-white transition"}>
              HOME
            </Link>

            <Link
              href="/about"
              className={pathname === "/about" ? "text-purple-500 transition" : "text-white/70 hover:text-white transition"}>
              ABOUT
            </Link>

            <Link
              href="/services"
              className={pathname === "/services" ? "text-purple-500 transition" : "text-white/70 hover:text-white transition"}>
              SERVICES
            </Link>

            <Link
              href="#case-studies"
              className={pathname === "/case-studies" ? "text-purple-500 transition" : "text-white/70 hover:text-white transition"}>
              CASE STUDIES
            </Link>

            <Link
              href="/contact"
              className={pathname === "/contact" ? "text-purple-500 transition" : "text-white/70 hover:text-white transition"}>
              CONTACT US
            </Link>
          </nav>


        </div>
        <div className='flex gap-4 items-center'>
          <Button>Join Now</Button>
          <MenuIcon className="md:hidden" />
        </div>
      </div>
    </div>
  </header>;
};
