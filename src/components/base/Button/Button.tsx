import "./Button.css";

interface ButtonProps {
  title: string
  open: boolean
  onClick: () => void

}
const Button: React.FC<ButtonProps> = ({ title, open, onClick }) => {

  return (
    <button
      type="button"
      className={`trigger ${open ? 'open' : ''}`}
      onClick={onClick}
      aria-expanded={open}
    >
      <h2>{title}</h2>
    </button>
  )
}

export default Button;