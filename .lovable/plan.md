# Daurer Tech — Landing Page de Alta Conversão

Landing page única (one-page) em português, otimizada para gerar contatos qualificados via WhatsApp e formulário, com identidade visual futurista minimalista premium inspirada em Vercel, Stripe e Linear.

## Estrutura da página

1. **Header fixo translúcido** — logo Daurer Tech, navegação âncora (Sobre, Serviços, Projetos, Contato) com scroll suave, botão destaque "Falar com especialista" (abre WhatsApp). Em mobile, vira menu hambúrguer.

2. **Hero** — título forte focado em resultado ("Sites que transformam visitantes em clientes"), subtítulo de credibilidade, CTA primário (WhatsApp) + CTA secundário (Ver projetos). Fundo escuro com gradiente animado sutil + grid/partículas em movimento contínuo lento.

3. **Problema** — bloco com 3–4 dores do público (falta de clientes, baixa conversão, pouca credibilidade, sites ultrapassados) em cards minimalistas com ícones.

4. **Solução (Daurer Tech)** — narrativa curta posicionando a agência como parceira estratégica, com 3 pilares: estratégia, design, conversão.

5. **Serviços** — grid de cards com microinteração de hover (glow ciano, leve elevação): Criação de Sites, Landing Pages, Design Estratégico, Otimização/SEO.

6. **Diferencial** — seção contrastante com 4 pontos do que torna a Daurer Tech diferente (estratégia antes do design, foco em conversão, copy estratégico, performance real).

7. **Projetos (destaque principal)** — mockup de notebook centralizado com efeito de leve flutuação contínua (float infinito); dentro da tela um carrossel automático com transições suaves mostrando 4–6 sites desenvolvidos. Controles discretos (dots/setas) e indicador do projeto atual.

8. **Prova Social** — 3 depoimentos curtos em cards (nome, empresa, frase direta) + linha de logos/autoridade.

9. **CTA Final** — bloco full-width com gradiente, headline forte ("Pronto para ter um site que vende por você?") e botão grande para WhatsApp.

10. **FAQ** — accordion com 5–6 perguntas comuns (prazo, preço, manutenção, domínio, prazo de entrega, suporte).

11. **Footer** — branding, contato rápido, redes sociais, links de navegação, copyright.

## Identidade visual

- **Paleta** (HSL no design system):
  - Primária `#02000A` (background)
  - Superfícies `#0F172A`
  - Destaque/CTA `#06B6D4` (ciano)
  - Hover/detalhes `#3B82F6`
  - Texto principal `#FFFFFF`
  - Texto secundário `#94A3B8`
- **Tipografia**: Inter (títulos e corpo), Roboto como secundária — via Google Fonts.
- **Tom**: futurista, minimalista, premium. Bastante respiro, tipografia forte, divisores sutis, gradientes ciano→azul nos elementos de destaque.

## Animações e microinterações

- Gradiente/partículas animadas no hero (CSS, leve, contínuo).
- Float infinito do mockup do notebook.
- Carrossel com fade/slide suave dentro da tela do notebook.
- Fade-in + translateY ao entrar na viewport para cada seção.
- Hover com glow ciano e leve scale nos cards de serviço e botões.
- Scroll suave entre âncoras.

## Funcionalidades

- Botão "Falar com especialista" e CTAs abrem `https://wa.me/<numero>?text=...` com mensagem pré-preenchida.
- Formulário curto (nome + contato/WhatsApp) com validação via zod + react-hook-form, exibindo toast de sucesso e redirecionando para WhatsApp com os dados preenchidos.
- 100% responsivo mobile-first.
- SEO básico: title, meta description, Open Graph, lang="pt-BR", headings semânticos, alt em imagens.
- Performance: imagens otimizadas, lazy loading no carrossel, fontes com `display=swap`.

## Detalhes técnicos

- Atualizar `index.html` com title, meta description, OG tags, lang pt-BR e import das fontes Inter/Roboto.
- Definir tokens HSL e gradientes em `src/index.css`; estender `tailwind.config.ts` com cores semânticas (background, surface, accent, accent-hover, text, text-muted), keyframes (`float`, `gradient-shift`, `fade-in-up`) e animações.
- `src/pages/Index.tsx` compõe as seções; cada seção em `src/components/sections/` (Header, Hero, Problema, Solucao, Servicos, Diferencial, Projetos, Depoimentos, CtaFinal, Faq, Footer).
- Carrossel de projetos com `src/components/ui/carousel.tsx` (já existente) renderizado dentro de um SVG/imagem de notebook posicionada absolutamente.
- Formulário com `react-hook-form` + `zod` e `useToast`.
- Imagens placeholder geradas para os mockups dos projetos.

## Itens que precisam da sua confirmação depois (não bloqueiam a aprovação)

- Número de WhatsApp real para os CTAs (uso um placeholder até você fornecer).
- Textos dos depoimentos e nomes/imagens dos projetos reais (uso conteúdo de exemplo coerente).