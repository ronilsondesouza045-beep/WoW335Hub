export interface Addon {
  nome: string;
  slug: string;
  categoria: string;
  descricao: string;
  risco: "Baixo" | "Médio" | "Alto";
  peso: "Leve" | "Médio" | "Pesado";
  pcFraco: boolean;
  compatibilidade: string;
  downloadUrl: string;
  gm?: boolean;
  destaque?: boolean;
  info?: string[];
}

export const addons: Addon[] = [
  {
    nome: "GMGenie",
    slug: "GMGenie",
    categoria: "GM / Administração",
    descricao: "Addon para Game Masters em servidores TrinityCore, com tickets, GM status, player tools e builder.",
    risco: "Médio",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a / 4.3.4 TrinityCore",
    gm: true,
    destaque: true,
    info: [
      "Teleport rápido",
      "Comandos GM",
      "Spawn de criaturas",
      "Controle de eventos",
      "Lista de comandos"
    ],
    downloadUrl: "https://github.com/chocochaos/GMGenie/archive/refs/heads/master.zip"
  },
  {
    nome: "Atlas",
    slug: "Atlas",
    categoria: "GM / Administração",
    descricao: "Mapa interno de dungeons e raids.",
    risco: "Baixo",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a build 12340",
    gm: false,
    destaque: false,
    info: [
      "Mapas internos",
      "IDs de bosses",
      "Ajuda para eventos"
    ],
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/Atlas.zip"
  },
  {
    nome: "AckisRecipeList",
    slug: "AckisRecipeList",
    categoria: "GM / Administração",
    descricao: "Lista avançada de receitas e profissões.",
    risco: "Baixo",
    peso: "Médio",
    pcFraco: false,
    compatibilidade: "3.3.5a build 12340",
    gm: false,
    destaque: false,
    info: [
      "Ver receitas",
      "Profissões",
      "Controle de craft"
    ],
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/AckisRecipeList.zip"
  },
  {
    nome: "NPCScan",
    slug: "NPCScan",
    categoria: "GM / Administração",
    descricao: "Detecta NPCs raros e especiais.",
    risco: "Baixo",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a build 12340",
    gm: false,
    destaque: true,
    info: [
      "Detecta NPC raro",
      "Alerta sonoro",
      "Ajuda em eventos"
    ],
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/NPCScan.zip"
  },
  {
    nome: "Altoholic",
    slug: "Altoholic",
    categoria: "GM / Administração",
    descricao: "Gerencia personagens e inventários.",
    risco: "Médio",
    peso: "Pesado",
    pcFraco: false,
    compatibilidade: "3.3.5a build 12340",
    gm: false,
    destaque: false,
    info: [
      "Ver personagens",
      "Inventário",
      "Correio",
      "Banco"
    ],
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/Altoholic.zip"
  },
  {
    nome: "Carbonite",
    slug: "Carbonite",
    categoria: "Upar / Quest",
    descricao: "Mapa e ajuda de quests para WoW 3.3.5a.",
    risco: "Médio",
    peso: "Pesado",
    pcFraco: false,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/Carbonite.zip"
  },
  {
    nome: "EveryQuest",
    slug: "EveryQuest",
    categoria: "Upar / Quest",
    descricao: "Banco de dados e histórico de quests.",
    risco: "Baixo",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/EveryQuest.zip"
  },
  {
    nome: "QuestHelper",
    slug: "QuestHelper",
    categoria: "Upar / Quest",
    descricao: "Calcula as melhores rotas de up e mostra objetivos de quest no mapa.",
    risco: "Médio",
    peso: "Médio",
    pcFraco: false,
    destaque: true,
    info: [
      "Rotas de leveling",
      "Setas de direção",
      "Database de quests",
      "Fácil configuração"
    ],
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/QuestHelper.zip"
  },
  {
    nome: "Mapster",
    slug: "Mapster",
    categoria: "Mapa",
    descricao: "Melhora o mapa padrão.",
    risco: "Baixo",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/Mapster.zip"
  },
  {
    nome: "SexyMap",
    slug: "SexyMap",
    categoria: "Mapa",
    descricao: "Customiza o minimapa.",
    risco: "Baixo",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/SexyMap.zip"
  },
  {
    nome: "AtlasLoot",
    slug: "AtlasLoot",
    categoria: "Itens / Dungeon",
    descricao: "Banco de dados completo de loot para dungeons, raids e eventos mundiais.",
    risco: "Baixo",
    peso: "Médio",
    pcFraco: false,
    destaque: true,
    info: [
      "Drop rate de itens",
      "Loot de Dungeons",
      "Receitas de Profissões",
      "Itens de Facção"
    ],
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/AtlasLoot.zip"
  },
  {
    nome: "DBM",
    slug: "DBM",
    categoria: "Dungeon / Raid",
    descricao: "Deadly Boss Mods: Avisos e timers cruciais para todas as lutas contra bosses.",
    risco: "Baixo",
    peso: "Médio",
    pcFraco: false,
    destaque: true,
    info: [
      "Timers de habilidades",
      "Alertas visuais",
      "Avisos sonoros",
      "Focado em ICC/RS"
    ],
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/DBM.zip"
  },
  {
    nome: "Omen",
    slug: "Omen",
    categoria: "Dungeon / Raid",
    descricao: "Medidor de ameaça/agro.",
    risco: "Baixo",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/Omen.zip"
  },
  {
    nome: "Recount",
    slug: "Recount",
    categoria: "Dungeon / Raid",
    descricao: "Mostra DPS, cura e dados de combate.",
    risco: "Médio",
    peso: "Médio",
    pcFraco: false,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/Recount.zip"
  },
  {
    nome: "GearScoreLite",
    slug: "GearScoreLite",
    categoria: "Utilitário",
    descricao: "Mostra GearScore dos jogadores.",
    risco: "Médio",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/GearScoreLite.zip"
  },
  {
    nome: "Postal",
    slug: "Postal",
    categoria: "Correio",
    descricao: "Melhora a caixa de correio.",
    risco: "Baixo",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/Postal.zip"
  },
  {
    nome: "Auctionator",
    slug: "Auctionator",
    categoria: "Leilão / Gold",
    descricao: "Ajuda no leilão e vendas.",
    risco: "Baixo",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/Auctionator.zip"
  },
  {
    nome: "Auctioneer",
    slug: "Auctioneer",
    categoria: "Leilão / Gold",
    descricao: "Ferramenta avançada para economia e leilão.",
    risco: "Médio",
    peso: "Médio",
    pcFraco: false,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/Auctioneer.zip"
  },
  {
    nome: "Gatherer",
    slug: "Gatherer",
    categoria: "Farm / Profissão",
    descricao: "Marca pontos de mineração e herbalismo no mapa.",
    risco: "Baixo",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/Gatherer.zip"
  },
  {
    nome: "GatherMate",
    slug: "GatherMate",
    categoria: "Farm / Profissão",
    descricao: "Ajuda a encontrar recursos e rotas de farm.",
    risco: "Baixo",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/GatherMate.zip"
  },
  {
    nome: "OneBag3",
    slug: "OneBag3",
    categoria: "Bolsas",
    descricao: "Une todas as bolsas em uma única janela.",
    risco: "Baixo",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/OneBag3.zip"
  },
  {
    nome: "ArkInventory",
    slug: "ArkInventory",
    categoria: "Bolsas",
    descricao: "Sistema avançado de organização de inventário.",
    risco: "Médio",
    peso: "Médio",
    pcFraco: false,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/ArkInventory.zip"
  },
  {
    nome: "TipTac",
    slug: "TipTac",
    categoria: "Interface",
    descricao: "Melhora as tooltips do jogo.",
    risco: "Baixo",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/TipTac.zip"
  },
  {
    nome: "Quartz",
    slug: "Quartz",
    categoria: "Interface",
    descricao: "Melhora cast bars do jogo.",
    risco: "Baixo",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/Quartz.zip"
  },
  {
    nome: "XPerl",
    slug: "XPerl",
    categoria: "Interface",
    descricao: "Frames avançados de personagem, party e raid.",
    risco: "Médio",
    peso: "Médio",
    pcFraco: false,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/XPerl.zip"
  },
  {
    nome: "PitBull",
    slug: "PitBull",
    categoria: "Interface",
    descricao: "Frames customizados completos.",
    risco: "Alto",
    peso: "Pesado",
    pcFraco: false,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/PitBull.zip"
  },
  {
    nome: "Bartender4",
    slug: "Bartender4",
    categoria: "Interface",
    descricao: "Livre-se das barras padrão e crie um layout totalmente limpo e otimizado.",
    risco: "Baixo",
    peso: "Leve",
    pcFraco: true,
    destaque: true,
    info: [
      "Barras customizáveis",
      "Atalhos rápidos",
      "Ajuste de transparência",
      "Layouts prontos"
    ],
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/Bartender4.zip"
  },
  {
    nome: "Clique",
    slug: "Clique",
    categoria: "Healer / Raid",
    descricao: "Permite binds rápidos para healers.",
    risco: "Baixo",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/Clique.zip"
  },
  {
    nome: "HealBot",
    slug: "HealBot",
    categoria: "Healer / Raid",
    descricao: "Painel avançado para healers.",
    risco: "Médio",
    peso: "Médio",
    pcFraco: false,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/HealBot.zip"
  },
  {
    nome: "Gladius",
    slug: "Gladius",
    categoria: "PvP / Arena",
    descricao: "Frames de arena para PvP.",
    risco: "Baixo",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/Gladius.zip"
  },
  {
    nome: "LoseControl",
    slug: "LoseControl",
    categoria: "PvP / Arena",
    descricao: "Mostra efeitos de controle no personagem.",
    risco: "Baixo",
    peso: "Leve",
    pcFraco: true,
    compatibilidade: "3.3.5a build 12340",
    downloadUrl: "https://raw.githubusercontent.com/NoM0Re/WoW-3.3.5a-Addons/main/src/Addons/LoseControl.zip"
  }
];
