require 'rails_helper'

RSpec.describe User, type: :model do
  describe "add some examples to (or delete)" do
    user_member = FactoryBot.create(:user, role: "member")
    user_admin = FactoryBot.create(:user, role: "admin")

    it "is not an admin if the role is not admin" do
      expect(user_member.admin?).to eq(false)
    end

    it "is an admin if the role is admin" do
      expect(user_admin.admin?).to eq(true)
    end
  end
end
