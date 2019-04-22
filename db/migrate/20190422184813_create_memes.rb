class CreateMemes < ActiveRecord::Migration[5.2]
  def change
    create_table :memes do |t|
      t.belongs_to :user, null: false

      t.string :title, null: false
      t.string :imageUrl, null: false
      t.text :description

      t.timestamps null: false
    end
  end
end
