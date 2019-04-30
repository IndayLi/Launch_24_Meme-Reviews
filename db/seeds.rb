# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require_relative "../spec/support/factory_bot.rb"

if Rails.env.development?

  User.delete_all
  Meme.delete_all
  Review.delete_all

  meme_1 = FactoryBot.create(:meme)
  meme_2 = FactoryBot.create(:meme)
  meme_3 = FactoryBot.create(:meme)
  meme_4 = FactoryBot.create(:meme)
  meme_5 = FactoryBot.create(:meme)
  meme_6 = FactoryBot.create(:meme)
  meme_7 = FactoryBot.create(:meme)
  meme_8 = FactoryBot.create(:meme)

  FactoryBot.create(:review, meme: meme_1)
  FactoryBot.create(:review, meme: meme_1)

  FactoryBot.create(:review, meme: meme_2)
  FactoryBot.create(:review, meme: meme_2)

  FactoryBot.create(:review, meme: meme_3)
  FactoryBot.create(:review, meme: meme_3)

  FactoryBot.create(:review, meme: meme_4)
  FactoryBot.create(:review, meme: meme_4)

  FactoryBot.create(:review, meme: meme_5)
  FactoryBot.create(:review, meme: meme_5)

  FactoryBot.create(:review, meme: meme_8)
  FactoryBot.create(:review, meme: meme_8)
end
