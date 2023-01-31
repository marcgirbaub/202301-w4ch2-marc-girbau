import { useState } from "react";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
import SearchForm from "./components/SearchForm/SearchForm";
import "./styles.css";

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
        <p className="error text-danger col">
          Error: I couldn't retrieve anything funny
        </p>
      </div>
    </div>
  );
};

export default App;
