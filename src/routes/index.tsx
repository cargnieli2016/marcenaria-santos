import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import m003 from "@/assets/m003.webp";
import m005 from "@/assets/m005.webp";
import m008 from "@/assets/m008.webp";
import m011 from "@/assets/m011.webp";
import m016 from "@/assets/m016.webp";
import m017 from "@/assets/m017.webp";
import m018 from "@/assets/m018.webp";
import m019 from "@/assets/m019.webp";
import m021 from "@/assets/m021.webp";
import atendimento from "@/assets/atendimento.png";
import projeto from "@/assets/projeto.png";
import producao from "@/assets/producao.png";
import entrega from "@/assets/entrega.png";
import gestao from "@/assets/gestao.png";
import premium from "@/assets/premium.png";

const TITLE = "Marcenaria Santos | Móveis Planejados em Monte Mor - SP";
const DESC =
  "Móveis planejados sob medida em Monte Mor e região: cozinhas, dormitórios, escritórios e comércios. Peça seu orçamento pelo WhatsApp (19) 98902-4149.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATS =
  "https://wa.me/5519989024149?text=" +
  encodeURIComponent("Olá! Vim pelo site e gostaria de um orçamento de móveis planejados.");
const ADDRESS = "Av. Luís Gonzaga do Nascimento, Nº 300 – Jardim Paulista, Monte Mor – SP, 13198-432";
const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);

const ambientes = [
  { img: m008, t: "Cozinha Planejada", d: "Design inteligente, ergonomia e materiais que unem beleza e durabilidade." },
  { img: m016, t: "Dormitório Sob Medida", d: "Conforto, organização e sofisticação para um ambiente que acolhe." },
  { img: m017, t: "Comercial e Consultórios", d: "Ambientes profissionais que transmitem confiança aos seus clientes." },
  { img: m019, t: "Estantes e Painéis", d: "Soluções que ampliam espaços e valorizam a arquitetura." },
];

const etapas = [
  { i: atendimento, t: "Atendimento Consultivo", d: "Entendemos suas necessidades, rotina e expectativas antes de qualquer proposta." },
  { i: projeto, t: "Projeto Personalizado", d: "Desenvolvemos um projeto exclusivo, alinhando design, funcionalidade e estética." },
  { i: producao, t: "Produção Sob Medida", d: "Cada móvel é fabricado especificamente para o seu espaço." },
  { i: entrega, t: "Entrega e Montagem", d: "Instalação precisa, limpa e com atenção total aos detalhes." },
  { i: gestao, t: "Acompanhamento", d: "Você acompanha cada etapa, com prazos claros e comunicação transparente." },
  { i: premium, t: "Materiais de Qualidade", d: "Trabalhamos com fornecedores e acabamentos de alto padrão." },
];

const galeria = [m017, m011, m018, m003, m021, m005];

