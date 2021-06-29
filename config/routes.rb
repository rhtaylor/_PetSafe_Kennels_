Rails.application.routes.draw do
  resources :kennels 
  get '/admin', to: 'customers#admin' 
  post '/customers/new', to: 'customers#new'
  get '/customers.json', to: 'customers#index'
  resources :customers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
