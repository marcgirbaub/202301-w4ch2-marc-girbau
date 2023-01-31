import { SetStateAction, useState } from "react";

const SearchForm = (): JSX.Element => {
  const [category, setCategory] = useState<string>("");

  const changeCategory = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCategory(event.target.value);
  };

  return (
    <form className="search-form">
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
