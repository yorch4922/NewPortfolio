import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg py-20 text-white border-t border-white/5">
      <div className="container-custom flex flex-col items-center gap-12">
        <p className="font-sans italic text-lg md:text-xl max-w-2xl text-center text-white/90 leading-relaxed font-light">
          &quot;I design for people. By applying anthropology to UX, I ensure every product is grounded in real human needs and resonates authentically.&quot;
        </p>

        <div className="w-20 h-1 bg-accent rounded-full" />

        <nav aria-label="Footer" className="mb-4">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            <li className="list-none">
              <Link href="/#about" className="hover:text-accent transition-colors">
                About
              </Link>
            </li>
            <li className="list-none">
              <Link href="/#experience" className="hover:text-accent transition-colors">
                Experience
              </Link>
            </li>
            <li className="list-none">
              <Link href="/#projects" className="hover:text-accent transition-colors">
                Projects
              </Link>
            </li>
            <li className="list-none">
              <Link href="/#contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="pt-8 text-center border-t border-white/5 w-full">
          <p className="font-sans text-[10px] text-white/40 tracking-[0.3em] font-medium uppercase">
            (c) {currentYear} Jorge Oropeza | UX Designer and Researcher
          </p>
        </div>
      </div>
    </footer>
  );
}
