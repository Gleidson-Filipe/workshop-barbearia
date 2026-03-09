# IDENTIDADE VISUAL — Kingsman Barbearia Workshop

> **Workshop de Barbearia Profissional · Victor Hayes · 10 de Junho de 2026**

---

## Stack Técnica

- **Framework:** Next.js 15 (App Router, geração estática — exportação como site sem servidor)
- **Styling:** Tailwind CSS para toda estilização — NUNCA criar arquivos `.css` separados, apenas `globals.css` para importar fontes e definir CSS Variables
- **Componentes:** shadcn/ui como base, customizados via `className` com tokens semânticos
- **Animação:** GSAP + ScrollTrigger para animações de scroll e entradas; Framer Motion para micro-interações de componentes React
- **Smooth Scroll:** Lenis para scroll suave (complementa GSAP ScrollTrigger)
- **Tokens:** Todos os valores visuais definidos como CSS Variables em `globals.css` + mapeados no `tailwind.config.ts`
- **Tipografia:** Google Fonts (Anton para hero, Playfair Display para headings, Inter para body) — carregadas via `next/font`
- **Imagens:** `next/image` com `priority` no hero e `loading="lazy"` nas demais
- **TypeScript:** Strict mode, sem `any`, tipos explícitos em todos os componentes

### Proibições absolutas
- NUNCA usar cores/radius/sombras padrão do Tailwind (`gray-100`, `rounded-lg`, `shadow-md`) — apenas tokens deste documento
- NUNCA usar decoração genérica (blobs, dot grids, partículas soltas) como identidade — apenas conceitos visuais com significado
- NUNCA criar múltiplas cores accent — UMA cor (cobre/laranja) para tudo que precisa de destaque
- NUNCA gradientes em todo lugar — gradientes são tempero pontual no máximo em 2 momentos da página
- A IA implementadora é RESPONSÁVEL por criar os SVGs originais descritos abaixo — não substituir por assets genéricos

---

## Setup Necessário

### Libs adicionais

| Lib | Para quê | Instalação |
|---|---|---|
| `gsap` + `@gsap/react` | Animações de scroll e entradas staggered | `npm i gsap @gsap/react` |
| `framer-motion` | Micro-interações nos componentes (hover, focus, accordion FAQ) | `npm i framer-motion` |
| `lenis` | Smooth scroll nativo que sincroniza com GSAP ScrollTrigger | `npm i lenis` |

### Assets externos

| Asset | Para quê | Status |
|---|---|---|
| `Kingsman logo - fundo transparente .png` | Navbar + Hero | ✅ Na pasta `/Images` |
| `Logo Kingsman Barbearia - com background.png` | Open Graph / meta tags | ✅ Na pasta `/Images` |
| `Barbeiro chefe - Victor Hayes.png` | Seção do instrutor | ✅ Na pasta `/Images` |
| `Barbeiro chefe - Victor Hayes -workshop.png` | Hero / prova visual | ✅ Na pasta `/Images` |
| `Cotidiano da barbearia 1.png` | Galeria / prova visual | ✅ Na pasta `/Images` |
| `Cotidiano da barbearia 2.png` | Galeria / prova visual | ✅ Na pasta `/Images` |
| Fotos antes/depois de cortes | Seção prova visual | ⚠️ Adicionar em `/public/images/gallery/` |
| Fotos de depoimentos (alunos) | Seção depoimentos | ⚠️ Adicionar em `/public/images/testimonials/` |

---

## A Alma do App

Kingsman Barbearia Workshop é onde a cultura de rua encontra a precisão artesanal. Não é um curso — é uma iniciação. Paredes escuras, linhas limpas, ferramentas de cobre e o cheiro da ambição. Cada elemento visual diz: *isto é sério, isto é premium, isto vai mudar sua carreira.*

---

## Referências e Princípios

- **Nike (campanha de produto):** Hierarquia tipográfica agressiva — headline enorme, cru, sem rodeios. Contraste brutal entre o texto e o escuro. Movimento como intenção. → **Princípio: tipografia como ação.** → **Aplicação:** O nome do workshop no hero é a maior coisa na tela. Anton (condensed, all-caps) em tamanho que ocupa 70–80% da largura no desktop. Não é decorado — é declarado.

