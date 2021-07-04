Rails.application.routes.draw do
  root to: 'customers#index'
  devise_for :customers, controllers: {
        sessions: 'customers/sessions'
      }
  resources :kennels  
  post '/authentication_tokens', to: "authentication_tokens#create"
  post '/login', to: "customers#login"
  get '/admin', to: 'customers#admin' 
  post '/customers/new', to: 'customers#new'
  get '/customers.json', to: 'customers#index'
  resources :customers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
