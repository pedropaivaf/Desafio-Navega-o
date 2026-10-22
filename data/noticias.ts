export type Categoria = 'tecnologia' | 'esportes';

export type Noticia = {
  id: string;
  categoria: Categoria;
  titulo: string;
  resumo: string;
  conteudo: string;
};

export const NOTICIAS: Noticia[] = [
  // ---------- Tecnologia ----------
  {
    id: '1',
    categoria: 'tecnologia',
    titulo: 'React Native lança nova versão',
    resumo: 'A nova versão traz melhorias de performance...',
    conteudo:
      'O time do React Native publicou uma nova versão do framework com foco em desempenho e estabilidade. Entre as novidades estão ganhos no tempo de inicialização, menor consumo de memória e correções importantes para quem usa a New Architecture. A recomendação é atualizar com calma e acompanhar o guia oficial de upgrade.',
  },
  {
    id: '2',
    categoria: 'tecnologia',
    titulo: 'IA generativa bate recordes',
    resumo: 'Modelos de linguagem estão cada vez mais avançados...',
    conteudo:
      'Os modelos de linguagem continuam evoluindo em ritmo acelerado, com resultados cada vez melhores em programação, análise de documentos e raciocínio. Empresas de diferentes setores já incorporam essas ferramentas ao dia a dia, enquanto o debate sobre uso responsável e privacidade ganha força.',
  },
  {
    id: '3',
    categoria: 'tecnologia',
    titulo: 'Expo lança nova SDK',
    resumo: 'Novas APIs, melhorias no Dev Client e correções de estabilidade.',
    conteudo:
      'A nova SDK do Expo chega com APIs atualizadas, melhorias no Dev Client e um Expo Router mais maduro. Quem já usa roteamento baseado em arquivos ganha transições mais fluidas e tipagem de rotas aprimorada. As notas de versão detalham as mudanças que exigem atenção na migração.',
  },
  {
    id: '4',
    categoria: 'tecnologia',
    titulo: 'TypeScript melhora performance',
    resumo: 'Atualizações no compilador reduzem tempos de build.',
    conteudo:
      'As últimas versões do TypeScript trouxeram otimizações no compilador que reduzem o tempo de build em projetos grandes e melhoram a experiência no editor. Também houve avanços na inferência de tipos, o que significa menos anotações manuais e menos erros em tempo de execução.',
  },
  {
    id: '5',
    categoria: 'tecnologia',
    titulo: 'Hermes recebe otimizações',
    resumo: 'Engine JavaScript do React Native ganha melhor gerenciamento de memória.',
    conteudo:
      'O Hermes, engine JavaScript usada pelo React Native, recebeu otimizações no gerenciamento de memória e na inicialização do app. Na prática, aplicativos abrem mais rápido e consomem menos recursos, especialmente em aparelhos mais modestos.',
  },

  // ---------- Esportes ----------
  {
    id: '1',
    categoria: 'esportes',
    titulo: 'Final do campeonato é definida',
    resumo: 'Os times X e Y se enfrentarão na grande final...',
    conteudo:
      'Após semifinais eletrizantes, os times X e Y garantiram suas vagas e se enfrentarão na grande final do campeonato nacional no próximo domingo. A equipe X venceu de virada com um gol nos acréscimos, enquanto o time Y dominou seu adversário com uma vitória por 3 a 0. A expectativa é de um jogo histórico no estádio Maracanã.',
  },
  {
    id: '2',
    categoria: 'esportes',
    titulo: 'Atleta quebra recorde mundial',
    resumo: 'Na modalidade de corrida, um novo recorde foi estabelecido...',
    conteudo:
      'Em uma prova marcada por clima favorável e ritmo forte desde a largada, o atleta cruzou a linha de chegada com um tempo inédito e quebrou o recorde mundial da modalidade. A marca foi homologada pela federação e já é considerada um dos grandes momentos da temporada.',
  },
  {
    id: '3',
    categoria: 'esportes',
    titulo: 'Clássico termina empatado',
    resumo: 'Em jogo equilibrado, equipes dividem pontos após viradas nos minutos finais.',
    conteudo:
      'O clássico da rodada terminou empatado em 2 a 2, com emoção até o apito final. As equipes alternaram momentos de domínio e viradas nos minutos finais. O resultado mantém a briga pelo topo da tabela totalmente aberta.',
  },
  {
    id: '4',
    categoria: 'esportes',
    titulo: 'Seleção confirma amistosos',
    resumo: 'Jogos de preparação visam dar ritmo a jovens promessas.',
    conteudo:
      'A comissão técnica confirmou dois amistosos de preparação antes do torneio continental. A ideia é testar novas formações e dar ritmo de jogo aos jovens que vêm se destacando nos clubes. A convocação será divulgada na próxima semana.',
  },
  {
    id: '5',
    categoria: 'esportes',
    titulo: 'Maratonista surpreende',
    resumo: 'Atleta vence prova de rua e estabelece melhor marca pessoal.',
    conteudo:
      'Considerada azarona, a maratonista disparou na parte final do percurso e venceu a prova de rua, estabelecendo a melhor marca pessoal da carreira. Após a chegada, ela dedicou o resultado à equipe que a acompanha nos treinos.',
  },
];

export const getNoticias = (categoria: Categoria) =>
  NOTICIAS.filter((n) => n.categoria === categoria);

export const getNoticia = (categoria: Categoria, id?: string) =>
  NOTICIAS.find((n) => n.categoria === categoria && n.id === id);
