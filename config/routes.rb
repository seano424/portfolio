Rails.application.routes.draw do
  root to: 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get 'contact', to: "contact#create"
  get 'about', to: 'pages#about'
  get 'projects', to: 'pages#projects'
  # resources :contact, only: [:create], as: :contact
  resources :contacts, only: [:new, :create]
end
