import React from "react";

const playlists = [
  {
    id: 1,
    name: "All Out 80s",
    description: "Playlist",
    image: "https://i.scdn.co/image/ab67706f00000003e6ed19ecc791fce2ec58d005",
  },
  {
    id: 2,
    name: "Taylor Swift",
    description: "Artista",
    image: "https://i.scdn.co/image/ab6761610000e5eb5a00969a4698c3132a15fbb0",
  },
  {
    id: 3,
    name: "Perreo Intenso ",
    description: "Playlist",
    image: "https://i.scdn.co/image/ab67706c0000da8482245b4b22fc2e3285990efa",
  },
  {
    id: 4,
    name: "Exitos Bad Bunny",
    description: "Artista",
    image: "https://festmx.com/wp-content/uploads/2022/12/ab6761610000e5eb8ee9a6f54dcbd4bc95126b14.jpg",
  },
  {
    id: 5,
    name: "Jesse y Joy",
    description: "Artista",
    image: "https://i.scdn.co/image/ab67616d0000b27313dedbc6412e3c63ab56f973",
  },
  {
    id: 6,
    name: "Rock",
    description: "Playlist",
    image: "https://i.scdn.co/image/ab67706c0000da8469ec8b5b03df1a6dfe45abf3",
  },
  {
    id: 7,
    name: "Chill Vibes",
    description: "Playlist",
    image: "https://i.scdn.co/image/ab67706f00000002f2d08778548e125bcb867692",
  },
  {
    id: 8,
    name: "Pal Workout",
    description: "Playlist",
    image: "https://i.scdn.co/image/ab67706f000000031274272bb72d4f09cc20bf21",
  },
];

const ListOfPlaylist = () => {
  return (
    <div id="playlists">
      <h1 id="title-list-of-playlist">Tu biblioteca</h1>
      <div className="playlist-container">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="playlist-card">
            <div className="playlist-image">
              {playlist.image && (
                <img src={playlist.image} alt={playlist.name} />
              )}
            </div>
            <div className="playlist-details">
              <h3>{playlist.name}</h3>
              <p>{playlist.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfPlaylist;