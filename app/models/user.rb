class User < ActiveRecord::Base
  # has_many :queries, dependent: :destroy
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  self.has_secure_password()
end