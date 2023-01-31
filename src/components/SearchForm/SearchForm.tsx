import { SetStateAction, useState } from "react";

interface SearchFormProps {
  getCategoryGif: (category: string) => void;
}

const SearchForm = ({ getCategoryGif }: SearchFormProps): JSX.Element => {
  const [category, setCategory] = useState<string>("");

  const changeCategory = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCategory(event.target.value);
  };

  const handleFormSubmition = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    getCategoryGif(category);
  };

  return (
    <form className="search-form" onSubmit={handleFormSubmition}>
      <div className="row">
        <label form="search" className="col-1 col-form-label">
          Search:{" "}
        </label>
        <div className="col-4">
          <input
            type="text"
            id="search"
            className="search form-control"
            onChange={changeCategory}
          />
        </div>
        <button type="submit" className="btn btn-info btn-sm col-1">
          Go
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
