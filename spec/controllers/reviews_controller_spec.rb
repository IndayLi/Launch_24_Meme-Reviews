require "rails_helper"
require "pry"

DatabaseCleaner.clean_with(:truncation)

RSpec.describe Api::V1::ReviewsController, type: :controller do

  describe "POST#create" do
    let!(:user_poster) { FactoryBot.create(:user, role: "member") };
    let!(:user_reviewer) { FactoryBot.create(:user, role: "member") };
    let!(:meme_1) { Meme.create(title: "meme_1", imageUrl: "http://boop", description: "This is meme_1.", user: user_poster) };
    let!(:meme_2) { Meme.create(title: "meme_2", imageUrl: "http://boop2", description: "This is meme_2.", user: user_poster) };

    it "creates a review" do
      sign_in user_reviewer
      post_json = {
        rating: 5,
        comment: "This is an example comment.",
        meme_id: meme_1.id,
        user: user_reviewer
      }.to_json

      prev_count = Review.count
      post(:create, params: {meme_id: meme_1.id}, body: post_json)
      expect(Review.count).to eq(prev_count + 1)
    end
  end

end
