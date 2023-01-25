import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p.name}>
          <img src={p.image} alt={p.name} />
          <p>{p.name}</p>
        </div>
      ))}
    </div>
  );
}
