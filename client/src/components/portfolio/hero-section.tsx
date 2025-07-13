import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";
import profileImage from "@assets/image_1752414151408.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl animate-float">
                <img
                  src={profileImage}
                  alt="Aman Agarwal - Cloud Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary dark:bg-accent rounded-full flex items-center justify-center shadow-lg">
                <Cloud className="text-white text-lg" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
            <span className="gradient-text">Aman Agarwal</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up animate-delay-200">
            Cloud Engineer & DevOps Specialist
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up animate-delay-400">
            Passionate about building scalable cloud infrastructure and automating deployment pipelines.
            Experienced in AWS, Azure, Kubernetes, and modern DevOps practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-600">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90 text-white px-8 py-3 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="border-2 border-primary dark:border-accent text-primary dark:text-accent hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-white px-8 py-3 font-medium transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
