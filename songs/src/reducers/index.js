import { combineReducers } from 'redux';
const songsReducer = () => {
    return [
        {title: 'Song one', duration:'4:05'},
        {title: 'Song Two', duration:'2:30'},
        {title: 'Song Three', duration:'3:15'},
        {title: 'Song Four', duration:'1:45'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer 
});