function Cta({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={WHATS}
      target="_blank"
      rel="noreferrer"
      className="inline-block rounded-md bg-gold px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-gold-foreground shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:brightness-110"
    >
      {children}
    </a>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-b-[40px] bg-ink text-ink-foreground">
        <img src={m008} alt="Cozinha planejada Marcenaria Santos" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-24 pt-6">
          <img src={logo} alt="Marcenaria Santos" className="h-24 w-auto rounded-lg" />
          <nav className="mt-4 flex flex-wrap justify-center gap-6 text-xs font-medium uppercase tracking-widest">
            {[["#ambientes", "Ambientes"], ["#processo", "Nosso processo"], ["#galeria", "Trabalhos"], ["#contato", "Contato"]].map(([h, l]) => (
              <a key={h} href={h} className="transition hover:text-gold">{l}</a>
            ))}
          </nav>
          <div className="mt-14 max-w-3xl rounded-2xl bg-ink/60 px-6 py-12 text-center backdrop-blur-sm md:px-14">
            <h1 className="text-4xl font-medium leading-tight md:text-6xl">
              Móveis Planejados Sob Medida que valorizam seu espaço
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-gold md:text-lg">
              Projetos exclusivos, pensados para sua rotina, com acabamento impecável e soluções completas em móveis sob medida.
            </p>
            <div className="mt-10"><Cta>Quero solicitar meu orçamento</Cta></div>
          </div>
        </div>
      </section>

      {/* Ambientes */}
      <section id="ambientes" className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="text-center text-3xl font-bold text-ink md:text-4xl">Projetos que traduzem personalidade em cada detalhe!</h2>
        <p className="mt-3 text-center text-lg text-muted-foreground">
          Cada ambiente é pensado para unir estética, funcionalidade e aproveitamento máximo do espaço.
        </p>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {ambientes.map((a, i) => (
            <div
              key={a.t}
              className={`group relative h-80 overflow-hidden bg-ink shadow-[var(--shadow-card)] ${["rounded-tl-[40px]", "rounded-tr-[40px]", "rounded-bl-[40px]", "rounded-br-[40px]"][i]}`}
            >
              <img src={a.img} alt={a.t} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute right-5 top-5 max-w-xs rounded-lg bg-ink/75 p-4 text-ink-foreground backdrop-blur-sm">
                <h3 className="text-2xl">{a.t}</h3>
                <p className="mt-1 text-sm text-gold">{a.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center"><Cta>Quero um projeto assim para minha casa</Cta></div>
      </section>

      {/* Processo */}
      <section id="processo" className="mx-auto max-w-6xl px-5">
        <div className="rounded-2xl bg-ink px-5 py-20 text-ink-foreground md:px-10">
          <h2 className="text-center text-3xl md:text-4xl">Um processo claro, profissional e sem surpresas.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gold">
            Do primeiro contato à entrega final, cuidamos de cada etapa para que você tenha tranquilidade e o melhor resultado.
          </p>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {etapas.map((e) => (
              <div key={e.t} className="rounded-lg border border-ink-foreground/15 p-7 text-center transition hover:border-gold/60 hover:bg-ink-foreground/5">
                <img src={e.i} alt="" className="mx-auto h-20 w-20 object-contain" loading="lazy" />
                <h3 className="mt-5 text-xl">{e.t}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-foreground/75">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="text-center text-3xl font-bold text-ink md:text-4xl">Experiência e técnica em cada móvel que entregamos</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-muted-foreground">
          Alguns dos nossos trabalhos recentes: cozinhas, gabinetes, recepções, estantes e gaveteiros feitos sob medida para cada cliente.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {galeria.map((g, i) => (
            <div key={g} className={`overflow-hidden rounded-xl bg-muted ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <img src={g} alt="Trabalho da Marcenaria Santos" loading="lazy" className="aspect-square h-full w-full object-cover transition duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center"><Cta>Quero planejar minha casa</Cta></div>
      </section>

      {/* CTA final */}
      <section id="contato" className="relative overflow-hidden bg-ink text-ink-foreground">
        <img src={m011} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Vamos falar sobre o seu projeto?</h2>
          <p className="mt-4 text-gold">Chame agora mesmo no WhatsApp e conte sua necessidade para o seu ambiente planejado.</p>
          <div className="mt-8"><Cta>Falar no WhatsApp</Cta></div>
        </div>
      </section>

      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 border-t border-ink-foreground/10 px-5 py-12 md:flex-row md:justify-between">
          <img src={logo} alt="Marcenaria Santos" className="h-24 w-auto" />
          <div className="space-y-2 text-center text-sm md:text-left">
            <p><span className="font-semibold text-gold">Endereço: </span><a href={MAPS} target="_blank" rel="noreferrer" className="hover:text-gold">{ADDRESS}</a></p>
            <p><span className="font-semibold text-gold">Telefone: </span><a href="tel:+5519989024149" className="hover:text-gold">(19) 98902-4149</a></p>
          </div>
        </div>
        <p className="pb-6 text-center text-xs text-ink-foreground/50">Todos os direitos reservados | Marcenaria Santos</p>
      </footer>
    </main>
  );
}
