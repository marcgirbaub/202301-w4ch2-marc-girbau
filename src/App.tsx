import ErrorDisplay from "./components/ErrorDisplay/ErrorDisplay";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
import SearchForm from "./components/SearchForm/SearchForm";
import { Gif } from "./types";

const App = (): JSX.Element => {
  const getGif = async (category: string): Promise<Gif> => {
    const gifURL = `https://api.giphy.com/v1/gifs/random?api_key=2Dl32c5RfXwAPVdKZwDccMFKyRCX65AP&tag=${category}&rating=g`;

    const response = await fetch(gifURL);
    const gif = (await response.json()) as Gif;

    return gif;
  };

  const getCategoryGif = async (category: string) => {
    const gifUrl = await getGif(category);

    return gifUrl;
  };

  return (
    <div className="container">
      <SearchForm getCategoryGif={getCategoryGif} />
      <div className="row">
        <ImageDisplay />
      </div>
      <div className="row">
        <ErrorDisplay />
      </div>
    </div>
  );
};

export default App;
