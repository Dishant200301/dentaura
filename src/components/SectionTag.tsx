interface Props {
  children: React.ReactNode;
}
const SectionTag = ({ children }: Props) => (
  <div className="inline-flex items-center gap-2 text-base text-brand-ink">
    <span className="h-1 w-1 rounded-full bg-brand-ink" />
    <span>{children}</span>
  </div>
);
export default SectionTag;
