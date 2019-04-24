require 'rails_helper'

feature 'user sees list of memes', %Q{
  As a user
  I want to see a list of memes on the /memes page
  So I can see what memes are available for review
} do
  scenario 'user sees all memes on index page' do
    user_one = User.create(email: 'user_one@example.com', password: 'password', password_confirmation: 'password', role: 'member')
    meme_one = Meme.create(user: user_one, title: "example title", imageUrl: "www.example.com")

     visit '/'
     # expect(page).to have_content("example title")
     # expect(page).to have_content("www.example.com")

  end
end
