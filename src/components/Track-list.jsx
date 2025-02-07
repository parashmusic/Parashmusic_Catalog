// import { useState, Suspense, lazy, useEffect } from "react";
// import {
//   Facebook,
//   Twitter,
//   Youtube,
//   Instagram,
//   AirplayIcon as Spotify,
// } from "lucide-react";
// import TrackList from "./components/Track-list";
// import Loading from "./components/Loading";
// import LoadingImg from "./components/LoadingImg";
// import { Link } from "react-router-dom";
// import "./index.css";
// import track1 from "./assets/keteki_img.jpeg";
// import { Spotlight } from "./components/ui/Spotlight";
// import backgroundImage from "./assets/bg_image1.jpg";
// import track2 from "./assets/Mulakate.jpg";
// import WrapEffect from "./components/WrapEffect";
// import Navbar from "./components/Navbar";
// import TextGenerateEffect from "./components/ui/TextGenerateEffect";

// // Dynamically import 3D components using React's `lazy`
// const Scene3D = lazy(() => import("./components/Scence"));

// export default function Home() {
//   const [currentTrack, setCurrentTrack] = useState({
//     title: "Mulakate",
//     subtitle: "Kwaab feat. Parash & Manasi Deka",
//     year: "2024",
//     image: track2,
//   });

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a loading delay
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000); // Adjust the time as needed

//     return () => clearTimeout(timer);
//   }, []);

//   const socialIcons = [
//     { Icon: Instagram, link: "https://instagram.com/parash.wav" },
//     { Icon: Spotify, link: "https://open.spotify.com/artist/1ScYtUsE8gkLCH7qsjWhGs" },
//     { Icon: Facebook, link: "https://www.facebook.com/parash.das.946" },
//     { Icon: Twitter, link: "https://x.com/parashmusic" },
//     { Icon: Youtube, link: "https://youtube.com/@parash9912" },
//   ];

//   return (
//     <div className="max-w-full overflow-x-hidden">
//       {isLoading && <Loading />}
//       <WrapEffect imageUrl={backgroundImage} />
//       {/* Background */}
//       <div className="fixed lg:backdrop-blur-sm -z-10 inset-0">
//         <div className="absolute inset-0 bg-gradient-to-b from-black/01 via-black/100 to-black/70" />
//       </div>

//       <div className={`min-h-screen text-white relative ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
//         <div className="fixed">
//           <Spotlight />
//           <Spotlight />
//         </div>
//         <div className="absolute">
//           <Navbar />
//         </div>

//         {/* Main Content */}
//         <main className="container mx-auto pt-18 lg:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-8">
//             {/* 3D Scene */}
//             <div className="h-[500px] sm:h-[400px] lg:h-[800px] relative overflow-hidden rounded-xl">
//               <Suspense fallback={<LoadingImg />}>
//                 <Scene3D imageUrl={currentTrack.image} />
//               </Suspense>
//             </div>

//             {/* Track List */}
//             <div className="space-y-6 lg:py-8">
//               <div className="space-y-2">
//                 <div className="text-sm text-gray-400">{currentTrack.year}</div>
//                 <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
//                   {currentTrack.title}
//                 </h1>
//                 <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300">
//                   {currentTrack.subtitle}
//                 </h2>
//               </div>
//               <div className="overflow-y-auto pr-2">
//                 <TrackList onTrackSelect={setCurrentTrack} />
//               </div>
//             </div>
//           </div>
//         </main>

//         {/* Header */}
//         <header className="rounded-lg mx-auto max-w-md z-50 p-4 bg-black/30 backdrop-blur-md">
//           <div className="container flex justify-center items-center">
//             <div className="flex gap-4 items-center">
//               <span className="hidden sm:inline-block text-sm text-gray-400">FOLLOW ME ON</span>
//               <div className="flex gap-2">
//                 {socialIcons.map(({ Icon, link }, index) => (
//                   <a key={index} href={link} target="_blank" rel="noopener noreferrer">
//                     <Icon
//                       size={16}
//                       className="hover:text-gray-300 cursor-pointer transition-colors duration-200"
//                     />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </header>
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import track1 from "../assets/bitter.jpg";
import track2 from "../assets/Mulakate.jpg";
import track3 from "../assets/v1.png";
import track4 from "../assets/XUbakh25.jpg";
import track5 from "../assets/Xewali.png";
import track6 from "../assets/JAKORUWA MOLOYA.jpg";
import track7 from "../assets/unknown.jpg";

const tracks = [
  { title: "Bitter", subtitle: "Parash & Aarxslan", year: "2022", image: track1 },
  { title: "Jakoruwa Moloya (Parasified)", subtitle: "Parash, Sannidhya bhuyan & Aarxslan", year: "2024", image: track6 },
  { title: "Mulakate", subtitle: "Kwaab feat. Parash & Manasi deka", year: "2024", image: track2 },
  { title: "Tangerine High", subtitle: "PARASH (Rainforest underground feat.bolt hk)", year: "2021", image: track3 },
  { title: "Xewali Xubakh", subtitle: "Parash & Bohniman & Ajit", year: "2024", image: track4 },
  { title: "Sinaki Baat", subtitle: "Khwaab (feat .PARASH)", year: "2024", image: track5 },
  { title: "Upcoming Release (Turn Around)", subtitle: "PARASH & Bohniman feat. Manasi deka", year: "2024", image: track7 },
  { title: "birina feat.Prabal", subtitle: "Parash & Prabal", year: "2024", image: track7 },
];

const AUTO_CHANGE_INTERVAL = 5000; // Change track every 5 seconds

export default function TrackList({ onTrackSelect }) {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [expandedTrack, setExpandedTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrack((prevTrack) => {
        const nextTrack = (prevTrack + 1) % tracks.length;
        setExpandedTrack(nextTrack); // Expand the new track automatically
        onTrackSelect(tracks[nextTrack]);
        setProgress(0); // Reset progress bar
        return nextTrack;
      });
    }, AUTO_CHANGE_INTERVAL);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 100 / (AUTO_CHANGE_INTERVAL / 100)));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [onTrackSelect]);

  const handleTrackClick = (index) => {
    setCurrentTrack(index);
    setExpandedTrack(index);
    onTrackSelect(tracks[index]);
    setProgress(0);
  };

  return (
    <div className="space-y-4">
      {tracks.map((track, index) => (
        <motion.div
          key={`${track.title}-${track.subtitle}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
          className={`p-4 rounded-lg cursor-pointer transition-colors relative ${
            index === currentTrack ? "bg-white/10" : "hover:bg-white/5"
          }`}
          onClick={() => handleTrackClick(index)}
        >
          <p className="text-lg font-semibold">{track.title}</p>
          {expandedTrack === index && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-sm text-gray-400"
            >
              {track.subtitle}
            </motion.p>
          )}
          {index === currentTrack && (
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gray-200/50 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: AUTO_CHANGE_INTERVAL / 1000, ease: "linear" }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
