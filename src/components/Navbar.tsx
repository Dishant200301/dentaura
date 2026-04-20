import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/blog", label: "Blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <header className="fixed left-4 right-4 md:left-6 md:right-6 top-4 z-[100] h-[75.2px] lg:left-6 lg:right-6 lg:top-4 lg:mx-auto lg:max-w-[1300px] xl:left-6 xl:right-6">
        <nav
          className="flex h-full w-full items-center justify-between rounded-lg bg-white px-6 shadow-[0px_2px_4px_rgba(13,27,21,0.2)] md:px-6"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link to="/" className="flex h-10 items-center gap-2">
            <img
              src="/images/common/logo.webp"
              alt="DentAura Logo Icon"
              className="h-full w-auto object-contain"
            />
            <span className="font-inter text-2xl font-bold tracking-tight text-[#0D1B15]">
              DentAura
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "relative inline-flex h-[27.2px] items-center gap-2 rounded-[50px] px-4 py-1.5 transition-all duration-500 ease-in-out tracking-[-0.3px]",
                      "text-brand-mute hover:bg-brand-lime hover:text-brand-mute",
                      isActive && "bg-brand-lime text-brand-mute"
                    )
                  }
                >
                  <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-brand-mute" />
                  <span className="font-inter text-base font-medium leading-[27px]">
                    {l.label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button to="/appointment" variant="primary" showIcon={false} className="btn-slide w-[180px] h-[51.2px] px-8 justify-center text-[16px] font-medium whitespace-nowrap">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-ink lg:hidden shadow-sm"
            onClick={() => setOpen(true)}
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile/Tablet Menu Overlay - Works up to 1024px (xl) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-brand-ink/40 backdrop-blur-sm xl:hidden"
            />

            {/* Menu Card - Slide Down Animation */}
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-4 left-4 right-4 md:left-10 md:right-10 lg:left-20 lg:right-20 lg:hidden z-[70] flex flex-col overflow-hidden rounded-[32px] bg-white p-6 shadow-2xl max-h-[85vh]"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between shrink-0">
                <Link to="/" onClick={() => setOpen(false)} className="flex h-10 items-center gap-2">
                  <img
                    src="/images/common/logo.webp"
                    alt="DentAura Logo Icon"
                    className="h-full w-auto object-contain"
                  />
                  <span className="font-inter text-2xl font-bold tracking-tight text-[#0D1B15]">
                    DentAura
                  </span>
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-ink shadow-sm"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col items-center justify-center gap-3 py-8">
                {links.map((l, index) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="flex justify-center"
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "relative inline-flex items-center gap-2 rounded-[50px] px-4 py-2.5 transition-all duration-300 ease-in-out",
                          "text-[#595E5C] hover:bg-[#D1FC71]",
                          isActive && "bg-[#D1FC71] text-[#0D1B15]"
                        )
                      }
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                      <span className="font-inter text-base font-medium">
                        {l.label}
                      </span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Menu Footer CTA */}
              <div className="pb-4 pt-2 flex justify-center w-full shrink-0">
                <Link
                  to="/appointment"
                  onClick={() => setOpen(false)}
                  className="w-full h-[48px] rounded-full px-6 flex items-center justify-center bg-[#D1FC71] text-[#0D1B15] font-inter text-base font-medium hover:bg-[#c5f065] transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
