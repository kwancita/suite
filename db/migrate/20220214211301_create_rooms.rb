class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :name
      t.string :r_type
      t.integer :price
      t.integer :capacity
      t.boolean :pets
      t.boolean :breakfast
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
