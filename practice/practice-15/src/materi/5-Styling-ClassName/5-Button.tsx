import type { ButtonProps } from './types/button.type';
import './5-button.css';

function Button({ text, style, isSubmit }: ButtonProps) {
  const className = isSubmit ? 'aktif' : 'disable';
  return (
    <button style={style} className={className}>
      {text} : {isSubmit ? 'Aktif' : 'Close'}
    </button>
  );
}
export default Button;
