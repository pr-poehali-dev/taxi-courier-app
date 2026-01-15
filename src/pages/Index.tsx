import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

type Language = 'ru' | 'kk';
type UserType = 'client' | 'driver';

const translations = {
  ru: {
    taxi: 'Такси',
    courier: 'Курьер',
    from: 'Откуда',
    to: 'Куда',
    orderTaxi: 'Заказать такси',
    orderCourier: 'Заказать курьера',
    currentOrders: 'Текущие заказы',
    orderHistory: 'История заказов',
    earnings: 'Заработок',
    rating: 'Рейтинг',
    profile: 'Профиль',
    support: 'Поддержка',
    faq: 'Вопросы',
    active: 'Активен',
    completed: 'Завершён',
    economy: 'Эконом',
    comfort: 'Комфорт',
    business: 'Бизнес',
    driverMode: 'Режим водителя',
    clientMode: 'Режим клиента',
    today: 'Сегодня',
    week: 'Неделя',
    month: 'Месяц',
    reviews: 'отзывов',
    trips: 'поездок',
    delivery: 'Доставка',
    package: 'Посылка',
    documents: 'Документы',
    food: 'Еда',
  },
  kk: {
    taxi: 'Такси',
    courier: 'Курьер',
    from: 'Қайдан',
    to: 'Қайда',
    orderTaxi: 'Такси шақыру',
    orderCourier: 'Курьер шақыру',
    currentOrders: 'Ағымдағы тапсырыстар',
    orderHistory: 'Тапсырыстар тарихы',
    earnings: 'Табыс',
    rating: 'Рейтинг',
    profile: 'Профиль',
    support: 'Қолдау',
    faq: 'Сұрақтар',
    active: 'Белсенді',
    completed: 'Аяқталды',
    economy: 'Эконом',
    comfort: 'Комфорт',
    business: 'Бизнес',
    driverMode: 'Жүргізуші режимі',
    clientMode: 'Клиент режимі',
    today: 'Бүгін',
    week: 'Апта',
    month: 'Ай',
    reviews: 'пікірлер',
    trips: 'жолдар',
    delivery: 'Жеткізу',
    package: 'Сәлем',
    documents: 'Құжаттар',
    food: 'Тамақ',
  },
};

const mockOrders = [
  { id: 1, from: 'ул. Абая 10', to: 'ул. Сатпаева 25', status: 'active', price: 1200, type: 'taxi' },
  { id: 2, from: 'пр. Достык 45', to: 'ул. Фурманова 87', status: 'active', price: 800, type: 'courier' },
  { id: 3, from: 'ул. Толе Би 15', to: 'ул. Жибек Жолы 50', status: 'completed', price: 1500, type: 'taxi' },
];

const mockDriverStats = {
  rating: 4.8,
  reviews: 342,
  trips: 1250,
  todayEarnings: 15600,
  weekEarnings: 89400,
  monthEarnings: 345000,
};

