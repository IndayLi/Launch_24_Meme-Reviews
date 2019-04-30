require 'factory_bot'

def random_number
  number = Random.new
  number.rand(1..5)
end

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    sequence(:username) {|n| "username#{n}" }
    password { "password" }
    password_confirmation { "password" }
    role { "member" }
  end

  factory :meme do
    user { FactoryBot.create(:user) }
    title { Faker::Book.title }
    imageUrl { "https://t2.rbxcdn.com/d7128e13ae4f5209537769b757512c23" }
    description { Faker::Hipster.sentence(3, false, 2) }
  end

  factory :review do
    user { FactoryBot.create(:user) }
    meme { FactoryBot.create(:meme) }
    rating { random_number }
    comment { Faker::Hipster.paragraph(3, false, 2) }
  end
end
