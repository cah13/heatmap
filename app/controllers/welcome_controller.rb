class WelcomeController < ApplicationController
  def index
  end

  def import
   Listing.import(params[:file])
  end

  def listings
    @listings = Listing.all
    render json: @listings
  end

end