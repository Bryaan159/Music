import React from "react";

const playlists = [
    {
      id: 1,
      name: "All Out 80s",
      image: "https://i.scdn.co/image/ab67706f00000003e6ed19ecc791fce2ec58d005",
      songs: [
        { id: 1, title: "Girls Just Wanna Have Fun", plays: 957800, duration: "3:30" },
        { id: 2, title: "Take On Me", plays: 789500, duration: "4:15" },
        { id: 3, title: "Every Breath You Take", plays: 165780, duration: "3:45" },
        { id: 4, title: "With or Without You", plays: 789550, duration: "4:30" },
        { id: 5, title: "Thriller", plays: 289648, duration: "3:55" },
        { id: 6, title: "Africa", plays: 157890, duration: "3:55" },
        { id: 7, title: "More Than This", plays: 737850, duration: "4:15" },
        { id: 8, title: "Sweet Dreams", plays: 458250, duration: "5:05" },
        // Agrega más canciones aquí...
      ],
    },
  ];
  
  
  const ViewPlaylists = () => {
    return (
      <div className="viewPlayList">
        <div className="viewPlayList-container">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="viewPlaylist">
              <div className="viewPlaylist-image">
                <img src={playlist.image} alt={playlist.name} />
              </div>
              <h1 className="viewPlaylist-name">{playlist.name}</h1>
              <ul>
                {playlist.songs.map((song) => (
                  <li key={song.id} className="viewPlaylist-song">
                    <div className="viewPlaylist-song-title">{song.title}</div>
                    <div className="viewPlaylist-song-reproductions">Reproducciones: {song.plays}</div>
                    <div className="viewPlaylist-song-time">Duración: {song.duration}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> 
      </div>
    );
  };
export default ViewPlaylists;
