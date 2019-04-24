require "rails_helper"

RSpec.describe Api::V1::MemesController, type: :controller do
  user_member = FactoryBot.create(:user, role: "member")
  meme_1 = Meme.create(title: "meme_1", imageUrl: "http://boop", description: "This is meme_1.", user: user_member)
  meme_2 = Meme.create(title: "meme_2", imageUrl: "http://boop", description: "This is meme_2.", user: user_member)

  describe "GET#index" do
    # let!(:meme_1) { Meme.create(title: "meme_1", imageUrl: "http://boop", description: "This is meme_1.") }

    it "returns successful response with json-formatted data" do
      get :index

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "blank blank blank" do
      get :index

      response_json = JSON.parse(response.body)
      binding.pry
    end

  end
end
