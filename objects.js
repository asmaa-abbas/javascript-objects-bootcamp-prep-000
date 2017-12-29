let playlist = {
  britneySpears: 'Oops I did it again',
  nsync: 'bye bye',
  backstreetboys: 'I want it that way.'
};

const updatePlaylist = (playlist, artistName, songTitle) => {
  playlist[artistName] = songTitle;
  return playlist;
};