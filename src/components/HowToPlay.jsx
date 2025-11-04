import { useState } from "react";
import { siteConfig } from "../config";

export default function HowToPlay() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.serverIP);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      const input = document.createElement("input");
      input.value = siteConfig.serverIP;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">How to play</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          Connect in seconds on Java and Bedrock editions. Copy the IP and follow
          the steps for your platform.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StepCard
            title="Java Edition (PC)"
            steps={[
              "Launch Minecraft Java 1.20+",
              "Multiplayer → Add Server",
              `Server Address: ${siteConfig.serverIP}`,
              "Join and have fun!",
            ]}
          />
          <StepCard
            title="Bedrock (Win10/Console/Mobile)"
            steps={[
              "Play → Servers → Add Server",
              `Server Address: ${siteConfig.serverIP}`,
              "Port: 19132",
              "Save and connect",
            ]}
          />
          <StepCard
            title="Troubleshooting"
            steps={[
              "Whitelist or queue? Check Discord",
              "Version mismatch? Use 1.20+",
              "Still stuck? Open a support ticket",
            ]}
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={copy}
            className="rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
            style={{ backgroundColor: siteConfig.colors.accent }}
          >
            {copied ? "Copied!" : `Copy IP • ${siteConfig.serverIP}`}
          </button>
          <span className="text-slate-400 text-sm">
            Works on Java & Bedrock. Share with friends!
          </span>
        </div>
      </div>
    </section>
  );
}

function StepCard({ title, steps }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ol className="mt-3 space-y-2 text-slate-300 text-sm list-decimal list-inside">
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </div>
  );
}
