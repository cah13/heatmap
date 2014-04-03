Heatmap::Application.routes.draw do

resources :users

root "welcome#index"

get "/login", to: "session#new"
post "/session", to: "session#create"
delete "/session", to: "session#destroy"

end
