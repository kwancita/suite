class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :room

  validates :user_id, :room_id, :checkin_date, :checkout_date, :guest, presence: true
  
   def stay
    #binding.pry
    t = checkout_date - checkin_date
    t/60/60/24
  end

  def total
    self.stay * room.price
  end
end
