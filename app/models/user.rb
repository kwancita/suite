class User < ApplicationRecord
    has_many :bookings
    has_many :rooms, through: :bookings
end
