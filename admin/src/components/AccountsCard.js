import axios from "axios";
import React from "react";
import url from "../utils/url";

const AccountsCard = (props) => {
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
  return (
    <tr>
        <td>
          <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
            {item._id}
          </div>
        </td>
        <td>
          <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
            {item.firstName+" "+item.lastName}
          </div>
        </td>
        <td>
          <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
            {item.email}
          </div>
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
  );
};

export default AccountsCard;
