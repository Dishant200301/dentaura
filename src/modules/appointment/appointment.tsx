import SEO from "@/components/SEO";
import AppointmentForm from "@/components/AppointmentForm";
import { AppointmentHero } from "./components/AppointmentHero";

const AppointmentPage = () => (
  <>
    <SEO title="Book Appointment — DentAura" description="Book your dental appointment with DentAura today." path="/appointment" />
    <AppointmentHero />
    <AppointmentForm />
  </>
);

export default AppointmentPage;
