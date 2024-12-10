import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import BackgroundAnimation from "@/components/BackgroundAnimation"; // Added import

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 text-blue-900 relative overflow-hidden">
      <Header />
      <Introduction />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
      <BackgroundAnimation /> {/* Added BackgroundAnimation component */}
    </main>
  );
}
