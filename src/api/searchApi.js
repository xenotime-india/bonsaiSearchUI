class SearchApi {
  static getSearchResult(searchText) {
    return fetch(`https://bonsai-demo.herokuapp.com/api/search/${searchText}`)
  }
}

export default SearchApi;
