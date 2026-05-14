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
  Star,
  Shield,
  Sword,
  Gavel,
  Skull,
  Map
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
  const [onlyGm, setOnlyGm] = useState(false);
  const [onlyRecomendados, setOnlyRecomendados] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredAddons = useMemo(() => {
    return addons.filter(addon => {
      const matchesSearch = addon.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          addon.descricao.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "Todas" || addon.categoria === selectedCategory;
      const matchesRisk = selectedRisk === "Todos" || addon.risco === selectedRisk;
      const matchesWeight = selectedWeight === "Todos" || addon.peso === selectedWeight;
      const matchesPcFraco = !onlyPcFraco || addon.pcFraco === true;
      const matchesGm = !onlyGm || addon.gm === true;
      const matchesRecomendados = !onlyRecomendados || addon.destaque === true;
      return matchesSearch && matchesCategory && matchesRisk && matchesWeight && matchesPcFraco && matchesGm && matchesRecomendados;
    });
  }, [searchTerm, selectedCategory, selectedRisk, selectedWeight, onlyPcFraco, onlyGm, onlyRecomendados]);

  const featuredAddons = useMemo(() => {
    return addons.filter(a => FEATURED_SLUGS.includes(a.slug));
  }, []);

  return (
    <div className="min-h-screen pb-20 selection:bg-frost-blue/30">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-9xl font-black mb-8 uppercase tracking-tighter text-wow-gold gold-glow leading-none">
              WoW 3.3.5a <br />
              <span className="text-white ice-glow">Addons Center</span> BR
            </h1>
            <p className="text-ice-blue/90 text-xl md:text-3xl font-bold max-w-5xl mx-auto mb-16 leading-tight drop-shadow-lg">
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

              <button 
                onClick={() => setOnlyGm(!onlyGm)}
                className={`flex items-center justify-center gap-2 border rounded-2xl px-8 py-5 transition-all font-black uppercase text-xs tracking-widest ${
                  onlyGm 
                  ? 'bg-wow-gold border-white text-black shadow-[0_0_20px_rgba(248,216,120,0.4)]' 
                  : 'bg-black/40 hover:bg-black/60 border-ice-blue/30 text-ice-blue'
                }`}
              >
                <Shield className="w-4 h-4" />
                Apenas GM
              </button>

              <button 
                onClick={() => setOnlyRecomendados(!onlyRecomendados)}
                className={`flex items-center justify-center gap-2 border rounded-2xl px-8 py-5 transition-all font-black uppercase text-xs tracking-widest ${
                  onlyRecomendados 
                  ? 'bg-blue-600/40 border-blue-400 text-blue-200 shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                  : 'bg-black/40 hover:bg-black/60 border-ice-blue/30 text-ice-blue'
                }`}
              >
                <Star className="w-4 h-4" />
                Recomendados
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

      {/* GM Section */}
      {!searchTerm && (selectedCategory === "Todas" || selectedCategory === "GM / Administração") && !onlyPcFraco && (
        <section className="container mx-auto px-4 mb-24">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10 justify-center md:justify-start">
            <div className="bg-wow-gold/10 p-3 rounded-2xl border border-wow-gold/30">
              <Shield className="w-8 h-8 text-wow-gold fill-wow-gold" />
            </div>
            <div>
              <h2 className="text-3xl font-black uppercase italic tracking-tight text-wow-gold">Ferramentas para GMs e servidores private</h2>
              <p className="text-ice-blue/60 font-bold max-w-2xl">
                Addons usados em servidores private 3.3.5a para administração, eventos, comandos GM, tickets, teleportes e moderação.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AddonCard addon={addons.find(a => a.nome === "GMGenie")!} index={0} featured />
            <AddonCard addon={addons.find(a => a.nome === "NPCScan")!} index={1} featured />
            <AddonCard addon={addons.find(a => a.nome === "Atlas")!} index={2} />
            <AddonCard addon={addons.find(a => a.nome === "AckisRecipeList")!} index={3} />
          </div>

          <div className="mt-12 bg-wow-gold/5 border border-wow-gold/20 rounded-2xl p-6 text-center">
            <p className="text-wow-gold text-sm font-bold">
              <Info className="w-4 h-4 inline-block mr-2" />
              GMGenie baixa pelo repositório oficial. Depois de extrair, entre na pasta baixada e coloque a pasta do addon dentro de Interface/AddOns.
            </p>
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
                setOnlyGm(false);
                setOnlyRecomendados(false);
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
      <section className="container mx-auto px-4 mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="wow-card p-10 border-wow-gold/30 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-wow-gold/5 blur-[50px] rounded-full" />
          <div className="bg-wow-gold/10 p-6 rounded-2xl border border-wow-gold/20 relative z-10 shrink-0">
            <Shield className="w-12 h-12 text-wow-gold" />
          </div>
          <div className="relative z-10 w-full">
            <h2 className="text-2xl font-black uppercase mb-4 tracking-tight text-wow-gold">Comandos úteis para GM</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-[10px] font-black uppercase tracking-widest text-ice-blue/80">
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-wow-gold" /> .gm on</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-wow-gold" /> .gm fly on</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-wow-gold" /> .appear NOME</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-wow-gold" /> .summon NOME</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-wow-gold" /> .tele NOME</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white" /> .npc add ID</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white" /> .lookup item NOME</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white" /> .lookup creature NOME</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> .ticket list</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> .ticket view ID</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> .ban account NOME TEMPO MOTIVO</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> .kick NOME</div>
            </div>
            <p className="mt-6 text-[9px] text-red-400 font-bold uppercase italic">
              * Alguns addons GM precisam permissões do servidor TrinityCore/AzerothCore.
            </p>
          </div>
        </div>

        <div className="wow-card p-10 border-ice-blue/30 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-ice-blue/5 blur-[50px] rounded-full" />
          <div className="bg-wow-gold/10 p-6 rounded-2xl border border-wow-gold/20 relative z-10 shrink-0">
            <Info className="w-12 h-12 text-wow-gold" />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-black uppercase mb-4 tracking-tight">Dica anti erro Lua</h2>
            <p className="text-ice-blue/80 text-sm leading-relaxed font-bold italic">
              “Antes de entrar no personagem, marque <span className="text-wow-gold">“Load out of date AddOns”</span>. 
              Se algum addon der erro Lua, teste ele sozinho e confira se é para WoW 3.3.5a / Interface 30300.”
            </p>
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
    if (category.includes("GM") || category.includes("Administração")) return <Shield className="w-7 h-7" />;
    if (category.includes("PvP") || category.includes("Arena")) return <Sword className="w-7 h-7" />;
    if (category.includes("Profissão") || category.includes("Farm")) return <Gavel className="w-7 h-7" />;
    if (category.includes("Quest") || category.includes("Upar")) return <Gamepad2 className="w-7 h-7" />;
    if (category.includes("Mapa")) return <Map className="w-7 h-7" />;
    if (category.includes("Dungeon") || category.includes("Raid")) return <Skull className="w-7 h-7" />;
    if (category.includes("Interface")) return <Monitor className="w-7 h-7" />;
    if (category.includes("Itens")) return <Layers className="w-7 h-7" />;
    return <Zap className="w-7 h-7" />;
  };

  const getRiskBadgeClass = (risk: string) => {
    if (risk === 'Baixo') return 'badge-risk-low';
    if (risk === 'Médio') return 'badge-risk-medium';
    return 'badge-risk-high';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`wow-card group ${
        addon.gm ? 'border-wow-gold/60 shadow-[0_0_30px_rgba(248,216,120,0.2)]' : 
        featured ? 'border-wow-gold/40 shadow-[0_0_20px_rgba(248,216,120,0.15)]' : ''
      }`}
    >
      <div className="card-header">
        <div className={`p-4 rounded-2xl border transition-all ${
          addon.gm ? 'bg-wow-gold/20 border-wow-gold/50 shadow-[0_0_15px_rgba(248,216,120,0.3)]' :
          featured ? 'bg-wow-gold/10 border-wow-gold/30' : 'bg-ice-blue/5 border-ice-blue/20'
        }`}>
          <div className={addon.gm || featured ? 'text-wow-gold' : 'text-ice-blue'}>
            {getIcon(addon.categoria)}
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          {addon.gm && (
            <div className="badge badge-gm flex items-center gap-1.5 animate-pulse">
              <Shield className="w-3.5 h-3.5" />
              ADMIN TOOL
            </div>
          )}
          {addon.destaque && (
            <div className="wow-badge badge-gold flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5" />
              RECOMENDADO
            </div>
          )}
          {addon.pcFraco && (
            <div className="wow-badge badge-green flex items-center gap-1.5">
              <Monitor className="w-3.5 h-3.5" />
              PC Fraco
            </div>
          )}
          <span className={`wow-badge ${addon.gm || featured ? 'badge-gold' : ''}`}>
             3.3.5a
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className={`card-title ${addon.gm || featured ? 'text-wow-gold' : 'text-white'}`}>
          {addon.nome}
        </h3>
        <span className="card-category">
          {addon.categoria}
        </span>
      </div>

      <p className="card-description">
        {addon.descricao}
      </p>

      {addon.info && addon.info.length > 0 && (
        <div className="card-functions">
          <span className="card-functions-title">Funções</span>
          <div className="flex flex-col gap-2">
            {addon.info.map((tip, i) => (
              <div key={i} className="card-function-item">
                <div className="w-1.5 h-1.5 rounded-full bg-ice-blue/40" />
                {tip}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-3 mt-4">
        <div className={`badge ${getRiskBadgeClass(addon.risco)} flex items-center gap-2`}>
          <AlertTriangle className="w-3 h-3" />
          Risco: {addon.risco}
        </div>
        <div className="badge badge-pc flex items-center gap-2">
          <Weight className="w-3 h-3" />
          Peso: {addon.peso}
        </div>
      </div>

      <div className="card-footer">
        <button 
          type="button"
          disabled={!addon.downloadUrl}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (addon.downloadUrl) baixarAddon(addon);
          }}
          className={`btn-download ${
            !addon.downloadUrl ? 'opacity-50 cursor-not-allowed grayscale' : ''
          }`}
        >
          <Download className="w-5 h-5" />
          {addon.downloadUrl ? 'Baixar ZIP' : 'Indisponível'}
        </button>
        
        <button 
          type="button"
          disabled={!addon.downloadUrl}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (addon.downloadUrl) copiarCaminho(addon);
          }}
          className={`btn-copy ${
            !addon.downloadUrl ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <Copy className="w-4 h-4" />
          Caminho
        </button>
      </div>
    </motion.div>
  );
}
