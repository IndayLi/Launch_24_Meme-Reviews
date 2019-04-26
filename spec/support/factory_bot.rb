require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    role { 'member' }
  end

  factory :meme do
    user { FactoryBot.create(:user) }
    title { Faker::Book.title }
    imageUrl { Faker::Internet.url }
    description { Faker::Hipster.sentence(3, false, 2) }
  end
end
