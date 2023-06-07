import React, { useState, useEffect } from "react";
import ContentsCard from "./ContentsCard";
import axios from "axios";
import url from "../utils/url";
const ContentsCards = (props) => {
  const type = props.type;
  const [Data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(`${url}/all-${type}`);
    try {
      const data = response.data;
      setData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <table>
        <tr>
          <td>
            <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>id</div>
          </td>
          <td>
            <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>title</div>
          </td>
          <td>
            <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
              createdBy
            </div>
          </td>
          {type != "guide" ? (
            <td>
              <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
                approved
              </div>
            </td>
          ) : (
            <td>
              <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
                description
              </div>
            </td>
          )}

          <td>
            <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
              delete
            </div>
          </td>
          {type != "guide" ? (
            <td>
              <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
                accept
              </div>
            </td>
          ) : null}
        </tr>
        {Data.map((item) => {
          return <ContentsCard item={item} type={type} />;
        })}
      </table>
    </div>
  );
};

export default ContentsCards;
