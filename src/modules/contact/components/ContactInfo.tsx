import { RevealText } from "@/components/RevealText";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactInfo = () => {
  return (
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
  );
};
