import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Box } from "@mui/system";
import LinearProgress from "@mui/material/LinearProgress";
import styles from "./styles";
import steeringWheel from "./steering-wheel.png";
import home from "./home.png";
import gForce from "./g-force.png";
import { CircularProgress, IconButton } from "@mui/material";
import mockData from "./MockData";

const Dashboard = () => {
  const history = useHistory();

  const [rpm, setRPM] = useState(700);
  const [gear, setGear] = useState("N");
  const [lapTime, setLapTime] = useState("00:00:00");
  const [totalTime, setTotalTime] = useState("00:00:00");
  const [brakeTempFrontLeft, setBrakeTempFrontLeft] = useState(80.0);
  const [brakeTempFrontRight, setBrakeTempFrontRight] = useState(80.0);
  const [brakeTempRearLeft, setBrakeTempRearLeft] = useState(80.0);
  const [brakeTempRearRight, setBrakeTempRearRight] = useState(80.0);
  const [waterTemp, setWaterTemp] = useState(160);
  const [speed, setSpeed] = useState(100);
  const [lap, setLap] = useState(1);
  const [brakePosition, setBrakePosition] = useState(100);
  const [gasPosition, setGasPosition] = useState(0);

  useEffect(() => {
    mockData.forEach((data, index) => {
      setTimeout(() => {
        setRPM(data.rpm);
        setGear(data.gear);
        setLapTime(data.lapTime);
        setTotalTime(data.totalTime);
        setBrakeTempFrontLeft(data.brakeTempFrontLeft);
        setBrakeTempFrontRight(data.brakeTempFrontRight);
        setBrakeTempRearLeft(data.brakeTempRearLeft);
        setBrakeTempRearRight(data.brakeTempRearRight);
        setWaterTemp(data.waterTemp);
        setSpeed(data.speed);
        setLap(data.lap);
        setBrakePosition(data.brakePosition);
        setGasPosition(data.gasPosition);
      }, 200 * (index + 1));
    });
  }, []);

  const {
    container,
    innerContainer,
    rpmContainer,
    rpmStyle,
    blockTitle,
    centerDisplay,
    centerLeft,
    centerLeftBlock,
    centerCenter,
    centerCenterBlock,
    centerRight,
    centerRightBlock,
    bottomDisplay,
    bottomFirst,
    bottomFirstBlock,
    bottomFirstProgressBox,
    bottomFirstProgress,
    bottomSecond,
    bottomSecondBlock,
    bottomThird,
    bottomUpperImage,
    bottomLowerImage,
    bottomFourth,
    bottomFourthImage,
    gForceDot,
    bottomFifth,
    bottomFifthTitle,
    brake,
    gas,
  } = styles;
  return (
    <Box style={container}>
      <Box style={innerContainer}>
        <Box style={rpmContainer}>
          <LinearProgress
            style={rpmStyle}
            variant="determinate"
            value={(rpm / 8300) * 100}
            color="inherit"
          />
          {/* <Box style={rpmStop}></Box> */}
        </Box>
        <Box style={centerDisplay}>
          <Box style={centerLeft}>
            <Box style={centerLeftBlock}>
              <Box style={blockTitle}>BRAKE °F</Box>
              {brakeTempFrontLeft}
            </Box>
            <Box style={centerLeftBlock}>
              <Box style={blockTitle}>BRAKE °F</Box>
              {brakeTempFrontRight}
            </Box>
            <Box style={centerLeftBlock}>
              <Box style={blockTitle}>BRAKE °F</Box>
              {brakeTempRearLeft}
            </Box>
            <Box style={centerLeftBlock}>
              <Box style={blockTitle}>BRAKE °F</Box>
              {brakeTempRearRight}
            </Box>
          </Box>
          <Box style={centerCenter}>
            <Box style={centerCenterBlock}>{gear}</Box>
          </Box>
          <Box style={centerRight}>
            <Box style={centerRightBlock}>
              <Box style={blockTitle}>LAP TIME</Box>
              {lapTime}
            </Box>
            <Box style={centerRightBlock}>
              <Box style={blockTitle}>TOTAL TIME</Box>
              {totalTime}
            </Box>
          </Box>
        </Box>
        <Box style={bottomDisplay}>
          <Box style={bottomFirst}>
            <Box style={bottomFirstBlock}>
              <Box style={blockTitle} sx={{ position: "absolute", top: 10 }}>
                WATER TEMP
              </Box>
              <Box style={bottomFirstProgressBox}>
                <Box
                  sx={{
                    position: "absolute",
                    textAlign: "center",
                    right: "-10%",
                    fontSize: 45,
                    transform: "rotate(90deg)",
                    width: "50%",
                    height: "50%",
                  }}
                >
                  {waterTemp}
                </Box>
                <CircularProgress
                  style={bottomFirstProgress}
                  variant="determinate"
                  color="inherit"
                  value={(waterTemp - 150) / 2}
                ></CircularProgress>
              </Box>
            </Box>
          </Box>
          <Box style={bottomSecond}>
            <Box style={bottomSecondBlock}>
              <Box style={blockTitle}>SPEED</Box>
              {speed}
            </Box>
            <Box style={bottomSecondBlock}>
              <Box style={blockTitle}>LAP</Box>
              {lap}
            </Box>
          </Box>
          <Box style={bottomThird}>
            <img src={steeringWheel} style={bottomUpperImage}></img>
            <IconButton
              style={bottomLowerImage}
              onClick={() => {
                history.push("/");
              }}
            >
              <img src={home} style={{ width: "150%" }}></img>
            </IconButton>
          </Box>
          <Box style={bottomFourth}>
            <img src={gForce} style={bottomFourthImage}></img>
            <Box style={gForceDot}></Box>
          </Box>
          <Box style={bottomFifth}>
            <LinearProgress
              style={brake}
              variant="determinate"
              value={brakePosition}
              color="error"
              sx={{
                transform: "rotate(-90deg)",
                width: 200,
                height: 70,
              }}
            />
            <Box style={bottomFifthTitle}>BRAKE</Box>
          </Box>
          <Box style={bottomFifth}>
            <LinearProgress
              style={gas}
              variant="determinate"
              value={gasPosition}
              color="inherit"
              sx={{
                transform: "rotate(-90deg)",
                width: 200,
                height: 70,
              }}
            />
            <Box style={bottomFifthTitle}>GAS</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
