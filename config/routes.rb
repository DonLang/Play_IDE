Rails.application.routes.draw do
  get 'welcome/index'

  resources :pages
  root 'welcome#index'
end
