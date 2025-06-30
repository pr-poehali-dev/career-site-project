import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Современная платформа для онлайн-торговли с React и Node.js",
      image: "/placeholder.svg",
      tags: ["React", "TypeScript", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Mobile Banking App",
      description: "UI/UX дизайн мобильного банковского приложения",
      image: "/placeholder.svg",
      tags: ["Figma", "UI/UX", "Prototyping", "Mobile"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "Персональный сайт-портфолио для творческого агентства",
      image: "/placeholder.svg",
      tags: ["Next.js", "Tailwind", "Framer Motion", "CMS"],
      link: "#",
    },
    {
      title: "Dashboard Analytics",
      description: "Интерактивная панель аналитики с графиками и метриками",
      image: "/placeholder.svg",
      tags: ["React", "D3.js", "Charts", "API"],
      link: "#",
    },
    {
      title: "Brand Identity",
      description: "Полная разработка фирменного стиля для стартапа",
      image: "/placeholder.svg",
      tags: ["Branding", "Logo", "Guidelines", "Print"],
      link: "#",
    },
    {
      title: "SaaS Platform",
      description: "Веб-платформа для управления проектами команд",
      image: "/placeholder.svg",
      tags: ["Vue.js", "Laravel", "MySQL", "Docker"],
      link: "#",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Портфолио</h2>
          <p className="text-xl text-gray-600">
            Мои последние проекты и работы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button size="sm" className="w-full">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Посмотреть
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            <Icon name="Github" size={20} className="mr-2" />
            Посмотреть все проекты на GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
