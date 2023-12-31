Rails.application.routes.draw do
  scope "(:locale)", locale: /zh|en|ru/ do
    root "pages#home"

    resources :news
    resources :feedbacks, only: [:new, :create]
    resources :orders, only: [:new, :create]

    get 'about' => 'pages#about'
    get 'sale_petroleum' => 'pages#sale_petroleum'
  end

  scope 'assets', as: 'assets', format: false do
    get '/:asset.:format', to: 'assets#show'
  end

  mount Trestle::Engine => '/admin', as: 'trestle'
end
