import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { FaDiscord } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Activity", path: "/activity" },
        { name: "Members", path: "/members" },
        { name: "Recruitment", path: "/recruitment" },
        { name: "Resources", path: "/resources" },
        { name: "Community", path: "/community" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-black/50 shadow-md"
        : "bg-transparent"
        }`;

    return (
        <>
            {/* Navbar */}
            <header className={headerClass}>
                <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <img
                            src="/images/logo.png"
                            alt="Mexicola Logo"
                            loading="lazy"
                            width="120"
                            height="40"
                            className="h-8 md:h-16 w-auto"
                        />
                    </Link>

                    <button
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open Menu"
                        className="z-50 relative space-y-[6px] w-7 cursor-pointer group"
                    >
                        <span className="block h-[2px] bg-white transition-all" />
                        <span className="block h-[2px] w-4 bg-white transition-all" />
                        <span className="block h-[2px] bg-white transition-all" />
                    </button>
                </div>
            </header>

            {/* Sidebar */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/30 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                        />

                        {/* Sidebar Menu */}
                        <motion.nav
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg px-6 pt-10 pb-6 flex flex-col justify-between"
                            aria-label="Sidebar Navigation"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="cursor-pointer absolute top-4 right-4 text-2xl text-gray-800 hover:text-black"
                                aria-label="Close Menu"
                            >
                                <HiX />
                            </button>

                            {/* Menu Items */}
                            <div className="mt-12 flex flex-col gap-6 text-gray-800">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `text-lg font-medium border-b pb-2 ${isActive
                                                ? "text-purple-600 font-semibold"
                                                : "hover:text-purple-500"
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>

                            {/* CTA Join Discord */}
                            <div className="border-t pt-6 mt-6 text-center">
                                <p className="text-gray-500 mb-4 text-sm tracking-wide">
                                    Join our community on Discord
                                </p>
                                <a
                                    href="https://discord.gg/dunmGugRtk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full bg-gray-900 text-white px-5 py-3 rounded-2xl 
        shadow-md hover:bg-gray-800 active:scale-[0.98] transition-all duration-300"
                                >
                                    <FaDiscord className="w-5 h-5" />
                                    <span className="font-medium tracking-wide">Join Discord</span>
                                </a>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
