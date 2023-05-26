import React from "react";
import axios from "axios";
import url from "../utils/url";
const ContentsCard = (props) => {
  const item = props.item;
  const type = props.type;
  const deleteButtonHandler = async () => {
    const response = await axios.delete(`${url}/${type}/:${item._id}`);
    try {
      console.log(response.data);
      alert("item deleted succefully");
    } catch (err) {
      console.log(err);
    }
  };
  const acceptButtonHandler = async () => {
    const response = await axios.put(`${url}/${type}/:${item._id}`, {
      approved: true,
    });
    try {
      console.log(response.data);
      // alert("item deleted succefully");
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
            {item.createdBy}
          </div>
        </td>
        <td>
          <button
            onClick={() => {
              acceptButtonHandler();
            }}
            style={{ margin: "10px 10px 0", fontSize: "15px" }}
          >
            accept
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              deleteButtonHandler();
            }}
            style={{ margin: "10px 10px 0", fontSize: "15px" }}
          >
            delete
          </button>
        </td>
      </tr>
    // </div>
  );
};

export default ContentsCard;
