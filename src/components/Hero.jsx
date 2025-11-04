import { siteConfig } from "../config";

export default function Hero() {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${siteConfig.colors.primaryFrom}, ${siteConfig.colors.primaryTo})`,
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={gradientStyle} aria-hidden />

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-200 backdrop-blur">
            <span className="size-2 rounded-full" style={{ backgroundColor: siteConfig.colors.accent }} />
            Now Online • {siteConfig.serverIP}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            {siteConfig.serverName}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            {siteConfig.serverTagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CopyIPButton />
            <a
              href={siteConfig.social.discord}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Join Discord
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {siteConfig.gameModes.map((m) => (
              <span
                key={m}
                className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
    </section>
  );
}

function CopyIPButton() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.serverIP);
      const btn = document.getElementById("copy-ip-btn");
      if (btn) {
        const original = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = original), 1200);
      }
    } catch (err) {
      const input = document.createElement("input");
      input.value = siteConfig.serverIP;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
  };

  return (
    <button
      id="copy-ip-btn"
      onClick={handleCopy}
      className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 hover:opacity-95"
      style={{ backgroundColor: siteConfig.colors.accent }}
    >
      Copy IP • {siteConfig.serverIP}
    </button>
  );
}
