import { Cloud, Cog, Code, Infinity, Shield, Database } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      color: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
      skills: [
        { name: "AWS", level: 83 },
        { name: "Azure", level: 80 },
        { name: "GCP", level: 75 },
      ],
    },
    {
      title: "DevOps & Automation",
      icon: Cog,
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
      skills: [
        { name: "Kubernetes", level: 83 },
        { name: "Docker", level: 100 },
        { name: "Terraform", level: 80 },
      ],
    },
    {
      title: "Programming",
      icon: Code,
      color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
      skills: [
        { name: "Python", level: 83 },
        { name: "Bash", level: 80 },
        { name: "PowerShell", level: 75 },
      ],
    },
    {
      title: "CI/CD & Tools",
      icon: Infinity,
      color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
      skills: [
        { name: "Jenkins", level: 80 },
        { name: "GitLab CI", level: 83 },
        { name: "GitHub Actions", level: 75 },
      ],
    },
    {
      title: "Monitoring & Security",
      icon: Shield,
      color: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400",
      skills: [
        { name: "Prometheus", level: 75 },
        { name: "Grafana", level: 80 },
        { name: "CloudWatch", level: 83 },
      ],
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "S3/Blob Storage", level: 83 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in cloud technologies and modern development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <div className="w-24 h-2 bg-muted rounded-full">
                        <div
                          className="h-full bg-primary dark:bg-accent rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
