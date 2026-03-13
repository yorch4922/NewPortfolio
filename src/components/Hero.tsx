import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-bg py-20 md:py-32">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex flex-col gap-6 text-center md:text-left">
          <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            UX Designer & Researcher
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight text-accent">
            Jorge<br />Oropeza
          </h1>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary leading-snug">
            UX Design with an Anthropological Touch
          </h2>
          <p className="font-sans text-base md:text-lg text-text-secondary max-w-lg leading-relaxed">
            A specialist in participatory design and qualitative research, combining anthropological methods with UX to craft deeply human-centered experiences.
          </p>
          <div className="pt-4 flex justify-center md:justify-start">
            <button className="px-10 py-4 bg-accent text-white rounded font-bold hover:brightness-110 transition-all shadow-lg shadow-accent/20">
              View Resume
            </button>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-72 h-72 md:w-[480px] md:h-[480px]">
             {/* Gradient/Pattern Background for Image */}
            <div className="absolute inset-0 rounded-full bg-[#C8BAA8] overflow-hidden border-8 border-white/50 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1743012394316-4606e330ef23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzMzNzI0NjF8&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jorge Oropeza Portrait"
                className="w-full h-full object-cover grayscale-0 hover:grayscale-[0.2] transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
