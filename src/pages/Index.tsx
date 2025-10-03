import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

function Index() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
    },
    {
      title: 'Установка стиральных машин',
      description: 'Профессиональное подключение стиральных машин с гарантией',
      icon: 'Workflow',
      price: 'от 2500₽'
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
    { service: 'Установка стиральной машины', price: '2500₽' },
    { service: 'Вызов мастера', price: '500₽' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://functions.poehali.dev/1d988278-3f0d-4d84-948a-0bd0ed21d750', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        alert('✅ Заявка успешно отправлена!\n\nМастер свяжется с вами в течение 15 минут.')
        setFormData({ name: '', phone: '', problem: '' })
      } else {
        const error = await response.json()
        alert('⚠️ Ошибка отправки заявки.\n\nПожалуйста, позвоните напрямую:\n+7 (978) 297-35-93')
      }
    } catch (error) {
      alert('⚠️ Не удалось отправить заявку.\n\nПожалуйста, позвоните напрямую:\n+7 (978) 297-35-93')
    }
  }

  const scrollToSection = (section: string) => {
    setActiveSection(section)
    setMobileMenuOpen(false)
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" size={28} className="text-primary" />
              <div>
                <h1 className="text-base md:text-xl font-bold text-gray-900">Сантехник Симферополь</h1>
                <p className="text-xs md:text-sm text-gray-600">16 лет опыта • Крым</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
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

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-2">
              <Button onClick={() => window.open('https://t.me/+79782973593', '_blank')} variant="outline" size="sm">
                <Icon name="Send" size={16} className="mr-2" />
                Telegram
              </Button>
              <Button onClick={() => window.open('https://wa.me/79782973593', '_blank')} className="bg-green-600 hover:bg-green-700 text-white" size="sm">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                WhatsApp
              </Button>
              <Button onClick={() => alert('Аварийный вызов:\n+7 (978) 297-35-93\n+7 (978) 135-30-23')} className="bg-red-600 hover:bg-red-700 text-white" size="sm">
                <Icon name="Zap" size={16} className="mr-2" />
                Аварийный 24/7
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col space-y-6 mt-8">
                  <nav className="flex flex-col space-y-4">
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
                        className={`text-left text-lg font-medium transition-colors hover:text-primary ${
                          activeSection === item.id ? 'text-primary' : 'text-gray-600'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                  
                  <div className="flex flex-col gap-3 pt-6 border-t">
                    <Button onClick={() => window.open('https://wa.me/79782973593', '_blank')} className="bg-green-600 hover:bg-green-700 text-white w-full">
                      <Icon name="MessageCircle" size={18} className="mr-2" />
                      WhatsApp
                    </Button>
                    <Button onClick={() => window.open('https://t.me/+79782973593', '_blank')} variant="outline" className="w-full">
                      <Icon name="Send" size={18} className="mr-2" />
                      Telegram
                    </Button>
                    <Button onClick={() => alert('Аварийный вызов:\n+7 (978) 297-35-93\n+7 (978) 135-30-23')} className="bg-red-600 hover:bg-red-700 text-white w-full">
                      <Icon name="Zap" size={18} className="mr-2" />
                      Аварийный 24/7
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
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
                Сантехник <span className="text-yellow-300">Симферополь</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Опытный сантехник с 16-летним стажем решит любую проблему. 
                Вызов мастера на дом, честные цены, гарантия качества. Работаем круглосуточно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://wa.me/79782973593', '_blank')}
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-800"
                  onClick={() => window.open('https://t.me/+79782973593', '_blank')}
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram
                </Button>
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => alert('Аварийный вызов:\n+7 (978) 297-35-93\n+7 (978) 135-30-23')}
                >
                  <Icon name="Zap" size={20} className="mr-2" />
                  Аварийный 24/7
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/13d718fa-0251-4793-910b-ff293ae8013e.jpg" 
                alt="Профессиональный сантехник за работой" 
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
              Сантехнические услуги в Симферополе
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полный спектр сантехнических работ в Симферополе, районах и по всему Крыму с гарантией качества
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
              Цены на сантехнику в Симферополе
            </h2>
            <p className="text-lg text-gray-600">
              Честные и фиксированные цены на услуги сантехника в Симферополе и районах без скрытых доплат
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
                    <h3 className="font-semibold text-lg mb-2">16 лет на рынке</h3>
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

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши работы в Симферополе
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Примеры выполненных проектов по установке котлов, теплых полов и сантехнических работ в Симферополе и Крыму
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/img/20ca6770-16ee-42d8-b3f0-43be7dcc7a6b.jpg" 
                alt="Установка газового котла" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">Установка газового котла</h3>
                <p className="text-gray-600 text-sm">Профессиональный монтаж котла отопления с подключением всех систем</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/img/d69d8df5-ae1c-4113-9a91-c6fa74b54493.jpg" 
                alt="Монтаж теплого пола" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">Монтаж теплого пола</h3>
                <p className="text-gray-600 text-sm">Укладка водяного теплого пола под ключ с гарантией качества</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/img/5e671d1b-f7ce-4416-986d-f4078a8d325e.jpg" 
                alt="Установка стиральной машины" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">Подключение стиральной машины</h3>
                <p className="text-gray-600 text-sm">Профессиональная установка и подключение к водопроводу и канализации</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-gray-600">
              Ответы на популярные вопросы о сантехнических услугах
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-start">
                  <Icon name="HelpCircle" size={24} className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <span>Как быстро приедет сантехник после вызова?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мастер-сантехник приезжает в течение 1-2 часов после вызова. При аварийных ситуациях (протечки, прорывы труб) 
                  выезжаем максимально быстро - обычно в течение 30-60 минут. Работаем круглосуточно 24/7.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start">
                  <Icon name="HelpCircle" size={24} className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <span>Сколько стоит вызов сантехника в Симферополе?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Вызов мастера стоит 500₽. Диагностика проблемы бесплатная. Стоимость работ зависит от сложности: 
                  устранение засора от 1500₽, замена смесителя от 2500₽, установка котла от 15000₽. 
                  Точную цену называем после осмотра.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start">
                  <Icon name="HelpCircle" size={24} className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <span>Какая гарантия на сантехнические работы?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Даём гарантию 2 года на все выполненные работы. Если возникнут проблемы по нашей вине - 
                  устраним бесплатно. Используем только качественные материалы и проверенное оборудование. 
                  16 лет опыта - гарантия надёжности.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start">
                  <Icon name="HelpCircle" size={24} className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <span>В какие районы Симферополя выезжает сантехник?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Работаем по всему Симферополю и пригородам: центр, Киевский район, Железнодорожный район, 
                  Аэрофлотский, ул. Киевская, ул. Севастопольская и все другие районы. Также выезжаем в 
                  близлежащие населённые пункты Крыма.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start">
                  <Icon name="HelpCircle" size={24} className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <span>Что делать при прорыве трубы или сильной протечке?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  1) Перекройте воду на входе в квартиру/дом. 2) Позвоните нам по номеру +7 (978) 297-35-93 - 
                  это аварийная линия 24/7. 3) Сфотографируйте проблему для быстрой оценки. 
                  Наш аварийный сантехник приедет в течение 30-60 минут и устранит протечку.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start">
                  <Icon name="HelpCircle" size={24} className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <span>Какие способы оплаты принимаете?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <Icon name="Banknote" size={20} className="text-primary mr-3 flex-shrink-0" />
                    <span>Наличные</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Icon name="CreditCard" size={20} className="text-primary mr-3 flex-shrink-0" />
                    <span>Банковская карта</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 pt-3 border-t border-gray-200">
                    Оплата после выполнения работ. Никаких предоплат не требуем.
                  </p>
                </div>
              </CardContent>
            </Card>
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
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
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
                <p className="text-gray-600">Симферополь, Крым</p>
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

          {/* Service Area Map */}
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    География работы
                  </h3>
                  <p className="text-gray-600">
                    Выезжаем по всему Симферополю и пригородам
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Map */}
                  <div className="bg-gray-100 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
                    <iframe 
                      src="https://yandex.ru/map-widget/v1/?um=constructor%3A7c8e3d8f8f8f8f8f8f8f8f8f8f8f8f8f&amp;source=constructor" 
                      width="100%" 
                      height="400" 
                      frameBorder="0"
                      className="w-full h-full"
                      title="Карта Симферополя"
                    ></iframe>
                  </div>

                  {/* Districts List */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Icon name="MapPin" size={24} className="text-primary mr-2" />
                      Районы обслуживания
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-start">
                          <Icon name="Check" size={20} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Центр</span>
                        </div>
                        <div className="flex items-start">
                          <Icon name="Check" size={20} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Киевский</span>
                        </div>
                        <div className="flex items-start">
                          <Icon name="Check" size={20} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Залесский</span>
                        </div>
                        <div className="flex items-start">
                          <Icon name="Check" size={20} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Железнодорожный</span>
                        </div>
                        <div className="flex items-start">
                          <Icon name="Check" size={20} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Марьино</span>
                        </div>
                        <div className="flex items-start">
                          <Icon name="Check" size={20} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Аэропорт</span>
                        </div>
                        <div className="flex items-start">
                          <Icon name="Check" size={20} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Фонтаны</span>
                        </div>
                        <div className="flex items-start">
                          <Icon name="Check" size={20} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Воронцово</span>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <p className="text-sm text-gray-700 mb-3">
                          <strong>Также работаем в пригородах:</strong>
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <div>• Лозовое</div>
                          <div>• Мирное</div>
                          <div>• Каменка</div>
                          <div>• Пионерское</div>
                          <div>• Грэсовский</div>
                          <div>• Аэропорт</div>
                        </div>
                      </div>

                      <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <div className="flex items-start">
                          <Icon name="Truck" size={20} className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-orange-900 text-sm mb-1">
                              Выезд за город
                            </p>
                            <p className="text-sm text-orange-700">
                              Работаем по всему Крыму. Стоимость выезда обсуждается индивидуально.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Более 5000 довольных клиентов за 16 лет работы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Review 1 */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Устанавливали газовый котел под ключ. Работа выполнена на высшем уровне! 
                  Мастера приехали вовремя, все объяснили, сделали аккуратно. 
                  Котел работает отлично уже второй сезон. Рекомендую!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Алексей К.</p>
                    <p className="text-sm text-gray-500">Киевский район</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review 2 */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Вызывали для установки системы капельного полива на участке. 
                  Ребята профессионалы своего дела! Все сделали быстро, качественно. 
                  Полив работает как часы, урожай в этом году просто отличный!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Марина С.</p>
                    <p className="text-sm text-gray-500">Лозовое</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review 3 */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Ночью прорвало трубу - позвонили по аварийному номеру. 
                  Мастер приехал через 40 минут! Быстро устранил протечку, 
                  цена оказалась честной. Спасибо за оперативность!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Дмитрий П.</p>
                    <p className="text-sm text-gray-500">Центр</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review 4 */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Делали теплый пол в доме. Очень довольны результатом! 
                  Работу выполнили за 3 дня, всё чисто и аккуратно. 
                  Пол греет равномерно, расход электричества умеренный. Отличная работа!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Елена В.</p>
                    <p className="text-sm text-gray-500">Марьино</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review 5 */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Замена всей сантехники в квартире. Подошли к делу серьёзно - 
                  посоветовали качественные материалы, сделали всё за 2 дня. 
                  Чисто, профессионально, гарантия 2 года!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Сергей Л.</p>
                    <p className="text-sm text-gray-500">Железнодорожный</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review 6 */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Обратились для прочистки засора. Мастер приехал быстро, 
                  определил проблему и устранил за 30 минут. Цены адекватные, 
                  без навязывания лишних услуг. Буду обращаться ещё!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ольга М.</p>
                    <p className="text-sm text-gray-500">Фонтаны</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">16</div>
                <div className="text-gray-600 text-sm">лет опыта</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-gray-600 text-sm">довольных клиентов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-gray-600 text-sm">рекомендуют нас</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2 года</div>
                <div className="text-gray-600 text-sm">гарантия</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Call Button */}
        <a
          href="tel:+79782973593"
          className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
          aria-label="Позвонить"
        >
          <Icon name="Phone" size={28} />
          <span className="absolute right-full mr-3 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            Позвонить сейчас
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/79782973593"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
          aria-label="Написать в WhatsApp"
        >
          <Icon name="MessageCircle" size={28} />
          <span className="absolute right-full mr-3 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            Написать в WhatsApp
          </span>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Wrench" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">Сантехник Симферополь</h3>
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
                <li>Установка стиральных машин</li>
                <li>Аварийная сантехника</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (978) 297-35-93</p>
                <p>+7 (978) 135-30-23</p>
                <div className="flex gap-3 mt-3">
                  <Button 
                    onClick={() => window.open('https://t.me/+79782973593', '_blank')} 
                    size="sm" 
                    variant="outline"
                    className="border-gray-600 text-gray-400 hover:bg-gray-800"
                  >
                    <Icon name="Send" size={16} className="mr-2" />
                    Telegram
                  </Button>
                  <Button 
                    onClick={() => window.open('https://wa.me/79782973593', '_blank')} 
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    WhatsApp
                  </Button>
                </div>
                <p className="mt-2">info@santekhmaster.ru</p>
                <p>Симферополь, районы и Крым</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Сантехник Симферополь. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index