class User < ApplicationRecord
    has_secure_password
    has_many :bookings
    has_many :rooms, through: :bookings

    validates :full_name, presence: true
    validates :username, :email, presence: true, uniqueness: true
end
