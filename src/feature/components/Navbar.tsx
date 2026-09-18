"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/shared/components/Button";
import { links } from "@/feature/data/data";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import { REGISTRATION_URL } from "@/shared/constants/links";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
};

type LinkType = {
  name: string;
  href: string;
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const BCC_BASE_URL = "https://bccfilkom.ub.ac.id/";
  const handleClick = () => {
    window.open(REGISTRATION_URL, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 flex items-center justify-between gap-12 p-4 px-10 transition-all duration-300 lg:px-24 z-20 ${
        isScrolled
          ? "bg-dark-blue/85 backdrop-blur-md shadow-lg shadow-dark-blue/20 py-2"
          : "bg-dark-blue"
      }`}
    >
      <Link href={BCC_BASE_URL} className="transition-transform duration-300 hover:scale-105">
        <Image src={"/images/BCC.svg"} alt="BCC Logo" width={117} height={48} />
      </Link>

      <div className="mx-2 hidden space-x-2 lg:flex">
        {links.map((link: LinkType) => (
          <NavLink
            key={link.name}
            href={`${BCC_BASE_URL}${link.href}`}
            isActive={link.href === pathname}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="hidden lg:block">
        <Button onClick={handleClick} className="border-none px-4 py-3 text-xs" variant="primary">
          Request as Client
        </Button>
      </div>

      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        className="cursor-pointer transition-transform duration-300 active:scale-90 lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
      </button>

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setMenuOpen(false);
        }}
        tabIndex={menuOpen ? 0 : -1}
        role="button"
        aria-label="Close menu"
      />

      <div
        className={`fixed left-0 top-0 h-full w-3/4 bg-dark-blue px-10 shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex items-center justify-between py-4">
          <Image src={"/images/BCC.svg"} alt="BCC Logo" width={117} height={48} />
        </div>

        <ul className="flex flex-col space-y-4 py-4 text-sm text-white">
          {links.map((link: LinkType, index: number) => (
            <li
              key={link.name}
              className={`transition-all duration-300 ${
                menuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? `${100 + index * 60}ms` : "0ms" }}
            >
              <NavLink
                href={`${BCC_BASE_URL}${link.href}`}
                isActive={link.href === pathname}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li
            className={`transition-all duration-300 ${
              menuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            }`}
            style={{ transitionDelay: menuOpen ? `${100 + links.length * 60}ms` : "0ms" }}
          >
            <Button onClick={handleClick} className="border-none" variant="primary">
              Request as Client
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      data-active={isActive}
      className={`nav-underline relative px-4 font-WorkSans font-medium leading-none transition-colors duration-300 ${
        isActive ? "font-semibold text-light-blue" : "text-white"
      } hover:text-light-blue`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
