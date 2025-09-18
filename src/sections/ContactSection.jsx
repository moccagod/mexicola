import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";

export default function ContactSection() {
    return (
        <section className="relative bg-gradient-to-b from-gray-950 to-gray-800 text-white overflow-hidden">
            {/* Content */}
            <div className="container mx-auto px-6 py-32 flex flex-col items-center text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
                >
                    Contact & <span className="text-purple-500">Discord Invite</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-lg md:text-xl max-w-2xl mb-8 text-gray-300"
                >
                    Reach out to our officers or join our Discord server to become part of Mexicola.
                </motion.p>

                <motion.a
                    href="https://discord.gg/dunmGugRtk"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(114, 63, 255, 0.6)" }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-3 px-12 py-4 rounded-full bg-purple-500 text-white font-semibold text-lg shadow-lg hover:bg-purple-600 transition-all"
                >
                    <FaDiscord className="text-2xl" />
                    Join Our Discord
                </motion.a>
            </div>

            {/* Background image overlay */}
            <div className="absolute inset-0 bg-[url('/images/hero2.jpeg')] bg-cover bg-center opacity-10 grayscale"></div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20"></div>
        </section>
    );
}
