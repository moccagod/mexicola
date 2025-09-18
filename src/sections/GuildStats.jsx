import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaTrophy, FaCrown, FaMapMarkedAlt } from "react-icons/fa";

// Gunakan value angka agar bisa dianimasikan
const stats = [
    {
        icon: <FaUsers className="text-4xl mb-3 text-purple-800" />,
        title: "Active Members",
        value: 15,
        suffix: "+",
        desc: "Dedicated and online every day",
    },
    {
        icon: <FaTrophy className="text-4xl mb-3 text-purple-800" />,
        title: "Total Fame",
        value: 10,
        suffix: "M+",
        desc: "Combined fame from all members",
    },
    {
        icon: <FaCrown className="text-4xl mb-3 text-purple-800" />,
        title: "Season Rank",
        value: 3,
        suffix: " (Crystal III)",
        desc: "Top tier in the current season",
    },
];

export default function GuildStats() {
    return (
        <section className="bg-gray-950 text-white py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-extrabold mb-4 tracking-tight"
                >
                    Guild Stats
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-gray-400 max-w-2xl mx-auto mb-12"
                >
                    A glimpse of what makes Mexicola one of the most solid guilds in Albion Online.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {stats.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0}}
                            whileHover={{ scale: 1.03 }}
                            className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800 
             hover:border-gray-700 hover:shadow-xl transition
             flex flex-col items-center text-center"
                        >
                            {item.icon}
                            <h3 className="text-2xl font-bold mb-1">
                                <AnimatedNumber value={item.value} />{item.suffix ?? ""}
                            </h3>
                            <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">{item.title}</p>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </motion.div>

                    ))}
                </div>
            </div>

            {/* Decorative gradient blur */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 blur-3xl rounded-full"></div>
        </section>
    );
}

function AnimatedNumber({ value }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        const duration = 4000;
        const step = Math.max(1, Math.ceil(end / 100));

        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 20);

        return () => clearInterval(timer);
    }, [value]);

    return <span>{count}</span>;
}
