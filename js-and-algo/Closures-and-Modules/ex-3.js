function SongsManager() {
  const songs = {}; // store song names and their video IDs
  const YOUTUBE_BASE_URL = "https://www.youtube.com/watch?v=";

  return {
    // add a song by extracting only the video ID from the full URL
    addSong: function(name, url) {
      const id = url.split("v=")[1];
      songs[name] = id;
    },

    // print the full URL using the stored ID
    getSong: function(name) {
      const id = songs[name];
      if (id) {
        console.log(YOUTUBE_BASE_URL + id);
      } else {
        console.log("Song not found.");
      }
    }
  };
}
