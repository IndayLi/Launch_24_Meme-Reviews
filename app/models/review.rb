class Review < ApplicationRecord
<<<<<<< HEAD
  belongs_to :user
  belongs_to :meme

  validates :rating, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }, presence: true
=======
  belongs_to :meme
  belongs_to :user

  validates :rating, presence: true 
>>>>>>> 2aaaeb48d4facef1c7898c59821975a082ebe5cf
end
