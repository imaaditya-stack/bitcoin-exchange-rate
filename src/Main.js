import React from "react";
import { useStyles } from "./config/StylesConfig";
import BitCoinGraph from "./containers/BitcoinGraph";
import BitCoinGraphNav from "./containers/BitcoinGraphNav";
import HybridToolBar from "./components/HybridToolBar";
import MainNav from "./containers/MainNav";

const Main = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <HybridToolBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <MainNav />
          <BitCoinGraphNav />
          <BitCoinGraph />
        </main>
      </div>
    </>
  );
};

export default Main;
