import { Button } from "@/components/Button";

export const ContactForm = () => {
  return (
    <div className="bg-white rounded-2xl lg:rounded-[3rem] p-6 lg:p-12 shadow-xl">
      <form className="space-y-5 lg:space-y-6">
        <div className="grid gap-4 lg:gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-brand-ink">First Name</label>
            <input type="text" className="w-full rounded-2xl border border-border bg-brand-bg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lime" placeholder="Jane" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-brand-ink">Last Name</label>
            <input type="text" className="w-full rounded-2xl border border-border bg-brand-bg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lime" placeholder="Doe" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-brand-ink">Email Address</label>
          <input type="email" className="w-full rounded-2xl border border-border bg-brand-bg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lime" placeholder="jane@example.com" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-brand-ink">Message</label>
          <textarea className="w-full rounded-2xl border border-border bg-brand-bg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand-lime h-28 lg:h-32" placeholder="How can we help?"></textarea>
        </div>
        <Button variant="primary" showIcon={false} className="w-full py-5 lg:py-6 text-base lg:text-lg">Send Message</Button>
      </form>
    </div>
  );
};
