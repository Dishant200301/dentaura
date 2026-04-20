import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

const Section = ({ children, className, containerClassName, id }: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 md:py-[110px]", className)}>
      <div className={cn("mx-auto w-full max-w-[1300px] px-6 lg:px-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export default Section;
