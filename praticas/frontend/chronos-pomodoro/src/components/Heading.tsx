import { useState } from 'react';
import styles from './Heading.module.css';

export function Heading() {
  // Hook
  const [contador, setContador] = useState(0);

  // Evento
  function handleClick() {
    setContador(contador + 1);
  }

  // JavaScript
  const nome = 'Maria';

  return (
    <div>
      {/* JSX */}
      <h1 className={`${styles.heading} ${styles.cyanText}`}>
        Olá, {nome}!
      </h1>

      {/* Evento + Hook */}
      <button
        className={styles.button}
        onClick={handleClick}
      >
        Cliques: {contador}
      </button>

      {/* Composição */}
      <div className={styles.card}>
        <h2>Componente Card</h2>

        <p>
          Exemplo utilizando React, Hooks,
          Eventos e CSS Modules.
        </p>
      </div>
    </div>
  );
}