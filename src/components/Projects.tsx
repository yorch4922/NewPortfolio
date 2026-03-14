export default function Projects() {
  const projects = [
    {
      title: "Reducing geoprocessing to 3 clicks",
      badge: "GIS & Mapping",
      desc: "I designed a map application enabling municipal staff to access critical risk information and generate customized maps using configurable geographic data layers — significantly reducing manual workload and improving data accessibility.",
      image: "https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/%C3%81reaTrabajo_Inicio%201.png"
    },
    {
      title: "Streamlining Urban Development Processes",
      badge: "Urban Development",
      desc: "One of my most complex projects: the full digitalization of urban development procedures, including formal approval from municipal government. My first real-world UX engagement, and a resounding success.",
      image: "https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/mockF%201.png"
    },
    {
      title: "Bachelor's Thesis — Graffiti in Nezahualcoyotl",
      badge: "Anthropological Research",
      desc: "A qualitative research project on graffiti in the municipality of Nezahualcoyotl, combining urban and art anthropology with ethnographic fieldwork, structured interviews, and participatory observation methods.",
      image: "https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/imagen%208%20%281%29.png"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-card-bg">
      <div className="container-custom">
        <div className="flex flex-col gap-6 mb-16 max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">Projects</h2>
          <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed">
            Selected case studies from years of collaboration with developers, GIS specialists, and municipal stakeholders.
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((p, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-10 bg-bg rounded-3xl p-8 md:p-12 items-center hover:shadow-2xl transition-all duration-500 border border-gray-100/50 group">
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <span className="font-sans text-xs font-bold tracking-[0.2em] text-accent uppercase bg-accent/5 self-start px-3 py-1 rounded-full">
                  {p.badge}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary leading-tight">
                  {p.title}
                </h3>
                <p className="font-sans text-base text-text-secondary leading-relaxed">
                  {p.desc}
                </p>
                <div className="pt-4 flex gap-4">
                  <button className="px-6 py-3 bg-accent text-white rounded font-bold hover:brightness-110 transition-all text-sm shadow-sm">
                    View Project
                  </button>
                  {i === 2 && (
                    <button className="px-6 py-3 border border-accent text-accent rounded font-bold hover:bg-accent/5 transition-all text-sm">
                      Read Thesis
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
