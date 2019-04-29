<<<<<<< HEAD
require 'rails_helper'

RSpec.describe ReviewsController, type: :controller do

=======
require "rails_helper"

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

    it "returns the json of the newly posted review" do
      sign_in user_reviewer
      post_json = {
        rating: 5,
        comment: "This is an example comment.",
        meme_id: meme_1.id,
        user: user_reviewer
      }.to_json

      post(:create, params: {meme_id: meme_1.id}, body: post_json)
      returned_json = JSON.parse(response.body)

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["review"]["rating"]).to eq 5
      expect(returned_json["review"]["comment"]).to eq "This is an example comment."
      expect(returned_json["review"]["meme_id"]).to eq meme_1.id
      expect(returned_json["review"]["user_id"]).to eq user_reviewer.id
    end
  end
>>>>>>> 2aaaeb48d4facef1c7898c59821975a082ebe5cf
end
