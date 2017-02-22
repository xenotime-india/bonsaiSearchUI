import SearchApi from '../api/searchApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadSearchResultSuccess(searchResults) {
  return {type: types.LOAD_SEARCH_RESULT_SUCCESS, searchResults};
}

export function search(searchTxt) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return SearchApi.getSearchResult(searchTxt).then(response => response.json()).then(json => {
      console.log(json);
      dispatch(loadSearchResultSuccess(json.result.hits.hits));
    }).catch(error => {
      throw(error);
    });
  };
}
