import { Rotate90DegreesCcw } from "@material-ui/icons";

const styles = {
  container: {
    display: "flex",
    flex: 6,
    flexDirection: "row",
    backgroundColor: "#2B2B2B",
    width: "100vw",
    height: "100vh",
    marginTop: 0,
    marginLeft: 0,
    justifyContent: "center",
  },

  innerContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 5,
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%",
    height: "90%",
    alignSelf: "center",
    backgroundColor: "#2B2B2B",
    borderWidth: 5,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#C8C8C8",
    alignItems: "center",
  },

  rpm: {
    backgroundColor: "#2B2B2B",
    width: "90%",
    height: "12%",
    marginTop: 20,
    borderColor: "#CC9F07",
    borderWidth: 2,
    borderStyle: "solid",
  },

  centerDisplay: {
    width: "90%",
    height: "40%",
    marginTop: 25,
    display: "flex",
    flexDirection: "row",
  },

  centerLeft: {
    flex: 1,
    marginLeft: -10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },

  centerLeftBlock: {
    width: "40%",
    height: "35%",
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#2B2B2B",
    borderColor: "#C8C8C8",
    borderTop: 0,
    borderWidth: 5,
    borderStyle: "solid",
  },

  centerCenter: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  centerCenterBlock: {
    width: "90%",
    height: "85%",
    backgroundColor: "#2B2B2B",
    borderColor: "#C8C8C8",
    borderWidth: 5,
    borderStyle: "solid",
  },

  centerRight: {
    flex: 1,
    marginRight: -20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },

  centerRightBlock: {
    width: "80%",
    height: "35%",
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#2B2B2B",
    borderColor: "#C8C8C8",
    borderTop: 0,
    borderWidth: 5,
    borderStyle: "solid",
  },

  bottomDisplay: {
    width: "90%",
    height: "35%",
    marginTop: 25,
    display: "flex",
    flexDirection: "row",
  },

  bottomFirst: {
    flex: 1.5,
    borderColor: "#CC9F07",
    borderWidth: 2,
    borderStyle: "solid",
  },

  bottomSecond: {
    flex: 1,
    borderColor: "#CC9F07",
    borderWidth: 2,
    borderStyle: "solid",
  },

  bottomThird: {
    flex: 1.2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  bottomUpperImage: {
    width: "80%",
    alignSelf: "center",
  },

  bottomLowerImage: {
    width: "30%",
    marginTop: 15,
    alignSelf: "center",
  },

  bottomFourth: {
    flex: 1.2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  bottomFourthImage: {
    width: "80%",
    alignSelf: "center",
  },

  bottomFifth: {
    flex: 0.625,
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    maxWidth: 100,
  },

  brake: {
    minWidth: 200,
    alignSelf: "center",
    backgroundColor: "#2B2B2B",
    borderColor: "#C8C8C8",
    borderWidth: 2,
    borderStyle: "solid",
  },

  gas: {
    minWidth: 200,
    alignSelf: "center",
    backgroundColor: "#2B2B2B",
    borderColor: "#C8C8C8",
    borderWidth: 2,
    borderStyle: "solid",
  },
};

export default styles;
