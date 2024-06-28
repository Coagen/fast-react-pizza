import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Button({ children, disabled, to, type }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 ms:px-6 ms:py-4",
    small: base + " py-2 md:px-5 md:py-2.5",
    secondary:
      " inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 ms:px-6 ms:py-3.5 hover:text-stone-800 ",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired, // 'node' can be any renderable content
  disabled: PropTypes.bool, // 'bool' for boolean values
  to: PropTypes.string,
  type: PropTypes.string,
};
export default Button;
