import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../history';

import tracks from './tracks';
import playlists from './playlists';
import filterTracks from './tracks';

const reducers = combineReducers({
  tracks,
  playlists,
  filterTracks,
});

export default connectRouter(history)(reducers);
