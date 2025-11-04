import { siteConfig } from "../config";

export default function Staff() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Meet the staff</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          The people who keep things running smoothly and make the magic happen.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.staff.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
            >
              <div
                className="mx-auto grid size-16 place-items-center rounded-full text-white"
                style={{ backgroundColor: s.color }}
              >
                <span className="text-lg font-bold">
                  {s.name.slice(0, 1).toUpperCase()}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{s.name}</h3>
              <p className="text-sm text-slate-300">{s.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
