function Button({
  onClick,
  text,
  paddingX = 'px-6',
  paddingY = 'py-2',
  color = 'bg-black',
  textColor = 'text-white',
  border = 'border-transparent',
  disableHover = false,
  textSize = 'text-base',
  fullWidth = false 
}) {
  return (
    <button
      className={`${color} ${textColor} ${border} ${paddingX} ${paddingY} ${textSize} rounded-full ${disableHover ? '' : 'hover:bg-gray-800'} border ${fullWidth ? 'w-full' : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
