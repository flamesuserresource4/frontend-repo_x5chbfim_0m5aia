import { siteConfig } from "../config";
import { Rocket, Shield, Globe, Trophy, Server, Star } from "lucide-react";

const iconMap = { Rocket, Shield, Globe, Trophy, Server, Star };

export default function Features() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Features & game modes</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          Built for fun and fairness. Explore unique experiences crafted by our
          team and community.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.features.map((f) => {
            const Icon = iconMap[f.icon] || Star;
            return (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="grid size-11 place-items-center rounded-xl text-white"
                    style={{ backgroundColor: siteConfig.colors.accent }}
                  >
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{f.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {siteConfig.gameModes.map((m) => (
            <span
              key={m}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
