import fetchMock from "fetch-mock";
import ShowContainer from "../../app/javascript/react/components/ShowContainer";

describe("ShowContainer", () => {
  let wrapper, meme;

  beforeEach(() => {
    jasmineEnzyme();
    meme = {
      id: 1,
      title: "Momo",
      imageUrl: "https://i.imgur.com/4wVB82o.png",
      description: "Let's play a game...!",
      user_id: 1
    };
    fetchMock.get(`/api/v1/memes/1`, {
      status: 200,
      body: { meme }
    });
    wrapper = mount(<ShowContainer params={{ id: 1 }}/>);
  });

  afterEach(fetchMock.restore);

  it("renders an h2 with meme title", (done) => {
    setTimeout(() => {
      expect(wrapper.find(ShowContainer)).toBePresent();
      done();
    }, 0);
  });
});
