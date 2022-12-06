import React, { useState, useEffect, useRef } from "react";

//image
import searchIcon from "../../images/search-icon.svg";

//styles
import { Wrapper, Content } from "./SearchBar.styles";


const getInfoByTitle = (title, allArt) => {
  return allArt.filter(item => {
    item.title === title
  })
}

const SearchBar = ({ allTitles }) => {
  const[searchQueryState, setSearchQueryState] = useState("")
  const [searchResultState, setSearchResultState] = useState([]);

  useEffect(() => {
    async function getArt() {

      try {
        const searchResults = allTitles.filter(title => {
          title.includes(searchQueryState)
        })

        setSearchResultState(searchResults);
      }

      catch (err) {

          console.log(err)
      }
    }
    

  }, [searchState] )

  return (
    <>
      <Wrapper>
        <Content>
          <img src={searchIcon} alt="search-icon" />
          <input 
          type="text" 
          placeholder="Search Artwork" 
          onChange={event => setSearchQueryState(event.currentTarget.value)}
          value={state}

        />
        </Content>
      </Wrapper>
      <div className={"SearchResult"}>
        <ul>
            {searchResultState.map((title, index) => {
              <li>{title}</li>
            })}
        </ul>
      </div>
    </>
  );
};

export default SearchBar;
