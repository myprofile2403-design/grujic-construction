import { useState } from 'react';
import './index.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <AboutPage />;
      case 'Services':
        return <ServicesPage />;
      case 'Projects':
        return <ProjectsPage />;
      case 'Contacts':
        return <ContactsPage />;
      case 'Home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#BC9706]/95 backdrop-blur-sm shadow-md">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[86px] flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setCurrentPage('Home'); }}
            className="flex items-center flex-shrink-0 cursor-pointer"
            aria-label="Home"
          >
            {/* Added logo per user request */}
            <img src="/logo.png" alt="Logo" className="h-[60px] object-contain" />
          </a>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 font-semibold text-white/90">
            <button onClick={() => setCurrentPage('Home')} className="hover:text-white transition-colors">Domů</button>
            <button onClick={() => setCurrentPage('About')} className="hover:text-white transition-colors">O nás</button>
            <button onClick={() => setCurrentPage('Services')} className="hover:text-white transition-colors">Služby</button>
            <button onClick={() => setCurrentPage('Projects')} className="hover:text-white transition-colors">Projekty</button>
            <button onClick={() => setCurrentPage('Contacts')} className="hover:text-white transition-colors">Kontakt</button>
          </nav>

          <div className="hidden md:flex items-center gap-3 ml-7">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setCurrentPage('Contacts'); }}
              className="bg-[#242121] text-white text-sm font-medium flex items-center px-4 h-[38px] hover:bg-[#3a3737] transition-colors uppercase tracking-wider"
            >
              Napište nám
            </a>
            <a
              href="tel:721084563"
              className="bg-[#242121] text-white text-sm font-medium flex items-center px-4 h-[38px] hover:bg-[#3a3737] transition-colors tracking-wider"
            >
              721 084 563
            </a>
          </div>

          <div className="md:hidden ml-auto">
            <button className="flex flex-col gap-[5px] p-2" aria-label="Open menu">
              <span className="w-6 h-0.5 bg-black block"></span>
              <span className="w-6 h-0.5 bg-black block"></span>
              <span className="w-6 h-0.5 bg-black block"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-[#242121] text-white pt-16 pb-12 w-full">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-1/3 flex flex-col">
            <img src="/logo.png" alt="Logo" className="h-[76px] w-auto object-contain mb-6 self-start" style={{ filter: "brightness(0) invert(1)" }} />
            <p className="text-lg text-gray-300 mb-2">Stavební firma</p>
            <p className="text-lg text-gray-300 mb-8">Vše v jednom... výstavba od A do Z</p>
            
            <h3 className="text-2xl font-light tracking-wide text-white mb-4">Kontakt</h3>
            <div className="text-gray-300 space-y-2 mb-6">
              <a href="tel:+420721084563" className="block hover:text-white transition-colors">Telefon: +420 721 084 563</a>
              <a href="mailto:info@stavebnifirma.cz" className="block hover:text-white transition-colors">E-mail: info@stavebnifirma.cz</a>
            </div>

            <div className="text-gray-300 space-y-1 mb-6">
              <p className="font-semibold text-white">GRUJIČ CONSTRUCTION s.r.o.</p>
              <p>Körnerova 455/7</p>
              <p>Zábrdovice (Brno-střed), 602 00 Brno</p>
            </div>

            <div className="text-gray-300 space-y-1">
              <p>Jednatel: SAŠA GRUJIĆ</p>
              <p>IČO: 10840648</p>
              <p>DIČ: CZ10840648</p>
            </div>
          </div>
          
          <div className="md:w-1/2 flex flex-col bg-white text-black p-8 md:p-12 rounded shadow-lg">
            <h2 className="text-3xl font-light mb-8 tracking-wide">KONTAKTUJTE NÁS</h2>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Jméno a příjmení *" className="border-b border-gray-300 py-3 outline-none focus:border-[#BC9706] transition-colors" required />
              <input type="tel" placeholder="Telefon" className="border-b border-gray-300 py-3 outline-none focus:border-[#BC9706] transition-colors" />
              <input type="email" placeholder="Email *" className="border-b border-gray-300 py-3 outline-none focus:border-[#BC9706] transition-colors" required />
              <textarea placeholder="Napište nám..." rows={4} className="border-b border-gray-300 py-3 outline-none focus:border-[#BC9706] transition-colors resize-none"></textarea>
              <button type="submit" className="mt-4 bg-black text-white px-8 py-3 rounded-full hover:bg-[#BC9706] transition-colors self-start font-medium tracking-wide">Odeslat</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="relative w-full min-h-[700px] overflow-hidden flex items-center">
        <img
          src="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/7e54a0_53baa898aabb47ccab9fe6a08587c54f_mv2.png"
          alt="Construction background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 mt-[100px]">
          <div className="bg-white/20 backdrop-blur-sm p-8 md:p-12 inline-block rounded-xl border border-white/20 shadow-2xl max-w-[650px]">
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-4 tracking-tight drop-shadow-md">
              Kvalitní stavební řešení
            </h1>
            <p className="text-white text-xl md:text-2xl font-medium tracking-wide drop-shadow-sm">
              Spolehlivé, odolné a profesionální
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      <section className="bg-white py-24 w-full">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-[55%]">
            <h2 className="text-[#A97C50] text-5xl md:text-6xl font-bold tracking-tight mb-4">O nás</h2>
            <h3 className="text-[#242121] text-3xl font-medium mb-6">Naše mise</h3>
            <p className="text-[#242121] text-xl leading-relaxed opacity-90">
              Naše společnost je stavební firma, která se specializuje na realizaci stavebních projektů, jako jsou domy, byty, kanceláře a chaty. S mnohaletými zkušenostmi ve stavebnictví a desítkami úspěšně dokončených zakázek garantuje spokojenost zákazníků. Pracujeme s kvalitními materiály a disponujeme profesionálně vyškoleným týmem, který zajistí špičkovou kvalitu každé realizace.
            </p>
          </div>
          <div className="md:w-[45%]">
            <img
              src="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/11062b_aebf3dfd3b1745ee97d9ea32bd402499_mv2.jpg"
              alt="Construction workers"
              className="w-full h-auto shadow-2xl rounded-lg object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-24 w-full relative">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-[#242121] text-5xl md:text-6xl font-bold tracking-tight mb-4">Služby</h2>
            <p className="text-[#242121] text-2xl font-medium opacity-80">Naše stavební služby</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ServiceCard title="Zateplení a fasády" img="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/f8f2f3_f201ef24b3354535bf18313bf4b9ee03_mv2.jpg" desc="Provádíme zateplení fasád rodinných, bytových i panelových domů." />
            <ServiceCard title="Napínané stropy" img="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/f8f2f3_c0e9021666d34156934d81bb1deb1e12_mv2.jpg" />
            <ServiceCard title="Hydroizolační Fólie" img="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/7e54a0_d07d4013202c46babe7309a8847a264e_mv2.jpg" />
            <ServiceCard title="Výstavba domů" img="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/7e54a0_9e7f1b48479846dab59ab443b6b7694e_mv2.jpg" desc="Váš vysněný dům postavený k dokonalosti" />
            <ServiceCard title="Sádrokartony" img="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/7e54a0_1c894f2406ad48618d4b60e7df2bc77d_mv2.jpg" desc="Desky mají využití téměř u všech druhů staveb, kde je kladen důraz na kvalitu." />
            <ServiceCard title="Obklady a dlažby" img="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/7e54a0_7446cf8b276840b8bed6fe4e43182a06_mv2.jpg" desc="Zaměřujeme se na pokládku obkladů a dlažeb z různých materiálů." />
          </div>
        </div>
      </section>

      <section className="bg-white py-24 w-full">
         <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="mb-16">
            <h2 className="text-[#242121] text-5xl md:text-6xl font-bold tracking-tight mb-4">Projekty</h2>
            <p className="text-[#242121] text-2xl font-medium opacity-80">Naše práce</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProjectCard img="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/11062b_b743373ab2514f928a46d12c704d9170_mv2.jpg" />
            <ProjectCard img="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/c837a6_7f8bb28a0d1646bfbcc18d8f11e046aa_mv2.jpg" />
            <ProjectCard img="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/11062b_f6bec34858fa456ab712aa4018880375_mv2.jpg" />
            <ProjectCard img="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/11062b_24095eb285b9463d89099b1c33fe57ea_mv2.jpg" />
          </div>
         </div>
      </section>
    </>
  );
}

function ServiceCard({ title, img, desc }: { title: string, img: string, desc?: string }) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100">
      <div className="h-[280px] overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
      </div>
      <div className="p-8 flex flex-col items-center flex-1 bg-white relative z-20">
        <h3 className="text-[#A97C50] text-2xl md:text-3xl font-bold text-center mb-4">{title}</h3>
        {desc && <p className="text-gray-600 text-center text-lg">{desc}</p>}
      </div>
    </div>
  );
}

