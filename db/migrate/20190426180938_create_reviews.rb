class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.belongs_to :user
      t.belongs_to :meme

      t.integer :rating, null: false
      t.text :comment

      t.timestamps null: false
    end
  end
end
