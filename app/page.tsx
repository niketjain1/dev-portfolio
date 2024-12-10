import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import AnimatedDivider from "@/components/AnimatedDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <Introduction />
      <AnimatedDivider />
      <Experience />
      <AnimatedDivider />
      <Projects />
      <AnimatedDivider />
      <Blog />
      <AnimatedDivider />
      <Contact />
    </main>
  );
}
