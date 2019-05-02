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

  meme_1 = FactoryBot.create(:meme, imageUrl: "https://i.imgur.com/mENw3JA.jpg")
  meme_2 = FactoryBot.create(:meme, imageUrl: "https://i.imgur.com/dqDwAzb.jpg")
  meme_3 = FactoryBot.create(:meme, imageUrl: "https://i.redd.it/4e9kodyhrjv21.jpg")
  meme_4 = FactoryBot.create(:meme, imageUrl: "https://i.redd.it/ab3ivx1sukv21.jpg")
  meme_5 = FactoryBot.create(:meme, imageUrl: "https://i.redd.it/2hd3xir7kjv21.jpg")
  meme_6 = FactoryBot.create(:meme, imageUrl: "https://i.redd.it/1mccnl3w9lv21.jpg")
  meme_7 = FactoryBot.create(:meme, imageUrl: "https://i.imgur.com/Ezh0MoD.jpg")
  meme_8 = FactoryBot.create(:meme, imageUrl: "https://i.redd.it/ay7p92delhv21.jpg")
  meme_9 = FactoryBot.create(:meme, imageUrl: "https://s.hdnux.com/photos/73/53/27/15644125/6/920x920.jpg")
  meme_10 = FactoryBot.create(:meme, imageUrl: "https://www.abc.net.au/news/image/7797710-1x1-340x340.jpg")
  meme_11 = FactoryBot.create(:meme, imageUrl: "https://www.sanfranciscobaycoffee.com/wp-content/uploads/2017/03/52279468.jpg")
  meme_12 = FactoryBot.create(:meme, imageUrl: "https://media.thetab.com/blogs.dir/91/files/2017/01/maxresdefault-1.jpg")
  meme_13 = FactoryBot.create(:meme, imageUrl: "https://bestlifeonline.com/wp-content/uploads/2018/03/Bad-Joke-Eel-1024x764.jpg")
  meme_14 = FactoryBot.create(:meme, imageUrl: "https://solifequotes.com/wp-content/uploads/2016/07/35-Hilarious-Memes-1-Hilarious-Memes.jpg")
  meme_15 = FactoryBot.create(:meme, imageUrl: "https://stayhipp.com/wp-content/uploads/2019/04/may.jpg")
  meme_16 = FactoryBot.create(:meme, imageUrl: "https://i.ytimg.com/vi/c9lhHHp6fHE/maxresdefault.jpg")
  meme_17 = FactoryBot.create(:meme, imageUrl: "https://i.kym-cdn.com/photos/images/original/001/473/093/368.jpg")
  meme_18 = FactoryBot.create(:meme, imageUrl: "https://sayingimages.com/wp-content/uploads/how-you-look-super-funny-memes.jpg")
  meme_19 = FactoryBot.create(:meme, imageUrl: "https://wp-seo-mainpage.s3-accelerate.amazonaws.com/uploads/funny-memes-04.jpg")
  meme_20 = FactoryBot.create(:meme, imageUrl: "https://static.boredpanda.com/blog/wp-content/uploads/2018/09/5bae2b2f66d5d__700-png.jpg")

  FactoryBot.create(:review, meme: meme_1)

  FactoryBot.create(:review, meme: meme_2)
  FactoryBot.create(:review, meme: meme_2)

  FactoryBot.create(:review, meme: meme_4)

  FactoryBot.create(:review, meme: meme_5)
  FactoryBot.create(:review, meme: meme_5)

  FactoryBot.create(:review, meme: meme_7)

  FactoryBot.create(:review, meme: meme_8)
  FactoryBot.create(:review, meme: meme_8)

  FactoryBot.create(:review, meme: meme_10)

  FactoryBot.create(:review, meme: meme_11)
  FactoryBot.create(:review, meme: meme_11)

  FactoryBot.create(:review, meme: meme_13)

  FactoryBot.create(:review, meme: meme_14)
  FactoryBot.create(:review, meme: meme_14)

  FactoryBot.create(:review, meme: meme_16)

  FactoryBot.create(:review, meme: meme_17)
  FactoryBot.create(:review, meme: meme_17)

  FactoryBot.create(:review, meme: meme_19)

  FactoryBot.create(:review, meme: meme_20)
  FactoryBot.create(:review, meme: meme_20)
end
