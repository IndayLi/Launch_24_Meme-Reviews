Rails.application.routes.draw do
<<<<<<< HEAD
  root "memes#index"
=======
  root 'memes#index'
>>>>>>> c3aa44714f221aa995423bc30aa39928abba583a
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :memes, only: [:index]
    end
  end
end
