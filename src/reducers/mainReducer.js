import { combineReducers } from 'redux';
import * as actions from '../actions/mainAction';

const defaultCommentState = [{
  title: 'test',
  id: 'incleaf',
  contents: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus tellus posuere, dictum dui nec, elementum dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel nisi et risus molestie mattis. Nam tempor risus eu ligula hendrerit efficitur. Proin a suscipit lacus. Phasellus non ipsum imperdiet, lobortis leo sed, pulvinar est. Morbi ex mi, auctor et eleifend nec, mattis quis nisl. Pellentesque eu maximus sem, quis rutrum ipsum. Vivamus sollicitudin semper lacus in malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`
}, {
  title: 'test2',
  id: 'incleaf',
  contents: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus tellus posuere, dictum dui nec, elementum dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel nisi et risus molestie mattis. Nam tempor risus eu ligula hendrerit efficitur. Proin a suscipit lacus. Phasellus non ipsum imperdiet, lobortis leo sed, pulvinar est. Morbi ex mi, auctor et eleifend nec, mattis quis nisl. Pellentesque eu maximus sem, quis rutrum ipsum. Vivamus sollicitudin semper lacus in malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`

}];

function commentsReducer(state = defaultCommentState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  comments: commentsReducer
});
