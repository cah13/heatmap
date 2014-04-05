Heatmap::Application.routes.draw do

resources :users

root "welcome#index"
post "/", to: "welcome#import"

get "/listings", to: "welcome#listings"

post "/signup", to: "users#create"

get "/login", to: "session#new"
post "/session", to: "session#create"
delete "/session", to: "session#destroy"

end
