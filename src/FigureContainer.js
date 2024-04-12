import Figure from "./Figure";
const FigureContainer = ({ detailsVisible, toggleDetails }) => {
  return (
    <div className="self-contained figure-container">
      <Figure detailsVisible={detailsVisible} toggleDetails={toggleDetails} />
    </div>
  );
};

export default FigureContainer;
