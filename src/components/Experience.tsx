import { Layout, BarChart2 } from "lucide-react";

export default function Experience() {
  const roles = [
    {
      title: "UX Responsibilities",
      icon: <Layout className="w-7 h-7 text-accent" />,
      list: [
        "Ethnographic research to understand real user contexts and behaviors",
        "Synthesize research findings into journey maps, service blueprints, and contextualized personas",
        "Facilitate co-creation workshops with stakeholders and end-users to collaboratively generate solutions",
        "User flow design, low-to-high fidelity prototyping, and iterative usability testing"
      ]
    },
    {
      title: "PM Responsibilities",
      icon: <BarChart2 className="w-7 h-7 text-accent" />,
      list: [
        "Strategic Planning & Roadmapping",
        "Backlog Management & Prioritization (Scrum/Agile)",
        "Agile Team Leadership & Stakeholder Communication",
        "Data-driven Decision Making and Success Metric Definition"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-bg">
      <div className="container-custom">
        <div className="flex flex-col gap-6 mb-16 max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">Professional Experience</h2>
          <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed">
            End-to-end ownership of UX research and project management within multidisciplinary, cross-functional teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {roles.map((role, i) => (
            <div key={i} className="bg-card-bg p-8 rounded-2xl shadow-lg border border-gray-100/50 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/5 rounded-full">
                  {role.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-accent">{role.title}</h3>
              </div>
              
              <ul className="flex flex-col gap-5">
                {role.list.map((item, j) => (
                  <li key={j} className="flex gap-4 items-start font-sans text-sm md:text-base text-text-primary leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-accent/5 rounded-2xl border border-accent/10">
          <p className="font-sans text-base md:text-lg text-text-primary leading-relaxed text-center italic">
            "Over the past several years, I have collaborated with front-end and back-end developers, GIS specialists, and key stakeholders to build user-centered applications — taking on roles as designer, researcher, product owner, and content strategist."
          </p>
        </div>
      </div>
    </section>
  );
}
