import { useState } from "react";
import Dnd from "./pages/dnd/dnd";
import TableComp from "./pages/table/tableComp";
import Modal from "./component/modal/modal";

const App = () => {
  const [select, setSelect] = useState("table");
  const [isOpen, setOpen] = useState(false);
  const [isOpen1, setOpen1] = useState(false);
  return (
    <div>
      <header>
        <h3>Task Name&nbsp;: &nbsp; </h3>
        <select onChange={(e) => setSelect(e.target.value)}>
          <option value="table">Table</option>
          <option value="modal">Modal</option>
          <option value="dnd">dnd</option>
        </select>
      </header>
      {select === "table" ? (
        <TableComp />
      ) : select === "dnd" ? (
        <Dnd />
      ) : (
        <div style={{ padding: "30px" }}>
          <Modal
            name="Modal 1"
            isOpen={isOpen}
            setOpen={setOpen}
            title="Join our Team"
            content="Join us for Latest update Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          >
            <div>
              <input placeholder="Email" />
              <br />
              <button className="subscribe">Subscribe</button>
            </div>
          </Modal>
          <Modal
            name="Modal 2"
            isOpen={isOpen1}
            setOpen={setOpen1}
            title="Conformation"
            content="Are you sure you want share this post on your social media ? sharing this content will let your friends and followers know about it"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <button className="cancel">Cancel</button>{" "}
              <button className="subscribe">Subscribe</button>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default App;
