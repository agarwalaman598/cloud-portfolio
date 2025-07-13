import { ExternalLink, Mail, Linkedin, Twitter, Instagram } from "lucide-react";

export default function AboutSection() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/agarwalaman598",
      icon: Linkedin,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Email",
      url: "mailto:agarwal.aman598@gmail.com",
      icon: Mail,
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      name: "X",
      url: "https://x.com/agarwalaman598",
      icon: Twitter,
      color: "bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/amanagarwal.in/",
      icon: Instagram,
      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    },
  ];

  const highlights = [
    "3+ years of cloud engineering experience",
    "AWS & Azure certified professional",
    "DevOps and Infrastructure automation expert",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated cloud engineer with expertise in designing and implementing robust cloud solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a Cloud Engineer, I specialize in architecting and deploying scalable cloud infrastructure solutions.
              My expertise spans across major cloud platforms including AWS, Azure, and Google Cloud Platform,
              with a strong focus on automation, security, and cost optimization.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about leveraging cutting-edge technologies like Kubernetes, Docker, Terraform,
              and CI/CD pipelines to streamline development workflows and enhance system reliability.
              My goal is to help organizations achieve their digital transformation objectives through innovative cloud solutions.
            </p>

            {/* Experience Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary dark:bg-accent rounded-full"></div>
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="bg-muted rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Connect With Me</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="flex items-center space-x-3 p-4 bg-card rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center text-white transition-colors`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-card-foreground">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
