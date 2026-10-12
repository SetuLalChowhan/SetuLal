import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "Collabs", href: "#projects", id: "projects" },
  { name: "Services", href: "#skills", id: "skills" },
  { name: "About", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [currentTime, setCurrentTime] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Dynamic local time formatting (e.g. "10:56 am")
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).toLowerCase();
      setCurrentTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll-down hide, scroll-up reveal navigation
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY <= 15) {
            // At top of page: always visible
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
            // Scrolling down: hide smoothly
            setIsVisible(false);
            setIsMobileMenuOpen(false);
          } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 5) {
            // Scrolling up: show smoothly
            setIsVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Scroll spy to dynamically highlight the current section in the nav
  useEffect(() => {
    const sectionIds = ["hero", "projects", "skills", "about", "experience", "contact"];
    const sectionMap = {
      hero: "Home",
      projects: "Collabs",
      skills: "Services",
      about: "About",
      experience: "Experience",
      contact: "Contact",
    };

    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveLink(sectionMap[sectionIds[i]]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Smooth scroll handler on nav click
  const handleNavClick = (e, href, name) => {
    e.preventDefault();
    setActiveLink(name);
    setIsMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", href);
    } else if (href === "#hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      window.history.pushState(null, "", "#hero");
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full bg-[#ffffff] text-[#1a1a1a] transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: SVG Wordmark */}
        <div className="flex items-center gap-10">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero", "Home")}
            className="flex items-center gap-2 text-[16px] font-bold tracking-tight text-[#1a1a1a] hover:opacity-80 transition-opacity"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 7h10v10H7z" />
            </svg>
            <span>Setu Lal</span>
          </a>

          {/* Center-left: Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.name)}
                className={`text-[16px] font-medium tracking-[-0.4px] text-[#1a1a1a] transition-all relative py-1 ${
                  activeLink === link.name
                    ? "border-b-2 border-[#1a1a1a]"
                    : "opacity-75 hover:opacity-100"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Signal Green status dot + Live Time */}
        <div className="hidden sm:flex items-center gap-2.5">
          <span
            className="w-2 h-2 rounded-full bg-[#00c950] shrink-0"
            aria-hidden="true"
          />
          <span className="text-[14px] font-normal tracking-[-0.35px] text-[#1a1a1a]">
            {currentTime || "10:56 am"}
          </span>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00c950] shrink-0" />
            <span className="text-[13px] text-[#1a1a1a]">
              {currentTime || "10:56 am"}
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-[#1a1a1a]"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#ffffff] px-6 py-6 border-t border-[#f8f8f2] flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.name)}
              className={`text-[16px] font-medium text-[#1a1a1a] py-2 ${
                activeLink === link.name
                  ? "border-b border-[#1a1a1a] inline-block w-fit"
                  : "opacity-75"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
