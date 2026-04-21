import SEO from "@/components/SEO";
import { ContactForm } from "./components/ContactForm";
import { ContactInfo } from "./components/ContactInfo";

const ContactPage = () => {
  return (
    <>
      <SEO title="Contact Us — DentAura" description="Get in touch with DentAura for any dental inquiries or to book an appointment." path="/contact" />
      <section className="bg-brand-bg pb-10 pt-36 md:pt-36 lg:pt-44 overflow-hidden">
        <div className="container-site">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactPage;
