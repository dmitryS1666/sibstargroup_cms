Rails.application.routes.draw do
  scope "(:locale)", locale: /zh|en|ru/ do
    root "pages#home"
  end
end
