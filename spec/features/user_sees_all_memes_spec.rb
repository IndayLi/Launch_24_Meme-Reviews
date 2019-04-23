require 'rails_helper'

feature 'user sees list of memes', %Q{
  As a user
  I want to see a list of memes on the /memes page
  So I can see what memes are available for review
} do
  scenario 'user sees all memes on index page' do
    Meme.create(user: FactoryBot.create(:user), title: 'example title', imageUrl: "www.example.com")

     visit '/'
     
     expect(page).to have_content("example title")
     expect(page).to have_content("www.example.com")

  end
end
