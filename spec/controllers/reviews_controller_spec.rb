require "rails_helper"

DatabaseCleaner.clean_with(:truncation)

RSpec.describe Api::V1::ReviewsController, type: :controller do
  describe "POST#create" do
    let!(:user_poster) { FactoryBot.create(:user, role: "member") };
    let!(:user_reviewer) { FactoryBot.create(:user, role: "member") };
    let!(:admin) { FactoryBot.create(:user, role: "admin") };

    let!(:meme_1) { Meme.create(title: "meme_1", imageUrl: "http://boop", description: "This is meme_1.", user: user_poster) };
    let!(:meme_2) { Meme.create(title: "meme_2", imageUrl: "http://boop2", description: "This is meme_2.", user: user_poster) };

    let!(:review_1) { Review.create(rating: 5, comment: "Wow this is review 1 for meme 1!", meme_id: meme_1.id, user: user_reviewer)}
    let!(:review_2) { Review.create(rating: 1, comment: "Wow this is review 2 for meme 1!", meme_id: meme_1.id, user: user_reviewer)}
    let!(:review_3) { Review.create(rating: 4, comment: "Wow this is review 1 for meme 2!", meme_id: meme_2.id, user: user_reviewer)}
    let!(:review_4) { Review.create(rating: 3, comment: "Wow this is review 2 for meme 2!", meme_id: meme_2.id, user: user_reviewer)}

    it "creates a review" do
      sign_in user_reviewer
      post_json = {
        rating: 5,
        comment: "This is an example comment.",
        meme_id: meme_1.id
      }

      prev_count = Review.count
      post(:create, params: {meme_id: meme_1.id, review: post_json})

      expect(Review.count).to eq(prev_count + 1)
    end

    it "deletes a review" do
      sign_in user_reviewer

      destroy_params = {
        id: review_1.id,
        meme_id: review_1.meme_id,
        review: {
          id: user_reviewer.id
        }
      }

      expect(Review.count).to eq(4)

      delete(:destroy, params: destroy_params)

      expect(Review.count).to eq(3)
    end

    it "allows admin to delete any review" do
      sign_in admin

      destroy_params = {
        id: review_1.id,
        meme_id: review_1.meme_id,
        review: {
          id: user_reviewer.id
        }
      }
      
      expect(Review.count).to eq(4)

      delete(:destroy, params: destroy_params)

      expect(Review.count).to eq(3)
    end

    it "returns the json of the newly posted review" do
      sign_in user_reviewer
      post_json = {
        rating: 5,
        comment: "This is an example comment.",
        meme_id: meme_1.id
      }

      post(:create, params: {meme_id: meme_1.id, review: post_json})
      returned_json = JSON.parse(response.body)

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["review"]["rating"]).to eq 5
      expect(returned_json["review"]["comment"]).to eq "This is an example comment."
      expect(returned_json["review"]["meme_id"]).to eq meme_1.id
      expect(returned_json["review"]["user_id"]).to eq user_reviewer.id
    end
  end
end
