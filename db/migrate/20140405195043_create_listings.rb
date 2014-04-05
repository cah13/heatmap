class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :address
      t.string :city
      t.string :state
      t.string :apt
      t.string :neighborhood
      t.string :building_type
      t.string :size
      t.string :square_feet
      t.integer :price
      t.string :listing_type
      t.float :latitude
      t.float :longitude
    end
  end
end
