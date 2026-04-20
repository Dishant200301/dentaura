import SEO from "@/components/SEO";
import { RevealText } from "@/components/RevealText";
import { Button } from "@/components/Button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <SEO title="Contact Us — DentAura" description="Get in touch with DentAura for any dental inquiries or to book an appointment." path="/contact" />
      <section className="bg-brand-bg pb-10 pt-36 md:pt-36 lg:pt-44 overflow-hidden">
        <div className="container-site">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
            <div>
              <RevealText as="h1" className="font-display text-[48px] md:text-[68px] lg:text-[96px] font-medium leading-tight tracking-tight text-brand-ink">
                Let's Get in Touch
              </RevealText>
              <p className="mt-6 lg:mt-8 text-base lg:text-xl leading-relaxed text-brand-mute lg:max-w-lg">
                We're here to answer any questions you may have about our services or your dental health. Reach out to us today.
              </p>
              
              <div className="mt-10 lg:mt-12 space-y-6 lg:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    <Mail className="text-brand-ink h-5 w-5 lg:h-6 lg:w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-ink text-sm lg:text-base">Email</h3>
                    <p className="text-brand-mute text-sm lg:text-base">hello@dentaura.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    <Phone className="text-brand-ink h-5 w-5 lg:h-6 lg:w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-ink text-sm lg:text-base">Phone</h3>
                    <p className="text-brand-mute text-sm lg:text-base">(480) 555-0103</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                     <MapPin className="text-brand-ink h-5 w-5 lg:h-6 lg:w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-ink text-sm lg:text-base">Location</h3>
                    <p className="text-brand-mute text-sm lg:text-base">123 Dental St, Smile City</p>
                  </div>
                </div>
              </div>
            </div>
            
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
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactPage;
