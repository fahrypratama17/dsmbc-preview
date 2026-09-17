import Image from "next/image";
import { cn } from "@/shared/utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  iconClassName?: string;
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type IconType = React.ReactNode | string;


export const Button = ({
                         children,
                         onClick,
                         leftIcon,
                         rightIcon,
                         className,
                         iconClassName,
                         variant,
                         ...props
                       }: ButtonProps) => {
  const renderIcon = (icon?: IconType) => {
    if (!icon) return null;
    if (typeof icon === "string") {
      return (
        <Image src={icon} alt="" className={cn("h-12 w-12 object-contain", iconClassName)} />
      );
    }
    return icon;
  };
  return (
    <button
      className={cn(
        `flex w-auto items-center justify-center gap-x-2 rounded-lg border px-5 py-2 font-WorkSans font-semibold ${variant === "primary" ? " text-white hover:border-light_blue bg-light_blue hover:bg-white hover:text-light_blue" : "border-orange-500 bg-orange-500 text-neutral-50 hover:border-orange-500 hover:bg-white hover:text-orange-500"}`,
        className,
      )}
      {...props}
      onClick={onClick}
    >
      {leftIcon && renderIcon(leftIcon)}
      {children}
      {rightIcon && renderIcon(rightIcon)}
    </button>
  );
};

export default Button;
