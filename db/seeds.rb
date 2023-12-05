User.destroy_all
User.create!(email: "admin@example.com", password: "password", first_name: "Admin", last_name: "User")

CookieElement.destroy_all
CookieElement.create!(
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
    { name: 'supply_basic', title: 'Базис доставки', language: 'ru' },
    { name: 'supply_basic', title: 'Delivery bases', language: 'en' },
    { name: 'supply_basic', title: '供货基础', language: 'zh' },
    { name: 'news', title: 'Новости', language: 'ru' },
    { name: 'news', title: 'News', language: 'en' },
    { name: 'news', title: '消息', language: 'zh' },

    { name: 'write_us', title: 'Напишите нам', language: 'ru' },
    { name: 'write_us', title: 'Write to us', language: 'en' },
    { name: 'write_us', title: '给我们写信', language: 'zh' },
    { name: 'you_name', title: 'Ваше имя', language: 'ru' },
    { name: 'you_name', title: 'Your name', language: 'en' },
    { name: 'you_name', title: '您的姓名', language: 'zh' },
    { name: 'you_name_hint', title: 'Как вас зовут?', language: 'ru' },
    { name: 'you_name_hint', title: 'What is your name?', language: 'en' },
    { name: 'you_name_hint', title: '您叫什么名字？', language: 'zh' },
    { name: 'email', title: 'E-mail для обратной связи', language: 'ru' },
    { name: 'email', title: 'Email for feedback', language: 'en' },
    { name: 'email', title: 'E-mail', language: 'zh' },
    { name: 'email_hint', title: 'Почта', language: 'ru' },
    { name: 'email_hint', title: 'Email', language: 'en' },
    { name: 'email_hint', title: 'E-mail', language: 'zh' },
    { name: 'phone', title: 'Ваш контактный телефон', language: 'ru' },
    { name: 'phone', title: 'Your contact phone number', language: 'en' },
    { name: 'phone', title: '您的聯絡電話', language: 'zh' },
    { name: 'phone_hint', title: '+7 999 999 99 99', language: 'ru' },
    { name: 'phone_hint', title: '+7 999 999 99 99', language: 'en' },
    { name: 'phone_hint', title: '+7 999 999 99 99', language: 'zh' },
    { name: 'org', title: 'Наименование организации', language: 'ru' },
    { name: 'org', title: 'Name of company', language: 'en' },
    { name: 'org', title: '公司名稱', language: 'zh' },
    { name: 'dream', title: 'Желаемая цена (с указанием валюты за тонну)', language: 'ru' },
    { name: 'dream', title: 'Desired price (indicating currency per ton)', language: 'en' },
    { name: 'dream', title: '期望價格（表示貨幣每噸）', language: 'zh' },
    { name: 'org_hint', title: 'Название вашей организации', language: 'ru' },
    { name: 'org_hint', title: 'Name of your organization', language: 'en' },
    { name: 'org_hint', title: '您的組織名稱', language: 'zh' },
    { name: 'info', title: 'Дополнительная информация', language: 'ru' },
    { name: 'info', title: 'Additional Information', language: 'en' },
    { name: 'info', title: '更多信息', language: 'zh' },
    { name: 'info_hint', title: 'Ваше обращение', language: 'ru' },
    { name: 'info_hint', title: 'Your message', language: 'en' },
    { name: 'info_hint', title: '您的申请', language: 'zh' },
    { name: 'required', title: 'Это поле обязательно для заполнения', language: 'ru' },
    { name: 'required', title: 'This field is required', language: 'en' },
    { name: 'required', title: '此欄位是必需的', language: 'zh' },
    { name: 'supply', title: 'Поставка', language: 'ru' },
    { name: 'supply', title: 'Supply', language: 'en' },
    { name: 'supply', title: '供應', language: 'zh' },
    { name: 'contact_info', title: 'Контактная информация', language: 'ru' },
    { name: 'contact_info', title: 'Contact Information', language: 'en' },
    { name: 'contact_info', title: '聯絡資訊', language: 'zh' },
    { name: 'success', title: 'Успешно отправлено!', language: 'ru' },
    { name: 'success', title: 'Successfully sent!', language: 'en' },
    { name: 'success', title: '發送成功！', language: 'zh' },
    { name: 'success_desc', title: 'Ваше сообщение было доставлено, в скоре мы свяжемся с Вами.', language: 'ru' },
    { name: 'success_desc', title: 'Your message has been delivered, we will contact you shortly.', language: 'en' },
    { name: 'success_desc', title: '您的留言已送達，我們將盡快與您聯絡。', language: 'zh' },
    { name: 'copy', title: "Все права защищены\n© 2012-2023 SIBSTAR GROUP", language: 'ru' },
    { name: 'copy', title: "All rights reserved\n© 2012-2023 SIBSTAR GROUP", language: 'en' },
    { name: 'copy', title: "版权所有\n© 2012-2023 SIBSTAR GROUP", language: 'zh' },
    { name: 'policy', title: 'Политика конфиденциальности', language: 'ru' },
    { name: 'policy', title: 'Privacy Policy', language: 'en' },
    { name: 'policy', title: '隐私政策', language: 'zh' },
    { name: 'made', title: 'Сделано в', language: 'ru' },
    { name: 'made', title: 'Made by', language: 'en' },
    { name: 'made', title: '在完成', language: 'zh' },
    { name: 'coal_count_el', title: 'тонн', language: 'ru' },
    { name: 'coal_count_el', title: 'tons', language: 'en' },
    { name: 'coal_count_el', title: '噸', language: 'zh' },

    { name: 'sales_desc', title: 'Продажа нефтепродуктов', language: 'ru' },
    { name: 'sales_desc', title: 'Sale of petroleum products', language: 'en' },
    { name: 'sales_desc', title: '石油产品销售', language: 'zh' },
    { name: 'sales_title', title: 'Надежность', language: 'ru' },
    { name: 'sales_title', title: 'Reliability', language: 'en' },
    { name: 'sales_title', title: '可靠性', language: 'zh' },
    { name: 'sales_title_d', title: "Группа компаний «СИБСТАР» поставляет энергетические ресурсы по всему миру.\nБлагодаря нашим надежным партнерским отношениям и разветвленной логистической сети мы можем гарантировать\nсвоевременную и безопасную доставку нашей продукции, куда бы вы ее ни заказали.", language: 'ru' },
    { name: 'sales_title_d', title: 'SIBSTAR Group supplies energy resources all over the world. Thanks to our reliable partnerships and extensive logistics network, we guarantee on-time and safe delivery of our products anywhere in the world.', language: 'en' },
    { name: 'sales_title_d', title: 'SIBSTAR集团向世界各地供应能源煤炭。由于与合伙单位建立的可靠关系和发达物流网络，我集团保证及时安全送货至任何地方。', language: 'zh' },

    { name: 'about_desc', title: "За все время своей деятельности мы поставили более 1 000 000 тонн угля.", language: 'ru' },
    { name: 'about_desc', title: 'Over the entire period of our activity, we have supplied more than 1 000 000 tons of coal.', language: 'en' },
    { name: 'about_desc', title: '集团建立以来总计供应了百万吨煤炭。', language: 'zh' },
    { name: 'mission', title: "Наша миссия", language: 'ru' },
    { name: 'mission', title: 'Our mission', language: 'en' },
    { name: 'mission', title: '我们的使命', language: 'zh' },

    { name: 'quality', title: "Качественно", language: 'ru' },
    { name: 'quality', title: 'Quality', language: 'en' },
    { name: 'quality', title: '高质量的产品', language: 'zh' },

    { name: 'fast', title: "Оперативно", language: 'ru' },
    { name: 'fast', title: 'Fast', language: 'en' },
    { name: 'fast', title: '高质量的产品', language: 'zh' },

    { name: 'in_touch', title: "Всегда на связи", language: 'ru' },
    { name: 'in_touch', title: 'Always in touch', language: 'en' },
    { name: 'in_touch', title: '随时保持联系', language: 'zh' },

    { name: 'advantages', title: "Преимущества", language: 'ru' },
    { name: 'advantages', title: 'Advantages', language: 'en' },
    { name: 'advantages', title: '优势', language: 'zh' },

    { name: 'command_title', title: "Команда SibstarGroup", language: 'ru' },
    { name: 'command_title', title: 'SibstarGroup team', language: 'en' },
    { name: 'command_title', title: 'SibstarGroup团队', language: 'zh' },

    { name: 'advantages_desc', title: "Благодаря выгодному расположению и совершенной логистики с российских угольных\n разрезов на Кузбассе, в Сибири и на Дальнем Востоке, мы обеспечиваем удобный доступ к международным рынкам.\n Отгрузки энергоносителей осуществляются в адрес производственных гигантов. Наши ключевые партнеры — крупные промышленные предприятия Китая, Индии и Турции.", language: 'ru' },
    { name: 'advantages_desc', title: "Thanks to the advantageous location and perfect logistics from Russian coal mines in Kuzbass, Siberia and the Far East, we provide convenient access to international markets.\n Energy shipments are carried out to the largest manufacturing giants. Our key partners are large industrial enterprises of China, India and Türkiye.", language: 'en' },
    { name: 'advantages_desc', title: "由于俄罗斯库兹巴斯、西伯利亚、远东地区煤矿的有利位置和完善物流，我集团提供进入中国市场和国际市场的便利通道。\n SIBSTAR集团为东南亚的大型制造公司提供能源煤炭。集团的主要合作伙伴是中国、印度和土耳其的大型工业企业。", language: 'zh' },

    { name: 'about_text', title: "Основным направлением деятельности группы компаний «СИБСТАР» является поставка\n высококачественного каменного и коксующегося угля с угледобывающих предприятий Российской Федерации.", language: 'ru' },
    { name: 'about_text', title: 'SIBSTAR Group offers a wide range of high-quality energy and metallurgical products based in Russian Federation.', language: 'en' },
    { name: 'about_text', title: 'SIBSTAR集团主要业务是供应来自俄罗斯的优质石煤和焦煤。', language: 'zh' },

    { name: 'mission_desc', title: "Мы целенаправлены на поддержку мировой промышленности путем обеспечения\n стабильных поставок высококачественной продукции. Стремимся к долгосрочным и взаимовыгодным отношениям с\n нашими клиентами и партнерами, предоставляя наилучший сервис и оптимальные решения.", language: 'ru' },
    { name: 'mission_desc', title: 'We are focused on supporting the global industry by ensuring stable supplies of high-quality products. We strive for long-term and mutually beneficial relationships with our clients and partners, providing the best service and optimal solutions.', language: 'en' },
    { name: 'mission_desc', title: '我们致力于通过确保稳定供应高质量产品来支持全球工业。我们追求与客户和合作伙伴建立长期而互惠互利的关系，提供最佳服务和最优解决方案。', language: 'zh' }
  ]
)

