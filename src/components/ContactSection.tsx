import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contacts = [
    {
      icon: "Mail",
      title: "Email",
      value: "hello@example.com",
      link: "mailto:hello@example.com",
    },
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      link: "tel:+79991234567",
    },
    {
      icon: "MapPin",
      title: "Локация",
      value: "Москва, Россия",
      link: "#",
    },
    {
      icon: "Calendar",
      title: "Доступность",
      value: "Открыт для проектов",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: "Github", name: "GitHub", link: "#" },
    { icon: "Linkedin", name: "LinkedIn", link: "#" },
    { icon: "Instagram", name: "Instagram", link: "#" },
    { icon: "Twitter", name: "Twitter", link: "#" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Свяжитесь со мной</h2>
          <p className="text-xl text-gray-300">Готов обсудить ваш проект</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contacts.map((contact) => (
            <Card
              key={contact.title}
              className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Icon
                    name={contact.icon as any}
                    size={24}
                    className="text-primary"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{contact.title}</h3>
                  <a
                    href={contact.link}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {contact.value}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">
            Найдите меня в соцсетях
          </h3>
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors group"
                title={social.name}
              >
                <Icon
                  name={social.icon as any}
                  size={24}
                  className="text-white group-hover:scale-110 transition-transform"
                />
              </a>
            ))}
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Начать проект
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
