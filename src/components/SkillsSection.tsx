import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90, icon: "Code" },
        { name: "TypeScript", level: 85, icon: "FileCode" },
        { name: "Tailwind CSS", level: 95, icon: "Palette" },
        { name: "Next.js", level: 80, icon: "Zap" },
      ],
    },
    {
      category: "Design",
      items: [
        { name: "Figma", level: 90, icon: "Figma" },
        { name: "Adobe XD", level: 75, icon: "Layers" },
        { name: "UI/UX Design", level: 85, icon: "Paintbrush" },
        { name: "Prototyping", level: 80, icon: "Workflow" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 75, icon: "Server" },
        { name: "Python", level: 70, icon: "Code2" },
        { name: "SQL", level: 65, icon: "Database" },
        { name: "API Design", level: 80, icon: "Link" },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Навыки и технологии
          </h2>
          <p className="text-xl text-gray-600">
            Инструменты, которыми я владею
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category) => (
            <Card
              key={category.category}
              className="p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon
                          name={skill.icon as any}
                          size={20}
                          className="text-accent"
                        />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
