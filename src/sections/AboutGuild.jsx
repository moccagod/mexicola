import { motion } from "framer-motion";

export default function AboutGuild() {
    return (
        <section className="bg-gray-950 text-white py-10 relative overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Gambar atau ilustrasi guild */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <img
                        src="/images/logo.png"
                        alt="Guild Banner"
                        className=""
                    />
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>
                </motion.div>

                {/* Teks tentang guild */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
                        About <span className="text-purple-400">Mexicola</span>
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Founded by passionate adventurers, <span className="text-white font-medium">Mexicola </span>
                        has grown into one of the most respected guilds in Albion Online.
                        We thrive on teamwork, honor, and constant progress — forging
                        friendships while conquering the world of Albion together.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        Whether it’s large-scale ZvZ battles, organized gathering groups,
                        or casual dungeon runs, our members always support one another
                        to grow stronger every day.
                    </p>

                    <a
                        href="/members"
                        className="inline-block bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl font-semibold text-white shadow-lg"
                    >
                        Our Members
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
