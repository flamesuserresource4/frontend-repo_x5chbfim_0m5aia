import { siteConfig } from "../config";

export default function Footer() {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${siteConfig.colors.primaryFrom}, ${siteConfig.colors.primaryTo})`,
  };

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={gradientStyle} aria-hidden />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} {siteConfig.serverName}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.social.discord}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10"
            >
              Discord
            </a>
            <button
              onClick={async () => {
                await navigator.clipboard.writeText(siteConfig.serverIP);
              }}
              className="rounded-lg px-3 py-1.5 text-sm text-white"
              style={{ backgroundColor: siteConfig.colors.accent }}
            >
              Copy IP
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
