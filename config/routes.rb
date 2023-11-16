Rails.application.routes.draw do
  scope "(:locale)", locale: /zh|en|ru/ do
    root "pages#home"
    resources :news

    resources :feedbacks, only: [:new, :create]
    resources :orders, only: [:new, :create]
  end

  mount Trestle::Engine => '/admin', as: 'trestle'
end
