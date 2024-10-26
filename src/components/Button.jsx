// src/components/Button.jsx
function Button({ onClick, text, paddingX = 'px-6', paddingY = 'py-2', color = 'bg-black' }) {
    return (
      <button
        className={`${color} text-white ${paddingX} ${paddingY} rounded-full hover:bg-gray-800`}
        onClick={onClick}
      >
        {text}
      </button>
    );
}

export default Button;
