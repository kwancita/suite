class BookingSerializer < ActiveModel::Serializer
  attributes :id, :checkin_date, :checkout_date, :guest, :room
  has_one :user
end