- **Grooming premium (Baxter of California, Harry's, Hims):** Dark mode profundo, tons de metal e couro, detalhes cobre/dourado como únicos acentos quentes. Sem excessos — a qualidade fala pela contenção. → **Princípio: luxo pela subtração.** → **Aplicação:** Preto (#0A0A0A) como fundo absoluto. O cobre (#F8733A) aparece em exatamente os pontos certos — não em tudo. Bordas mínimas ou inexistentes. Espaço em branco (preto) é elemento de design.

- **Apple (produto/landing page):** Scroll como narrativa. Cada seção revela algo novo com propósito. Tipografia limpa. Hierarquia crystal clear. → **Princípio: scroll conta a história.** → **Aplicação:** GSAP ScrollTrigger para revelar seções com entradas staggered. Nada aparece de uma vez. A jornada do scroll é a jornada do aluno — do "quero aprender" ao "vou garantir minha vaga".

---

## Decisões de Identidade

### ESTRUTURA

#### Navegação
**O que:** Navbar minimal fixa no topo. Logo à esquerda (Kingsman transparente). Links de âncora à direita (O Workshop · Técnicas · Instrutor · Vagas). Botão "Garantir Vaga" em destaque no extremo direito, sempre visível.
**Por que:** O usuário nunca deve perder o acesso ao CTA principal. A navbar é o atalho de conversão permanente.
**Como:** `position: sticky top-0` com `backdrop-filter: blur(12px)` e fundo `bg-surface-nav` (preto a 85% opacity). Aparece com fade-in suave após 80px de scroll.
**Nunca:** Hamburger menu em desktop. Menu pesado que oculta o CTA.

#### Layout geral
**O que:** Full-width sections de 100vw. Conteúdo centralizado com `max-width: 1200px`. Cada seção tem ritmo próprio — algumas com grid assimétrico (60/40), outras com grid simétrico (cards).
**Por que:** Cria ritmo visual ao longo do scroll — o usuário não "acostuma" com o padrão e segue descendo.
**Como:** Grid 12 colunas com gaps de `2rem` no mobile e `3rem` no desktop. Seções alternando entre fundo `surface-page` e `surface-section` para criar separação sem bordas.

#### Hierarquia de conversão
**O que:** A arquitetura da informação segue o fluxo psicológico de compra — Atenção → Interesse → Desejo → Ação. Cada seção alimenta a próxima.
**Como:**
1. Hero: impacto + data + CTA primário (Atenção)
2. Prova visual: fotos reais de resultado (Interesse — "isso é possível")
3. Sobre o workshop: credibilidade do conteúdo (Interesse — "é sério")
4. O que vai aprender: especificidade técnica (Desejo — "preciso disso")
5. Para quem é: identificação pessoal (Desejo — "é para mim")
6. Cronograma: visualização da experiência (Desejo — "consigo imaginar lá")
7. Instrutor: autoridade humana (Desejo — "confio nele")
8. Depoimentos: prova social (Desejo → Ação — "outros fizeram e funcionou")
9. Preço + urgência: decisão final (Ação — "agora")
10. CTA final + FAQ: remoção de objeções (Ação — "não tenho mais dúvidas")

---

### LINGUAGEM

#### Tipografia
**O que:** Sistema de 3 fontes com papéis distintos.
- **Anton** (Google Fonts, condensed sans-serif, all-caps) — exclusivo para o hero headline e número do preço. Energia de campanha esportiva. Grande, cru, impactante.
- **Playfair Display** (Google Fonts, serif) — para títulos de seção (`h2`). A voz editorial premium da marca. Séria, com personalidade.
- **Inter** (Google Fonts, sans-serif) — para todo corpo de texto, labels, legendas, UI elements. Limpeza Apple.

**Por que:** Anton comunica urgência e poder (Nike). Playfair comunica craft e tradição (barbearia de qualidade). Inter comunica clareza e modernidade (Apple). Os três juntos criam a tensão entre street energy e artesanato premium.

**Nunca:** Usar Anton em parágrafos. Usar Playfair em UI elements. Misturar as três fontes em uma mesma hierarquia visual (cada uma tem seu território).

#### Cores — A Regra
**UMA COR ACCENT:** `#F8733A` (cobre quente / laranja fogo).
- Representa: ferramentas de cobre, chama de uma navalha sendo afiada, energia Nike, calor contra o frio do preto
- Aparece em: botões primários, badges de data/urgência, ícones ativos, bordas de destaque, contador regressivo, valor do preço, underline de seção ativa na navbar
- Em NENHUM outro elemento vibrante além deste

As cores `#4DA4AB` (teal) e `#C53B39` (vermelho) são **funcionais e pontuais**:
- Teal `#4DA4AB`: apenas para ícone de certificado confirmado e badge "Vagas disponíveis" (sinal positivo)
- Vermelho `#C53B39`: apenas para "Últimas vagas" quando restam poucas (sinal de urgência/alerta)

O azul-petróleo `#1D313C` entra como `surface-elevated` — uma camada de profundidade nas superfícies levemente elevadas, não como accent.

#### Geometria
**O que:** Bordas retas ou mínimas (0–4px radius). Filosofia de lâmina — precisão, sem suavizações excessivas.
**Por que:** Bordas arredondadas comunicam amigável, infantil, SaaS. Bordas retas comunicam precisão, profissionalismo, qualidade artesanal. A navalha não é arredondada.
**Como:**
- `radius-card`: `4px` — quase reto mas não frio demais
- `radius-button`: `4px` — idem
- `radius-input`: `4px`
- `radius-badge`: `2px` — praticamente reto
- Exceção: `radius-avatar`: `50%` — fotos de depoimentos em círculo

**Detalhe de personalidade:** Cards importantes têm uma borda esquerda sólida de `2px solid accent-primary` em vez de borda completa. Referência visual de marcador, de linha de corte — sutil e com identidade.

#### Profundidade
**O que:** Sistema de 3 planos de elevação criado com sombras quentes (não azuladas), bordas sutis e variação de fundo.
**Como:**
- Plano 0 (fundo): `#0A0A0A` (preto absoluto)
- Plano 1 (cards): `#111318` (preto levemente aquecido) + `shadow-card`
- Plano 2 (elevado/destaque): `#1D313C` (petróleo escuro) + `shadow-elevated`
- Glassmorphism: usado em 1 único elemento — a navbar sticky — para reforçar profundidade real

---

### RIQUEZA VISUAL

#### Textura Ambiente
**O que:** Pattern de linhas diagonais cruzadas (crosshatch) extremamente sutil, como as marcas deixadas por uma lâmina de barbearia ou o engraving de um cabo de navalha premium.
**Temática:** O crosshatch é literalmente o que aparece em metais gravados à mão — alicates, navalhas, pentes de metal vintage. É a textura do ofício artesanal.
**Tratamento:** SVG inline como `background-image` usando `<pattern>` com linhas de 45° e -45°. Espaçamento de 8px entre linhas. Stroke de 0.5px. Cor branca a **3% de opacity**. A textura é fixa (`background-attachment: fixed` no desktop) para criar efeito parallax passivo enquanto o usuário rola. NUNCA em cores vibrantes — apenas branco ultra-transparente sobre o preto de fundo.

---

#### Conceitos Visuais por Componente

##### Hero Section
**Representa:** O chamado. O momento em que o futuro aluno vê pela primeira vez que existe uma oportunidade real de transformar sua carreira.
**Metáfora visual:** Ferramentas de um mestre dispostas sobre uma mesa escura — a bancada do barbeiro, o arsenal do ofício. Não como decoração, mas como convite silencioso: *estas ferramentas podem ser suas.*
**Cena detalhada:**
No plano de fundo do hero, três silhuetas wireframe de ferramentas sobrepostas em posições assimétricas, todas em branco a 5-6% de opacity:
- Uma navalha reta (straight razor) ocupando o lado direito: retângulo estreito (proporção 1:6) com leve ângulo de 15° no topo representando a lâmina. O cabo tem dois furos circulares. Posição: 60% horizontal, 20% vertical. Tamanho: 35% da altura do hero.
- Uma tesoura de barbeiro no centro-esquerda: dois ovais alongados cruzando em X no ponto de pivô, com argolas circulares nas extremidades. Inclinada a -20°. Posição: 25% horizontal, 50% vertical. Tamanho: 28% da altura.
- Um pente profissional no canto inferior direito: retângulo estreito com fileiras de dentes verticais (linhas finas espaçadas de 3px). Posicionado a 80% horizontal, 75% vertical. Tamanho: 18% da altura.

Sobre estas silhuetas, em primeiro plano completo: o texto hero. Nada mais compete com o texto.

A foto `Barbeiro chefe - Victor Hayes -workshop.png` pode aparecer no canto direito do hero em desktop (50% da largura), com tratamento de máscara — a imagem desaparece gradualmente à esquerda (gradient-to-right de transparent para o fundo da página), integrando-se ao fundo sem moldura.

**Viabilidade:** CÓDIGO PURO (SVG inline para as ferramentas + CSS mask para a foto)

---

##### Seção "O Que Você Vai Aprender" — Cards de Técnica
**Representa:** A transformação específica que o aluno vai adquirir. Cada técnica é uma habilidade que vira renda.
**Metáfora visual:** Cada card mostra a técnica em si, visualizada geometricamente — não um ícone genérico, mas a *assinatura visual* daquela habilidade.
**Cenas detalhadas por técnica:**

**Card 1 — Fade / Degradê:**
No topo do card, um perfil lateral de cabeça estilizado: arco simples superior (couro cabeludo) + óvalo representando a orelha + linha de queixo. Dentro desse perfil, fileiras horizontais de traços paralelos que vão de espessas e escuras (topo, simulando cabelo comprido) a finíssimas e quase invisíveis (lateral/pescoço, simulando o fade). Gradação de 8 linhas de espessura decrescente: de 2px a 0.2px. Cor: accent-primary a 15% opacity. Esta cena diz exatamente "fade" sem usar uma palavra.

**Card 2 — Acabamento e Linhas:**
Um retângulo representando a nuca/pescoço visto de trás. Uma única linha curva em accent-primary (100% opacity) traçada com precisão ao longo da linha do cabelo — um arco limpo e decisivo. A linha tem uma extremidade com um pequeno ponto circular (o início do traço) e a outra extremidade livre (como uma lâmina que acabou de cortar). O restante do card é preto. A precisão de uma única linha É o conceito.

**Card 3 — Design de Barba:**
Vista frontal do rosto da boca para baixo: queixo arredondado + bochechas representadas por duas curvas simétricas. Linhas simétricas definem o contorno da barba — superior (bigode), laterais (costeletas), e inferior (queixo/goatee). Todas as linhas em accent-primary a 20% opacity. O desenho é como um template de design de barba, como se o barbeiro estivesse planejando o resultado antes de executar.

**Card 4 — Técnica de Máquina:**
Vista em perspectiva isométrica levemente inclinada de uma cabeça de clipper (máquina de cortar): retângulo principal com grade de dentes na parte inferior (fileiras de retângulos pequenos e precisos, espaçamento de 2px). Acima dos dentes, linhas paralelas horizontais representando as lâminas. O objeto flutua levemente (sem sombra de contato — weightless). Em accent-primary a 20% opacity.

**Card 5 — Atendimento ao Cliente:**
Um balão de fala (speech bubble) minimalista — não o emoji genérico, mas uma forma geométrica com canto reto estilo designer. Dentro do balão, a coroa geométrica da Kingsman em miniatura (ver token da marca abaixo). Conceito: a excelência no atendimento é a coroa do serviço — o que diferencia um barbeiro profissional de um iniciante. Accent-primary a 20%.

**Viabilidade:** CÓDIGO PURO (SVG inline em cada card)

---

##### Cronograma / Programação
**Representa:** A jornada que o aluno vai percorrer — dois dias que mudam a perspectiva.
**Metáfora visual:** Um poste de barbearia (barber pole) simplificado conectando os dois dias. Não o kitsch colorido de barbearia de bairro — mas uma versão premium e geométrica: estrutura vertical fina com espirais diagonais envoltas, como um troféu ou landmark entre os dois pontos da jornada.
**Cena detalhada:**
No centro vertical da timeline entre "Dia 1" e "Dia 2": um cilindro wireframe (duas linhas verticais paralelas, 4px de largura, 120px de altura) com 3 linhas diagonais em espiral passando por ele em ângulo de 30°. Duas das espirais em branco a 12% opacity. Uma espiral em accent-primary a 30% opacity. Os nodes "Dia 1" e "Dia 2" são círculos de 36px com bordas em accent-primary. O conteúdo de cada dia (bullet points) se expande para a direita de forma assimétrica.

**Viabilidade:** CÓDIGO PURO (SVG + Tailwind layout)

---

##### Seção do Instrutor — Victor Hayes
**Representa:** A autoridade humana. A prova de que o conhecimento vem de alguém real, com história, com resultados.
**Metáfora visual:** Um retrato de mestre — como uma gravura editorial de um artesão em sua oficina. A coroa da Kingsman como símbolo de autoridade.
**Cena detalhada:**
O card do instrutor tem layout 60/40 (foto à esquerda, bio à direita no desktop). No canto superior direito do card, a coroa geométrica Kingsman em SVG: 5 pontas trapezoidais de alturas variadas (a central mais alta), base retangular, tudo em stroke fino (1.5px) na cor accent-primary. Dimensão: 48x36px. É como um selo de qualidade discreto.

A foto `Barbeiro chefe - Victor Hayes.png` é renderizada sem bordas arredondadas (radius 0) em desktop — a rigidez da geometria reforça precisão. Em mobile, aspect-ratio 1:1 com radius mínimo.

No background do card (atrás do texto da bio), linhas de crosshatch em accent-primary a 4% opacity — mais intensas que o fundo geral, criando a sensação de um documento gravado, como um cartão de visita de luxo.

**Viabilidade:** CÓDIGO PURO

---

##### Seção de Preço / Vagas Limitadas
**Representa:** A urgência real. Não há vagas infinitas — cada cadeira vazia é uma oportunidade. Cada cadeira tomada é um aluno que saiu na frente.
**Metáfora visual:** Cadeiras de barbearia — algumas ocupadas, algumas disponíveis. A visualização física da escassez.
**Cena detalhada:**
Uma fileira horizontal de 5 cadeiras de barbearia estilizadas em SVG wireframe. Cada cadeira: retângulo do assento (40x24px), retângulo do encosto (32x40px), cilindro central (6px wide) e base em T (50px wide, 8px high). Sem detalhes excessivos — é o ícone mínimo reconhecível de "cadeira de barbeiro".

As primeiras 3 cadeiras: preenchidas com `surface-elevated` (#1D313C), com um pequeno ícone de check em accent-primary no assento. Representam vagas tomadas.

As últimas 2 cadeiras: apenas o outline em accent-primary (stroke 1.5px, fill transparent). Elas pulsam suavemente — a opacidade do outline oscila entre 60% e 100% em um loop de 2s com easing `ease-in-out`. Estas são as vagas disponíveis.

Abaixo da fileira, em texto pequeno Inter: "2 de 5 vagas disponíveis" ou o número real quando definido.

**Viabilidade:** CÓDIGO PURO (SVG + animação CSS)

---

##### FAQ Section
**Representa:** A remoção das últimas dúvidas — o que impede o usuário de clicar "comprar".
**Metáfora visual:** Não um accordion genérico. Cada item tem uma borda esquerda que "preenche" em accent-primary quando expandido — como uma lâmina deslizando e revelando o conteúdo.
**Cena detalhada:**
O accordion FAQ usa Framer Motion para a animação de abertura/fechamento. No estado fechado: pergunta + ícone "+" à direita, borda esquerda de 2px em `border-subtle`. No estado aberto: a borda esquerda transiciona para `accent-primary` (animação de height 0→100% de cima para baixo, duração 0.25s). O conteúdo expande com `AnimatePresence`. Sem decoração além disso — a mecânica É o design.

**Viabilidade:** CÓDIGO PURO (Framer Motion AnimatePresence)

---

## Tokens de Design

### Cores — Fundos
| Token CSS Variable | Valor | Uso |
|---|---|---|
| `--surface-page` | `#0A0A0A` | Fundo principal de toda a página |
| `--surface-section` | `#0D0F12` | Seções alternadas para criar separação sutil |
| `--surface-card` | `#111318` | Background de cards |
| `--surface-elevated` | `#1D313C` | Cards em destaque, hover states elevados |
| `--surface-nav` | `rgba(10,10,10,0.85)` | Navbar sticky com blur |

### Cores — Texto
| Token CSS Variable | Valor | Uso |
|---|---|---|
| `--text-primary` | `#F5F0EB` | Títulos e texto principal (branco quente, não frio) |
| `--text-secondary` | `#9E9189` | Texto de apoio, subtítulos de seção |
| `--text-muted` | `#5A5350` | Hints, placeholders, metadata |

### Cores — Accent (ÚNICA COR VIBRANTE)
| Token CSS Variable | Valor | Uso |
|---|---|---|
| `--accent-primary` | `#F8733A` | Botões, CTA, links, ícones ativos, badges de data, borda-left de cards importantes, valor do preço |
| `--accent-hover` | `#E5622A` | Hover state do accent |
| `--accent-subtle` | `rgba(248, 115, 58, 0.10)` | Backgrounds translúcidos — badge backgrounds, hover tints em cards |
| `--accent-glow` | `rgba(248, 115, 58, 0.15)` | Box-shadow de botões no hover |

### Cores — Status (APENAS feedback funcional)
| Token CSS Variable | Valor | Uso |
|---|---|---|
| `--status-success` | `#4DA4AB` | Badge "Vagas disponíveis", ícone certificado confirmado |
| `--status-error` | `#C53B39` | Badge "Últimas vagas", sold out |

### Bordas
| Token CSS Variable | Valor | Uso |
|---|---|---|
| `--border-default` | `rgba(255,255,255,0.08)` | Bordas padrão de cards e inputs |
| `--border-subtle` | `rgba(255,255,255,0.04)` | Separadores, divisores internos |
| `--border-accent` | `rgba(248,115,58,0.40)` | Borda esquerda de cards em destaque |

### Geometria
| Token CSS Variable | Valor | Tailwind Custom | Uso |
|---|---|---|---|
| `--radius-card` | `4px` | `rounded-card` | Cards, containers |
| `--radius-button` | `4px` | `rounded-button` | Botões primários e secundários |
| `--radius-input` | `4px` | `rounded-input` | Inputs e selects |
| `--radius-badge` | `2px` | `rounded-badge` | Badges, tags, labels |
| `--radius-avatar` | `9999px` | `rounded-avatar` | Fotos de depoimentos |

### Sombras
| Token CSS Variable | Valor | Uso |
|---|---|---|
| `--shadow-card` | `0 1px 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.5)` | Cards em repouso |
| `--shadow-hover` | `0 8px 32px rgba(248,115,58,0.10), 0 0 0 1px rgba(248,115,58,0.18)` | Hover em cards e botões |
| `--shadow-float` | `0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)` | Navbar sticky, modais |
| `--shadow-button` | `0 4px 16px rgba(248,115,58,0.25)` | Botão CTA primário em repouso |

### Espaçamento de Seção
| Token | Valor | Uso |
|---|---|---|
| `section-py` | `py-24 md:py-32` | Padding vertical de seções |
| `section-px` | `px-4 md:px-8` | Padding horizontal responsivo |
| `container-max` | `max-w-6xl mx-auto` | Largura máxima do conteúdo |

---

## Componentes Shadcn — Overrides

| Componente | Override com tokens |
|---|---|
| `<Button>` variant primário | `bg-[--accent-primary] hover:bg-[--accent-hover] text-white rounded-button shadow-[--shadow-button] hover:shadow-[--shadow-hover] transition-all duration-200 font-medium tracking-wide` |
| `<Button>` variant outline | `border border-[--border-default] hover:border-[--border-accent] bg-transparent text-[--text-primary] rounded-button hover:bg-[--accent-subtle] transition-all duration-200` |
| `<Card>` | `bg-[--surface-card] border border-[--border-subtle] rounded-card shadow-[--shadow-card] hover:shadow-[--shadow-hover] transition-shadow duration-300` |
| `<Badge>` | `bg-[--accent-subtle] text-[--accent-primary] border border-[--border-accent] rounded-badge text-xs font-medium tracking-widest uppercase` |
| `<Input>` | `bg-[--surface-elevated] border border-[--border-default] focus:border-[--accent-primary] rounded-input text-[--text-primary] placeholder:text-[--text-muted] transition-colors` |
| `<Accordion>` (FAQ) | `border-b border-[--border-subtle] [&[data-state=open]>div]:border-l-2 [&[data-state=open]>div]:border-[--accent-primary] [&[data-state=open]>div]:pl-4 transition-all` |

---

## Animações — Diretrizes GSAP

### Entradas de Seção (ScrollTrigger)
Toda seção tem seus elementos principais entrando com `gsap.from()` + `ScrollTrigger`:
- **Texto:** `y: 40, opacity: 0, duration: 0.8, ease: "power2.out"`
- **Cards em grid:** `y: 60, opacity: 0, stagger: 0.12, duration: 0.7, ease: "power2.out"` — entram em cascata, não todos juntos
- **Imagens:** `scale: 0.96, opacity: 0, duration: 1.0, ease: "power2.out"` — leve zoom-in suave
- **Trigger:** `start: "top 80%"` para todos (entra antes de chegar no centro da tela)

### Parallax do Hero
A foto de Victor Hayes no hero tem movimento parallax passivo via GSAP: `y: '-15%'` enquanto o usuário rola pela seção hero. O texto hero fica estático (sem parallax no texto).

### Prefers-reduced-motion
Todos os `gsap.from()` e `motion.*` devem ser condicionais ao `window.matchMedia('(prefers-reduced-motion: reduce)')`. Se verdadeiro, aplicar as propriedades finais diretamente sem animação.

---

## Estrutura de Arquivos Sugerida

```
workshop-barbearia/
├── app/
│   ├── layout.tsx          # Fonts (next/font) + metadata SEO + LenisProvider
│   ├── page.tsx            # Composição de todas as seções
│   └── globals.css         # CSS Variables (tokens) + resets + scrollbar custom
├── components/
│   ├── ui/                 # shadcn/ui components customizados
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ProvaVisual.tsx
│   │   ├── SobreWorkshop.tsx
│   │   ├── OQueVaiAprender.tsx
│   │   ├── ParaQuemE.tsx
│   │   ├── Cronograma.tsx
│   │   ├── Instrutor.tsx
│   │   ├── Depoimentos.tsx
│   │   ├── Preco.tsx
│   │   ├── CTAFinal.tsx
│   │   └── FAQ.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── svgs/               # SVGs inline reutilizáveis (ferramentas, coroa, barber pole)
│       ├── StraightRazor.tsx
│       ├── Scissors.tsx
│       ├── BarberPole.tsx
│       ├── KingsmanCrown.tsx
│       └── BarberChairs.tsx
├── lib/
│   └── gsap.ts             # Configuração centralizada do GSAP + ScrollTrigger
├── public/
│   └── images/
│       ├── gallery/        # Fotos antes/depois
│       └── testimonials/   # Fotos de depoimentos
└── Images/                 # Assets existentes (logo, Victor Hayes, cotidiano)
```

---

## Victor Hayes — História do Instrutor

### Quem é Victor Hayes

Victor Hayes tem 32 anos e cresceu num bairro simples onde a barbearia da esquina era o único lugar que o pai conseguia pagar. Aos 17, entrou como assistente nessa mesma barbearia — varria o chão, lavava toalhas e ficava horas observando cada corte como se fosse uma aula.

Aos 22, com uma tesoura comprada a prazo e um espelho pendurado na parede do quarto, começou a atender os amigos do bairro. Não tinha cliente — tinha vizinhos com paciência. Com o tempo, os vizinhos viraram recomendações. As recomendações viraram fila. A fila, virou negócio.

Aos 27, abriu o primeiro espaço próprio: a **Kingsman Barbearia**. O nome não foi escolhido por acaso — Kingsman porque todo homem que sai da cadeira deve sair se sentindo como um rei. O conceito era simples: técnica de alto nível, ambiente premium, sem vaidade. A barbearia cresceu, ganhou reputação e começou a receber pedidos que Victor nunca esperou — outros barbeiros querendo aprender.

Hoje, cinco anos depois de abrir a Kingsman, Victor já treinou mais de 200 profissionais em workshops presenciais. Especialista em fade técnico, acabamento de navalha e design de barba, ele é conhecido por um método direto: menos teoria, mais mão na massa. *"Você aprende barbearia cortando cabelo, não lendo sobre corte de cabelo."*

O workshop de junho de 2026 é uma continuação desse método — dois dias intensos, turma pequena, e o mesmo nível de exigência que Victor aplica em cada corte da Kingsman.

### Copy da Seção do Instrutor (sugestão)

**Headline:** Aprenda com quem construiu do zero

**Subtítulo:** Victor Hayes não começou com um curso. Começou com uma tesoura a prazo e muito chão para varrer.

**Bio curta (para o card):**
> "Aos 17, eu varria barbearia dos outros. Aos 27, abri a minha. O que aprendi no meio disso é o que vou ensinar em dois dias — sem enrolação."

**Credenciais para exibir:**
- 15 anos de experiência na tesoura
- Fundador da Kingsman Barbearia (2019)
- +200 profissionais formados
- Especialista em fade, navalha e design de barba

---

## SEO e Metadata

Baseado nos princípios E-E-A-T (Experience, Expertise, Authority, Trust):

```
Title: Workshop de Barbearia Profissional | Kingsman Barbearia — 10 de Junho de 2026
Description: Aprenda fade, acabamento e design de barba com Victor Hayes. Workshop presencial, certificado incluído. Vagas limitadas — garanta a sua.
OG Image: Logo Kingsman Barbearia - com background.png
Schema: Event schema (eventName, startDate, location, organizer, offers)
```

**Sinais de autoridade na página:**
- Nome e credenciais de Victor Hayes visíveis com destaque
- Fotos reais do instrutor (não stock)
- Depoimentos com fotos reais de alunos
- Certificado mencionado com detalhes
- Data e local específicos (não genérico)

---

## Regra de Ouro

Ao criar qualquer tela ou componente da Kingsman Workshop:

1. **Preto é o fundo absoluto.** O branco não existe como fundo — apenas como texto.
2. **O cobre (#F8733A) é sangue, não tinta.** Aparece vivo, em pontos específicos, com significado. Não decora — sinaliza.
3. **Cada card importante tem uma cena SVG.** Não um blob. Não uma partícula. Uma cena que conta a história de *o que aquele card representa*.
4. **A tipografia é o design.** Anton no hero não precisa de efeito especial — o tamanho e o peso já são o impacto.
5. **O scroll é a narrativa.** Cada seção revela algo novo. O usuário chega ao preço já convencido — o CTA é só o ponto final.
6. **Barbearia premium não grita. Declara.**

## Teste Final

Coloque ao lado de qualquer landing page de curso online genérica. A diferença deve ser imediata:
- **Estrutura:** Sem sidebar, sem cards de curso genéricos, sem timer de oferta piscando
- **Linguagem:** Anton + Playfair + Inter, preto absoluto, UMA cor accent (cobre), geometria de lâmina (radius 4px)
- **Riqueza:** Cards com ferramentas SVG que são a técnica em si, cadeiras de barbearia que mostram urgência, barber pole entre os dias do cronograma, coroa Kingsman no card do instrutor
- **Sensação:** Sério, premium, motivador. Como se a carreira do aluno começasse agora.
