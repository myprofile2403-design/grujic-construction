import { Link } from "react-router-dom";
import { business } from "../lib/business";

export default function SiteFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white/60 py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; 2026 GRUJIČ CONSTRUCTION s.r.o. Všechna práva vyhrazena.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <a
              href={`mailto:${business.email}`}
              className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium"
            >
              ✉ {business.email}
            </a>
            <div className="flex gap-6">
              <Link to="/" className="text-white/60 hover:text-white transition-colors text-sm">
                Obchodní podmínky
              </Link>
              <Link to="/" className="text-white/60 hover:text-white transition-colors text-sm">
                Zásady ochrany osobních údajů
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
