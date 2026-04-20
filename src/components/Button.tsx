import { Link } from "react-router-dom";
import type { ReactNode, MouseEventHandler } from "react";

type Variant = "lime" | "white" | "dark" | "primary" | "secondary" | "default";

interface ButtonBase {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  showIcon?: boolean;
}

interface AsLink extends ButtonBase {
  to: string;
  href?: never;
  onClick?: never;
}
interface AsAnchor extends ButtonBase {
  href: string;
  to?: never;
  onClick?: never;
}
interface AsButton extends ButtonBase {
  to?: never;
  href?: never;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  disabled?: boolean;
}

export type ButtonProps = AsLink | AsAnchor | AsButton;

const variantClass: Record<Variant, string> = {
  lime: "bg-[#D1FC71] text-[#595E5C] before:bg-[#0D1B15] hover:text-white",
  primary: "bg-[#D1FC71] text-black before:bg-[#0D1B15] hover:text-white",
  default: "bg-[#D1FC71] text-[#595E5C] before:bg-[#0D1B15] hover:text-white",
  white: "bg-white text-[#595E5C] before:bg-[#595E5C] hover:text-white",
  secondary: "bg-white text-[#595E5C] before:bg-[#595E5C] hover:text-white",
  dark: "bg-[#0D1B15] text-white before:bg-[#D1FC71] hover:text-[#0D1B15]",
};

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "lime";
  const cls = `btn-slide ${variantClass[variant]} ${props.className ?? ""}`;
  
  const inner = (
    <>
      <span className="relative z-10 inline-block transition-colors duration-300 font-inter font-normal text-[16px] leading-[27px]">{props.children}</span>
    </>
  );

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {inner}
      </Link>
    );
  }
  if ("href" in props && props.href) {
    return (
      <a href={props.href} className={cls}>
        {inner}
      </a>
    );
  }
  const btnProps = props as AsButton;
  return (
    <button
      type={btnProps.type ?? "button"}
      onClick={btnProps.onClick}
      disabled={btnProps.disabled}
      className={cls}
    >
      {inner}
    </button>
  );
}

export { Button as AppButton };