TxtButton.destroy_all
TxtButton.create!(
  [
    { name: 'mail', title: 'Написать нам', language: 'ru' },
    { name: 'mail', title: 'Write to us', language: 'en' },
    { name: 'mail', title: '写信给我们', language: 'zh' },
    { name: 'order', title: 'Оставить заявку', language: 'ru' },
    { name: 'order', title: 'Submit your application', language: 'en' },
    { name: 'order', title: '留下申请', language: 'zh' },
    { name: 'menu', title: 'МЕНЮ', language: 'ru' },
    { name: 'menu', title: 'MENU', language: 'en' },
    { name: 'menu', title: '選單', language: 'zh' },
    { name: 'menu_close', title: 'ЗАКРЫТЬ', language: 'ru' },
    { name: 'menu_close', title: 'CLOSE', language: 'en' },
    { name: 'menu_close', title: '关闭', language: 'zh' },
    { name: 'command', title: 'Наша команда', language: 'ru' },
    { name: 'command', title: 'Our team', language: 'en' },
    { name: 'command', title: '我们的团队', language: 'zh' },
    { name: 'news', title: 'Все новости', language: 'ru' },
    { name: 'news', title: 'All news', language: 'en' },
    { name: 'news', title: '全部新闻', language: 'zh' },
    { name: 'read', title: 'Читать далее', language: 'ru' },
    { name: 'read', title: 'Read more', language: 'en' },
    { name: 'read', title: '阅读更多信息', language: 'zh' },
    { name: 'back', title: 'Назад', language: 'ru' },
    { name: 'back', title: 'Back', language: 'en' },
    { name: 'back', title: '向后', language: 'zh' },
    { name: 'next', title: 'Далее', language: 'ru' },
    { name: 'next', title: 'Next', language: 'en' },
    { name: 'next', title: '往下', language: 'zh' },

    { name: 'coal_select', title: 'Выберите уголь', language: 'ru' },
    { name: 'coal_select', title: 'Next', language: 'en' },
    { name: 'coal_select', title: '往下', language: 'zh' },

    { name: 'coal_type', title: 'Марка угля', language: 'ru' },
    { name: 'coal_type', title: 'Next', language: 'en' },
    { name: 'coal_type', title: '往下', language: 'zh' },

    { name: 'delivery_direction', title: 'Направление поставки', language: 'ru' },
    { name: 'delivery_direction', title: 'Next', language: 'en' },
    { name: 'delivery_direction', title: '往下', language: 'zh' },

    { name: 'china', title: 'Китай', language: 'ru' },
    { name: 'china', title: 'China', language: 'en' },
    { name: 'china', title: '往下', language: 'zh' },

    { name: 'turkey', title: 'Турция', language: 'ru' },
    { name: 'turkey', title: 'Turkey', language: 'en' },
    { name: 'turkey', title: '往下', language: 'zh' },

    { name: 'station', title: 'Станция назначения', language: 'ru' },
    { name: 'station', title: 'Destination station', language: 'en' },
    { name: 'station', title: '目的地站', language: 'zh' },

    { name: 'order_count', title: 'Количество тонн (кратное 70 тоннам = 1 вагон)', language: 'ru' },
    { name: 'order_count', title: 'Number of tons (multiple of 70 tons = 1 wagon)', language: 'en' },
    { name: 'order_count', title: '噸數（70噸的倍數=1車皮）', language: 'zh' },
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
    { name: 'sale_petroleum', title: 'Продажа нефтепродуктов', url: '#', language: 'ru' },
    { name: 'sale_petroleum', title: 'PETROLEUM PRODUCTS', url: '#', language: 'en' },
    { name: 'sale_petroleum', title: '石油产品销售', url: '#', language: 'zh' },
    { name: 'agricultural', title: 'Продажа сельхозпродукции', url: '#', language: 'ru' },
    { name: 'agricultural', title: 'AGRICULTURAL PRODUCTS', url: '#', language: 'en' },
    { name: 'agricultural', title: '农产品销售', url: '#', language: 'zh' },
    { name: 'coal_online', title: 'Продажа угля', url: '#', language: 'ru' },
    { name: 'coal_online', title: 'PURCHASE ONLINE', url: '#', language: 'en' },
    { name: 'coal_online', title: '煤炭销售', url: '#', language: 'zh' },
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
    { name: 'privacy_policy', text: '<div class="h1 policy__h1">Политика конфиденциальности</div><div class="h4">Сбор и использование личной информации</div><p>Мы можем собирать от вас определенную личную информацию, когда вы подписываетесь на наши услуги или взаимодействуете с нашим веб-сайтом. Эта информация может включать ваше имя, адрес электронной почты, контактные данные и любую другую информацию, которую вы добровольно предоставляете. Мы используем эту информацию для предоставления запрошенных услуг, связи с вами и улучшения нашего веб-сайта и услуг.</p><div class="h4">Файлы cookie и технологии отслеживания</div><p>Мы используем файлы cookie и аналогичные технологии отслеживания, чтобы улучшить ваш опыт просмотра и собрать информацию о том, как вы используете наш веб-сайт. Сюда входит информация о вашем устройстве, типе браузера, IP-адресе и особенностях использования веб-сайта. Файлы cookie помогают нам персонализировать ваш опыт, запомнить ваши предпочтения и анализировать трафик веб-сайта в статистических целях.</p><div class="h4">Раскрытие информации третьим лицам:</div><p>Мы можем передавать вашу личную информацию доверенным сторонним поставщикам услуг, которые помогают нам в работе нашего веб-сайта, ведении нашего бизнеса или обслуживании вас. Эти третьи стороны по контракту обязаны сохранять конфиденциальность вашей информации и использовать ее только для целей, указанных нами. Мы также можем раскрыть вашу информацию, если этого требует закон или для защиты наших прав, собственности или безопасности.</p><div class="h4">Безопасность:</div><p>Мы принимаем разумные меры для защиты вашей личной информации от несанкционированного доступа, раскрытия, изменения или уничтожения. Однако обратите внимание, что ни одна передача данных через Интернет или способ хранения не является на 100% безопасным. Хотя мы стремимся защитить вашу информацию, мы не можем гарантировать абсолютную безопасность.</p><div class="h4">Маркетинговые коммуникации:</div><p>Зарегистрировавшись, вы соглашаетесь получать от нас маркетинговые сообщения по электронной почте или по другим каналам. Эти сообщения могут включать рекламные предложения, обновления, информационные бюллетени или информацию о наших продуктах и услугах. Вы можете отказаться от подписки на эти сообщения в любое время, следуя инструкциям, приведенным в электронном письме, или связавшись с нами напрямую.</p><div class="h4">Хранение данных:</div><p>Мы будем хранить вашу личную информацию столько времени, сколько необходимо для достижения целей, изложенных в настоящей Политике конфиденциальности, если только более длительный период хранения не требуется или не разрешен законом.</p><div class="h4">Ваши права:</div><p>Вы имеете право на доступ, обновление, исправление или удаление вашей личной информации, хранящейся у нас. Если вы хотите воспользоваться каким-либо из этих прав или у вас есть какие-либо вопросы или опасения относительно вашей конфиденциальности, свяжитесь с нами, используя информацию, представленную ниже.</p><div class="h4">Изменения в Политике конфиденциальности:</div><p>Мы оставляем за собой право изменять настоящую Политику конфиденциальности в любое время. Любые обновления и изменения будут публиковаться на нашем веб-сайте, и пересмотренная политика вступит в силу сразу после публикации.Если вы не согласны с настоящей Политикой конфиденциальности, пожалуйста, воздержитесь от использования нашего веб-сайта или предоставления нам вашей личной информации.По любым вопросам или сомнениям относительно нашей Политики конфиденциальности, пожалуйста, свяжитесь с нами по адресу sibstargroup@gmail.com.</p>', language: 'ru' },
    { name: 'privacy_policy', text: '<div class="h1 policy__h1">Privacy Policy</div><div class="h4">Collection and use of personal information</div><p>we collect information that is sent to us automatically by your web browser when you access our websites by help of a cookie.</p><div class="h4">Files and cookies</div><p>Subject to your web browser’s settings, we collect information that is sent to us automatically by your web browser when you access our websites by help of a cookie. This information typically includes the IP address currently assigned to your computer and the type of operating system and browser installed.</p><div class="h4">Disclosure of information to third parties:</div><p>We may share your personal information</p><div class="h4">Security:</div><p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration or destruction. However, please note that no data transmission over the Internet or storage method is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.</p><div class="h4">Marketing communications:</div><p>By registering, you agree to receive marketing communications from us via email or other channels. These communications may include promotional offers, updates, newsletters, or information about our products and services. You can unsubscribe from these communications at any time by following the instructions provided in the email or by contacting us directly.</p><div class="h4">Data storage:</div><p>We will retain your personal information as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p><div class="h4">Your rights:</div><p>You have the right to access, update, correct or delete your personal information stored by us. If you would like to use any of these rights or have any questions or concerns about your privacy, please contact us using the information provided below.</p><div class="h4">Changes to the Privacy Policy:</div><p>We reserve the right to change this Privacy Policy at any time. Any updates and changes will be posted on our website and the revised policy will take effect immediately after publication.</p>', language: 'en' },
    { name: 'privacy_policy', text: '<div class="h1 policy__h1">隐私政策</div><div class="h4">个人信息收集：</div><p>我们可能会收集您的某些个人信息。这些信息可能包括您的姓名、电子邮件地址和联系方式。我们使用这些信息来提供您所要求的服务。</p><div class="h4">文件和 cookies：</div><p>这种传输是通过 cookie 进行的。这些信息通常包括当前分配给您电脑的 IP 地址、操作系统类型和使用的网络浏览器。Cookie 可以帮助我们个性化您的体验，记住您的偏好</p><div class="h4">向第三方披露信息：</div><p>我们可能会与协助我们运营网站、开展业务或为您提供服务的值得信赖的第三方服务提供商共享您的个人信息。 这些第三方有合同义务对您的信息保密，并仅将其用于我们指定的目的。 如果法律要求或为了保护我们的权利、财产或安全，我们也可能会披露您的信息。</p><div class="h4">安全：</div><p>我们采取合理措施保护您的个人信息免遭未经授权的访问、披露、更改或破坏。 但请注意，互联网上的数据传输或存储方法都不是 100% 安全的。 虽然我们努力保护您的信息，但我们不能保证其绝对安全。</p><div class="h4">产品和服务的信息：</div><p>通过注册，您同意通过电子邮件或其他渠道接收我们的营销信息。这些信息可能包括促销优惠、更新、通讯或有关我们产品和服务的信息。您可以按照电子邮件中提供的说明或直接联系我们，随时取消订阅这些信息。</p><div class="h4">数据储存：</div><p>我们将在实现本隐私政策中概述的目的所需的时间内保留您的个人信息，除非法律要求或允许更长的保留期限。</p><div class="h4">您的权力：</div><p>您有权更新、更正或删除我们存储的您的个人信息。 如果您想行使任何这些权利或对您的隐私有任何疑问或疑虑，请使用下面提供的信息与我们联系。</p><div class="h4">隐私政策的变更：</div><p>我们保留随时更改本隐私政策的权利。 任何更新或更改将发布在我们的网站上，修订后的政策将在发布后立即生效。如果您不同意本隐私政策，请不要使用我们的网站或向我们提供您的个人信息。如有任何问题或疑虑有关我们的隐私政策，请通过 sales@sibtransgroup.com 与我们联系</p>', language: 'zh' }
  ]
)

