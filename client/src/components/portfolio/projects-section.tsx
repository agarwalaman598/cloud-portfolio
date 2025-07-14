import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce MERN Stack Application",
      description: "Built a full-featured e-commerce platform using MongoDB, Express.js, React, and Node.js with JWT authentication, payment integration, and real-time order tracking. Features include admin dashboard and inventory management.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Task Management Mobile App",
      description: "Developed a cross-platform mobile application using Flutter with real-time synchronization, offline support, and cloud storage. Integrated push notifications and biometric authentication for enhanced user experience.",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Flutter", "Dart", "Firebase", "SQLite"],
    },
    {
      title: "Spring Boot Microservices Architecture",
      description: "Architected and implemented a scalable microservices system using Java Spring Boot with service discovery, API gateway, and distributed tracing. Deployed using Docker containers with PostgreSQL database.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    },
    {
      title: "LeetCode Problem Solver Dashboard",
      description: "Created a comprehensive dashboard to track LeetCode progress with Python automation scripts. Features include difficulty analysis, topic categorization, and performance metrics with data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "Django", "Chart.js", "Web Scraping"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of full-stack web applications, mobile apps, and competitive programming solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-muted rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button variant="link" className="text-primary dark:text-accent hover:underline font-medium p-0">
                    View Details
                  </Button>
                  <Button variant="link" className="text-muted-foreground hover:text-foreground p-0">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90 text-white px-8 py-3 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
