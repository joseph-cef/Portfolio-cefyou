import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "professional-to-do-list",
    description: "professional-to-do-list is a comprehensive task management application designed to help users organize their tasks efficiently. It features a user-friendly interface, real-time updates, and seamless integration with various productivity tools.",
    image: "/projects/project1.png",
    tags: ["javaScript", "TailwindCSS", "HTML"],
    demoUrl: "https://joseph-cef.github.io/professional-to-do-list/",
    githubUrl: "https://github.com/joseph-cef/professional-to-do-list",
  },
  {
    id: 2,
    title: "HadEncrypt - Text Encryption Tool",
    description: "A lightweight web app for text encryption and decryption with a custom key",
    image: "/projects/project02.png",
    tags: ["javaScript", "CSS", "HTML"],
    demoUrl: "https://joseph-cef.github.io/HadEncrypt/",
    githubUrl:  "https://github.com/joseph-cef/HadEncrypt",
  },
  {
    id: 3,
    title: "Luxury Scents - E-commerce Website",
    description: " Luxury Scents is a modern e-commerce website that offers a wide range of high-end perfumes and fragrances. The site features a sleek design, intuitive navigation, and a secure checkout process, providing an exceptional shopping experience for fragrance enthusiasts.",
    image: "/projects/project03.png",
    tags: ["javaScript", "CSS", "HTML"],
    demoUrl:  "https://joseph-cef.github.io/Luxury-Scents/",
    githubUrl: "https://github.com/joseph-cef/Luxury-Scents",
  },
  {
    id: 4,
    title: "TechZone - E-Commerce Website",
    description: " TechZone is a cutting-edge e-commerce platform that specializes in the latest technology products. With a sleek design and user-friendly interface, TechZone offers a seamless shopping experience, featuring a wide range of gadgets, electronics, and accessories.",
    image: "/projects/project04.png",
    tags: ["javaScript", "CSS", "HTML"],
    demoUrl: "https://joseph-cef.github.io/TechZone---E-Commerce-Platform/",
    githubUrl: "https://github.com/joseph-cef/TechZone---E-Commerce-Platform",
  },
  {
    id: 5,
    title: "CS - Learning Platform",
    description: "CS - An interactive learning platform designed for first-year Computer Science students, offering structured lessons, exercises.",
    image: "/projects/project05.png",
    tags: ["javaScript", "CSS", "HTML"],
    demoUrl: "https://joseph-cef.github.io/CS-Year-1-LMD-Learning-Platform/",
    githubUrl: "https://github.com/joseph-cef/CS-Year-1-LMD-Learning-Platform",
  },
 
  {
    id: 6,
    title: "CefEncrypt - Text Encryption Tool",
    description: " A lightweight web app for text encryption and decryption with a custom key.",
    image: "/projects/project06.png",
    tags: ["javaScript", "CSS", "HTML"],
    demoUrl:"https://joseph-cef.github.io/josEncrypt/",
    githubUrl: "https://github.com/joseph-cef/josEncrypt",
  },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/joseph-cef"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
