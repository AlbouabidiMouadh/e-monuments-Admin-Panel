import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../utils/url";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const ContentsCards = (props) => {
  const item = props.item;
  const [guideID, setGuideId] = useState();
  const PopupWindow = ({ onClose, id }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    // const [post, setPost] = useState({
    //   titre: "",
    //   description: "",
    //   image: null,
    // });

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      if (name == "titre") setTitle(value);
      if (name == "description") setDescription(value);

      // setPost((prevPost) => ({ ...prevPost, [name]: value }));
      // setTitle();
    };

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setFile(file);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      // console.log(item)
      const pictureName = `${uuidv4()}.jpg`;
      try {
        const formData = new FormData();
        // const file = event.target.files[0];
        formData.append("profile", file, pictureName);

        const response = await axios.put(`${url}/upload-picture`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("Request create post made");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }

      try {

        const response = await axios.put(`${url}/modify-guide/${id}`, {
          title: title,
          description: description,
          image: pictureName,
        }); // Replace "your-endpoint" with your actual API endpoint
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      onClose();
    };
    const handleCancel = () => {
      onClose();
    };
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
        <div className="bg-white rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="titre"
                className="block text-gray-700 font-bold mb-2"
              >
                Titre
              </label>
              <input
                type="text"
                id="titre"
                name="titre"
                value={title}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-gray-700 font-bold mb-2"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                className="border rounded px-3 py-2 w-full"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const modifyButtonHandler = async () => {
    setShowPopup(true);
  };

  const deleteButtonHandler = async () => {
    console.log("delete button pressed");
    try {
      const response = await axios.delete(`${url}/${type}/${guideID}`);
      console.log(response.data);
      alert("item deleted successfully");
      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };

  const acceptButtonHandler = async () => {
    console.log("accept button pressed");
    try {
      const response = await axios.put(`${url}/${type}/${guideID}`, {
        approved: true,
      });
      console.log(response.data);
      alert("item accepted successfully");
      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };
  const type = props.type;
  const [Data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // Add showPopup state
  const navigate = useNavigate(); // Add parentheses to useNavigate() to call the hook

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/all-${type}`);
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

  const handleOpenPopup = () => {
    setShowPopup(true);
  };
  
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  return (
    <div>
      {showPopup && <PopupWindow onClose={handleClosePopup} id={guideID} />}
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
          {type !== "guide" ? (
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
          {type !== "guide" ? (
            <td>
              <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
                accept
              </div>
            </td>
          ) : (
            <td>
              <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
                modifier
              </div>
            </td>
          )}
        </tr>
        {Data.map((item) => {
          // return <ContentsCard item={item} type={type} />;
          return (
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
                  {item.createdByName || item.createdBy}
                </div>
              </td>
              {type !== "guide" ? (
                <td>
                  <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
                    {/* {item.approved ? "true" : "false"} */}
                    approved
                  </div>
                </td>
              ) : (
                <td>
                  <div style={{ margin: "10px 10px 0", fontSize: "15px" }}>
                    {String(item.description).substring(0, 50)}...
                  </div>
                </td>
              )}

              <td>
                <button
                  onClick={() => {
                    setGuideId(String(item._id));
                    deleteButtonHandler();
                  }}
                  style={{ margin: "10px 10px 0", fontSize: "15px" }}
                  >
                  delete
                </button>
              </td>
              {type !== "guide" ? (
                <td>
                  <button
                    onClick={() => {
                      setGuideId(String(item._id));
                      acceptButtonHandler();
                    }}
                    style={{ margin: "10px 10px 0", fontSize: "15px" }}
                  >
                    accept
                  </button>
                </td>
              ) : (
                <td>
                  <button
                    onClick={async () => {
                      setGuideId(String(item._id));
                      await modifyButtonHandler();
                    }}
                    style={{ margin: "10px 10px 0", fontSize: "15px" }}
                  >
                    modify
                  </button>
                </td>
              )}
              <td></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ContentsCards;
