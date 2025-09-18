import { motion } from "framer-motion";
import { FaUsers, FaDungeon, FaHammer, FaCoins } from "react-icons/fa";

const activities = [
    {
        icon: <FaCoins className="text-4xl text-purple-400" />,
        title: "Silver Run",
        desc: "Massive open-world and territory fights with full coordination.",
    },
    {
        icon: <FaDungeon className="text-4xl text-purple-400" />,
        title: "Fame Farming",
        desc: "Organized fame farming and challenging Avalon dungeon runs.",
    },
    {
        icon: <FaHammer className="text-4xl text-purple-400" />,
        title: "Gathering & Crafting",
        desc: "Fuel our economy and craft top-tier gear.",
    },
    {
        icon: <FaUsers className="text-4xl text-purple-400" />,
        title: "Community Events",
        desc: "Chill activities, social events, and bonding moments together.",
    },
];

export default function GuildActivities() {
    return (
        <section className="relative bg-gray-950 text-white py-28 overflow-hidden">
            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-extrabold mb-4"
                >
                    Activities & Content
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-gray-400 max-w-2xl mx-auto mb-20"
                >
                    Explore the core activities that keep Mexicola thriving in the world of Albion.
                </motion.p>

                <div className="relative w-full">
                    {/* Flex scroll di mobile, grid di desktop */}
                    <div className="flex md:grid md:grid-cols-4 gap-6 md:gap-12 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide md:place-items-center">
                        {activities.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.6 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                whileHover={{ rotate: 3, scale: 1.05 }}
                                className="flex-shrink-0 md:flex-shrink-0 w-56 aspect-square 
                                bg-gray-900/70 backdrop-blur-md border border-gray-800 
                                rounded-full p-8 flex flex-col justify-center items-center text-center shadow-xl"
                            >
                                {item.icon}
                                <h3 className="text-lg font-bold mt-4">{item.title}</h3>
                                <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* cosmic glow accents */}
            <div className="absolute inset-0">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>
                <div className="absolute top-40 -right-40 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full"></div>
            </div>
        </section>
    );
}
