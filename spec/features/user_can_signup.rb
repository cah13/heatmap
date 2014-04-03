require 'spec_helper'

describe "user signup process" do
  let(:user) { FactoryGirl.build(:user) }

  it "will signup a user" do
    
    # Setup

    # Workflow
    visit root_path(user)
    click_link "Signup"
    fill_in :user_first_name, with: user.first_name
    fill_in :user_last_name, with: user.last_name
    fill_in :user_email, with: user.email
    fill_in :user_password, with: user.password
    fill_in :user_password_confirmation, with: user.password_confirmation
    click_button "Join!"
    
    # Expectations 
    expect(page).to have_content "Welcome #{user.first_name}!"

  end

end