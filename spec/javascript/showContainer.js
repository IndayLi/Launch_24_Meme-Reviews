import fetchMock from "fetch-mock";
import ShowContainer from "../../app/javascript/react/components/ShowContainer";
import ReviewsContainer from "../../app/javascript/react/components/ReviewsContainer";

describe("ShowContainer", () => {
  let wrapper, meme, user;

  beforeEach(() => {
    user = {
      id: 1,
      email: "email1@test.com",
      password: "password",
      password_confirmation: "password",
      role: "member"
    };

    meme = {
      id: 1,
      title: "Momo",
      imageUrl: "https://i.imgur.com/4wVB82o.png",
      description: "Let's play a game...!",
      user_id: 1
    };

    fetchMock.get(`/api/v1/memes/${meme.id}`, {
      status: 200,
      body: { meme: meme, current_user: user }
    });

    fetchMock.get(`/api/v1/memes/${meme.id}/reviews`, {
      status: 200,
      body: { test: "test" }
    });

    wrapper = mount(<ShowContainer params={{ id: user.id }} />);
  });

  afterEach(fetchMock.restore);

  it("renders the show container on the page", done => {
    setTimeout(() => {
      expect(wrapper.find(ShowContainer)).toBePresent();
      done();
    }, 0);
  });

  it("should render an h2 and img tag", done => {
    setTimeout(() => {
      expect(wrapper.find("h2")).toBePresent();
      expect(wrapper.find("img")).toBePresent();
      done();
    }, 0);
  });

  it("updates state to contain meme", done => {
    setTimeout(() => {
      expect(wrapper.state()).toEqual({
        meme: meme,
        currentUser: user,
        showEdit: false,
        error: ""
      });
      done();
    }, 0);
  });

  it("should render the following meme props", done => {
    setTimeout(() => {
      expect(wrapper.find("h2").node.innerHTML).toContain("Momo");
      expect(wrapper.find("img").props()).toEqual({
        src: "https://i.imgur.com/4wVB82o.png"
      });
      expect(wrapper.find("p").node.innerHTML).toEqual("Let's play a game...!");
      done();
    }, 0);
  });
});
