import React, { useEffect, useState } from "react";
import axios from "axios";
import url from "../utils/url";
import { useNavigate } from "react-router-dom";
const ContentsCard = (props) => {
  const navigate = useNavigate;
  const [clicked, setClicked] = useState(false);
  useEffect(() => {}, [clicked]);
  const item = props.item;
  const type = props.type;
  const deleteButtonHandler = async () => {
    console.log("delete button presses");
    const response = await axios.delete(`${url}/${type}/${item._id}`);
    try {
      console.log(response.data);
      alert("item deleted succefully");
      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };
  const acceptButtonHandler = async () => {
    console.log("accept button presses");
    const response = await axios.put(`${url}/${type}/${item._id}`, {
      approved: true,
    });
    try {
      console.log(response.data);
      // alert("item deleted succefully");
      alert("item deleted succefully");
      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "space-between",
    //   }}
    // >
    <tr>
      <td>
        <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
          {item._id}
        </div>
      </td>
      <td>
        <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
          {item.title}
        </div>
      </td>
      <td>
        <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
          {item.createdByName || item.createdBy }
        </div>
      </td>
      {type !== "guide" ? (
        <td>
          <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
            {item.approved ? "true" : "false"}
          </div>
        </td>
      ) : (
        <div>
          <td>
            <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
              {String(item.description).substring(0, 50)}...
            </div>
          </td>
        </div>
      )}
      
      <td>
        <button
          onClick={() => {
            deleteButtonHandler();
            setClicked(true);
          }}
          style={{ margin: "10px 10px 0", fontSize: "15px" }}
        >
          delete
        </button>
      </td>
      {type !== "guide" ? (
        <td>
          <button
            onClick={async () => {
              await acceptButtonHandler();
              setClicked(true);
            }}
            style={{ margin: "10px 10px 0", fontSize: "15px" }}
          >
            accept
          </button>
        </td>
      ) : null}
    </tr>
    // </div>
  );
};

export default ContentsCard;
