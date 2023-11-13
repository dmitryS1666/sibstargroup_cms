Cookies.destroy_all
Cookies.create(
  [
    { title: 'На сайте используются', btn: 'хорошо', language: 'ru' },
    { title: 'We use', btn: 'ok', language: 'en' },
    { title: '该网站使用', btn: 'ok', language: 'zh' }
  ]
)

Title.destroy_all
Title.create!(
  [
    { name: 'slogan', title: 'На сайте используются', language: 'ru' },
    { name: 'slogan', title: "Promptly\nProperly\nAlways in touch", language: 'en' },
    { name: 'slogan', title: "高质量的产品\n定时交货\n随时保持联系", language: 'zh' },
    { name: 'coal_supplied', title: 'Поставлено угля', language: 'ru' },
    { name: 'coal_supplied', title: 'Tons of coal delivered', language: 'en' },
    { name: 'coal_supplied', title: '已交付煤炭', language: 'zh' },
    { name: 'about_company', title: 'О компании', language: 'ru' },
    { name: 'about_company', title: 'ABOUT US', language: 'en' },
    { name: 'about_company', title: '关于集团', language: 'zh' },
    { name: 'coal_sales', title: 'Продажа угля', language: 'ru' },
    { name: 'coal_sales', title: 'Thermal coal', language: 'en' },
    { name: 'coal_sales', title: '煤炭销售', language: 'zh' },
    { name: 'supply_basic', title: 'Базис поставки', language: 'ru' },
    { name: 'supply_basic', title: 'Delivery bases', language: 'en' },
    { name: 'supply_basic', title: '供货基础', language: 'zh' },
    { name: 'news', title: 'Новости', language: 'ru' },
    { name: 'news', title: 'News', language: 'en' },
    { name: 'news', title: '消息', language: 'zh' }
  ]
)

Button.destroy_all
Button.create!(
  [
    { name: 'btn_mail', title: 'Написать нам', language: 'ru' },
    { name: 'btn_mail', title: 'Write to us', language: 'en' },
    { name: 'btn_mail', title: '写信给我们', language: 'zh' },
    { name: 'btn_order', title: 'Оставить заявку', language: 'ru' },
    { name: 'btn_order', title: 'Submit your application', language: 'en' },
    { name: 'btn_order', title: '留下申请', language: 'zh' },
    { name: 'btn_menu', title: 'МЕНЮ', language: 'ru' },
    { name: 'btn_menu', title: 'MENU', language: 'en' },
    { name: 'btn_menu', title: '選單', language: 'zh' },
    { name: 'btn_menu_close', title: 'ЗАКРЫТЬ', language: 'ru' },
    { name: 'btn_menu_close', title: 'CLOSE', language: 'en' },
    { name: 'btn_menu_close', title: '关闭', language: 'zh' },
    { name: 'btn_command', title: 'Наша команда', language: 'ru' },
    { name: 'btn_command', title: 'Our team', language: 'en' },
    { name: 'btn_command', title: '我们的团队', language: 'zh' },
    { name: 'btn_news', title: 'Все новости', language: 'ru' },
    { name: 'btn_news', title: 'All news', language: 'en' },
    { name: 'btn_news', title: '全部新闻', language: 'zh' }
  ]
)

