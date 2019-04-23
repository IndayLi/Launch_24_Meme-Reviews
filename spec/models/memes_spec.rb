require 'rails_helper'

RSpec.describe Meme, type: :model do
  describe "testing Meme model" do
    let!(:meme_one) { FactoryBot.create(:meme)}
    let!(:meme_two) { FactoryBot.create(:meme)}

    it "tests Meme.name" do
      expect(meme_one.title).to equal(meme_one.title)
      expect(meme_two.title).to equal(meme_two.title)
    end

  end



end
