import { useEffect, useState } from "react";
import LineChart from "../components/LineChart";
import { Container } from "react-bootstrap";
import { BITCOIN_SERVICE } from "../api/service";

const BitCoinGraph = () => {
  const [keys, setKeys] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    BITCOIN_SERVICE().then(({ data }) => {
      setKeys(Object.keys(data.bpi));
      setValues(Object.values(data.bpi));
    });
  }, []);

  return (
    <Container>
      <LineChart labels={keys} values={values} />
    </Container>
  );
};

export default BitCoinGraph;
