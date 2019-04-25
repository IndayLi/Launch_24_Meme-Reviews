Rails.application.routes.draw do

  root "memes#index"
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :memes, only: [:index, :create]
    end
  end

  resources :memes, only: [:new, :create]
end
