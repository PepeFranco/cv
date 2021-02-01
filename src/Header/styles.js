import constants from "../constants";

const styles = {
  root: {
    color: "white",
    backgroundColor: constants.colors.gray,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "10vw",
    paddingRight: "10vw",
  },
  content: {
    height: "10vh",
    width: "100%",
    maxWidth: "210mm",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  name: {
    fontSize: constants.text.header,
    display: "flex",
    alignItems: "flex-end",
  },
  contact: {
    display: "flex",
    alignItems: "flex-start",
  },
  mail: {
    color: "white",
  },
};

export default styles;
