Rails.application.routes.draw do
  scope "(:locale)", locale: /zh|en|ru/ do
    root "pages#home"
  end

  mount Trestle::Engine => '/admin', as: 'trestle_admin'

  # namespace :admin do
  #   get 'main_page/index'
  #   root 'main_page#index'
  # end
end