Contact.destroy_all
Contact.create!(
  [
    { name: 'gq', title: 'Общие вопросы', person: 'Зверева Влада', address: 'v.zvereva@sibstargroup.com', phone_num: '+7 (495) 151-92-52, доб. 1000', language: 'ru' },
    { name: 'gq', title: 'General questions', person: 'Vlada Zvereva', address: 'v.zvereva@sibstargroup.com', phone_num: '+7 (495) 151-92-52, add. 1000', language: 'en' },
    { name: 'gq', title: '常见问题', person: '兹韦列娃·弗拉达', address: 'v.zvereva@sibstargroup.com', phone_num: '+7 (495) 151-92-52, add. 1000', language: 'zh' },
    { name: 'cooperation', title: 'Сотрудничество', person: 'Баркалов Дмитрий', address: 'sales@sibstargroup.com', phone_num: '+7 (903) 782-12-83', language: 'ru' },
    { name: 'cooperation', title: 'Cooperation', person: 'Dmitry Barkalov', address: 'sales@sibstargroup.com', phone_num: '+7 (903) 782-12-83', language: 'en' },
    { name: 'cooperation', title: '合作', person: '巴尔卡洛夫·德米特里', address: 'sales@sibstargroup.com', phone_num: '+7 (903) 782-12-83', language: 'zh' },
    { name: 'contact', title: 'Контакты', address: 'Российская Федерация г. Москва Пресненская набережная, 12 офис 4401', phone_num: '+7 (495) 151 92 52', language: 'ru' },
    { name: 'contact', title: 'Contacts', address: 'Presnenskaya naberezhnaya, 12 off. 4401 Moscow, Russian Federation', phone_num: '+7 (495) 151 92 52', language: 'en' },
    { name: 'contact', title: '联系', address: '俄罗斯联邦莫斯科市普列斯年斯卡亚沿河街12号4401室', phone_num: '+7 (495) 151 92 52', language: 'zh' },
    { name: 'contact', title: 'Контакты', address: 'Гонконг, блок 917 A, 9/F.,Башня А, Нью Мандарин Плаза, №/14 Дорога Музея науки, Цимшацуй Коулун', phone_num: '+ 150 4950 2031', language: 'ru' },
    { name: 'contact', title: 'Contacts', address: 'Hong Kong Unit 917 A, 9/F., Tower A, New Mandarin Plaza, No/14 Science Museum Road, Tsimshatsui, Kowloon', phone_num: '+ 150 4950 2031', language: 'en' },
    { name: 'contact', title: '联系', address: 'Hong Kong Unit 917 A, 9/F., Tower A, New Mandarin Plaza, No/14 Science Museum Road, Tsimshatsui, Kowloon', phone_num: '+ 150 4950 2031', language: 'zh' },
    { name: 'contact', title: 'Контакты', address: 'Тунган - роуд, западный район, город Тунцзян, город Цзямусы, провинция Хэйлунцзян 000101', phone_num: '+7 (904) 1598111', language: 'ru' },
    { name: 'contact', title: 'Contacts', address: 'Tongjiang Road West District 000101, Tongjiang City, Jiamusi City, Heilongjiang Province', phone_num: '+7 (904) 1598111', language: 'en' },
    { name: 'contact', title: '联系', address: '000101，黑龙江省佳木斯市同江市西区通港路', phone_num: '+7 (904) 1598111', language: 'zh' }
  ]
)

Footer.destroy_all
Footer.create!(
  [
    { name: 'copy', title: "Все права защищены\n© 2012-2023 SIBSTAR GROUP", language: 'ru' },
    { name: 'copy', title: "All rights reserved\n© 2012-2023 SIBSTAR GROUP", language: 'en' },
    { name: 'copy', title: "版权所有\n© 2012-2023 SIBSTAR GROUP", language: 'zh' },
    { name: 'policy', title: 'Политика конфиденциальности', language: 'ru' },
    { name: 'policy', title: 'Privacy Policy', language: 'en' },
    { name: 'policy', title: '隐私政策', language: 'zh' },
    { name: 'made', title: 'Сделано в', language: 'ru' },
    { name: 'made', title: 'Made by', language: 'en' },
    { name: 'made', title: '在完成', language: 'zh' },
    { name: 'slogan', title: 'Качественно. Оперативно. Всегда на связи.', language: 'ru' },
    { name: 'slogan', title: 'Promptly. Properly. Always in touch', language: 'en' },
    { name: 'slogan', title: '高质量的产品。定时交货。随时保持联系。', language: 'zh' }
  ]
)

