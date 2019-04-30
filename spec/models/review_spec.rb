require 'rails_helper'

RSpec.describe Review, type: :model do
  describe "testing Review model" do

    let!(:user_member) { FactoryBot.create(:user)}
    let!(:meme_1) { FactoryBot.create(:meme)}

    it "successfully created reviews" do
      review_1 = Review.create(rating: 1, comment: "This is the first review", user: user_member, meme: meme_1)
      review_2 = Review.create(rating: 5, comment: "", user: user_member, meme: meme_1)

      expect(review_1.valid?).to equal(true)
      expect(review_2.valid?).to equal(true)
    end

    it "failed to create reviews" do
      review_1 = Review.create(rating: 0, comment: "This is the first review", user: user_member, meme: meme_1)
      review_2 = Review.create(rating: 6, comment: "", user: user_member, meme: meme_1)
      review_3 = Review.create(rating: "", comment: "", user: user_member, meme: meme_1)
      review_4 = Review.create(rating: 4, comment: "", meme: meme_1)
      review_5 = Review.create(rating: 3, comment: "", user: user_member)

      expect(review_1.valid?).to equal(false)
      expect(review_2.valid?).to equal(false)
      expect(review_3.valid?).to equal(false)
      expect(review_4.valid?).to equal(false)
      expect(review_5.valid?).to equal(false)
    end

    it "renders the saved review data" do
      review_1 = Review.create(rating: 1, comment: "This is the first review", user: user_member, meme: meme_1)

      expect(review_1.rating).to equal(1)
      expect(review_1.comment).to eql("This is the first review")

    end

  end
end
