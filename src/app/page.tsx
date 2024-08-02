import Header from "./components/Header";
import Info from "./components/Info";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header/>
      <Info/>
      <Skills/>
      <Projects/>
    </main>
  );
}
