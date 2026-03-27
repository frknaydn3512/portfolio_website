import { useRef, useState, useEffect } from 'react';
import { Mail, ChevronDown, ExternalLink, Code2, MessageSquare, Send } from 'lucide-react';
import profilPhoto from './assets/profil.jpg';

// Ana ikonlar, Diller ve Frontend
import { FaGithub, FaLinkedin, FaReact, FaDocker, FaJava, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaDatabase } from 'react-icons/fa';

// Spesifik Marka Logoları
import { TbBrandCSharp, TbBrandTailwind, TbBrandTypescript, TbBrandVite } from 'react-icons/tb';
import { DiPostgresql, DiDotnet } from 'react-icons/di';

// Veritabanları ve Araçlar
import { SiFirebase, SiSupabase, SiVercel, SiNetlify, SiSqlite, SiPostman, SiSwagger } from 'react-icons/si';

// --- VERİLER ---

// Projeler
const projects = [
  {
    title: "ES-Gate: Visitor Management",
    description: "Tesisler için kurumsal ziyaretçi ve demirbaş takip sistemi. N-Tier mimari ve Clean Architecture prensipleri.",
    techIcons: [DiDotnet, DiPostgresql, FaDocker, FaReact],
    githubUrl: "https://github.com/frknaydn3512/ESGate-WebAPI-MVC-Project",
    liveUrl: "#",
    images: [
      "src/assets/esgate1.jpeg",
      "src/assets/esgate2.jpeg"
    ]
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
    title: "AI Kişisel Asistan (Telegram Bot)",
    description: "Groq (LLaMA 3.3) altyapısı ile çalışan; görev yönetimi, duygu takibi, not alma ve uzun vadeli hafıza (Memory) yeteneklerine sahip, Dockerize edilmiş yapay zeka asistanı.",
    techIcons: [FaPython, DiPostgresql, FaDocker],
    githubUrl: "https://github.com/frknaydn3512/asistan_telegrambot",
    liveUrl: "#",
    images: []
  },
  {
    title: "Modern Geliştirici Portfolyosu",
    description: "Şu an incelemekte olduğunuz bu web sitesi. Tamamen responsive, modern UI/UX prensipleriyle (Hover Reveal & Scroll Snap) ve Clean Code standartlarıyla geliştirildi.",
    techIcons: [FaReact, TbBrandTailwind, TbBrandVite],
    githubUrl: "#", // Buraya bu sitenin GitHub repo linkini koyarsın
    liveUrl: "#",
    images: [
      "src/assets/me.png"  
    ]
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

// --- OTOMATİK KAYDIRICI (AUTO SLIDER) COMPONENT ---
function AutoSlider({ images = [], title }: { images: string[], title: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Eğer sadece 1 görsel varsa boşuna zamanlayıcı çalıştırma
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // Sona geldiysek başa sar, gelmediysek 1 görsel sağa kaydır
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000); // 3000 ms = 3 Saniyede bir döner

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div 
      ref={scrollRef} 
      className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
    >
      {images.map((img, imgIndex) => (
        <img
          key={imgIndex}
          src={img}
          alt={`${title} Görsel ${imgIndex + 1}`}
          className="w-full h-56 object-cover rounded-2xl flex-shrink-0 snap-center transform scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
        />
      ))}
    </div>
  );
}
// --- APP COMPONENT ---

function App() {
  // --- FORM MOTORU ---
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // 'idle', 'submitting', 'success', 'error'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Web3Forms API'sine isteği atıyoruz
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_KEY, // <-- DİKKAT: Kodu buraya yaz!
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Formu temizle
      setTimeout(() => setStatus(''), 5000); // 5 saniye sonra başarı mesajını gizle
    } else {
      setStatus('error');
    }
  };
  // -------------------

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30">

      {/* --- HERO BÖLÜMÜ --- */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative bg-slate-950">
        <div className="text-center max-w-4xl mx-auto">

          {/* FOTOĞRAF ALANI */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-70 group-hover:opacity-100 blur-sm transition-opacity"></div>
              <img
                src={profilPhoto}
                alt="Furkan"
                className="relative rounded-full w-32 h-32 md:w-40 md:h-40 object-cover border-4 border-slate-950"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
            <Code2 size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium tracking-wide">Bilişim Sistemleri Mühendisi</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
            Merhaba, Ben <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Furkan</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Modern <span className="text-slate-200 font-medium">.NET</span> ve <span className="text-slate-200 font-medium">React</span> ekosistemlerini kullanarak uçtan uca, ölçeklenebilir ve yayına hazır (production-ready) web ve mobil uygulamalar geliştiriyorum. Clean Architecture ve Docker ile sistemlerinizi geleceğe taşıyorum.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="w-full sm:w-auto px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-all shadow-lg shadow-emerald-500/20">
              Projelerimi İncele
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all border border-slate-700">
              Benimle İletişime Geç
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 mt-12 text-slate-400">
            <a href="https://github.com/frknaydn3512" target="_blank" className="hover:text-white hover:-translate-y-1 transition-all"><FaGithub size={30} /></a>
            <a href="https://www.linkedin.com/in/furkan-ayd%C4%B1n-611a8b230/" target="_blank" className="hover:text-blue-400 hover:-translate-y-1 transition-all"><FaLinkedin size={30} /></a>
            <a href="#contact" className="hover:text-emerald-400 hover:-translate-y-1 transition-all"><Mail size={30} /></a>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce text-slate-600">
          <ChevronDown size={36} />
        </div>
      </div>

      {/* --- PROJELER BÖLÜMÜ --- */}
      <div id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Öne Çıkan Çalışmalarım</h2>
            <div className="w-20 h-1 bg-emerald-500 rounded-full mb-4"></div>
            <p className="text-slate-400 max-w-2xl text-lg">
              Fikirden canlıya (deployment) kadar geliştirdiğim, Clean Architecture prensipleriyle kurduğum projeler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-950 border border-slate-700 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-500 group flex flex-col shadow-2xl shadow-slate-950">

                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-slate-400 pt-1">
                    <a href={project.githubUrl} className="hover:text-white transition-colors"><FaGithub size={22} /></a>
                    <a href={project.liveUrl} className="hover:text-emerald-400 transition-colors"><ExternalLink size={22} /></a>
                  </div>
                </div>

                {/* --- KAYDIRMALI GÖRSEL ALANI --- */}
                <div className="w-full max-h-0 opacity-0 group-hover:max-h-64 group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden rounded-2xl mb-0 group-hover:mb-6">
                  <AutoSlider images={project.images} title={project.title} />
                </div>

                <p className="text-slate-400 text-base mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {project.techIcons.map((Icon, techIndex) => (
                    <span key={techIndex} className="px-3.5 py-1.5 text-xs font-semibold bg-slate-800 text-emerald-300 rounded-full border border-slate-700/50 flex items-center gap-1.5">
                      <Icon size={14} />
                      {techStack.flatMap(cat => cat.icons).find(i => i.icon === Icon)?.name || "Tech"}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* --- 1. YETENEKLER (TECH STACK) GRID --- */}
      <div id="stack" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Teknoloji Yığınım (Stack)</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mb-4"></div>
            <p className="text-slate-400 max-w-2xl text-lg">
              Modern web ve mobil mimarilerini kurarken kullandığım kurumsal seviyedeki teknolojiler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl shadow-xl shadow-slate-950">
                <h3 className="text-xl font-bold text-emerald-400 mb-8 border-b border-slate-800 pb-3">{stack.category}</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                  {stack.icons.map((tech, techIndex) => {
                    const TechIcon = tech.icon;
                    return (
                      <div key={techIndex} className="flex items-center gap-4 group">
                        <TechIcon size={32} className={`${tech.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                        <span className="text-slate-200 font-medium group-hover:text-white">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- 2. İLETİŞİM FORMU (CONTACT) --- */}
      <div id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 mb-6">
              <MessageSquare size={18} className="text-emerald-400" />
              <span className="text-emerald-400 text-base font-medium tracking-wide">Benimle Çalışın</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tighter">İletişime Geçin</h2><br />
            <p>frknaydn3512@gmail.com</p><br />
            <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
              Fikrinizi hayata geçirmek, projenizi kurumsal mimariyle kurmak veya sorularınız için bana mesaj atın.
            </p>
          </div>

            {/* --- 2. İLETİŞİM FORMU (CONTACT) --- */}
          <form onSubmit={handleSubmit} className="bg-slate-950 border border-slate-700 rounded-3xl p-10 md:p-14 shadow-2xl shadow-slate-950">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2.5">
                <label className="text-slate-200 font-medium ml-1">İsim Soyisim</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Furkan Yıldız" 
                  className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition outline-none" 
                />
              </div>
              <div className="space-y-2.5">
                <label className="text-slate-200 font-medium ml-1">E-posta Adresi</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="seninmailin@gmail.com" 
                  className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition outline-none" 
                />
              </div>
            </div>
            <div className="space-y-2.5 mb-10">
              <label className="text-slate-200 font-medium ml-1">Mesajınız</label>
              <textarea 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Projeniz hakkında detaylar..." 
                rows={6} 
                className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition resize-none outline-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full md:w-auto px-10 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-800 disabled:text-slate-400 text-white font-semibold transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2.5 justify-center"
            >
              {status === 'submitting' ? 'Gönderiliyor...' : 'Mesajı Gönder'} 
              <Send size={20} className={status === 'submitting' ? 'animate-pulse' : ''} />
            </button>

            {/* Bildirim Mesajları */}
            {status === 'success' && (
              <p className="text-emerald-400 mt-6 font-medium flex items-center gap-2">
                ✅ Mesajınız başarıyla iletildi, en kısa sürede dönüş yapacağım!
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 mt-6 font-medium flex items-center gap-2">
                ❌ Bir hata oluştu. Lütfen doğrudan mail atın.
              </p>
            )}
          </form>


        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-slate-600 text-sm border-t border-slate-800 bg-slate-950">
        <p>© 2026 Furkan. Tüm hakları saklıdır. React, Tailwind CSS, Dockerize Portfolio.</p>
        <p className="mt-2">Clean Architecture, production-ready solutions.</p>
      </footer>

    </div>
  );
}

export default App;