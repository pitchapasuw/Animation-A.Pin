import { useEffect, useRef, useState } from "react";

import fieldImage from "../assets/field.jpg";
import basketballImage from "../assets/basketball.jpg";
import footballImage from "../assets/football.png";
import volleyballImage from "../assets/volleyball.jpg";

const Animation = ({ fieldWidth, fieldHeight, ballRadius }) => {
  // default
  const _fieldWidth = fieldWidth || 640;
  const _fieldHeight = fieldHeight || 480;
  const _ballRadius = ballRadius || 50;

  // internal calculation
  const ballDiameter = 2 * _ballRadius;

  // controller
  const [ballType, setBallType] = useState("none");
  const ballRef = useRef(null);

  useEffect(() => {
    if (!ballRef.current) return;

    if (ballType === "none") {
      ballRef.current.style.backgroundImage = "";
    } else if (ballType === "basketball") {
      ballRef.current.style.backgroundImage = `url(${basketballImage})`;
    } else if (ballType === "football") {
      ballRef.current.style.backgroundImage = `url(${footballImage})`;
    } else if (ballType === "volleyball") {
      ballRef.current.style.backgroundImage = `url(${volleyballImage})`;
    }
  }, [ballType]);

  //view
  return (
    <>
      {/* animation container */}
      <div className="mx-auto" style={{ width: "fit-content" }}>
        {/* field */}
        <div
          className="mx-auto border border-2 border-black position-relative"
          style={{
            width: `${_fieldWidth}px`,
            height: `${_fieldHeight}px`,
            overflow: "hidden",
          }}
        >
          <div
            className="border border-2 border-black position-relative h-100 w-100"
            style={{
              width: `${_fieldWidth}px`,
              height: `${_fieldHeight}px`,
              backgroundImage: `url(${fieldImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* ball */}
          <div
            ref={ballRef}
            className="border border-1 border-black rounded-circle position-absolute"
            style={{
              width: `${ballDiameter}px`,
              height: `${ballDiameter}px`,
              left: "100px",
              top: "100px",
              backgroundColor: "lightcyan",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>

        {/* button row */}
        <div className="mt-1 d-flex justify-content-between gap-4">
          {/* button run/pause */}
          <button type="button" className="btn btn-success">
            <b className="bi bi-person-walking">&nbsp;RUN</b>
          </button>

          {/* ball type */}
          <div className="d-flex justify-content-end gap-1">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setBallType("none")}
            >
              None
            </button>

            <button
              className="btn btn-outline-primary"
              onClick={() => setBallType("basketball")}
            >
              Basketball
            </button>

            <button
              className="btn btn-outline-primary"
              onClick={() => setBallType("football")}
            >
              Football
            </button>

            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => setBallType("volleyball")}
            >
              Volleyball
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation;
