import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-footer-bg py-20 text-white border-t border-white/5">
      <div className="container-custom flex flex-col items-center gap-12">
        {/* Quote Section */}
        <p className="font-sans italic text-lg md:text-xl max-w-2xl text-center text-white/90 leading-relaxed font-light">
          &quot;I design for people. By applying anthropology to UX, I ensure every product is grounded in real human needs and resonates authentically.&quot;
        </p>
        
        {/* Accent Divider */}
        <div className="w-20 h-1 bg-accent rounded-full" />

        {/* Scalable Navigation Links (Optional but good for SEO/UX) */}
        <div className="flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-4">
          <Link href="/#about" className="hover:text-accent transition-colors">About</Link>
          <Link href="/#experience" className="hover:text-accent transition-colors">Experience</Link>
          <Link href="/#projects" className="hover:text-accent transition-colors">Projects</Link>
          <Link href="/#contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>

        {/* Call to Actions (Resumes) */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
            <Link 
              href="/jyresume"
              className="px-8 py-4 bg-accent text-white rounded-xl font-bold hover:brightness-110 active:scale-[0.98] transition-all text-sm w-72 md:w-auto text-center shadow-lg shadow-accent/10"
            >
              CV en Español
            </Link>
            <Link 
              href="/jyresume"
              className="px-8 py-4 border border-white/20 text-white rounded-xl font-bold hover:bg-white/5 active:scale-[0.98] transition-all text-sm w-72 md:w-auto text-center"
            >
              English Resume
            </Link>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center border-t border-white/5 w-full">
          <p className="font-sans text-[10px] text-white/40 tracking-[0.3em] font-medium uppercase">
            © {currentYear} Jorge Oropeza · UX Designer & Researcher
          </p>
        </div>
      </div>
    </footer>
  );
}
