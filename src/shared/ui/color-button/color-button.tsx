export interface IProps {
  color: string;
  onClick?: (color: string) => void;
}

export const ColorButton = ({ color, onClick }: IProps) => (
  <button
    style={{ color }}
    onClick={() => onClick && onClick(color)}
    type="button"
  >
    Color Button
  </button>
);
