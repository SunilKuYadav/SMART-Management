import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // for testing start
  const [counter, setCounter] = useState<number>(0);
  // for testing end

  const [hour, setHour] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [sec, setSec] = useState<number>(0);

  const [hour2, setHour2] = useState<number>(0);
  const [min2, setMin2] = useState<number>(0);
  const [sec2, setSec2] = useState<number>(0);

  const [h1a, setH1a] = useState(false);
  const [h2a, setH2a] = useState(false);

  const [m1a, setM1a] = useState(false);
  const [m2a, setM2a] = useState(false);

  const [s1a, setS1a] = useState(false);
  const [s2a, setS2a] = useState(false);

  const updateTime = () => {
    const newDate = new Date();
    const h = newDate.getHours();
    const m = newDate.getMinutes();
    const s = newDate.getSeconds();

    setHour(() => formateLefth(h));
    setMin(() => formateLeftm(m));
    setSec(() => formateLefts(s));

    setHour2(() => formateRighth(h));
    setMin2(() => formateRightm(m));
    setSec2(() => formateRights(s));
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(() => updateTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  const formateLefth = (prop: number): number => {
    return Math.floor(prop / 10);
  };
  const formateRighth = (prop: number): number => {
    return prop % 10;
  };
  const formateLeftm = (prop: number): number => {
    return Math.floor(prop / 10);
  };
  const formateRightm = (prop: number): number => {
    return prop % 10;
  };
  const formateLefts = (prop: number): number => {
    return Math.floor(prop / 10);
  };
  const formateRights = (prop: number): number => {
    return prop % 10;
  };

  // sec
  useEffect(() => {
    setS2a((p) => !p);
  }, [sec2]);
  useEffect(() => {
    setS1a((p) => !p);
  }, [sec]);

  // min
  useEffect(() => {
    setM2a((p) => !p);
  }, [min2]);
  useEffect(() => {
    setM1a((p) => !p);
  }, [min]);

  // hour
  useEffect(() => {
    setH2a((p) => !p);
  }, [hour2]);
  useEffect(() => {
    setH1a((p) => !p);
  }, [hour]);

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Timer</h1> */}
        <div
          style={{
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <p
            className={h1a ? "animate" : "animate-reverse"}
            style={{ width: "20px", position: "relative" }}
          >
            {hour}
          </p>
          <p
            className={h2a ? "animate" : "animate-reverse"}
            style={{ width: "20px", position: "relative" }}
          >
            {hour2}
          </p>
          <p style={{ width: "20px" }}>:</p>
          <p
            className={m1a ? "animate" : "animate-reverse"}
            style={{ width: "20px", position: "relative" }}
          >
            {min}
          </p>
          <p
            className={m2a ? "animate" : "animate-reverse"}
            style={{ width: "20px", position: "relative" }}
          >
            {min2}
          </p>
          <p style={{ width: "20px" }}>:</p>
          <p
            className={s1a ? "animate" : "animate-reverse"}
            style={{
              width: "20px",
              position: "relative",
            }}
          >
            {sec}
          </p>
          <p
            className={s2a ? "animate" : "animate-reverse"}
            style={{
              width: "20px",
              position: "relative",
            }}
          >
            {sec2}
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
