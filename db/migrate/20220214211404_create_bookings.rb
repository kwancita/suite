class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.string :checkin_date
      t.string :checkout_date
      t.string :guest
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs-to :room

      t.timestamps
    end
  end
end
