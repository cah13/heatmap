class Listing < ActiveRecord::Base

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

  geocoded_by :listing

  def listing
    [address, city, state].compact.join(', ')
  end

end