function ProjectCard({ img }: { img: string }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3] group cursor-pointer relative">
      <div className="absolute inset-0 bg-[#A97C50]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
      <img src={img} alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 animate-fade-in">
      <h1 className="text-5xl font-bold text-[#A97C50] mb-8">O nás</h1>
      <div className="prose prose-lg max-w-none text-gray-800">
        <p>This is an example of a page. Unlike posts, which are displayed on your blog's front page in the order they're published, pages are better suited for more timeless content that you want to be easily accessible, like your About or Contact information.</p>
        <p className="mt-4">Jsme moderní stavební firma s hlubokými kořeny v oboru. Zaměřujeme se na poskytování špičkových stavebních a rekonstrukčních prací. Naším cílem je přetvořit vize našich klientů v realitu s důrazem na kvalitu, spolehlivost a inovace.</p>
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 animate-fade-in">
      <h1 className="text-5xl font-bold text-[#A97C50] mb-8">Služby</h1>
      <p className="text-xl mb-12 text-gray-600">Nabízíme široké spektrum stavebních prací.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ServiceCard title="Zateplení a fasády" img="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/f8f2f3_f201ef24b3354535bf18313bf4b9ee03_mv2.jpg" />
        <ServiceCard title="Výstavba domů" img="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/7e54a0_9e7f1b48479846dab59ab443b6b7694e_mv2.jpg" />
        <ServiceCard title="Rekonstrukce" img="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/7e54a0_a490b3d01e3e4717ac53d99eddf6b900_mv2.jpg" />
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 animate-fade-in">
      <h1 className="text-5xl font-bold text-[#A97C50] mb-8">Projekty</h1>
      <p className="text-xl mb-12 text-gray-600">Prohlédněte si naše úspěšné realizace.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProjectCard img="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/11062b_b743373ab2514f928a46d12c704d9170_mv2.jpg" />
        <ProjectCard img="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/c837a6_7f8bb28a0d1646bfbcc18d8f11e046aa_mv2.jpg" />
        <ProjectCard img="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/11062b_f6bec34858fa456ab712aa4018880375_mv2.jpg" />
        <ProjectCard img="https://subtle-lamprey.10web.cloud/wp-content/uploads/2026/07/11062b_24095eb285b9463d89099b1c33fe57ea_mv2.jpg" />
      </div>
    </div>
  );
}

function ContactsPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 animate-fade-in">
      <h1 className="text-5xl font-bold text-[#A97C50] mb-8">Kontakt</h1>
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
           <h2 className="text-3xl font-bold mb-6 text-[#242121]">GRUJIČ CONSTRUCTION s.r.o.</h2>
           <p className="text-lg text-gray-700 mb-2">Körnerova 455/7, Zábrdovice (Brno-střed)</p>
           <p className="text-lg text-gray-700 mb-6">602 00 Brno</p>
           
           <h3 className="text-xl font-semibold mt-8 mb-4">Fakturační údaje:</h3>
           <p className="text-gray-700">Jednatel: SAŠA GRUJIĆ</p>
           <p className="text-gray-700">IČO: 10840648</p>
           <p className="text-gray-700">DIČ: CZ10840648</p>
        </div>
        <div className="md:w-1/2">
           <h3 className="text-xl font-semibold mb-4">Zavolejte nám</h3>
           <p className="text-2xl text-[#BC9706] font-bold mb-8">+420 608 411 169</p>
           
           <h3 className="text-xl font-semibold mb-4">Napište nám</h3>
           <p className="text-2xl text-[#BC9706] font-bold">grujic@mail.cz</p>
        </div>
      </div>
    </div>
  );
}