Config.destroy_all
Config.create!(
  [
    { name: 'slider_timer', value: 5 },
    { name: 'coal_count', value: 1000000 }
  ]
)

News.destroy_all
News.create!(
  [
    {
      title: 'Участие компании «Сибстартрейд» в международной угольной выставке China coal and mining expo 2023 в Пекине',
      content: "Группа компаний «Сибстар» принимает участие в международной угольной выставке China coal and mining expo 2023, которая проходит с 25 по 28 октября 2023 года в Пекине. Среди участников – крупные экспортёры угля, логистические и трейдинговые компании со всего мира.\nКомпания впервые принимает участие в мероприятии такого масштаба. Стремление динамически развиваться, расширяя географию бизнеса и категории сырьевых товаров, руководствуясь принципами ведения ответственного бизнеса позволяет компании встать в один ряд с мировыми мэйджорами.",
      language: 'ru'
    },
    {
      title: 'Participation of the Sibstarttrade company in the international coal exhibition China coal and mining expo 2023 in Beijing',
      content: "The Sibstar group of companies takes part in the international coal exhibition China coal and mining expo 2023, which takes place from October 25 to October 28, 2023 in Beijing. Among the participants are large coal exporters, logistics and trading companies from all over the world. \nThis is the first time the company has taken part in an event of this scale. The desire to develop dynamically, expanding the geography of business and categories of raw materials, guided by the principles of conducting responsible business, allows the company to rank with the world's majors.",
      language: 'en'
    },
    {
      title: 'Sibstar 集团参加在北京举办的 China coal and mining expo 2023',
      content: "Sibstar 集团将参加于 2023 年 10 月 25 日至 28 日在北京举行的 China coal and mining expo 2023。参展商包括来自世界各地的主要煤炭出口商、物流和贸易公司。\n这是该公司首次参加如此大规模的活动。在负责任的经营原则指导下，公司努力实现蓬勃发展，扩大业务地域和商品种类，从而跻身全球大型企业行列。",
      language: 'zh'
    },

    {
      title: 'Открытие филиала в г. Тунцзян',
      content: "В 2023 году группа компаний Сибстартрейд открыла свое третье подразделение в г.Тунцзян, Китай.\nОсновным видом деятельности подразделения является операционная деятельность по сопровождению сделок, логистике и продвижению бренда компании «Сибстартрейд» на внутрикитайском рынке.",
      language: 'ru'
    },
    {
      title: 'Opening of a branch in Tongjiang',
      content: "In 2023, the Sibstarttrade group of companies opened its third division in Tongjiang, China.\nThe main activity of the division is operational activities to support transactions, logistics and promote the Sibstarttrade brand in the domestic Chinese market.",
      language: 'en'
    },
    {
      title: '在通江开设分公司',
      content: "2023 年，Sibstartrade 集团在中国通江开设了第三家分公司。\n该分部的主要活动是在中国国内市场提供交易支持、物流和推广 Sibstartrade 品牌。",
      language: 'zh'
    },

    {
      title: 'Открытие филиала в Гонконге',
      content: "В 2022 году Группа компаний «Сибстартрейд» открыла свое второе подразделение в Гонконге.\nОсновным видом деятельности подразделения является оказание услуг по привлечению клиентов из числа стран Юго-Восточной Азии, заинтересованных в стабильных поставках высококачественного угля из России.",
      language: 'ru'
    },
    {
      title: 'Opening a branch in Hong Kong',
      content: "In 2022, the Sibstarttrade Group of Companies opened its second division in Hong Kong.\nThe main activity of the division is to provide services to attract clients from Southeast Asian countries interested in stable supplies of high-quality coal from Russia.",
      language: 'en'
    },
    {
      title: '在香港开设分公司',
      content: "2022 年，Sibstartrade 集团在香港开设了第二家分公司。\n该分部的主要活动是提供服务，吸引对稳定供应俄罗斯优质煤炭感兴趣的东南亚客户。",
      language: 'zh'
    }
  ]
)

