import fetchMock from "fetch-mock";
import ShowContainer from "../../app/javascript/react/components/ShowContainer";
import ReviewsContainer from '../../app/javascript/react/components/ReviewsContainer'

describe("ShowContainer", () => {
  let wrapper, meme;

  let fetch = () => {
    // meme = {
    //   id: 1,
    //   title: "Momo",
    //   imageUrl: "https://i.imgur.com/4wVB82o.png",
    //   description: "Let's play a game...!",
    //   user_id: 1
    // };

    fetchMock.get(`/api/v1/memes/${meme.id}`, {
      status: 200,
      body: { meme }
    });

    fetchMock.get(`/api/v1/memes/${meme.id}/reviews`, {
      status: 200,
      body: { test: "test" }
    });
  };

  beforeEach(() => {
    meme = {
      id: 1,
      title: "Momo",
      imageUrl: "https://i.imgur.com/4wVB82o.png",
      description: "Let's play a game...!",
      user_id: 1
    };

    wrapper = mount(<ShowContainer params={{ id: 1 }}/>);
  });

  afterEach(fetchMock.restore);

  it("renders the show container on the page", (done) => {
    fetch()
    setTimeout(() => {
      expect(wrapper.find(ShowContainer)).toBePresent();
      expect(wrapper.find(ReviewsContainer)).toBePresent();
      done();
    }, 0);
  });


  it("updates state to contain meme", (done) => {
    setTimeout(() => {
      expect(wrapper.state().meme).toEqual({})
      done();
    }, 0);
    fetch();
    setTimeout(() => {
      expect(wrapper.state().meme).toEqual({})
      done();
    }, 0);
  });






});
