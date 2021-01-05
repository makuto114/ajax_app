Rails.application.routes.draw do
  root to: "tweets#index"
  resources :tweets, only: [:create]
  get 'tweets/:id', to: 'tweets#checked'
end
