const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  flag: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "0px",
    "@media print": {
      display: "none",
    },
  },
  content: {
    marginLeft: "10vw",
    marginRight: "10vw",
    marginBottom: "5vw",
    maxWidth: "210mm",
    flexDirection: "column",
    display: "flex",
  },
  topRow: {
    display: "flex",
    flexDirection: "column",
  },
  bottomRow: {
    display: "flex",
    flexDirection: "row",
  },
};

export default styles;