Slider.destroy_all
Slider.create!(
  [
    { text: 'Мы расширяем не только географию сотрудничества, но и структуру поставляемой продукции.', base_image_url: '/assets/about-01.jpg', language: 'ru' },
    { text: 'Sibstar group — your reliable partner for the supply of thermal coal since 2019.', base_image_url: '/assets/about-01.jpg', language: 'en' },
    { text: '"SIBSTAR 集团 "是您可靠的伙伴，从 2019 年起为您供应动力煤。', base_image_url: '/assets/about-01.jpg', language: 'zh' },
    { text: 'Отгрузки энергоносителей осуществляются в адрес производственных гигантов Юго-восточной Азии и Турции. Наши ключевые партнеры — крупные промышленные предприятия Китая и Турции.', base_image_url: '/assets/about-02.jpg', language: 'ru' },
    { text: 'Energy shipments are carried out to the largest manufacturing giants. Our key partners are large industrial enterprises of China and Turkey', base_image_url: '/assets/about-02.jpg', language: 'en' },
    { text: 'SIBSTAR集团为东南亚的大型制造公司提供能源煤炭。集团的主要合作伙伴是中国、印度和土耳其的大型工业企业。', base_image_url: '/assets/about-02.jpg', language: 'zh' },
    { text: '«СИБСТАР» — ваш надежный партнер для энергетического угля с 2019 года.', base_image_url: '/assets/about-03.jpg', language: 'ru' },
    { text: 'We expand the geography of cooperation, as well as the structure of supplied products.', base_image_url: '/assets/about-03.jpg', language: 'en' },
    { text: 'SIBSTAR集团在地理位置、能源品种方面蓬勃发展。', base_image_url: '/assets/about-03.jpg', language: 'zh' }
  ]
)

SliderSale.destroy_all
SliderSale.create!(
  [
    { text: '«СИБСТАР» — динамично развивающаяся компания. Мы расширяем не только географию сотрудничества, но и структуру поставляемой продукции.', base_image_url: '/assets/sales/image-01.jpg', language: 'ru' },
    { text: '"SIBSTAR" is a dynamically developing company. We expand the geography of cooperation, as well as the structure of supplied products.', base_image_url: '/assets/sales/image-01.jpg', language: 'en' },
    { text: 'SIBSTAR集团在地理位置、能源品种方面蓬勃发展。', base_image_url: '/assets/sales/image-01.jpg', language: 'zh' },

    { text: 'Наша цель - обеспечить стабильные поставки для поддержания ваших производственных процессов в рабочем состоянии.', base_image_url: '/assets/sales/image-02.jpg', language: 'ru' },
    { text: 'Our goal is to provide stable supplies to keep your production processes running.', base_image_url: '/assets/sales/image-02.jpg', language: 'en' },
    { text: '我集团宗旨为保证稳定供应，以便支持贵方生产链的正常运行。', base_image_url: '/assets/sales/image-02.jpg', language: 'zh' },

    { text: 'Мы активно развиваем такое направление, как поставки нефтепродуктов.', base_image_url: '/assets/sales/image-03.jpg', language: 'ru' },
    { text: 'We are in a process of development petroleum products supply.', base_image_url: '/assets/sales/image-03.jpg', language: 'en' },
    { text: '我集团宗旨为保证稳定供应，以便支持贵方生产链的正常运行。', base_image_url: '/assets/sales/image-03.jpg', language: 'zh' }
  ]
)

SupplyBasis.destroy_all
SupplyBasis.create!(
  [
    { name: 'khakasia', title: 'Хакассия', language: 'ru' },
    { name: 'khakasia', title: 'Khakasia', language: 'en' },
    { name: 'khakasia', title: '库兹巴斯', language: 'zh' },
    { name: 'kuzbass', title: 'Кузбасс', language: 'ru' },
    { name: 'kuzbass', title: 'Kuzbass', language: 'en' },
    { name: 'kuzbass', title: '哈卡斯自治州', language: 'zh' },
    { name: 'blagoveshchensk', title: 'Благовещенск', language: 'ru' },
    { name: 'blagoveshchensk', title: 'Blagoveshchensk', language: 'en' },
    { name: 'blagoveshchensk', title: '布拉戈维申斯克', language: 'zh' },
    { name: 'semenovskaya', title: 'Михайло-Семёновская', language: 'ru' },
    { name: 'semenovskaya', title: 'Mikhailo-Semenovskaya', language: 'en' },
    { name: 'semenovskaya', title: '米哈伊洛-谢苗诺夫斯卡娅', language: 'zh' },
    { name: 'khabarovsk', title: 'Хабаровск', language: 'ru' },
    { name: 'khabarovsk', title: 'Khabarovsk', language: 'en' },
    { name: 'khabarovsk', title: '哈巴罗夫斯克', language: 'zh' },
    { name: 'grodekovo', title: 'Гродеково', language: 'ru' },
    { name: 'grodekovo', title: 'Grodekovo', language: 'en' },
    { name: 'grodekovo', title: '格罗杰科沃', language: 'zh' },
    { name: 'kamyshovaya', title: 'Камышовая', language: 'ru' },
    { name: 'kamyshovaya', title: 'Kamyshovaya', language: 'en' },
    { name: 'kamyshovaya', title: '卡梅绍娃亚', language: 'zh' },
    { name: 'river_port', title: 'Речной порт', language: 'ru' },
    { name: 'river_port', title: 'River port', language: 'en' },
    { name: 'river_port', title: '河口港', language: 'zh' }
  ]
)

