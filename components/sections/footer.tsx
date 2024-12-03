import { Github, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const footerLinks = [
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Blog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Community", "Success Stories", "Events"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookie Policy", "License"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-blue-900/50 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-xl font-bold text-white">Learners Lab</h2>
            <p className="mt-4 text-sm text-gray-400">
              Empowering the top 0.1% of developers to shape the future of technology.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 transition-colors hover:text-blue-400"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-blue-900/50 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Learners Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}