export default function Index() {
  const [lang, setLang] = useState<Language>('ru');
  const [userType, setUserType] = useState<UserType>('client');
  const [serviceType, setServiceType] = useState<'taxi' | 'courier'>('taxi');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Car" size={24} className="text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">GoTaxi</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLang(lang === 'ru' ? 'kk' : 'ru')}
              className="h-8 px-2"
            >
              {lang.toUpperCase()}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setUserType(userType === 'client' ? 'driver' : 'client')}
            >
              <Icon name={userType === 'client' ? 'User' : 'Car'} size={20} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container max-w-lg mx-auto px-4 py-6">
        {userType === 'client' ? (
          <div className="space-y-6">
            <div className="flex gap-3">
              <Button
                variant={serviceType === 'taxi' ? 'default' : 'outline'}
                className="flex-1 h-24 flex-col gap-2"
                onClick={() => setServiceType('taxi')}
              >
                <Icon name="Car" size={32} />
                <span className="text-base font-medium">{t.taxi}</span>
              </Button>
              
              <Button
                variant={serviceType === 'courier' ? 'default' : 'outline'}
                className="flex-1 h-24 flex-col gap-2"
                onClick={() => setServiceType('courier')}
              >
                <Icon name="Package" size={32} />
                <span className="text-base font-medium">{t.courier}</span>
              </Button>
            </div>

            <Card className="p-5">
              {serviceType === 'taxi' ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0" />
                      <Input placeholder={t.from} className="flex-1" />
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-destructive flex-shrink-0" />
                      <Input placeholder={t.to} className="flex-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[t.economy, t.comfort, t.business].map((category) => (
                      <Button key={category} variant="outline" className="h-auto py-3 flex-col gap-1">
                        <Icon name="Car" size={20} />
                        <span className="text-xs">{category}</span>
                      </Button>
                    ))}
                  </div>

                  <Button className="w-full h-12 text-base" size="lg">
                    {t.orderTaxi}
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0" />
                      <Input placeholder={t.from} className="flex-1" />
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-destructive flex-shrink-0" />
                      <Input placeholder={t.to} className="flex-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: t.package, icon: 'Package' },
                      { label: t.documents, icon: 'FileText' },
                      { label: t.food, icon: 'Utensils' },
                      { label: t.delivery, icon: 'ShoppingBag' },
                    ].map((category) => (
                      <Button key={category.label} variant="outline" className="h-auto py-3 flex-col gap-1">
                        <Icon name={category.icon as any} size={20} />
                        <span className="text-xs">{category.label}</span>
                      </Button>
                    ))}
                  </div>

                  <Button className="w-full h-12 text-base" size="lg">
                    {t.orderCourier}
                  </Button>
                </div>
              )}
            </Card>

            <div className="relative h-64 bg-muted rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="MapPin" size={48} className="text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold">{t.orderHistory}</h2>
              {mockOrders.filter(o => o.status === 'completed').map((order) => (
                <Card key={order.id} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <Icon name={order.type === 'taxi' ? 'Car' : 'Package'} size={16} />
                        <span className="text-sm font-medium">{order.from}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="MapPin" size={16} />
                        <span className="text-sm">{order.to}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{order.price} ₸</div>
                      <Badge variant="secondary" className="mt-1">{t.completed}</Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <Card className="p-5">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 bg-primary">
                  <AvatarFallback className="text-primary-foreground text-xl font-bold">
                    АБ
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <h2 className="text-xl font-bold">Алексей Белов</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="fill-primary text-primary" />
                      <span className="font-semibold">{mockDriverStats.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {mockDriverStats.reviews} {t.reviews}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {mockDriverStats.trips} {t.trips}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-5">
              <h3 className="text-lg font-semibold mb-4">{t.earnings}</h3>
              <Tabs defaultValue="today" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="today">{t.today}</TabsTrigger>
                  <TabsTrigger value="week">{t.week}</TabsTrigger>
                  <TabsTrigger value="month">{t.month}</TabsTrigger>
                </TabsList>
                <TabsContent value="today" className="mt-4">
                  <div className="text-3xl font-bold text-center py-6">
                    {mockDriverStats.todayEarnings.toLocaleString()} ₸
                  </div>
                </TabsContent>
                <TabsContent value="week" className="mt-4">
                  <div className="text-3xl font-bold text-center py-6">
                    {mockDriverStats.weekEarnings.toLocaleString()} ₸
                  </div>
                </TabsContent>
                <TabsContent value="month" className="mt-4">
                  <div className="text-3xl font-bold text-center py-6">
                    {mockDriverStats.monthEarnings.toLocaleString()} ₸
                  </div>
                </TabsContent>
              </Tabs>
            </Card>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold">{t.currentOrders}</h2>
              {mockOrders.filter(o => o.status === 'active').map((order) => (
                <Card key={order.id} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <Icon name={order.type === 'taxi' ? 'Car' : 'Package'} size={16} />
                        <span className="text-sm font-medium">{order.from}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="MapPin" size={16} />
                        <span className="text-sm">{order.to}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{order.price} ₸</div>
                      <Badge className="mt-1 bg-primary">{t.active}</Badge>
                    </div>
                  </div>
                  <Button className="w-full mt-3" size="sm">
                    <Icon name="Navigation" size={16} className="mr-2" />
                    К клиенту
                  </Button>
                </Card>
              ))}
            </div>

            <div className="relative h-64 bg-muted rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="MapPin" size={48} className="text-muted-foreground" />
              </div>
            </div>
          </div>
        )}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="container max-w-lg mx-auto px-4 py-2 flex items-center justify-around">
          {userType === 'client' ? (
            <>
              <Button variant="ghost" className="flex-col h-auto py-2 gap-1">
                <Icon name="Home" size={24} />
                <span className="text-xs">Главная</span>
              </Button>
              <Button variant="ghost" className="flex-col h-auto py-2 gap-1">
                <Icon name="History" size={24} />
                <span className="text-xs">{t.orderHistory}</span>
              </Button>
              <Button variant="ghost" className="flex-col h-auto py-2 gap-1">
                <Icon name="HelpCircle" size={24} />
                <span className="text-xs">{t.support}</span>
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" className="flex-col h-auto py-2 gap-1">
                <Icon name="LayoutDashboard" size={24} />
                <span className="text-xs">Главная</span>
              </Button>
              <Button variant="ghost" className="flex-col h-auto py-2 gap-1">
                <Icon name="DollarSign" size={24} />
                <span className="text-xs">{t.earnings}</span>
              </Button>
              <Button variant="ghost" className="flex-col h-auto py-2 gap-1">
                <Icon name="Star" size={24} />
                <span className="text-xs">{t.rating}</span>
              </Button>
              <Button variant="ghost" className="flex-col h-auto py-2 gap-1">
                <Icon name="User" size={24} />
                <span className="text-xs">{t.profile}</span>
              </Button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
