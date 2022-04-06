import "./styles.css";

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <div className="header-title">
        <p>產品配對工具</p>
      </div>

      {/* <div className="close-button-container">
        <button>close</button>
      </div> */}
    </div>
  );
};

const ResultLegend = () => {
  return (
    <div className="result-legend">
      <div className="legend-item">
        <div className="legend-status active-legend-status" />
        <p>必須</p>
      </div>

      <div className="legend-item">
        <div className="legend-status inactive-legend-status" />
        <p>選填</p>
      </div>
    </div>
  );
};

const ProductResultContainer = () => {
  return (
    <div className="product-result-container">
      <div className="product-name">
        <p>豐進儲蓄計劃</p>
      </div>
    </div>
  );
};

const ResultContainer = () => {
  return (
    <div className="result-container">
      <div className="result-title">
        <p>分紅壽險</p>
      </div>

      <ProductResultContainer />
    </div>
  );
};

export default function App() {
  return (
    <div className="product-mapping-container">
      <HeaderContainer />

      <ResultLegend />

      <ResultContainer />
    </div>
  );
}
