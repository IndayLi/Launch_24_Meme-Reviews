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
    it "returns successful response with json-formatted data" do
      get :show, params: {id: meme_1.id}

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "returns the correct meme data in a usable format" do
      get :show, params: {id: meme_1.id}
      response_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

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
    let!(:user) { { email: "test-user@example.com", password: "password", password_confirmation: "password", role: "member" } };
    # let!(:user_member) { FactoryBot.create(:user, role: "member") };
    binding.pry
    let!(:new_meme) { { user: current_user, title: "meme_1", imageUrl: "http://boop", description: "This is meme_1." }};
    it "adds a new meme to the database" do
      expect { post :create, body: new_meme.to_json }.to change { Meme.count }.by 1
    end
  end
end
