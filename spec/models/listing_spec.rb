require 'spec_helper'

describe Listing do
  # it { should belong_to(:user) }
  it { should validate_presence_of(:address) }
  it { should validate_presence_of(:city) }
  it { should validate_presence_of(:state) }
  it { should validate_presence_of(:apt) }
  it { should validate_presence_of(:neighborhood) }
  it { should validate_presence_of(:building_type) }
  it { should validate_presence_of(:size) }
  it { should validate_presence_of(:square_feet) }
  it { should validate_presence_of(:price) }
  it { should validate_presence_of(:listing_type) }
  it { should validate_presence_of(:latitude) }
  it { should validate_presence_of(:longitude) }
  
end