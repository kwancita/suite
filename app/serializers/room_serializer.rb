class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name, :type, :price, :capacity, :pets, :breakfast, :description, :image
  has_many :users 
end
