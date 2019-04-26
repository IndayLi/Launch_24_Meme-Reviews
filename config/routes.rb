Rails.application.routes.draw do

  root "memes#index"
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :memes, only: [:index, :create, :show]
    end
  end

<<<<<<< HEAD
  resources :memes, only: [:index, :new, :create, :show]
  
=======
  resources :memes, only: [:new, :create]
>>>>>>> 59f9f5624e70615379fb9dd02be1c4f75053a53a
end