Navigation.destroy_all
Navigation.create!(
  [
    { name: 'about', title: 'О нас', url: '#about', language: 'ru' },
    { name: 'about', title: 'About Us', url: '#about', language: 'en' },
    { name: 'about', title: '关于我们', url: '#about', language: 'zh' },
    { name: 'sale_petroleum', title: 'Продажа нефтепродуктов', url: '', language: 'ru' },
    { name: 'sale_petroleum', title: 'PETROLEUM PRODUCTS', url: '', language: 'en' },
    { name: 'sale_petroleum', title: '石油产品销售', url: '', language: 'zh' },
    { name: 'agricultural', title: 'Продажа сельхозпродукции', url: '', language: 'ru' },
    { name: 'agricultural', title: 'AGRICULTURAL PRODUCTS', url: '', language: 'en' },
    { name: 'agricultural', title: '农产品销售', url: '', language: 'zh' },
    { name: 'coal_online', title: 'Продажа угля', url: '', language: 'ru' },
    { name: 'coal_online', title: 'PURCHASE ONLINE', url: '', language: 'en' },
    { name: 'coal_online', title: '煤炭销售', url: '', language: 'zh' },
    { name: 'news', title: 'Новости', language: 'ru', url: '#news' },
    { name: 'news', title: 'News', language: 'en', url: '#news' },
    { name: 'news', title: '消息', language: 'zh', url: '#news' },
    { name: 'contact', title: 'Контакты', url: '#contact', language: 'ru' },
    { name: 'contact', title: 'Contacts', url: '#contact', language: 'en' },
    { name: 'contact', title: '联系', url: '#contact', language: 'zh' },
    { name: 'soon', title: 'Скоро', url: '#contact', language: 'ru' },
    { name: 'soon', title: 'Soon', url: '#contact', language: 'en' },
    { name: 'soon', title: '很快', url: '#contact', language: 'zh' }
  ]
)

NavigationPage.destroy_all
NavigationPage.create!(
  [
    { name: 'about', title: 'О компании', language: 'ru', anchor: '#about' },
    { name: 'about', title: 'About us', language: 'en', anchor: '#about' },
    { name: 'about', title: '关于集团', language: 'zh', anchor: '#about' },
    { name: 'coal_sales', title: 'Продажа угля', language: 'ru', anchor: '#coal-sales' },
    { name: 'coal_sales', title: 'Thermal coal', language: 'en', anchor: '#coal-sales' },
    { name: 'coal_sales', title: '煤炭销售', language: 'zh', anchor: '#coal-sales' },
    { name: 'supply_basic', title: 'Базис поставки', language: 'ru', anchor: '#supply-basis' },
    { name: 'supply_basic', title: 'Delivery bases', language: 'en', anchor: '#supply-basis' },
    { name: 'supply_basic', title: '供货基础', language: 'zh', anchor: '#supply-basis' },
    { name: 'news', title: 'Новости', language: 'ru', anchor: '#news' },
    { name: 'news', title: 'News', language: 'en', anchor: '#news' },
    { name: 'news', title: '消息', language: 'zh', anchor: '#news' },
    { name: 'contact', title: 'Контакты', language: 'ru', anchor: '#contact' },
    { name: 'contact', title: 'Contacts', language: 'en', anchor: '#contact' },
    { name: 'contact', title: '联系', language: 'zh', anchor: '#contact' }
  ]
)

General.destroy_all
General.create!(
  [
    { name: 'footer_q', text: 'Готовы начать поставку угля с нами? Оставьте вашу заявку прямо сейчас и получите надежного партнера для вашего проекта!', language: 'ru' },
    { name: 'footer_q', text: 'Are you ready to work with us? Send a request', language: 'en' },
    { name: 'footer_q', text: '准备好与我们合作吗？留下申请，您找到了最可靠的合作伙伴', language: 'zh' },
    { name: 'coal_desc', text: 'Группа компаний «СИБСТАР» является крупным поставщиком каменного угля марок «Д», «Г» и «T», который широко используется в качестве топлива для бытовых нужд, незаменим для работы литейных цехов и используется для выработки электроэнергии на тепловых электростанциях.', language: 'ru' },
    { name: 'coal_desc', text: 'SIBSTAR Group is a major supplier of «D», «G», and «T» grades of hard coal. It is widely used as fuel for household needs, completely necessary for foundries operation and is used by thermal power plants for electricity generation.', language: 'en' },
    { name: 'coal_desc', text: 'SIBSTAR集团是大型D、G、T煤炭供应商，这些煤炭产品作为燃料广泛用于日常需求、铸造车间和热电站。', language: 'zh' },
  ]
)
