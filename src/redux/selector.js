// import { createSelector } from "@reduxjs/toolkit";
// import songAPI from "../fakeAPI/api/songAPI";

// const textSearchSelector = (state) => state.song.search
// const searchResultSelector = createSelector(
//     textSearchSelector,
//     (textSearch) => {
//         textSearch = textSearch.toLowerCase()
//         if (textSearch) {
//             return songAPI.map(playlist => ({
//                 type: playlist.type,
//                 songs: playlist.songs.filter(song => song.toLowerCase().includes(textSearch.toLowerCase()))
//             }))
//         } else {
//             return {}
//         }
//     }
// )

// export {searchResultSelector}
