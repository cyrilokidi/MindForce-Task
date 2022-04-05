import "./styles.css";

export default function App() {
  return (
    <div className="product-mapping-result-container">
      <div className="product-mapping-header"></div>

      <div className="product-mapping-result-legend">
        <div className="legend-item">
          <div className="legend-status active-legend-status" />
          <p>必須</p>
        </div>
        <div className="legend-item">
          <div className="legend-status inactive-legend-status" />
          <p>選填</p>
        </div>
      </div>

      <div className="product-mapping-result-title">
        <p>分紅壽險</p>
      </div>

      <div className="product-result-container">
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

          <div className="product-category-item">
            <p>問題1b</p>
            <div className="product-category-answer-container">
              <b className="product-category-answer active-answer">A</b>
              <b className="product-category-answer default-answer">B</b>
              <b className="product-category-answer inactive-answer">C</b>
            </div>
          </div>

          <div className="product-category-item">
            <p>問題1c</p>
            <div className="product-category-answer-container">
              <b className="product-category-answer active-answer">A</b>
              <b className="product-category-answer default-answer">B</b>
              <b className="product-category-answer inactive-answer">C</b>
              <b className="product-category-answer active-answer">D</b>
              <b className="product-category-answer active-answer">E</b>
            </div>
          </div>

          <div className="product-category-item">
            <p>問題1c</p>
            <p>最長至100歲</p>
          </div>

          <div className="product-category-item">
            <p>簡易分析</p>
            <p>問題2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
