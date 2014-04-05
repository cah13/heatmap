Heatmap::Application.routes.draw do

resources :users

root "welcome#index"

post "/signup", to: "users#create"

get "/login", to: "session#new"
post "/session", to: "session#create"
delete "/session", to: "session#destroy"

end
