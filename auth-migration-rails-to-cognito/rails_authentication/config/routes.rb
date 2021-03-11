Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: "home#index"
  get 'home/index'

  resources :users, only: [:create]
  resources :user_sessions, only: [:create]

  get '/sign_up', to: 'users#new'
  get '/sign_in', to: 'user_sessions#new'
  get '/sign_out', to: 'user_sessions#destroy'
end
