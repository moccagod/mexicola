import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GuildStats from "../sections/GuildStats";
import AboutGuild from "../sections/AboutGuild";
import GuildActivities from "../sections/GuildActivities";
import JoinSection from "../sections/JoinSection";
import ContactSection from "../sections/ContactSection";

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-gray-950 to-gray-800 text-white overflow-hidden top-0">
        {/* Content */}
        <div className="container mx-auto px-6 py-32 flex flex-col items-center text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            Join <span className="text-purple-500">Mexicola</span> Guild
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl max-w-2xl mb-8 text-gray-400"
          >
            Become part of a strong and united guild in Albion Online.
            Conquer territories, grow stronger, and achieve glory together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Link
              to="/recruitment"
              className="px-8 py-4 rounded-full bg-purple-500 text-white font-semibold text-lg shadow-lg hover:bg-purple-600 transition"
            >
              Join Now
            </Link>
          </motion.div>
        </div>

        {/* Background image overlay */}
        <div className="absolute inset-0 bg-[url('/images/hero.jpeg')] bg-cover bg-center opacity-10 grayscale"></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </section>
      <AboutGuild />
      <GuildStats />
      <GuildActivities />
      <ContactSection />
    </>

  );
}
