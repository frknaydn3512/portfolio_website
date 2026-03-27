import { useRef, useState, useEffect } from 'react';
import { Mail, ChevronDown, ExternalLink, Code2, MessageSquare, Send, Menu } from 'lucide-react';
import profilPhoto from './assets/profil.jpg';

// Ana ikonlar, Diller ve Frontend
import { FaGithub, FaLinkedin, FaReact, FaDocker, FaJava, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaDatabase } from 'react-icons/fa';

// Spesifik Marka Logoları
import { TbBrandCSharp, TbBrandTailwind, TbBrandTypescript, TbBrandVite } from 'react-icons/tb';
import { DiPostgresql, DiDotnet } from 'react-icons/di';

// Veritabanları ve Araçlar
import { SiFirebase, SiSupabase, SiVercel, SiNetlify, SiSqlite, SiPostman, SiSwagger } from 'react-icons/si';

// --- VERİLER ---

const projects = [
  {
    title: "ES-Gate: Visitor Management",
    description: "Tesisler için kurumsal ziyaretçi ve demirbaş takip sistemi. N-Tier mimari ve Clean Architecture prensipleri.",
    techIcons: [DiDotnet, DiPostgresql, FaDocker, FaReact],
    githubUrl: "https://github.com/frknaydn3512/ESGate-WebAPI-MVC-Project",
    liveUrl: "#",
    images: ["assets/esgate1.jpeg", "assets/esgate2.jpeg"]
  },
  {
    title: "TaskFlow: Real-Time Workspace",
    description: "Trello benzeri premium görev yönetim platformu. React & Vite ile geliştirilmiş dark-mode arayüz ve ASP.NET Core & SignalR destekli gerçek zamanlı (real-time) veri senkronizasyonu.",
    techIcons: [FaReact, DiDotnet, DiPostgresql, TbBrandTypescript],
    githubUrl: "https://github.com/frknaydn3512/taskflow_app",
    liveUrl: "#",
    images: [
      "https://github.com/frknaydn3512/taskflow_app/raw/main/image.png",
      "https://github.com/frknaydn3512/taskflow_app/raw/main/image-1.png",
      "https://github.com/frknaydn3512/taskflow_app/raw/main/image-2.png"
    ]
  },
  {
    title: "StoreApp E-Ticaret Platformu",
    description: "ASP.NET Core MVC ve .NET 10 ile N-Katmanlı mimaride geliştirilmiş tam donanımlı e-ticaret uygulaması. Sepet, Sipariş takibi, Identity Auth ve Admin paneli içerir.",
    techIcons: [DiDotnet, TbBrandCSharp, FaDatabase, FaHtml5],
    githubUrl: "https://github.com/frknaydn3512/Asp.Net-Core-Mvc-StoreApp",
    liveUrl: "#",
    images: [
      "https://github.com/frknaydn3512/Asp.Net-Core-Mvc-StoreApp/raw/main/screenshots/1.jpeg",
      "https://github.com/frknaydn3512/Asp.Net-Core-Mvc-StoreApp/raw/main/screenshots/2.jpeg",
      "https://github.com/frknaydn3512/Asp.Net-Core-Mvc-StoreApp/raw/main/screenshots/3.jpeg",
      "https://github.com/frknaydn3512/Asp.Net-Core-Mvc-StoreApp/raw/main/screenshots/4.jpeg"
    ]
  },
  {
    title: "Modern Geliştirici Portfolyosu",
    description: "Şu an incelemekte olduğunuz bu web sitesi. Tamamen responsive, modern UI/UX prensipleriyle (Hover Reveal & Scroll Snap) ve Clean Code standartlarıyla geliştirildi.",
    techIcons: [FaReact, TbBrandTailwind, TbBrandVite],
    githubUrl: "#",
    liveUrl: "#",
    images: ["assets/me.png"]
  },
  {
    title: "MetaStory Platform",
    description: "Kullanıcı seçimlerine göre şekillenen interaktif hikaye ve karar motoru platformu. Supabase destekli.",
    techIcons: [FaReact, FaDocker, TbBrandCSharp],
    githubUrl: "https://github.com/frknaydn3512/MetaStory",
    liveUrl: "#",
    images: []
  },
  {
    title: "AI Destekli CV Analiz",
    description: "LLM ile özgeçmişleri analiz edip iş ilanlarıyla karşılaştıran akıllı sistem.",
    techIcons: [TbBrandCSharp, TbBrandTypescript, FaReact],
    githubUrl: "https://github.com/frknaydn3512/Ai_Resume_Analyzer",
    liveUrl: "#",
    images: []
  },
  {
    title: "AI Kişisel Asistan (Telegram Bot)",
    description: "Groq (LLaMA 3.3) altyapısı ile çalışan; görev yönetimi, duygu takibi, not alma ve uzun vadeli hafıza yeteneklerine sahip yapay zeka asistanı.",
    techIcons: [FaPython, DiPostgresql, FaDocker],
    githubUrl: "https://github.com/frknaydn3512/asistan_telegrambot",
    liveUrl: "#",
    images: []
  }
];

