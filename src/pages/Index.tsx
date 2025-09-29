import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

function Index() {
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    problem: ''
  })

  const services = [
    {
      title: 'Аварийная сантехника 24/7',
      description: 'Устранение протечек, засоров, аварийных ситуаций в любое время',
      icon: 'Zap',
      price: 'от 1500₽'
    },
    {
      title: 'Установка котлов',
      description: 'Монтаж и подключение газовых, электрических котлов отопления',
      icon: 'Flame',
      price: 'от 15000₽'
    },
    {
      title: 'Монтаж теплых полов',
      description: 'Установка водяных теплых полов под ключ с гарантией',
      icon: 'Thermometer',
      price: 'от 800₽/м²'
    },
    {
      title: 'Капельный полив',
      description: 'Проектирование и монтаж систем капельного полива',
      icon: 'Droplets',
      price: 'от 500₽/м²'
    },
    {
      title: 'Установка сантехники',
      description: 'Монтаж смесителей, унитазов, ванн, душевых кабин',
      icon: 'Wrench',
      price: 'от 2000₽'
    },
    {
      title: 'Замена труб',
      description: 'Полная или частичная замена водопроводных и канализационных труб',
      icon: 'Settings',
      price: 'от 3000₽'
    }
  ]

  const priceList = [
    { service: 'Установка газового котла', price: 'от 15000₽' },
    { service: 'Установка электрического котла', price: 'от 12000₽' },
    { service: 'Монтаж водяного теплого пола', price: 'от 800₽/м²' },
    { service: 'Система капельного полива', price: 'от 500₽/м²' },
    { service: 'Устранение засора раковины', price: '1500₽' },
    { service: 'Устранение засора унитаза', price: '2000₽' },
    { service: 'Замена смесителя', price: '2500₽' },
    { service: 'Установка унитаза', price: '3500₽' },
    { service: 'Замена сифона', price: '1200₽' },
    { service: 'Установка ванны', price: '8000₽' },
    { service: 'Замена труб (за метр)', price: '500₽' },
    { service: 'Вызов мастера', price: '500₽' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Заявка отправлена! Мастер свяжется с вами в течение 15 минут.')
    setFormData({ name: '', phone: '', problem: '' })
  }

  const scrollToSection = (section: string) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Wrench" size={32} className="text-primary" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">СантехМастер</h1>
                <p className="text-sm text-gray-600">Симферополь и районы</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'services', label: 'Услуги' },
                { id: 'prices', label: 'Прайс-лист' },
                { id: 'experience', label: 'Наш опыт' },
                { id: 'contacts', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex gap-2">
              <Button onClick={() => scrollToSection('call-master')} variant="outline" size="sm">
                <Icon name="Phone" size={16} className="mr-2" />
                Вызвать мастера
              </Button>
              <Button onClick={() => alert('Аварийный вызов:\n+7 (978) 297-35-93\n+7 (978) 135-30-23')} className="bg-red-600 hover:bg-red-700 text-white" size="sm">
                <Icon name="Zap" size={16} className="mr-2" />
                Аварийный 24/7
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Работаем 24/7
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Надежные сантехнические услуги
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                12 лет опыта в решении любых сантехнических проблем. 
                Гарантия качества, честные цены, быстрый выезд мастера.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white"
                  onClick={() => scrollToSection('call-master')}
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Вызвать мастера
                </Button>
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => alert('Аварийный вызов: +7 (495) 123-45-67\nКруглосуточно без выходных!')}
                >
                  <Icon name="Zap" size={20} className="mr-2" />
                  Аварийный 24/7
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-800"
                  onClick={() => scrollToSection('services')}
                >
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/e1af432d-59e4-4a4c-abe5-0a00c0101368.jpg" 
                alt="Профессиональный сантехник" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полный спектр сантехнических работ с гарантией качества и фиксированными ценами
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">{service.price}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section id="prices" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Прайс-лист
            </h2>
            <p className="text-lg text-gray-600">
              Честные и фиксированные цены без скрытых доплат
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Calculator" size={24} className="mr-2 text-primary" />
                  Стоимость услуг
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {priceList.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                      <span className="font-medium">{item.service}</span>
                      <Badge variant="outline" className="text-primary border-primary">
                        {item.price}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <Icon name="Info" size={16} className="inline mr-1" />
                    Окончательная стоимость зависит от сложности работ. Диагностика бесплатно!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Наш опыт
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">12 лет на рынке</h3>
                    <p className="text-gray-600">
                      Накопленный опыт позволяет решать задачи любой сложности
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">5000+ довольных клиентов</h3>
                    <p className="text-gray-600">
                      Качественная работа и честные цены — основа нашей репутации
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Гарантия 2 года</h3>
                    <p className="text-gray-600">
                      Уверены в качестве работ — даем длительную гарантию
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="/img/2a5b6d57-c12d-418a-9b8a-d75bbd166a81.jpg" 
                alt="Качественные сантехнические работы" 
                className="rounded-lg shadow-lg"
              />
              
              {/* Emergency Call Card */}
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <Icon name="Zap" size={24} className="text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-red-800">Аварийная служба</h3>
                        <p className="text-sm text-red-600">Круглосуточно без выходных</p>
                      </div>
                    </div>
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => alert('Аварийный вызов:\n+7 (978) 297-35-93\n+7 (978) 135-30-23\nКруглосуточно без выходных!')}
                    >
                      <Icon name="Phone" size={16} className="mr-2" />
                      Вызвать сейчас
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call Master Form */}
      <section id="call-master" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Вызвать мастера
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Оставьте заявку и мастер свяжется с вами в течение 15 минут
            </p>
            
            <Card className="text-left">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Введите ваше имя"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (999) 123-45-67"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Опишите проблему
                    </label>
                    <Textarea
                      value={formData.problem}
                      onChange={(e) => setFormData({...formData, problem: e.target.value})}
                      placeholder="Кратко опишите что случилось..."
                      rows={4}
                      className="w-full"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Контакты
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">+7 (978) 297-35-93</p>
                  <p className="text-gray-600">+7 (978) 135-30-23</p>
                </div>
                <p className="text-sm text-gray-500">Прием звонков: 9:00 - 17:00</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                <p className="px-0 py-0 text-transparent">Москва и МО</p>
                <p className="text-sm text-gray-500">Выезд в любой район</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Clock" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                <p className="text-gray-600">Пн-Пт: 9:00 - 17:00</p>
                <p className="text-sm text-gray-500">Аварийные вызовы 24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Wrench" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">СантехМастер</h3>
              </div>
              <p className="text-gray-400">
                Надежный партнер в решении любых сантехнических задач. 
                Качество, скорость, гарантия.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Установка котлов</li>
                <li>Теплые полы</li>
                <li>Капельный полив</li>
                <li>Аварийная сантехника</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (978) 297-35-93</p>
                <p>+7 (978) 135-30-23</p>
                <p>info@santekhmaster.ru</p>
                <p>Симферополь, районы и Крым</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СантехМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index