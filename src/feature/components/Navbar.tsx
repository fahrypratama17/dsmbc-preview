import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
};

const Navbar: React.FC<NavLinkProps> = ({ href, children, isActive }) => {
  return (
    <Link
      href={href}
      className={`px-4 font-WorkSans font-medium leading-none ${
        isActive ? "font-semibold text-light_blue" : "text-white"
      } hover:text-light_blue`}
    >
      {children}
    </Link>
  );
};

export default Navbar;