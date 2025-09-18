import { motion } from "framer-motion";

export default function JoinSection() {
    const requirements = [
        { icon: "⚔️", title: "Minimum Gear", desc: "1200 IP untuk ZvZ content" },
        { icon: "🌟", title: "Minimum Fame", desc: "50M Total Fame" },
        { icon: "📅", title: "Aktif", desc: "Minimal 4 hari / minggu" },
        { icon: "💬", title: "Voice Comms", desc: "Wajib saat konten guild" },
        { icon: "🤝", title: "Attitude", desc: "Ramah, mau belajar, kerja tim" },
    ];

    const benefits = [
        { icon: "🧠", title: "Training & Mentoring", desc: "Belajar ZvZ, ekonomi, strategi" },
        { icon: "🪙", title: "Regear Support", desc: "Bantuan silver / gear" },
        { icon: "⚡", title: "Fame Party Harian", desc: "Leveling & progress karakter" },
        { icon: "💬", title: "Komunitas Aktif", desc: "Ramai di Discord & in-game" },
        { icon: "🏰", title: "Guild Content Rutin", desc: "ZvZ, GvG, Faction War, Dungeon" },
    ];

    const cardVariant = {
        hidden: { opacity: 0, y: 30 },
        show: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.4 },
        }),
    };

    return (
        <section className="relative py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
            {/* Garis vertical tengah */}
            <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/10 hidden md:block"></div>

            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 tracking-wide">
                    Join <span className="text-indigo-400">Requirements</span> & <span className="text-indigo-400">Benefits</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-14">
                    {/* Requirements */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 text-center md:text-left">
                            Requirements
                        </h3>
                        <div className="space-y-6">
                            {requirements.map((r, i) => (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    variants={cardVariant}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 shadow-md hover:scale-[1.03] hover:border-indigo-400/40 transition-all duration-300"
                                >
                                    <span className="text-3xl">{r.icon}</span>
                                    <div>
                                        <h4 className="font-semibold text-lg group-hover:text-indigo-400 transition-colors">
                                            {r.title}
                                        </h4>
                                        <p className="text-gray-300 text-sm">{r.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 text-center md:text-left">
                            Benefits
                        </h3>
                        <div className="space-y-6">
                            {benefits.map((b, i) => (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    variants={cardVariant}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 shadow-md hover:scale-[1.03] hover:border-indigo-400/40 transition-all duration-300"
                                >
                                    <span className="text-3xl">{b.icon}</span>
                                    <div>
                                        <h4 className="font-semibold text-lg group-hover:text-indigo-400 transition-colors">
                                            {b.title}
                                        </h4>
                                        <p className="text-gray-300 text-sm">{b.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
