Rails.application.routes.draw do
  scope "(:locale)", locale: /zh|en|ru/ do
    root "pages#home"
    resources :news
  end

  mount Trestle::Engine => '/admin', as: 'trestle'
end
