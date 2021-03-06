import React from 'react'
import data from './data.json'
import './app.css'
import { Artist } from "./components/Artist";
import { Album } from "./components/Album";

const renderAlbum = album => {
  const { id, images, name, external_urls } = album;
  return (
    <div key={id} className="artist-container">
      <Album 
      image={images[1].url} 
      name={name} 
      url={external_urls.spotify} 
      />
      {album.artists.map(renderArtist)}
    </div>
  );
};

const renderArtist = artist => {
  const { id, name, external_urls } = artist;
  return <Artist 
  key={id} 
  name={name} 
  url={external_urls.spotify} 
  />;
};

export const App = () => {
  return (
    <div>
      <h1>New albums and singles</h1>
      <div className="flex-container">{data.albums.items.map(renderAlbum)}</div>
    </div>
  );
};