CoalGrade.destroy_all
CoalGrade.create!(
  [
    { name: "DPK" },
    { name: "DO" },
    { name: "DOMSSH" },
    { name: "LOW VOL PCI" },
    { name: "TOMSSH" }
  ]
)

CoalGradeItem.destroy_all
CoalGradeItem.create!(
  [
    { name: "Ash, dry basis, max, %", value: "10.0", coal_grade_id: CoalGrade.find(1).id },
    { name: "Moisture as received, typical, max %", value: "17.5", coal_grade_id: CoalGrade.find(1).id },
    { name: "Sulphur, dry basis, max, %", value: "0.6", coal_grade_id: CoalGrade.find(1).id },
    { name: "Volatiles, daf, max, %", value: "44.0", coal_grade_id: CoalGrade.find(1).id },
    { name: "Net calorific value as received, min, kcal/kg", value: "5700", coal_grade_id: CoalGrade.find(1).id },
    { name: "Size, mm", value: "50-200", coal_grade_id: CoalGrade.find(1).id },
    { name: "Ash, dry basis, max, %", value: "10.0", coal_grade_id: CoalGrade.find(2).id },
    { name: "Moisture as received, typical, max %", value: "17.5", coal_grade_id: CoalGrade.find(2).id },
    { name: "Sulphur, dry basis, max, %", value: "0.6", coal_grade_id: CoalGrade.find(2).id },
    { name: "Volatiles, daf, max, %", value: "44.0", coal_grade_id: CoalGrade.find(2).id },
    { name: "Net calorific value as received, min, kcal/kg", value: "5600", coal_grade_id: CoalGrade.find(2).id },
    { name: "Size, mm", value: "25-50", coal_grade_id: CoalGrade.find(2).id },
    { name: "Ash, dry basis, max, %", value: "12.0", coal_grade_id: CoalGrade.find(3).id },
    { name: "Moisture as received, typical, max %", value: "17.5", coal_grade_id: CoalGrade.find(3).id },
    { name: "Sulphur, dry basis, max, %", value: "0.6", coal_grade_id: CoalGrade.find(3).id },
    { name: "Volatiles, daf, max, %", value: "44.0", coal_grade_id: CoalGrade.find(3).id },
    { name: "Net calorific value as received, min, kcal/kg", value: "5500", coal_grade_id: CoalGrade.find(3).id },
    { name: "Size, mm", value: "0-50", coal_grade_id: CoalGrade.find(3).id },
    { name: "Ash, dry basis, max, %", value: "12.0", coal_grade_id: CoalGrade.find(4).id },
    { name: "Moisture as received, typical, max %", value: "12.0", coal_grade_id: CoalGrade.find(4).id },
    { name: "Sulphur, dry basis, max, %", value: "0.5", coal_grade_id: CoalGrade.find(4).id },
    { name: "Volatiles, daf, max, %", value: "12.0", coal_grade_id: CoalGrade.find(4).id },
    { name: "Net calorific value as received, min, kcal/kg", value: "6800", coal_grade_id: CoalGrade.find(4).id },
    { name: "Size, mm", value: "0-50", coal_grade_id: CoalGrade.find(4).id },
    { name: "Ash, dry basis, max, %", value: "15.0", coal_grade_id: CoalGrade.find(5).id },
    { name: "Moisture as received, typical, max %", value: "12.0", coal_grade_id: CoalGrade.find(5).id },
    { name: "Sulphur, dry basis, max, %", value: "0.5", coal_grade_id: CoalGrade.find(5).id },
    { name: "Volatiles, daf, max, %", value: "15.0", coal_grade_id: CoalGrade.find(5).id },
    { name: "Net calorific value as received, min, kcal/kg", value: "6200", coal_grade_id: CoalGrade.find(5).id },
    { name: "Size, mm", value: "0-50", coal_grade_id: CoalGrade.find(5).id }
  ]
)

