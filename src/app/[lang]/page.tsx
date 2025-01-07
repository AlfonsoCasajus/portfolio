// Components
// import { Experience } from "../components/sections/Experience";
import { Hero } from "../components/sections/Hero"
import { Projects } from "../components/sections/Projects"


export default async function Home() {
  return (
    <div className="transition-all font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Projects />
    </div>
  );
}
