import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-400 py-12 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Logo / Name */}
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-1">Mexicola</h3>
                    <p className="text-sm text-gray-400">The strongest guild in Albion Online</p>
                </div>
                {/* Social Icons */}
                <div className="flex gap-4 text-2xl justify-center">
                    <a href="https://discord.gg/your-server" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition"><FaDiscord /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaTwitter /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition"><FaInstagram /></a>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Mexicola Guild. All rights reserved.
            </div>

            {/* Decorative Glow */}
            <div className="absolute -top-32 -right-32 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>
        </footer>
    );
}
