
import React, { useState, useEffect } from 'react';
import { 
  Navigation, 
  MapPin, 
  Smartphone, 
  Target, 
  Users, 
  Layout, 
  Instagram, 
  Phone as WhatsApp, 
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Monitor
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-yellow-400 p-2 rounded-full">
            <Target className="w-6 h-6 text-black" />
        </div>
        <span className="font-extrabold text-2xl tracking-tighter">
          AÇÃO <span className="text-yellow-400">OFFLINE</span>
        </span>
      </div>
      <div className="hidden md:flex gap-8 items-center text-sm font-medium">
        <a href="#sobre" className="hover:text-yellow-400 transition-colors">Sobre</a>
        <a href="#produtos" className="hover:text-yellow-400 transition-colors">Serviços</a>
        <a href="#diferencial" className="hover:text-yellow-400 transition-colors">Diferencial</a>
        <a 
          href="https://wa.me/5554981045651" 
          target="_blank" 
          className="bg-yellow-400 text-black px-6 py-2.5 rounded-full font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-yellow-400/20"
        >
          Falar no WhatsApp
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 px-4 min-h-screen flex items-center relative overflow-hidden">
    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-[100px]" />
    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
    
    <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div className="space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-yellow-400 text-sm font-semibold">
          <Zap className="w-4 h-4" /> Marketing Offline Inteligente
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Posso te mostrar como gerar clientes <span className="text-yellow-400 italic">fora da internet?</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
          Tiramos sua marca das telas e levamos direto para as mãos dos seus clientes, com transparência total e monitoramento em tempo real.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="https://wa.me/5554981045651" 
            target="_blank"
            className="flex items-center justify-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all hover:shadow-[0_0_30px_-10px_rgba(250,204,21,0.5)]"
          >
            Quero mais clientes <ChevronRight className="w-5 h-5" />
          </a>
          <a 
            href="#produtos"
            className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all"
          >
            Ver nossos serviços
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            <div>
                <p className="text-yellow-400 font-bold text-xl uppercase">100%</p>
                <p className="text-xs text-gray-500 uppercase">GPS Monitorado</p>
            </div>
            <div>
                <p className="text-yellow-400 font-bold text-xl uppercase">REAL</p>
                <p className="text-xs text-gray-500 uppercase">Resultados</p>
            </div>
            <div className="col-span-2">
                <p className="text-yellow-400 font-bold text-xl uppercase">TRANSPARÊNCIA</p>
                <p className="text-xs text-gray-500 uppercase">Controle Total</p>
            </div>
        </div>
      </div>
      
      <div className="relative group">
        <div className="absolute inset-0 bg-yellow-400/20 rounded-3xl blur-2xl transition-all group-hover:bg-yellow-400/30 scale-95" />
        <img 
          src="https://picsum.photos/seed/mkt-offline/800/1000" 
          alt="Marketing em Ação" 
          className="relative w-full aspect-[4/5] object-cover rounded-3xl border border-white/10 shadow-2xl"
        />
        <div className="absolute -bottom-6 -left-6 bg-[#0a0a0a] border border-white/10 p-6 rounded-2xl shadow-xl max-w-xs animate-bounce-slow">
            <p className="text-sm font-medium text-gray-400 mb-1 italic">"Curtida não paga boleto."</p>
            <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-yellow-400 flex items-center justify-center text-[10px] text-black font-bold">Client</div>
                    ))}
                </div>
                <span className="text-xs font-bold text-yellow-400">+500 campanhas</span>
            </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="py-24 bg-white/[0.02] border-y border-white/5 px-4">
    <div className="max-w-4xl mx-auto text-center space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-5xl font-extrabold">O que é a <span className="text-yellow-400">AÇÃO</span> Marketing Offline?</h2>
        <div className="w-20 h-1.5 bg-yellow-400 mx-auto rounded-full" />
      </div>
      <div className="text-lg md:text-xl text-gray-400 leading-relaxed text-left md:text-center space-y-6">
        <p>
          Somos uma empresa focada em <strong className="text-white">presença física e contato direto com o público</strong>. Atuamos de forma estratégica, criando uma conexão real entre a sua marca e o seu cliente, impactando, engajando e encantando no ponto certo.
        </p>
        <p>
          Apesar de sermos uma empresa corpo a corpo, <strong className="text-white">também somos tecnológicos</strong>. Contamos com um sistema exclusivo de monitoramento por GPS, que garante total transparência e controle das ações.
        </p>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ title, description, benefits, icon: Icon }: any) => (
  <div className="group bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:bg-white/[0.06] transition-all hover:border-yellow-400/50 hover:-translate-y-2">
    <div className="w-14 h-14 bg-yellow-400/10 rounded-2xl flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-black transition-all">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-500 mb-6 text-sm">{description}</p>
    <div className="space-y-3">
      <p className="text-xs font-bold uppercase tracking-widest text-yellow-400/70 mb-2">Benefícios:</p>
      {benefits.map((benefit: string, idx: number) => (
        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
          {benefit}
        </div>
      ))}
    </div>
  </div>
);

