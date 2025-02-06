import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

export default function RangeFilter() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [minValue2, setMinValue2] = useState(0);
  const [maxValue2, setMaxValue2] = useState(0);
  return (
    <div className="App">
      <div>
        <h1>multi-range-slider-react demo</h1>
      </div>
      <hr />
      <div
        className="multi-range-slider-container"
        style={{ border: "solid 1px" }}
      >
        <h3> custom style </h3>
        <hr />
        <div>
          style=" border: 'none', boxShadow: 'none', padding: '15px 10px' "
        </div>
        <div>label='false'</div>
        <div>ruler='false'</div>
        <div>canMinMaxValueSame={'{true}'}</div>
        <div>barLeftColor='red'</div>
        <div>barInnerColor='blue'</div>
        <div>barRightColor='green'</div>
        <div>thumbLeftColor='lime'</div>
        <div>thumbRightColor='lime'</div>
        <MultiRangeSlider
          min={0}
          max={100}
          canMinMaxValueSame={true}
          onInput={(e) => {
            setMinValue(e.minValue);
            setMaxValue(e.maxValue);
          }}
          onChange={(e) => {
            setMinValue2(e.minValue);
            setMaxValue2(e.maxValue);
          }}
          label={false}
          ruler={false}
          style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
          barLeftColor="red"
          barInnerColor="blue"
          barRightColor="green"
          thumbLeftColor="lime"
          thumbRightColor="lime"
        />
        <div className="divOutput">
          <div>onInput :</div>
          <div>
            <span>{minValue}</span>
            <span>{maxValue}</span>
          </div>
        </div>
        <div className="divOutput">
          <div>onChange :</div>
          <div>
            <span>{minValue2}</span>
            <span>{maxValue2}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
