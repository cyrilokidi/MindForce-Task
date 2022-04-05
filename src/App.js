import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="product-name-container">
        <p>豐進儲蓄計劃</p>
      </div>

      <div className="product-category-container">
        <div className="product-category-item">
          <p>問題1a</p>
          <div className="product-category-answer-container">
            <b className="product-category-answer active-answer">A</b>
            <b className="product-category-answer default-answer">B</b>
            <b className="product-category-answer inactive-answer">C</b>
            <b className="product-category-answer active-answer">D</b>
            <b className="product-category-answer active-answer">E</b>
          </div>
        </div>
      </div>
    </div>
  );
}
