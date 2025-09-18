import { useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Link } from "react-router-dom";

// Single marker icon
const memberIcon = new L.Icon({
  iconUrl: "/images/location.png",
  iconSize: [40, 40],
});

const allMembers = [
  {
    id: 1,
    name: "MoccaGod",
    role: "Guild Leader",
    country: "Jakarta, Indonesia",
    avatar: "/images/hero2.jpeg",
    fame: "10M",
    rank: "Crystal III",
    lat: -6.200000,
    lng: 106.816666,
  },
  {
    id: 2,
    name: "Gumachi",
    role: "Ministry Of Finance",
    country: "Bali, Indonesia",
    avatar: "/images/hero2.jpeg",
    fame: "20M",
    rank: "Crystal III",
    lat: -8.816636,
    lng: 115.133504,
  },
  {
    id: 3,
    name: "Vounds",
    role: "Ministry Of Recruitment",
    country: "Bali, Indonesia",
    avatar: "/images/hero.jpeg",
    fame: "15M",
    rank: "Crystal II",
    lat: -8.816636,
    lng: 115.193504,
  },
  {
    id: 4,
    name: "Rocr",
    role: "Ministry Of War",
    country: "Sulawesi, Indonesia",
    avatar: "/images/hero.jpeg",
    fame: "100M",
    rank: "Crystal I",
    lat: -4.981469,
    lng: 119.998749,
  },
  {
    id: 5,
    name: "Jane Smith",
    role: "Member",
    country: "Thailand",
    avatar: "/images/hero4.jpeg",
    fame: "900K",
    rank: "Crystal I",
    lat: 13.7563,
    lng: 100.5018,
  },
  {
    id: 6,
    name: "Jane Smith",
    role: "Member",
    country: "Thailand",
    avatar: "/images/hero4.jpeg",
    fame: "900K",
    rank: "Crystal I",
    lat: 15.7563,
    lng: 100.5018,
  },
];

export default function Members() {
  const [filter, setFilter] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredMembers = allMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(filter.toLowerCase()) ||
      m.country.toLowerCase().includes(filter.toLowerCase())
  );

  const visibleMembers = filteredMembers.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section className="bg-gray-950 text-white">
      {/* Hero-style header */}
      <div className="relative bg-gradient-to-b from-gray-950 to-gray-800 text-white overflow-hidden">
        <div className="container mx-auto px-6 py-32 flex flex-col items-center text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            Meet <span className="text-purple-500">Mexicola</span> Members
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl max-w-2xl mb-8 text-gray-400"
          >
            Explore our guild members and see their locations across Asia. Connect, learn, and grow with us.
          </motion.p>
        </div>

        {/* Background image overlay */}
        <div className="absolute inset-0 bg-[url('/images/hero.jpeg')] bg-cover bg-center opacity-10 grayscale"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Filter */}
        <div className="flex justify-center mb-12">
          <input
            type="text"
            placeholder="Search by name or country..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Members Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {visibleMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg transition"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-purple-500"
              />
              <h3 className="font-bold text-lg">{member.name}</h3>
              <div className="flex gap-2 mt-1">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-600 text-white">
                  {member.role}
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-2">{member.fame} Fame</p>
              <p className="text-sm text-gray-400">{member.country}</p>
              <p className="text-sm text-gray-400">Rank: {member.rank}</p>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredMembers.length && (
          <div className="flex justify-center mb-16">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 rounded-full bg-purple-500 hover:bg-purple-600 transition font-semibold shadow-lg"
            >
              Load More
            </button>
          </div>
        )}

        {/* Map */}
        <div className="h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <MapContainer center={[1.3521, 103.8198]} zoom={4} scrollWheelZoom className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {filteredMembers.map((member) => (
              <Marker key={member.id} position={[member.lat, member.lng]} icon={memberIcon}>
                <Popup>
                  <div className="text-black">
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="font-semibold">{member.role}</p>
                    <p>{member.country}</p>
                    <p>Fame: {member.fame}</p>
                    <p>Rank: {member.rank}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
