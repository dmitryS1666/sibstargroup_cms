Rails.application.routes.draw do
  devise_for :users

  scope "(:locale)", locale: /zh|en|ru/ do
    root "pages#home"
  end
end
