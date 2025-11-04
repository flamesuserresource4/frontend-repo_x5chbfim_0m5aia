import Hero from "./components/Hero";
import HowToPlay from "./components/HowToPlay";
import Features from "./components/Features";
import Staff from "./components/Staff";
import Footer from "./components/Footer";
import { siteConfig } from "./config";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: siteConfig.colors.background }}
    >
      <main>
        <Hero />
        <Divider />
        <HowToPlay />
        <Divider />
        <Features />
        <Divider />
        <Staff />
      </main>
      <Footer />
    </div>
  );
}

function Divider() {
  return <div className="mx-auto h-px max-w-6xl bg-white/10" />;
}
