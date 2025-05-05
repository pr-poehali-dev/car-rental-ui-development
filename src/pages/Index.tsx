
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, Menu, Phone, Search } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const news = [
    {
      id: 1,
      title: "Специальное предложение для новых клиентов",
      description: "Получите скидку 15% на первую аренду автомобиля при регистрации в нашем сервисе.",
      image: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Расширяем автопарк премиум-класса",
      description: "Теперь в нашем автопарке доступны новые модели Mercedes-Benz S-класса и BMW 7 серии.",
      image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Открытие нового филиала в центре города",
      description: "Мы рады сообщить об открытии нового пункта выдачи автомобилей в центральном районе города.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Шапка сайта */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">IndexDrive</span>
            </a>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#promotions" className="text-sm font-medium hover:text-accent transition-colors">Акции</a>
            <a href="#booking" className="text-sm font-medium hover:text-accent transition-colors">Бронирование</a>
            <a href="/login" className="text-sm font-medium hover:text-primary transition-colors">Личный кабинет</a>
          </nav>

          {/* Мобильное меню */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Мобильное меню выпадающее */}
        {isMenuOpen && (
          <div className="container md:hidden py-4 bg-background border-t">
            <nav className="flex flex-col gap-4">
              <a href="#promotions" className="text-sm font-medium hover:text-accent transition-colors">Акции</a>
              <a href="#booking" className="text-sm font-medium hover:text-accent transition-colors">Бронирование</a>
              <a href="/login" className="text-sm font-medium hover:text-primary transition-colors">Личный кабинет</a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Баннер */}
        <section className="relative h-[500px] bg-gray-900 text-white flex items-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070')] bg-cover bg-center opacity-60"></div>
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-outline">На любой случай, любой автомобиль</h1>
              <p className="text-xl mb-8">IndexDrive — сделаем любой автомобиль доступным и практичным для вас.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Забронировать автомобиль
              </Button>
            </div>
          </div>
        </section>

        {/* Секция о доверии компании */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Почему нам доверяют</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Более 5000 клиентов уже выбрали наш сервис для аренды автомобилей
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg hover-scale border border-gray-100 shadow-sm">
                <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Быстрая подача</h3>
                <p className="text-gray-600">Доставка автомобиля в течение 1 часа в любую точку города</p>
              </div>
              <div className="text-center p-6 rounded-lg hover-scale border border-gray-100 shadow-sm">
                <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Новые автомобили</h3>
                <p className="text-gray-600">Средний возраст автомобилей нашего автопарка — 1.5 года</p>
              </div>
              <div className="text-center p-6 rounded-lg hover-scale border border-gray-100 shadow-sm">
                <div className="bg-accent/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Удобная оплата</h3>
                <p className="text-gray-600">Принимаем любые карты, включая Apple Pay и Google Pay</p>
              </div>
            </div>
          </div>
        </section>

        {/* Форма поиска автомобиля */}
        <section id="booking" className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Найти автомобиль</h2>
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Класс автомобиля</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите класс" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Эконом</SelectItem>
                          <SelectItem value="comfort">Комфорт</SelectItem>
                          <SelectItem value="premium">Премиум</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Марка</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите марку" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="toyota">Toyota</SelectItem>
                          <SelectItem value="bmw">BMW</SelectItem>
                          <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                          <SelectItem value="audi">Audi</SelectItem>
                          <SelectItem value="volkswagen">Volkswagen</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Модель</label>
                      <Input placeholder="Введите модель" />
                    </div>
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white" size="lg">
                    <Search className="mr-2 h-4 w-4" /> Найти автомобиль
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Секция новостей */}
        <section id="promotions" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Новости и акции</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((item) => (
                <Card key={item.id} className="overflow-hidden transition-all hover:shadow-lg border-gray-200">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full hover:bg-primary hover:text-white">Подробнее</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Подвал сайта */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">IndexDrive</h3>
              <p className="mb-4">Аренда автомобилей на любой случай</p>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent" />
                <span className="text-lg">8 (800) 111-11-11</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#promotions" className="hover:text-accent transition-colors">Акции</a></li>
                <li><a href="#booking" className="hover:text-accent transition-colors">Бронирование</a></li>
                <li><a href="/login" className="hover:text-primary transition-colors">Личный кабинет</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Автопарк</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary transition-colors">Эконом-класс</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Комфорт-класс</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Премиум-класс</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Все автомобили</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} IndexDrive. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
