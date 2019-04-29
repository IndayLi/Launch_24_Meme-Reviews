class Meme < ApplicationRecord
  belongs_to :user
  has_many :reviews

  validates :title, presence: true
  validates :imageUrl, presence: true
end
