import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Programming']);

  return (
    <div className="app">
      <header>
        <h2 className="app__title">GifExpertApp</h2>

        <div className="app__description">
          <p>
            Todos los GIFs que tanto te gustan al alcance de tus manos. Hay cientos de miles
            esperándote para que puedas compartir con tus amigos al instante.
          </p>
        </div>

        <div className="app__search">
          <AddCategory setCategories={ setCategories } />
        </div>
      </header>

      <div className="colorful-bar"></div>

      <main>
        <div className="app__content">
          <ol>
            {
              categories.map(category => (
                <GifGrid 
                  key={ category } 
                  category={ category } 
                />
              ))
            }
          </ol>
        </div>
      </main>

      <footer>
          <p className="app__copyright">© 2021 - Bruno Pittilini. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default GifExpertApp;
