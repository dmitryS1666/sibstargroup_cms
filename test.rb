array_h = [
  {"id"=>1, "name"=>"btn_mail", "title"=>"Написать нам", "language"=>"ru", "created_at"=>"2023-11-12T10:01:11.466Z", "updated_at"=>"2023-11-12T10:01:11.466Z"},
  {"id"=>4, "name"=>"btn_order", "title"=>"Оставить заявку", "language"=>"ru", "created_at"=>"2023-11-12T10:01:11.477Z", "updated_at"=>"2023-11-12T10:01:11.477Z"}, {"id"=>7, "name"=>"btn_menu", "title"=>"МЕНЮ", "language"=>"ru", "created_at"=>"2023-11-12T10:01:11.487Z", "updated_at"=>"2023-11-12T10:01:11.487Z"}, {"id"=>10, "name"=>"btn_menu_close", "title"=>"ЗАКРЫТЬ", "language"=>"ru", "created_at"=>"2023-11-12T10:01:11.504Z", "updated_at"=>"2023-11-12T10:01:11.504Z"},
  {"id"=>13, "name"=>"btn_command", "title"=>"Наша команда", "language"=>"ru", "created_at"=>"2023-11-12T10:01:11.515Z", "updated_at"=>"2023-11-12T10:01:11.515Z"},
  {"id"=>16, "name"=>"btn_news", "title"=>"Все новости", "language"=>"ru", "created_at"=>"2023-11-12T10:01:11.526Z", "updated_at"=>"2023-11-12T10:01:11.526Z"}
]

puts array_h
pp array_h[0].slice('name', 'title')