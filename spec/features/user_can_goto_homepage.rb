require 'spec_helper'

describe "user can land on homepage" do
  it "will land user on haomepage" do
    
    # Setup
    visit "/"
    # Workflow

    # Expecatations
    expect(page).to have_content "Home"
    expect(page).to have_content "Sales"
    expect(page).to have_content "Rentals"
    expect(page).to have_content "Login"
    expect(page).to have_content "Signup"
    expect(page).to have_content "Contact Us"
  end
end