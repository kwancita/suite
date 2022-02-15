class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name, :r_type, :price, :capacity, :pets, :breakfast, :description, :image
end
