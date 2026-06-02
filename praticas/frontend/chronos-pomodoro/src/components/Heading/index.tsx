import styles from "./styles.module.css";
import React from "react"; // Importante importar o React

type HeadingProps = {
  // Agora aceitamos texto OU outros componentes JSX!
  children: React.ReactNode;
};

// 2. Aplicamos o tipo ao parâmetro da função (props: HeadingProps)
export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
