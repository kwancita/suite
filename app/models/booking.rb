class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :room

  validates :user_id, :room_id, :checkin_date, :checkout_date, :guest, presence: true
end
