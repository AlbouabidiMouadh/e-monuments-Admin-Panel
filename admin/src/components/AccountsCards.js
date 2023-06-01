import React, { useState, useEffect } from "react";
import AccountsCard from "./AccountsCard";
import axios from "axios";
import url from "../utils/url";
const AccountsCards = (props) => {
  const type = props.type;
  const [accounts, setAccounts] = useState([]);
  const fetchAccounts = async () => {
    const response = await axios.get(`${url}/all-${type}s`);
    try {
      const data = response.data;
      setAccounts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAccounts();
  }, []);
  return (
    <div>
      <table>
        <tr>
          <td>
            <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>id</div>
          </td>
          <td>
            <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>name</div>
          </td>
          <td>
            <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>email</div>
          </td>
          {type == "admin" ? (
            <td>
              <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
                Created By
              </div>
            </td>
          ) : null}
          <td>
            <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
              delete
            </div>
          </td>
        </tr>
        {accounts.map((item) => {
          return <AccountsCard item={item} type={type} />;
        })}
      </table>
    </div>
  );
};

export default AccountsCards;
