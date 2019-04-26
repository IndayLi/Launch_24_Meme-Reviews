Rails.application.routes.draw do

  root "memes#index"
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :memes, only: [:index, :create, :show]
      resources :reviews, only: [:create, :new]
    end
  end

  resources :memes, only: [:index, :new, :create, :show]

end
