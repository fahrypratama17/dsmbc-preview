const Label = ({ text, className, style }:{
  text: string,
  className?: string,
  style?: React.CSSProperties
}) => {
  return (
    <div className={`flex gap-4 items-center justify-center rounded-full py-2 px-6 w-fit ${className}`} style={style}>
      <p className={`font-medium`}>{text}</p>
    </div>
  );
};

export default Label;