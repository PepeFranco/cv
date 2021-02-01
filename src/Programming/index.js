import React from "react";
import injectSheet from "react-jss";
import styles from "../leftItemsStyles";

const Programming = ({ classes, cv }) => {
  const items = cv.programming.items;
  return (
    <div className={classes.root}>
      <div className={classes.title}>{cv.programming.title}</div>
      <div className={classes.columns}>
        <div className={classes.column}>
          {items.slice(0, items.length / 2).map((item) => {
            return <div key={item}>{item}</div>;
          })}
        </div>
        <div className={classes.column}>
          {items.slice(items.length / 2).map((item) => {
            return <div key={item}>{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Programming);
