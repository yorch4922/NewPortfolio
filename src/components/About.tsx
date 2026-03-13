import { UserCheck, Search, CheckCircle } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <UserCheck className="w-8 h-8 text-accent group-hover:text-white transition-colors" />,
      title: "Anthropological Background",
      desc: "My foundation in Social Anthropology gives me a unique perspective for understanding user behaviors, needs, and cultural contexts — going beyond surface-level research."
    },
    {
      icon: <Search className="w-8 h-8 text-accent group-hover:text-white transition-colors" />,
      title: "Qualitative Methods",
      desc: "To gain a genuine understanding of user behavior, I employ key ethnographic methods such as in-depth interviews and participant observation, ensuring designs reflect real-world complexity."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent group-hover:text-white transition-colors" />,
      title: "Constant Validation",
      desc: "I validate every design proposal by testing it with real users, ensuring that final solutions are not just functional, but truly meaningful and relevant."
    }
  ];

  return (
    <section id="about" className="py-24 bg-card-bg">
      <div className="container-custom flex flex-col items-center gap-12 text-center">
        <div className="max-w-4xl flex flex-col gap-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">About Me</h2>
          <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed">
            At the heart of my work is a simple belief: the best designs are born from deep understanding. My training in Social Anthropology equips me with a unique lens for listening, observing, and translating real human needs into meaningful design decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 w-full mt-4">
          {features.map((f, i) => (
            <div key={i} className="bg-bg p-8 rounded-xl flex flex-col items-start text-left gap-5 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-accent">{f.title}</h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
