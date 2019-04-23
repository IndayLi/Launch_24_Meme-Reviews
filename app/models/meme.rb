class Meme < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :imageUrl, presence: true
end
