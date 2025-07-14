import { Coffee, Code, Smartphone, Globe, Trophy, Database } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Coffee,
      color: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
      skills: [
        { name: "Java Spring Boot", level: 90 },
        { name: "Python Django", level: 85 },
        { name: "Node.js/Express", level: 88 },
      ],
    },
    {
      title: "Frontend Development",
      icon: Globe,
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
      skills: [
        { name: "React.js", level: 92 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
      skills: [
        { name: "Java", level: 93 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 88 },
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
      skills: [
        { name: "Flutter/Dart", level: 85 },
        { name: "Android/Kotlin", level: 80 },
        { name: "React Native", level: 75 },
      ],
    },
    {
      title: "Problem Solving",
      icon: Trophy,
      color: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400",
      skills: [
        { name: "LeetCode (1000+)", level: 95 },
        { name: "Data Structures", level: 90 },
        { name: "Algorithms", level: 88 },
      ],
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Git/GitHub", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in full-stack development, mobile applications, and competitive programming
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
