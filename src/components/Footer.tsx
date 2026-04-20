import { Link, NavLink } from "react-router-dom";

const menuItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
 
];

const mobileOnlyMenu = [
  { to: "/team", label: "Team" },
  { to: "/blog", label: "Blog" },
];

const bookAppointment = { to: "/appointment", label: "Book appointment" };

const legalItems = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms and Conditions" },
];

const desktopLegalExtras = [
  { to: "/team", label: "Team" },
  { to: "/blog", label: "Blog" },
];

const socials = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "Linkedin" },
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://facebook.com", label: "Facebook" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1B15] overflow-hidden text-white">
      <div className="container-site mx-auto pb-0 pt-16 md:pt-20">
        <div className="relative pb-12 md:pb-[50px]">
          {/* Top Section - Let's Connect & Email */}
          <div className="flex flex-col gap-10 md:flex-row md:items-end justify-between">
            {/* Left - Let's Connect */}
            <div className="flex flex-col">
              <h3 className="font-display text-[40px] md:text-[48px] font-medium leading-[1.2] tracking-[-1px] md:tracking-[-3px] text-white">
                Let's Connect
              </h3>
              <div className="mt-8 md:mt-[34px]">
                <a
                  href="tel:+14805550103"
                  className="font-inter text-[16px] font-normal leading-[1.2] tracking-[-0.3px] text-white hover:text-[#D1FC71] transition-colors"
                >
                  (480) 555-0103
                </a>
                <p className="mt-1 font-inter text-[16px] font-normal leading-[1.2] tracking-[-0.3px] text-white">
                  Mon - Fri, 5am - 6pm PST
                </p>
              </div>
            </div>

            {/* Right - Email */}
            <div className="flex flex-col md:text-right">
              <p className="font-inter text-[16px] font-normal leading-[27px] tracking-[-0.3px] text-white">
                Reach out to us at:
              </p>
              <a
                href="mailto:hello@oralcare.com"
                className="mt-2 inline-block font-display text-[32px] sm:text-[40px] md:text-[48px] font-medium leading-[1.2] tracking-[-1.5px] md:tracking-[-3px] text-white transition-colors hover:text-[#D1FC71]"
              >
                hello@oralcare.com
              </a>
            </div>
          </div>

          {/* Horizontal Line */}
          <div className="my-12 md:my-[80px] h-[1px] w-full bg-white/10 md:bg-white/20" />

          {/* Nav Container - All Links */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:flex md:justify-between">
            {/* Menu Column */}
            <div className="flex flex-col">
              <p className="font-inter text-[16px] font-normal leading-[27px] tracking-[-0.3px] text-[#C9CBC5]">
                Menu
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {menuItems.map((m) => (
                  <li key={m.to}>
                    <NavLink to={m.to} end={m.to === "/"} className={({ isActive }) => `font-inter text-[16px] font-normal leading-[1.2] md:leading-[27px] transition-colors hover:text-[#D1FC71] ${isActive ? "text-[#D1FC71]" : "text-white"}`}>
                      {m.label}
                    </NavLink>
                  </li>
                ))}
                {/* Team and Blog move to Menu on Mobile only as per ref image 1 */}
                <div className="contents md:hidden">
                  {mobileOnlyMenu.map((m) => (
                    <li key={m.to}>
                      <NavLink to={m.to} className={({ isActive }) => `font-inter text-[16px] font-normal leading-[1.2] md:leading-[27px] transition-colors hover:text-[#D1FC71] ${isActive ? "text-[#D1FC71]" : "text-white"}`}>
                        {m.label}
                      </NavLink>
                    </li>
                  ))}
                </div>
                <li>
                  <NavLink
                    to={bookAppointment.to}
                    className={({ isActive }) =>
                      `whitespace-nowrap font-inter text-[15px] sm:text-[16px] font-normal leading-normal transition-colors hover:text-[#D1FC71] ${isActive ? "text-[#D1FC71]" : "text-white"}`
                    }
                  >
                    {bookAppointment.label}
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Legal Page Column */}
            <div className="flex flex-col col-span-1 md:col-span-1 md:min-w-[400px] lg:min-w-[500px] xl:min-w-[700px]">
              <p className="font-inter text-[16px] font-normal leading-[27px] tracking-[-0.3px] text-[#C9CBC5]">
                Legal Page
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {legalItems.map((m) => (
                  <li key={m.to}>
                    <NavLink to={m.to} className={({ isActive }) => `font-inter text-[16px] font-normal leading-[1.2] md:leading-[27px] transition-colors hover:text-[#D1FC71] ${isActive ? "text-[#D1FC71]" : "text-white"}`}>
                      {m.label}
                    </NavLink>
                  </li>
                ))}
                {/* Team and Blog move to Legal on Tablet/Laptop as per ref image 2 */}
                <div className="hidden md:contents">
                  {desktopLegalExtras.map((m) => (
                    <li key={m.to}>
                      <NavLink to={m.to} className={({ isActive }) => `font-inter text-[16px] font-normal leading-[1.2] md:leading-[27px] transition-colors hover:text-[#D1FC71] ${isActive ? "text-[#D1FC71]" : "text-white"}`}>
                        {m.label}
                      </NavLink>
                    </li>
                  ))}
                </div>
              </ul>
            </div>

            {/* Socials Column - Right aligned on Desktop */}
            <div className="flex flex-col md:text-right lg:min-w-[200px]">
              <p className="font-inter text-[16px] font-normal leading-[27px] tracking-[-0.3px] text-[#C9CBC5]">
                Socials
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {socials.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="font-inter text-[16px] font-normal leading-[1.2] md:leading-[27px] text-white transition-colors hover:text-[#D1FC71]">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Horizontal Border */}
        <div className="h-[1px] w-full bg-white/10 md:bg-white/20" />

        {/* Bottom Section - Copyright & Branding */}
        <div className="relative flex flex-col items-center justify-between gap-4 pb-8 pt-8 md:flex-row md:items-end">
          {/* Logo - Mobile: Top (order-1), Laptop: Right (order-2) */}
          <div className="order-1 md:order-2 w-full md:w-auto text-center md:text-right">
            <span className="block font-display text-[40px] md:text-[64px] font-medium leading-none tracking-[-2px] text-white sm:text-[80px] lg:text-[112px] lg:tracking-[-4px]">
              OralCare
            </span>
          </div>

          {/* Copyright - Mobile: Bottom (order-2), Laptop: Left (order-1) */}
          <div className="order-2 md:order-1 w-full md:w-auto text-center md:text-left">
            <p className="font-inter text-[14px] md:text-[16px] font-normal leading-[1.6] md:leading-[27px] tracking-[-0.3px] text-white">
              © Copyright {currentYear}. All Rights Reserved by{' '}
              <a href="https://tryzeniq.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D1FC71] transition-colors">
                TeyzenIQ
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
