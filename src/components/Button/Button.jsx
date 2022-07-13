import "./Button.css";

export default function Button({ children, handleClick }) {
  return (
    <button className="btn" onClick={handleClick}>
      {children}
    </button>
  );
}
