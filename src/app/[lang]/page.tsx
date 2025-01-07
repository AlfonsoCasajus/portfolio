// Components
// import { Experience } from "../components/sections/Experience";
import { Hero } from "../components/sections/Hero"
import { Proyects } from "../components/sections/Proyects"


export default async function Home() {
  return (
    <div className="transition-all font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Proyects />
    </div>
  );
}
