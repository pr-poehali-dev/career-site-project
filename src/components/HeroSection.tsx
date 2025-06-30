import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <div className="mb-8">
          <div className="inline-block p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Icon name="Code" size={48} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Веб-разработчик
            <span className="block text-orange-300">& Дизайнер</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Создаю современные веб-приложения и красивые пользовательские
            интерфейсы
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-white/90"
          >
            <Icon name="Eye" size={20} className="mr-2" />
            Посмотреть работы
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            <Icon name="Mail" size={20} className="mr-2" />
            Связаться со мной
          </Button>
        </div>

        <div className="mt-12 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
