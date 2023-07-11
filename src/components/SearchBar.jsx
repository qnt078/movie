import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <div className="list-search">
        {props.data?.map((item, index) => {
          <div key={item.imdbID} className="list-item-movie">
         
            <ul>{item.Title}</ul>
          </div>;
        })}
      </div>
    </div>
  );
};

export default SearchBar;
