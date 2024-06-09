export const underline = (width: string, margin: string, style?: string) => {
  return <div className={`border-b-2 border-gray-500 ${width} ${margin} ${style}`}></div>;
};
