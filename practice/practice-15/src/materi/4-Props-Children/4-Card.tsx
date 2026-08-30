import type { CardProps } from './types/card.type';

function Card({ title, children }: CardProps) {
  return (
    <div>
      <h1>Materi 4 - Props (Chidlren)</h1>
      <h2>Judul : {title}</h2>
      {children}
    </div>
  );
}

export default Card;