const techStack = [
  {
    category: "Programlama Dilleri & Backend", icons: [
      { name: "C#", icon: TbBrandCSharp, color: "text-[#239120]" },
      { name: ".NET Core & API", icon: DiDotnet, color: "text-[#512bd4]" },
      { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
      { name: "Java", icon: FaJava, color: "text-[#007396]" },
      { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" }
    ]
  },
  {
    category: "Frontend & Web", icons: [
      { name: "React", icon: FaReact, color: "text-[#61dafb]" },
      { name: "TypeScript", icon: TbBrandTypescript, color: "text-[#3178c6]" },
      { name: "Tailwind CSS", icon: TbBrandTailwind, color: "text-[#38bdf8]" },
      { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
      { name: "Vite", icon: TbBrandVite, color: "text-[#646cff]" },
    ]
  },
  {
    category: "Veritabanı & BaaS", icons: [
      { name: "PostgreSQL", icon: DiPostgresql, color: "text-[#336791]" },
      { name: "MSSQL", icon: FaDatabase, color: "text-[#cc2927]" },
      { name: "SQLite", icon: SiSqlite, color: "text-[#003B57]" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
      { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
    ]
  },
  {
    category: "DevOps & Araçlar", icons: [
      { name: "Docker", icon: FaDocker, color: "text-[#2496ed]" },
      { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
      { name: "Vercel", icon: SiVercel, color: "text-[#FFFFFF]" },
      { name: "Netlify", icon: SiNetlify, color: "text-[#00C7B7]" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
      { name: "Swagger", icon: SiSwagger, color: "text-[#85EA2D]" },
    ]
  }
];

// Düzgün link eşleşmeleri için Navbar Objesi
const navLinks = [
  { name: 'Başlangıç', href: '#home' },
  { name: 'Projeler', href: '#projects' },
  { name: 'Yetenekler', href: '#stack' },
  { name: 'İletişim', href: '#contact' },
];

function AutoSlider({ images = [], title }: { images: string[], title: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      {images.map((img, imgIndex) => (
        <img key={imgIndex} src={img} alt={`${title} ${imgIndex}`} className="w-full h-56 object-cover rounded-2xl flex-shrink-0 snap-center" />
      ))}
    </div>
  );
}

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_KEY,
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });
    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } else { setStatus('error'); }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 scroll-smooth">

      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform">
            frknaydn.lol
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-300 hover:text-emerald-400 font-medium transition-colors text-sm uppercase tracking-wider">
                {link.name}
              </a>
            ))}
          </div>
          <div className="md:hidden text-slate-300"><Menu size={28} /></div>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-70 blur-sm"></div>
              <img src={profilPhoto} alt="Furkan" className="relative rounded-full w-32 h-32 md:w-40 md:h-40 object-cover border-4 border-slate-950" />
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
            <Code2 size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium tracking-wide">Bilişim Sistemleri Mühendisi</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
            Merhaba, Ben <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Furkan</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Bilişim Sistemleri Mühendisliği 3. Sınıf Öğrencisiyim ve kariyerimi Backend Development üzerine şekillendiriyorum.

            Özellikle <span className="text-slate-200 font-medium">ASP.NET Core MVC</span> ve <span className="text-slate-200 font-medium">Web API</span> ekosisteminde ölçeklenebilir, kurumsal mimariye uygun web çözümleri üretmekten keyif alıyorum. Java (OOP) temellerine sahibim ve Yapay Zeka (Python) alanında da kendimi geliştirmeye devam ediyorum. Kariyer odağım .NET teknolojileri olsa da, Python ile veri odaklı servisler ve bot geliştirmede yetkinliğim bulunuyor.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-lg shadow-emerald-500/20">Projelerimi İncele</a>
            <div className="flex gap-6 items-center ml-4 text-slate-400">
              <a href="https://github.com/frknaydn3512" target="_blank"><FaGithub size={28} className="hover:text-white transition-all" /></a>
              <a href="https://www.linkedin.com/in/furkan-ayd%C4%B1n-611a8b230/" target="_blank"><FaLinkedin size={28} className="hover:text-blue-400 transition-all" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJELER --- */}
      <section id="projects" className="py-24 px-4 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Öne Çıkan Çalışmalarım</h2>
            <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-950 border border-slate-700 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-500 group flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                  <div className="flex gap-4 text-slate-400 pt-1">
                    <a href={project.githubUrl} target="_blank"><FaGithub size={22} className="hover:text-white" /></a>
                    <a href={project.liveUrl}><ExternalLink size={22} className="hover:text-emerald-400" /></a>
                  </div>
                </div>
                <div className="w-full max-h-0 opacity-0 group-hover:max-h-64 group-hover:opacity-100 transition-all duration-700 overflow-hidden rounded-2xl group-hover:mb-6">
                  <AutoSlider images={project.images} title={project.title} />
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techIcons.map((Icon, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold bg-slate-800 text-emerald-300 rounded-full border border-slate-700/50 flex items-center gap-1.5">
                      <Icon size={14} />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STACK --- */}
      <section id="stack" className="py-24 px-4 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Teknoloji Yığınım</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {techStack.map((stack, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-emerald-400 mb-8 border-b border-slate-800 pb-3">{stack.category}</h3>
                <div className="grid grid-cols-2 gap-y-8">
                  {stack.icons.map((tech, j) => (
                    <div key={j} className="flex items-center gap-4 group">
                      <tech.icon size={32} className={`${tech.color} opacity-70 group-hover:opacity-100 transition-all`} />
                      <span className="text-slate-200 font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- İLETİŞİM --- */}
      <section id="contact" className="py-24 px-4 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-4">İletişime Geçin</h2>
            <p className="text-lg text-slate-400">frknaydn3512@gmail.com</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-slate-950 border border-slate-700 rounded-3xl p-10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="İsim Soyisim" className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-emerald-500 transition" />
              <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="E-posta" className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-emerald-500 transition" />
            </div>
            <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Mesajınız..." rows={6} className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-emerald-500 transition resize-none mb-10"></textarea>
            <button type="submit" disabled={status === 'submitting'} className="w-full md:w-auto px-10 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all flex items-center gap-2.5 justify-center">
              {status === 'submitting' ? 'Gönderiliyor...' : 'Mesajı Gönder'} <Send size={20} />
            </button>
            {status === 'success' && <p className="text-emerald-400 mt-6 font-medium">✅ Mesaj iletildi!</p>}
          </form>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-600 text-sm border-t border-slate-800">
        <p>© 2026 Furkan • frknaydn.lol • Backend Developer Portfolio</p>
      </footer>
    </div>
  );
}

export default App;