Rails.application.routes.draw do

  root "memes#index"
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :memes, only: [:index, :create, :show, :destroy] do
        resources :reviews, only: [:index, :create, :new]
      end
    end
  end

  resources :memes, only: [:index, :new, :show] do
    resources :reviews, only: [:new]
  end
end
