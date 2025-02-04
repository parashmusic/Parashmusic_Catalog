import { motion } from "framer-motion";
import { useState } from "react";
import track1 from "../assets/bitter.jpg";
import track2 from "../assets/Mulakate.jpg";
import track3 from "../assets/v1.png";
import track4 from "../assets/XUbakh25.jpg";
import track5 from "../assets/Xewali.png";
import track6 from "../assets/JAKORUWA MOLOYA.jpg";
import track7 from "../assets/unknown.jpg";
const tracks = [
 
  {
    title: "Bitter",
    subtitle: "Parash & Aarxslan",
    year: "2022",
    image: track1,
  },
  {
    title: "Jakoruwa Moloya (Parasified)",
    subtitle: "Parash, Sannidhya bhuyan & Aarxslan",
    year: "2024",
    image: track6,
  },
  {
    title: "Mulakate",
    subtitle: "Kwaab feat. Parash & Manasi deka",
    year: "2024",
    image: track2,
  },
  {
    title: "Tangerine High",
    subtitle: "PARASH (Rainforest underground feat.bolt hk)",
    year: "2021",
    image: track3,
  },
  {
    title: "Xewali Xubakh",
    subtitle: "Parash & Bohniman & Ajit",
    year: "2024",
    image: track4,
  },
  {
    title: "Sinaki Baat",
    subtitle: "Khwaab (feat .PARASH)",
    year: "2024",
    image: track5,
  },
  
  {
    title: "Upcoming Release (Turn Around)",
    subtitle: "PARASH & Bohniman feat. Manasi deka",
    year: "2024",
    image: track7,
  },
  {
    title: "birina feat.Prabal",
    subtitle: "Parash & Prabal",
    year: "2024",
    image: track7,
  },
];

export default function TrackList({ onTrackSelect }) {
  const [expandedTrack, setExpandedTrack] = useState(null);

  const handleTrackClick = (index) => {
    setExpandedTrack(expandedTrack === index ? null : index);
    onTrackSelect(tracks[index]);
  };

  return (
    <div className="space-y-4">
      {tracks.map((track, index) => (
        <motion.div
          key={`${track.title}-${track.subtitle}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-4 hover:bg-white/8 rounded-lg cursor-pointer transition-colors"
          onClick={() => handleTrackClick(index)}
        >
          <p className="text-lg font-semibold">{track.title}</p>
          {expandedTrack === index && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.9 }}
              className="text-sm text-gray-400"
            >
              {track.subtitle}
            </motion.p>
          )}
        </motion.div>
      ))}
    </div>
  );
}