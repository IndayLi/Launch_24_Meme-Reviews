require "rails_helper"

DatabaseCleaner.clean_with(:truncation)

RSpec.describe Api::V1::MemesController, type: :controller do
  let!(:user_member) { FactoryBot.create(:user, role: "member") };
  let!(:meme_1) { Meme.create(title: "meme_1", imageUrl: "http://boop", description: "This is meme_1.", user: user_member) };
  let!(:meme_2) { Meme.create(title: "meme_2", imageUrl: "http://boop2", description: "This is meme_2.", user: user_member) };

  describe "GET#index" do
    it "returns successful response with json-formatted data" do
      get :index

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "returns all memes in the database" do
      get :index

      response_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(response_json.length).to eq 2
      expect(response_json[0]["title"]).to eq meme_1.title
      expect(response_json[1]["title"]).to eq meme_2.title
      expect(response_json[0]["imageUrl"]).to eq meme_1.imageUrl
      expect(response_json[1]["imageUrl"]).to eq meme_2.imageUrl
      expect(response_json[0]["description"]).to eq meme_1.description
      expect(response_json[1]["description"]).to eq meme_2.description
      expect(response_json[0]["user_id"]).to eq user_member.id
      expect(response_json[1]["user_id"]).to eq user_member.id
    end
  end

  describe "GET#show" do
    let!(:user) { FactoryBot.create(:user, role: "member") };
    it "returns successful response with json-formatted data" do
      sign_in user
      get :show, params: {id: meme_1.id}

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "returns the correct meme data in a usable format" do
      sign_in user
      get :show, params: {id: meme_1.id}
      response_json = JSON.parse(response.body)
      response_json = response_json["meme"]

      expect(response_json["title"]).to eq meme_1.title
      expect(response_json["imageUrl"]).to eq meme_1.imageUrl
      expect(response_json["description"]).to eq meme_1.description
      expect(response_json["user_id"]).to eq user_member.id

      expect(response_json["title"]).not_to eql(meme_2.title)
      expect(response_json["imageUrl"]).not_to eql(meme_2.imageUrl)
      expect(response_json["description"]).not_to eql(meme_2.description)
    end
  end

  describe "POST#create" do
    let!(:user) { FactoryBot.create(:user, role: "member") };
    it "creates a meme" do
      sign_in user
      post_json = {
        title: "Meme Title Woohoo",
        imageUrl: "www.meme.com",
        user: user
      }.to_json

      prev_count = Meme.count
      post(:create, body: post_json)
      expect(Meme.count).to eq(prev_count + 1)
    end

    it "returns the json of the newly posted meme" do
      sign_in user
      post_json = {
        title: "Meme Title Woohoo",
        imageUrl: "www.meme.com",
        user_id: user.id
      }.to_json

      post(:create, body: post_json)
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["meme"]["title"]).to eq "Meme Title Woohoo"
      expect(returned_json["meme"]["imageUrl"]).to eq "www.meme.com"
      expect(returned_json["meme"]["user_id"]).to eq user.id
    end
  end

  describe "DELETE#destroy" do
    let!(:user) { FactoryBot.create(:user, role: "member") };
    let!(:user2) { FactoryBot.create(:user, role: "member") };
    let!(:meme) { FactoryBot.create(:meme, user: user) };
    it "deletes a meme" do
      sign_in user

      expect{ delete :destroy, params: { id: meme.id } }.to change(Meme, :count).by(-1)
      expect(Meme.exists?(meme.id)).to eq(false)
    end

    it "can't be deleted by user who didn't create meme" do
      sign_in user2

      expect{ delete :destroy, params: { id: meme.id } }.to change(Meme, :count).by(0)
    end
  end
end
