import React from 'react';
import { useFetchGift } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGift(category);

  return (
    <>
      <h3 className="category__title">{ category }</h3>

      <div className="category__grid">
        { loading && <p className="loading">Cargando imágenes...</p> }

        {
          data.map((image) => (
            <GifGridItem
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  );
};
