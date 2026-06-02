import styles from "./styles.module.css";

// 1. Tipagem: O Container vai abraçar outros elementos (ReactNode)
type ContainerProps = {
  children: React.ReactNode;
};

// 2. Componente: Desestruturamos o children e aplicamos a estrutura base
export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
