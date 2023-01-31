import { useState } from "react";
import ErrorDisplay from "./components/ErrorDisplay/ErrorDisplay";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
import SearchForm from "./components/SearchForm/SearchForm";

const App = (): JSX.Element => {
  const [category, setCategory] = useState<string>("");

  const getGifs = async (category: string): Promise<string> => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=2Dl32c5RfXwAPVdKZwDccMFKyRCX65AP&tag=${category}&rating=g`
    );

    const gifs = await response.json();

    return gifs;
  };

  return (
    <div className="container">
      <SearchForm />
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
