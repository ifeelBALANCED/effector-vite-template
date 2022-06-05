export interface IProps {
  color: string;
  onClick?: (color: string) => void;
}

const ColorButton = ({ color, onClick }: IProps) => (
  <button
    style={{ color }}
    onClick={() => onClick && onClick(color)}
    type="button"
  >
    Color Button
  </button>
);

export default ColorButton;
