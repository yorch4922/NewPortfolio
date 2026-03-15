export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-card-bg">
      <div className="container-custom">
        <div className="bg-bg rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px] border border-gray-100">
          {/* Left Column: Heading & Actions */}
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-accent leading-tight">
                Let's work together.
              </h2>
              <p className="font-sans text-lg md:text-xl text-text-secondary leading-relaxed max-w-md">
                Have a project in mind? Looking for a partner to build something amazing? Feel free to reach out.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a 
                href="mailto:jorgeyaelorga@gmail.com" 
                className="flex flex-col group"
              >
                <p className="font-sans text-xs font-bold text-accent tracking-[0.2em] uppercase">Email Me</p>
                <p className="font-sans text-lg md:text-xl font-bold text-text-primary mt-1 group-hover:text-accent transition-colors">
                  jorgeyaelorga@gmail.com
                </p>
              </a>

              <a 
                href="https://linkedin.com/in/jorgeoropeza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col group"
              >
                <p className="font-sans text-xs font-bold text-accent tracking-[0.2em] uppercase">LinkedIn</p>
                <p className="font-sans text-lg md:text-xl font-bold text-text-primary mt-1 group-hover:text-accent transition-colors">
                  Jorge Oropeza
                </p>
              </a>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="md:w-1/2 p-6 md:p-12 bg-bg flex items-center justify-center">
            <div className="bg-white rounded-3xl p-8 md:p-12 w-full max-w-md shadow-xl border border-gray-50">
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-sans text-sm font-bold text-text-secondary">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans text-text-primary"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans text-sm font-bold text-text-secondary">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans text-text-primary"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-sans text-sm font-bold text-text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans resize-none text-text-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white font-bold py-4 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-accent/20 mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
