Rails.application.routes.draw do
  scope :api do
    resources :discussions, except: [:new, :edit] do
      resources :comments
    end
  end

  #//root to: 'home#index'

  #match '*path' => 'home#index', via: :get
end
