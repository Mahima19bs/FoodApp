const Shimmer = ({ length }) => {
  console.log("shimmer length",length);
  return (
    <div className="shimmer-container">
      {Array.from({ length }).map((_, index) => (
        <div key={index} className="shimmer-cards"></div>
      ))}
    </div>
  );
};

export default Shimmer;