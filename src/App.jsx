import { useState, Suspense, lazy, useEffect } from "react";
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  AirplayIcon as Spotify,
} from "lucide-react";
import TrackList from "./components/Track-list";
import Loading from "./components/Loading";
import LoadingImg from "./components/LoadingImg";
import { Link } from "react-router-dom";
import "./index.css";
import track1 from "./assets/keteki_img.jpeg";
import { Spotlight } from "./components/ui/Spotlight";
import backgroundImage from "./assets/bg_image1.jpg";
import track2 from "./assets/Mulakate.jpg";
import WrapEffect from "./components/WrapEffect";
import Navbar from "./components/Navbar";
import TextGenerateEffect from "./components/ui/TextGenerateEffect";

// Dynamically import 3D components using React's `lazy`
const Scene3D = lazy(() => import("./components/Scence"));

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState({
    title: "Mulakate",
    subtitle: "Kwaab feat. Parash & Manasi Deka",
    year: "2024",
    image: track2,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  const socialIcons = [
    { Icon: Instagram, link: "https://instagram.com/parash.wav" },
    { Icon: Spotify, link: "https://open.spotify.com/artist/1ScYtUsE8gkLCH7qsjWhGs" },
    { Icon: Facebook, link: "https://www.facebook.com/parash.das.946" },
    { Icon: Twitter, link: "https://x.com/parashmusic" },
    { Icon: Youtube, link: "https://youtube.com/@parash9912" },
  ];

  return (
    <div className="max-w-full overflow-x-hidden">
      {isLoading && <Loading />}
      <WrapEffect imageUrl={backgroundImage} />
      {/* Background */}
      <div className="fixed backdrop-blur-sm -z-10 inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/01 via-black/100 to-black/70" />
      </div>

      <div className={`min-h-screen text-white relative ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
        <div className="fixed">
          <Spotlight />
          <Spotlight />
        </div>
        <div className="absolute">
          <Navbar />
        </div>

        {/* Main Content */}
        <main className="container mx-auto pt-32 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 3D Scene */}
            <div className="h-[500px] sm:h-[400px] lg:h-[800px] relative overflow-hidden rounded-xl">
              <Suspense fallback={<LoadingImg />}>
                <Scene3D imageUrl={currentTrack.image} />
              </Suspense>
            </div>

            {/* Track List */}
            <div className="space-y-6 lg:py-8">
              <div className="space-y-2">
                <div className="text-sm text-gray-400">{currentTrack.year}</div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  {currentTrack.title}
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300">
                  {currentTrack.subtitle}
                </h2>
              </div>
              <div className="overflow-y-auto pr-2">
                <TrackList onTrackSelect={setCurrentTrack} />
              </div>
            </div>
          </div>
        </main>

        {/* Header */}
        <header className="rounded-lg mx-auto max-w-md z-50 p-4 bg-black/30 backdrop-blur-md">
          <div className="container flex justify-center items-center">
            <div className="flex gap-4 items-center">
              <span className="hidden sm:inline-block text-sm text-gray-400">FOLLOW ME ON</span>
              <div className="flex gap-2">
                {socialIcons.map(({ Icon, link }, index) => (
                  <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                    <Icon
                      size={16}
                      className="hover:text-gray-300 cursor-pointer transition-colors duration-200"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}