class Listing < ActiveRecord::Base

  validates :address, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :apt, presence: true
  validates :neighborhood, presence: true
  validates :building_type, presence: true
  validates :size, presence: true
  validates :square_feet, presence: true
  validates :price, presence: true
  validates :listing_type, presence: true
  validates :latitude, presence: true
  validates :longitude, presence: true


  def self.import(file)
    CSV.foreach(file.path, headers: true) do |row|
      listing = Listing.new
      listing.address = row.to_hash["address"]
      listing.city = row.to_hash["city"]
      listing.state = row.to_hash["state"]
      listing.apt = row.to_hash["apt"]
      listing.neighborhood = row.to_hash["neighborhood"]
      listing.building_type = row.to_hash["building_type"]
      listing.size = row.to_hash["size"]
      listing.square_feet = row.to_hash["square_feet"]
      listing.price = row.to_hash["price"]
      listing.listing_type = row.to_hash["listing_type"]
      listing.latitude = row.to_hash["latitude"]
      listing.longitude = row.to_hash["longitude"]
      listing.save
    end
  end

  # geocoded_by :listing

  def listing
    [address, city, state].compact.join(', ')
  end

end