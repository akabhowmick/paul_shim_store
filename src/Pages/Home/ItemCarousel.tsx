import "./Home.css";

const itemNames = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
];

export const ItemCarousel = () => {
  return (
    <div className="scrolling-words-container">
      <span>You can buy custom: </span>
      <div className="scrolling-words-box">
        <ul>
          {itemNames.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
