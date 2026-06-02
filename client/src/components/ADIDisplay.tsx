interface Props {
  adi: number | null;
  mode: "text" | "visual";
}

const ADIDisplay = ({ adi, mode }: Props) => {
  const getColor = (): string => {
    if (adi === 100) return "blue";
    if (adi === 0) return "green";
    return "gray";
  };

  return (
    <div className="display-container">
      {mode === "text" && (
        <div className="text-display">
          <p>ADI</p>
          <p>{adi}</p>
        </div>
      )}

      {mode === "visual" && (
        <div className="adi-circle" style={{ backgroundColor: getColor() }} />
      )}
    </div>
  );
};

export default ADIDisplay;
