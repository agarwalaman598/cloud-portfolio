import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Multi-Cloud Infrastructure Automation",
      description: "Designed and implemented a comprehensive multi-cloud infrastructure solution using Terraform, enabling seamless deployments across AWS, Azure, and GCP with automated scaling and monitoring.",
      image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Terraform", "AWS", "Azure", "Kubernetes"],
    },
    {
      title: "Enterprise CI/CD Pipeline",
      description: "Built a robust CI/CD pipeline using GitLab CI and Jenkins, reducing deployment time by 70% and implementing automated testing, security scanning, and rollback mechanisms.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["GitLab CI", "Jenkins", "Docker", "ArgoCD"],
    },
    {
      title: "Cloud Monitoring & Observability Platform",
      description: "Implemented a comprehensive monitoring solution using Prometheus and Grafana, providing real-time insights into application performance and infrastructure health.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Prometheus", "Grafana", "ELK Stack", "AlertManager"],
    },
    {
      title: "DevSecOps Security Framework",
      description: "Developed a security-first approach to cloud deployments, integrating automated security scanning, compliance checks, and vulnerability management into the development lifecycle.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["SonarQube", "Trivy", "HashiCorp Vault", "OPA"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of cloud infrastructure and automation projects
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
