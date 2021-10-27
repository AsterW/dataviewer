import React from "react";
import PropTypes from "prop-types";
import { border, Box } from "@mui/system";
import LinearProgress from "@mui/material/LinearProgress";
import { Container, Typography } from "@mui/material";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import steeringWheel from "./steering-wheel.png";
import home from "./home.png";
import gForce from "./g-force.png";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
  },
  bar: {
    backgroundColor: "#CC9F07",
  },
}))(LinearProgress);

const Dashboard = () => {
  const {
    container,
    innerContainer,
    rpm,
    centerDisplay,
    centerLeft,
    centerLeftBlock,
    centerCenter,
    centerCenterBlock,
    centerRight,
    centerRightBlock,
    bottomDisplay,
    bottomFirst,
    bottomSecond,
    bottomThird,
    bottomUpperImage,
    bottomLowerImage,
    bottomFourth,
    bottomFourthImage,
    bottomFifth,
    brake,
    gas,
    gasContainer,
  } = styles;
  return (
    <Box style={container}>
      <Box style={innerContainer}>
        <LinearProgress
          style={rpm}
          variant="determinate"
          value={50}
          color="error"
        />
        <Box style={centerDisplay}>
          <Box style={centerLeft}>
            <Box style={centerLeftBlock}></Box>
            <Box style={centerLeftBlock}></Box>
            <Box style={centerLeftBlock}></Box>
            <Box style={centerLeftBlock}></Box>
          </Box>
          <Box style={centerCenter}>
            <Box style={centerCenterBlock}></Box>
          </Box>
          <Box style={centerRight}>
            <Box style={centerRightBlock}></Box>
            <Box style={centerRightBlock}></Box>
          </Box>
        </Box>
        <Box style={bottomDisplay}>
          <Box style={bottomFirst}></Box>
          <Box style={bottomSecond}></Box>
          <Box style={bottomThird}>
            <img src={steeringWheel} style={bottomUpperImage}></img>
            <img src={home} style={bottomLowerImage}></img>
          </Box>
          <Box style={bottomFourth}>
            <img src={gForce} style={bottomFourthImage}></img>
          </Box>
          <Box style={bottomFifth}>
            <LinearProgress
              style={brake}
              variant="determinate"
              value={20}
              color="error"
              sx={{
                transform: "rotate(-90deg)",
                width: 200,
                height: 50,
              }}
            />
          </Box>
          <Box style={bottomFifth}>
            <LinearProgress
              style={gas}
              variant="determinate"
              value={80}
              color="success"
              sx={{
                transform: "rotate(-90deg)",
                width: 200,
                height: 50,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
