import Logo from '@/assets/logo.svg';
import XSocial from '@/assets/social-x.svg';
import InstaSocial from '@/assets/social-instagram.svg';
import YTSocial from '@/assets/social-youtube.svg';
import Link from 'next/link';

export const Footer = () => {
  return (
    <>
      {/* Highlighted Gradient Primescaler Title */}

      <footer className="py-5 border-t border-white/15">
        <div className="container">
        <div className="text-center text-4xl md:text-8xl font-extrabold uppercase tracking-widest font-title mb-10 
        bg-gradient-to-r from-purple-300 via-purple-500 to-purple-800 text-transparent bg-clip-text drop-shadow-[0_1px_8px_rgba(168,85,247,0.6)]">
        WE ARE Primescaler
      </div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex gap-2 items-center lg:flex-1">
              <Logo className="h-6 w-6" />
              <div className="font-medium">Primescaler</div>
            </div>
            <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
              <Link
                href="/"
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Contact
              </Link>
            </nav>
            <div className="flex gap-5 lg:flex-1 lg:justify-end">
              <XSocial className="text-white/40 hover:text-white transition" />
              <InstaSocial className="text-white/40 hover:text-white transition" />
              <YTSocial className="text-white/40 hover:text-white transition" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

