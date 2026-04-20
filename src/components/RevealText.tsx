import { useEffect, useRef, createElement, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  stagger?: number;
}

export const RevealText = ({
  children,
  as = "h2",
  className = "",
  delay = 0,
  stagger = 0.03,
}: RevealTextProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!ref.current || animatedRef.current) return;

    const el = ref.current;

    // Safety delay for complex DOM structures (<br/>, spans, etc.)
    const timer = setTimeout(() => {
      if (!el) return;

      const ctx = gsap.context(() => {
        const split = new SplitType(el, { types: "words,chars", tagName: "span" });

        // If splitting failed, ensure text is visible
        if (!split.chars || split.chars.length === 0) {
          gsap.set(el, { opacity: 1, visibility: "visible" });
          return;
        }

        el.querySelectorAll(".word").forEach((w) => {
          const word = w as HTMLElement;
          word.style.overflow = "hidden";
          word.style.display = "inline-flex";
          word.style.verticalAlign = "top";
          word.style.paddingBottom = "0.1em";
        });

        gsap.set(split.chars, { yPercent: 110, opacity: 0 });

        gsap.to(split.chars, {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: "expo.out",
          stagger,
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play none none none",
            onEnter: () => {
              animatedRef.current = true;
            }
          },
        });
      }, ref);

      return () => {
        ctx.revert();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [delay, stagger, children]);

  // Extract text content for aria-label if children is not a simple string
  const getAriaLabel = (node: ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return node.toString();
    if (Array.isArray(node)) return node.map(getAriaLabel).join("");
    if (node && typeof node === "object" && "props" in node) {
      return getAriaLabel(node.props.children);
    }
    return "";
  };

  return createElement(
    as,
    {
      ref,
      "aria-label": getAriaLabel(children),
      className,
    },
    children
  );
};

export default RevealText;
