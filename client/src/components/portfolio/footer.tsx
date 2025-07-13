import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/agarwalaman598",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:agarwal.aman598@gmail.com",
      label: "Email",
    },
    {
      icon: Twitter,
      href: "https://x.com/agarwalaman598",
      label: "X (Twitter)",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/amanagarwal.in/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground mb-4 md:mb-0">
            <p>&copy; 2024 Aman Agarwal. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-primary dark:hover:text-accent transition-colors duration-300"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