Command.destroy_all
Command.create!(
  [
    { person: 'Ван Лин', desc: 'Директор, Гонконг', base_image_url: 'assets/command-01.jpg', language: 'ru' },
    { person: 'Wang Lin', desc: 'CEO, Hong Kong', base_image_url: 'assets/command-01.jpg', language: 'en' },
    { person: '王健', desc: '公司经理，香港', base_image_url: 'assets/command-01.jpg', language: 'zh' },

    { person: 'Баркалов Дмитрий', desc: 'Директор, Россия', base_image_url: 'assets/command-02.jpg', language: 'ru' },
    { person: 'Dmitry Barkalov', desc: 'Head of coal sales, Russia', base_image_url: 'assets/command-02.jpg', language: 'en' },
    { person: '巴尔卡洛夫·德米特里, 俄罗斯', desc: '公司经理', base_image_url: 'assets/command-02.jpg', language: 'zh' },

    { person: 'Ван Тзян', desc: 'Директор, Китай', base_image_url: 'assets/command-09.jpg', language: 'ru' },
    { person: 'Van Jiang', desc: 'Director, China', base_image_url: 'assets/command-09.jpg', language: 'en' },
    { person: '王江', desc: '公司经理，中国', base_image_url: 'assets/command-09.jpg', language: 'zh' },

    { person: 'Меньшов Александр', desc: 'Руководитель отела продаж, Россия', base_image_url: 'assets/placeholder.png', language: 'ru' },
    { person: 'Aleksandr Menshov', desc: 'Head of sales, Russia', base_image_url: 'assets/placeholder.png', language: 'en' },
    { person: '亚历山大·门舒夫', desc: '销售部经理, 俄罗斯', base_image_url: 'assets/placeholder.png', language: 'zh' },

    { person: 'Зверева Влада', desc: 'Руководитель отдела по сопровождению клиентов', base_image_url: 'assets/command-03.jpg', language: 'ru' },
    { person: 'Vlada Zvereva', desc: 'Head of Customer Support Department', base_image_url: 'assets/command-03.jpg', language: 'en' },
    { person: '兹韦列娃·弗拉达', desc: '客户服务部主任', base_image_url: 'assets/command-03.jpg', language: 'zh' },

    { person: 'Иванов Алексей', desc: 'Руководитель финансового отдела', base_image_url: 'assets/command-04.jpg', language: 'ru' },
    { person: 'Aleksey Ivanov', desc: 'Head of finance Department', base_image_url: 'assets/command-04.jpg', language: 'en' },
    { person: '伊万诺夫·阿列克谢', desc: '财务部主任', base_image_url: 'assets/command-04.jpg', language: 'zh' },

    { person: 'Мухина Галина', desc: 'Заместитель руководителя финансового отдела', base_image_url: 'assets/command-05.jpg', language: 'ru' },
    { person: 'Galina Mukhina', desc: 'Deputy Head of finance Department', base_image_url: 'assets/command-05.jpg', language: 'en' },
    { person: '穆希娜·加林娜', desc: '财务部副主任', base_image_url: 'assets/command-05.jpg', language: 'zh' },

    { person: 'Калёнов Андрей', desc: 'Ведущий Юрисконсульт', base_image_url: 'assets/command-06.jpg', language: 'ru' },
    { person: 'Andrei Kalenov', desc: 'Senior lawyer', base_image_url: 'assets/command-06.jpg', language: 'en' },
    { person: '卡廖诺夫·安德烈', desc: '高级法律咨询家', base_image_url: 'assets/command-06.jpg', language: 'zh' },

    { person: 'Артёменко Винера', desc: 'Руководитель отдела маркетинга и PR', base_image_url: 'assets/command-08.jpg', language: 'ru' },
    { person: 'Vinera Artemenko', desc: 'Head of Marketing and PR Department', base_image_url: 'assets/command-08.jpg', language: 'en' },
    { person: '阿尔乔缅科·维涅拉', desc: '营销和PR部主任', base_image_url: 'assets/command-08.jpg', language: 'zh' }
  ]
)

