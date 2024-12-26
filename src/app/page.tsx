import { Hero } from "./components/sections/Hero"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Hero />
        <section className="relative flex items-center justify-center">
          <div>PROYECTOS</div>
        </section>
        <section className="relative flex items-center justify-center">
          <div>Stack</div>
        </section>
        <section className="relative flex items-center justify-center">
          <div>Experiencia</div>
        </section>
      </main>
    </div>
  );
}
