import Header from "./components/Header";
import Info from "./components/Info";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header/>
      <Info/>
    </main>
  );
}
