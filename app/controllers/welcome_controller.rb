class WelcomeController < ApplicationController
  def index
  end

  def import
   Listing.import(params[:file])
  end

end