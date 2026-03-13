export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-footer-bg py-16 text-white border-t border-white/5">
      <div className="container-custom flex flex-col items-center gap-10">
        <p className="font-sans italic text-base md:text-lg max-w-2xl text-center text-white/90 leading-relaxed font-light">
          &quot;I design for people. By applying anthropology to UX, I ensure every product is grounded in real human needs and resonates authentically.&quot;
        </p>
        
        <div className="w-20 h-0.5 bg-accent rounded-full" />

        <div className="flex flex-col md:flex-row gap-6 items-center">
            <button className="px-8 py-3 bg-accent text-white rounded font-bold hover:brightness-110 transition-all text-sm w-64 md:w-auto">
              CV en Español
            </button>
            <button className="px-8 py-3 border border-white text-white rounded font-bold hover:bg-white/10 transition-all text-sm w-64 md:w-auto">
              English Resume
            </button>
        </div>

        <div className="pt-4 text-center">
          <p className="font-sans text-xs text-white/50 tracking-widest font-medium uppercase">
            © {currentYear} Jorge Oropeza · UX Designer & Researcher
          </p>
        </div>
      </div>
    </footer>
  );
}
