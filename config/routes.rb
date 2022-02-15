Rails.application.routes.draw do
  
  resources :bookings, only: [:index, :create, :update, :delete]
  resources :rooms, only: [:index, :show]
  resources :users, only: [:create, :show, :delete]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
