class Review < ApplicationRecord
  belongs_to :meme
  belongs_to :user

  validates :rating, presence: true 
end
