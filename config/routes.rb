Rails.application.routes.draw do
  scope :api do
    resources :discussions, except: [:new, :edit, :show] do
      resources :comments
    end

    get 'discussions/:month/:day/:year' => 'discussions#show'
  end

root to: 'home#index'

match '*path' => 'home#index', via: :get
end
