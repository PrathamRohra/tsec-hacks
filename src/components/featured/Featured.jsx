import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://fthmb.tqn.com/eEymkEZ9Ys9LxYw6yPGgbxCvNT4=/2125x1411/filters:fill(auto,1)/GettyImages-534909771-580f5f4c5f9b58564cc08bf2.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bangalore</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://image3.mouthshut.com/images/Restaurant/Photo/-94144_8825.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lucknow</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