const Services = () => {
  const products = [
    {
      title: "Ponto Fixo Ativo",
      description: "Ação realizada em locais estratégicos, com abordagem ativa ao público.",
      icon: Users,
      benefits: ["Alto poder de conversão", "Contato direto com o público-alvo", "Fortalecimento da marca no ponto certo"]
    },
    {
      title: "Eventos",
      description: "Distribuição direcionada em feiras, eventos e ações de grande fluxo.",
      icon: Layout,
      benefits: ["Grande volume de pessoas em curto período", "Público segmentado", "Excelente custo-benefício"]
    },
    {
      title: "Porta a Porta",
      description: "Entrega planejada em residências e empresas, com rotas inteligentes.",
      icon: MapPin,
      benefits: ["Alcance direto e local", "Forte presença regional", "Ação organizada e mensurável"]
    },
    {
      title: "Sinal (Semáforo)",
      description: "Ação rápida em cruzamentos estratégicos com alto impacto visual.",
      icon: ShieldCheck,
      benefits: ["Alto impacto visual", "Grande fluxo diário", "Excelente visibilidade da marca"]
    },
    {
        title: "Pesquisa / Leads",
        description: "Coleta de dados e contatos qualificados para seu time de vendas.",
        icon: Smartphone,
        benefits: ["Geração de leads reais", "Apoio direto ao time comercial", "Dados para ações futuras"]
    },
    {
        title: "TV Corporativa",
        description: "Veiculação de vídeos institucionais em pontos estratégicos (telas indoor).",
        icon: Monitor,
        benefits: ["Comunicação contínua", "Reforço de marca", "Alto poder de retenção visual"]
    }
  ];

  return (
    <section id="produtos" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold">Nossas <span className="text-yellow-400">Soluções</span></h2>
            <p className="text-gray-400 max-w-lg">
                Estratégias sob medida para impactar o seu cliente onde ele estiver. 
                Do porta a porta às telas indoor.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Operação ativa em toda a região
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, idx) => <ServiceCard key={idx} {...p} />)}
        </div>
      </div>
    </section>
  );
};

const Differential = () => (
  <section id="diferencial" className="py-24 bg-yellow-400 text-black px-4 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-20 text-black/5 select-none font-extrabold text-[15rem] leading-none pointer-events-none">GPS</div>
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div className="space-y-8">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none">O Nosso <br/> Diferencial</h2>
        <div className="space-y-6 text-lg font-medium">
          <p>
            Desenvolvemos um <strong className="underline underline-offset-4 decoration-black">aplicativo exclusivo</strong> para o gerenciamento completo das ações de marketing offline.
          </p>
          <p>
            Toda a operação é <strong className="underline underline-offset-4 decoration-black">monitorada por GPS</strong> em tempo real, garantindo o cumprimento real da ação, transparência e economia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Rotas pré-definidas",
            "Monitoramento em tempo real",
            "Registro de evidências fotográficas",
            "Dados claros sobre a execução",
            "Redução de desperdício",
            "Retorno mensurável"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-black/5 p-3 rounded-lg border border-black/10">
              <ShieldCheck className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-bold">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="bg-black p-4 rounded-[3rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
           <img 
              src="https://picsum.photos/seed/app-gps/400/800" 
              alt="App Screenshot" 
              className="w-full rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all"
           />
           <div className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 animate-float">
                <MapPin className="text-red-600 w-10 h-10" />
                <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Equipe em campo</p>
                    <p className="text-sm font-black text-black">ATIVO AGORA</p>
                </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#121212]">
    <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] p-12 text-center space-y-8 overflow-hidden relative group">
      <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <h2 className="text-4xl md:text-6xl font-black uppercase">
        <span className="text-yellow-400 block mb-2">Curtida não</span> paga boleto.
      </h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        Pare de queimar dinheiro em likes que não convertem. Vá até o seu cliente onde ele realmente está. 
        Solicite uma estratégia personalizada agora.
      </p>
      <div className="flex flex-wrap justify-center gap-6 pt-4">
        <a 
          href="https://wa.me/5554981045651" 
          target="_blank"
          className="bg-yellow-400 text-black px-10 py-5 rounded-2xl font-black text-xl hover:bg-yellow-300 transition-all flex items-center gap-3 shadow-[0_0_50px_-10px_rgba(250,204,21,0.3)] hover:scale-105"
        >
          <WhatsApp className="w-7 h-7" /> (54) 98104-5651
        </a>
        <a 
          href="https://instagram.com/acao.off" 
          target="_blank"
          className="bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-all flex items-center gap-3"
        >
          <Instagram className="w-7 h-7" /> @acao.off
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5 px-4 text-center">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="bg-yellow-400 p-1.5 rounded-full">
            <Target className="w-4 h-4 text-black" />
        </div>
        <span className="font-bold tracking-tighter uppercase">
          AÇÃO <span className="text-yellow-400">MKT Offline</span>
        </span>
      </div>
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Ação MKT Offline. Todos os direitos reservados.
      </p>
      <div className="flex gap-4">
        <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-yellow-400 hover:text-black transition-all">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-yellow-400 hover:text-black transition-all">
          <WhatsApp className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Differential />
        <CTASection />
      </main>
      <Footer />
      
      {/* Scroll to top floating button (optional) */}
      <a 
        href="#"
        className="fixed bottom-8 right-8 z-40 bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all shadow-xl"
      >
        <ChevronRight className="w-6 h-6 -rotate-90" />
      </a>
      
      {/* Floating WhatsApp for mobile only */}
      <a 
        href="https://wa.me/5554981045651" 
        target="_blank"
        className="md:hidden fixed bottom-8 left-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl animate-bounce"
      >
        <WhatsApp className="w-7 h-7" />
      </a>
    </div>
  );
}

// Add simple animations styles to the document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes float {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(5px, -15px); }
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
    .animate-bounce-slow {
      animation: bounce-slow 4s ease-in-out infinite;
    }
    .animate-float {
      animation: float 5s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);
}
