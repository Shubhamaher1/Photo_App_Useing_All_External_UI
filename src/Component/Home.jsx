import AppMenu from "material-ui/AppBar";
import InoutText from "material-ui/TextField";
import { useEffect, useState } from "react";
import Button from "material-ui/RaisedButton";
import Image from "./Image";
function Home() {
  const [result, setResult] = useState([]);
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=25796122-9787be7407c6b392155c3ea05&q=yellow+flowers&image_type=photo`
    )
      .then((data) => data.json())
      .then((data) => {
        setResult(data.hits);
        console.log(data);
      });
  }, []);
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}
    >
      <AppMenu title="Home " />
      <br />
      <InoutText
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <br />
      <Button
        label="Submit"
        primary={true}
        onClick={(e) => {
          setShow(true);
        }}
      />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {show === true &&
          result.map((ele, ind) => <Image key={ind} ele={ele} />)}
      </div>
    </div>
  );
}
export default Home;
