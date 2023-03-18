Rails.application.routes.draw do
  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :greetings, only: [:index]
  end
end
