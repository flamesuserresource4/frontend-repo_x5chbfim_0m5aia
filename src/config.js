// Centralized configuration for easy customization
export const siteConfig = {
  serverName: "NovaCraft",
  serverTagline: "A modern Minecraft experience — lag-free, community-first.",
  serverIP: "play.novacraft.gg",
  colors: {
    // Hex colors keep Tailwind classes stable while allowing quick theme changes
    primaryFrom: "#10b981", // emerald-500
    primaryTo: "#06b6d4", // cyan-500
    accent: "#10b981",
    background: "#0b1220", // deep slate
    surface: "#0f172a", // slate-900
    textOnDark: "#e2e8f0", // slate-200
    headingOnDark: "#ffffff",
  },
  social: {
    discord: "https://discord.gg/novacraft",
  },
  features: [
    {
      title: "Optimized Performance",
      description:
        "Powerful hardware and custom plugins keep TPS high and latency low, even during peak hours.",
      icon: "Rocket",
    },
    {
      title: "Fair & Secure",
      description:
        "Anti-cheat and active moderation ensure a fair, friendly, and inclusive community.",
      icon: "Shield",
    },
    {
      title: "Global Community",
      description:
        "Players from all regions with multilingual support and events for every timezone.",
      icon: "Globe",
    },
    {
      title: "Seasonal Events",
      description:
        "Frequent updates, quests, and tournaments with exclusive cosmetic rewards.",
      icon: "Trophy",
    },
  ],
  gameModes: ["Survival", "Skyblock", "Creative", "BedWars"],
  staff: [
    { name: "Ava", role: "Owner", color: "#059669" },
    { name: "Liam", role: "Admin", color: "#0891b2" },
    { name: "Noah", role: "Moderator", color: "#7c3aed" },
    { name: "Mia", role: "Helper", color: "#e11d48" },
  ],
};
