import constants from "./constants";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingTop: "1vh",
    marginRight: "2vw",
  },
  title: {
    fontSize: constants.text.sectionHeader,
    fontWeight: "bold",
  },
  columns: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  column: {
    marginRight: "2vw",
  },
};

export default styles;
