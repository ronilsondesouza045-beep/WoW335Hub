import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  Copy, 
  Search, 
  Filter, 
  AlertTriangle, 
  ShieldCheck, 
  Gamepad2, 
  ExternalLink,
  Info,
  Layers,
  ChevronDown,
  X,
  Zap,
  Weight,
  Monitor,
  Star
} from 'lucide-react';
import { addons, Addon } from './data/addons';
import { baixarAddon, copiarCaminho } from './utils/downloadAddon';

const CATEGORIES = ["Todas", ...new Set(addons.map(a => a.categoria))];
const RISKS = ["Todos", "Baixo", "Médio", "Alto"];
const WEIGHTS = ["Todos", "Leve", "Médio", "Pesado"];

const FEATURED_SLUGS = [
  "Carbonite",
  "AtlasLoot",
  "DBM",
  "QuestHelper",
  "Bartender4",
  "GatherMate",
  "Omen",
  "Postal"
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedRisk, setSelectedRisk] = useState("Todos");
  const [selectedWeight, setSelectedWeight] = useState("Todos");
  const [onlyPcFraco, setOnlyPcFraco] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredAddons = useMemo(() => {
    return addons.filter(addon => {
      const matchesSearch = addon.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          addon.descricao.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "Todas" || addon.categoria === selectedCategory;
      const matchesRisk = selectedRisk === "Todos" || addon.risco === selectedRisk;
      const matchesWeight = selectedWeight === "Todos" || addon.peso === selectedWeight;
      const matchesPcFraco = !onlyPcFraco || addon.pcFraco === true;
      return matchesSearch && matchesCategory && matchesRisk && matchesWeight && matchesPcFraco;
    });
  }, [searchTerm, selectedCategory, selectedRisk, selectedWeight, onlyPcFraco]);

  const featuredAddons = useMemo(() => {
    return addons.filter(a => FEATURED_SLUGS.includes(a.slug));
  }, []);

  return (
    <div className="min-h-screen pb-20 selection:bg-frost-blue/30">
      {/* Hero Section */}
      <header className="relative pt-20 pb-12 px-4 overflow-hidden">
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter text-wow-gold">
              WoW 3.3.5a <span className="text-white">Addons Center</span> BR
            </h1>
            <p className="text-ice-blue text-lg md:text-2xl font-bold max-w-4xl mx-auto mb-12 leading-tight">
              Baixe addons reais para World of Warcraft WotLK 3.3.5a, organizados por categoria, 
              com foco em private servers, PC fraco, up, PvP, raid, farm e interface.
            </p>
          </motion.div>

          {/* Top Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16">
            <InfoCard 
              icon={<Download className="w-6 h-6" />}
              title="Addons reais"
              text="Cada botão baixa somente o ZIP individual do addon, sem baixar o repositório inteiro."
            />
            <InfoCard 
              icon={<Zap className="w-6 h-6" />}
              title="Compatível 3.3.5a"
              text="Focado em WotLK build 12340 para servidores privados."
            />
            <InfoCard 
              icon={<Monitor className="w-6 h-6" />}
              title="PC fraco"
              text="Use o filtro “PC fraco” para encontrar addons extremamente leves."
            />
            <InfoCard 
              icon={<AlertTriangle className="w-6 h-6" />}
              title="Anti erro Lua"
              text="Evite addon de Retail, Classic moderno, Cataclysm ou Dragonflight."
            />
          </div>

          {/* Search and Filters */}
          <motion.div 
            className="max-w-5xl mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ice-blue w-5 h-5 shadow-sm" />
                <input 
                  type="text"
                  placeholder="Buscar addons brasileiros..."
                  className="w-full bg-black/60 border border-ice-blue/30 rounded-2xl py-5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-frost-blue/50 focus:border-frost-blue transition-all text-white placeholder-ice-blue/40 backdrop-blur-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center justify-center gap-2 border rounded-2xl px-8 py-5 transition-all font-black uppercase text-xs tracking-widest ${
                  isFilterOpen 
                  ? 'bg-frost-blue border-white text-white shadow-[0_0_20px_rgba(0,194,255,0.4)]' 
                  : 'bg-black/40 hover:bg-black/60 border-ice-blue/30 text-ice-blue'
                }`}
              >
                <Filter className="w-4 h-4" />
                Filtros
              </button>

              <button 
                onClick={() => setOnlyPcFraco(!onlyPcFraco)}
                className={`flex items-center justify-center gap-2 border rounded-2xl px-8 py-5 transition-all font-black uppercase text-xs tracking-widest ${
                  onlyPcFraco 
                  ? 'bg-green-600/40 border-green-400 text-green-300 shadow-[0_0_20px_rgba(34,197,94,0.4)]' 
                  : 'bg-black/40 hover:bg-black/60 border-ice-blue/30 text-ice-blue'
                }`}
              >
                <Monitor className="w-4 h-4" />
                PC Fraco
              </button>
            </div>

            <AnimatePresence>
              {isFilterOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-black/80 border border-ice-blue/20 rounded-2xl p-8 text-left grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                      <label className="block text-wow-gold text-[10px] font-black uppercase tracking-[0.2em] mb-4">Categoria</label>
                      <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map(cat => (
                          <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${
                              selectedCategory === cat 
                              ? 'bg-ice-blue text-black' 
                              : 'bg-white/5 text-ice-blue/60 hover:bg-white/10'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-wow-gold text-[10px] font-black uppercase tracking-[0.2em] mb-4">Risco Lua</label>
                      <div className="flex flex-wrap gap-2">
                        {RISKS.map(risk => (
                          <button
                            key={risk}
                            onClick={() => setSelectedRisk(risk)}
                            className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${
                              selectedRisk === risk 
                              ? 'bg-ice-blue text-black' 
                              : 'bg-white/5 text-ice-blue/60 hover:bg-white/10'
                            }`}
                          >
                            {risk}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-wow-gold text-[10px] font-black uppercase tracking-[0.2em] mb-4">Peso Memória</label>
                      <div className="flex flex-wrap gap-2">
                        {WEIGHTS.map(weight => (
                          <button
                            key={weight}
                            onClick={() => setSelectedWeight(weight)}
                            className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${
                              selectedWeight === weight 
                              ? 'bg-ice-blue text-black' 
                              : 'bg-white/5 text-ice-blue/60 hover:bg-white/10'
                            }`}
                          >
                            {weight}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </header>

      {/* Info Notice removed and replaced by Top Info Cards */}

      {/* Featured Section */}
      {!searchTerm && selectedCategory === "Todas" && selectedRisk === "Todos" && (
        <section className="container mx-auto px-4 mb-24">
          <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
            <div className="bg-wow-gold/10 p-3 rounded-2xl border border-wow-gold/30">
              <Star className="w-8 h-8 text-wow-gold fill-wow-gold" />
            </div>
            <h2 className="text-3xl font-black uppercase italic tracking-tight">Melhor pacote para começar</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredAddons.map((addon, index) => (
              <AddonCard key={addon.slug + "-featured"} addon={addon} index={index} featured />
            ))}
          </div>
        </section>
      )}

      {/* Main Grid */}
      <main id="addons-grid" className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="bg-ice-blue/10 p-2 rounded-lg">
              <Layers className="w-8 h-8 text-ice-blue" />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight">{filteredAddons.length} Addons Disponíveis</h2>
          </div>
          
          {searchTerm || selectedCategory !== "Todas" || selectedRisk !== "Todos" || selectedWeight !== "Todos" || onlyPcFraco ? (
            <button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Todas");
                setSelectedRisk("Todos");
                setSelectedWeight("Todos");
                setOnlyPcFraco(false);
              }}
              className="text-wow-gold hover:text-white font-black text-[10px] tracking-widest flex items-center gap-2 px-6 py-3 border border-wow-gold/20 rounded-2xl transition-all uppercase"
            >
              <X className="w-4 h-4" /> Limpar Busca
            </button>
          ) : null}
        </div>

        {filteredAddons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredAddons.map((addon, index) => (
              <AddonCard key={addon.slug} addon={addon} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-40 wow-card border-dashed">
            <Search className="w-24 h-24 mx-auto mb-8 text-ice-blue/20" />
            <h3 className="text-3xl font-black text-ice-blue mb-4">Addon não encontrado</h3>
            <p className="text-ice-blue/60 font-bold">Tente buscar por outro nome ou remova os filtros.</p>
          </div>
        )}
      </main>

      {/* Tips Section */}
      <section className="container mx-auto px-4 mt-32">
        <div className="wow-card p-10 md:p-16 border-wow-gold/30 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto overflow-hidden relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-wow-gold/5 blur-[80px] rounded-full" />
          <div className="bg-wow-gold/10 p-8 rounded-[32px] border border-wow-gold/20 relative z-10 shrink-0">
            <Info className="w-16 h-16 text-wow-gold" />
          </div>
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">Dica anti erro Lua</h2>
            <p className="text-ice-blue/80 text-lg leading-relaxed font-bold mb-8 italic">
              “Antes de entrar no personagem, marque <span className="text-wow-gold">“Load out of date AddOns”</span>. 
              Se algum addon der erro Lua, teste ele sozinho e confira se é para WoW 3.3.5a / Interface 30300.”
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <span className="bg-black/60 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-ice-blue border border-ice-blue/20">WotLK Support</span>
              <span className="bg-black/60 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-wow-gold border border-wow-gold/20">Build 12340</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-40 py-24 bg-black/60 border-t border-ice-blue/10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-5xl font-black text-ice-blue/20 mb-8 select-none tracking-widest">WotLK 3.3.5a</h3>
          <p className="text-ice-blue/50 font-black uppercase tracking-[0.4em] mb-12 text-xs">
            Comunidade Brasileira de WoW
          </p>
          <div className="max-w-2xl mx-auto text-ice-blue/30 text-[10px] leading-relaxed font-bold uppercase">
            World of Warcraft, Wrath of the Lich King e Blizzard Entertainment são marcas comerciais da Blizzard Entertainment, Inc. 
            Não somos afiliados à Blizzard. Este portal é um esforço da comunidade para preservação de recursos do jogo.
          </div>
        </div>
      </footer>
    </div>
  );
}

function InfoCard({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="wow-card p-6 flex flex-col items-center text-center gap-4 border-ice-blue/10"
    >
      <div className="text-ice-blue bg-ice-blue/10 p-3 rounded-2xl border border-ice-blue/20">
        {icon}
      </div>
      <h3 className="text-lg font-black uppercase text-white shadow-sm">{title}</h3>
      <p className="text-ice-blue/60 text-xs font-bold leading-relaxed">{text}</p>
    </motion.div>
  );
}

interface AddonCardProps {
  addon: Addon;
  index: number;
  featured?: boolean;
  key?: React.Key;
}

function AddonCard({ addon, index, featured }: AddonCardProps) {
  const getIcon = (category: string) => {
    if (category.includes("Quest") || category.includes("Upar")) return <Gamepad2 className="w-6 h-6" />;
    if (category.includes("Mapa")) return <ExternalLink className="w-6 h-6" />;
    if (category.includes("Itens") || category.includes("Dungeon") || category.includes("Raid")) return <Layers className="w-6 h-6" />;
    if (category.includes("Healer")) return <AlertTriangle className="w-6 h-6" />;
    if (category.includes("Interface")) return <Monitor className="w-6 h-6" />;
    return <Zap className="w-6 h-6" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`wow-card p-8 flex flex-col h-full group ${featured ? 'border-wow-gold/40 shadow-[0_0_20px_rgba(248,216,120,0.15)]' : ''}`}
    >
      <div className="flex justify-between items-start mb-8">
        <div className={`p-4 rounded-2xl border transition-all ${
          featured ? 'bg-wow-gold/10 border-wow-gold/30' : 'bg-ice-blue/5 border-ice-blue/20'
        }`}>
          <div className={featured ? 'text-wow-gold' : 'text-ice-blue'}>
            {getIcon(addon.categoria)}
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          {addon.pcFraco && (
            <div className="wow-badge badge-green flex items-center gap-1.5">
              <Monitor className="w-3 h-3" />
              PC Fraco
            </div>
          )}
          <span className={`wow-badge ${featured ? 'badge-gold' : ''}`}>
            {addon.categoria}
          </span>
        </div>
      </div>

      <div className="flex-1">
        <h3 className={`text-2xl font-black mb-3 group-hover:ice-glow transition-all uppercase tracking-tight leading-none ${
          featured ? 'text-wow-gold' : 'text-white'
        }`}>
          {addon.nome}
        </h3>
        <p className="text-ice-blue/60 text-sm mb-8 leading-relaxed font-bold italic">
          {addon.descricao}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
            <span className="block text-[8px] font-black uppercase text-ice-blue/50 tracking-[0.2em] mb-1">Risco Lua</span>
            <span className={`text-[10px] font-black uppercase tracking-widest ${
              addon.risco === 'Baixo' ? 'text-green-500' : 
              addon.risco === 'Médio' ? 'text-yellow-500' : 'text-red-500'
            }`}>
              {addon.risco}
            </span>
          </div>
          <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
            <span className="block text-[8px] font-black uppercase text-ice-blue/50 tracking-[0.2em] mb-1">Peso Memória</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-ice-blue">
              {addon.peso}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <button 
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            baixarAddon(addon);
          }}
          className="btn-download w-full flex items-center justify-center gap-3 py-5 uppercase text-xs tracking-widest active:scale-95"
        >
          <Download className="w-5 h-5" />
          Baixar ZIP
        </button>
        
        <button 
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            copiarCaminho(addon);
          }}
          className="btn-copy w-full flex items-center justify-center gap-2 py-4 uppercase text-[10px] tracking-widest active:scale-95"
        >
          <Copy className="w-4 h-4" />
          Caminho do Addon
        </button>
      </div>
    </motion.div>
  );
}
