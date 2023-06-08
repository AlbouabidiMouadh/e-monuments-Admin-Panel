import React, { useEffect, useState } from "react";
import axios from "axios";
import url from "../utils/url";
import { useNavigate } from "react-router-dom";

const PopupWindow = ({ onClose }) => {
  const [post, setPost] = useState({ titre: "", description: "", image: null });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setPost((prevPost) => ({ ...prevPost, image: file }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
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
              value={post.titre}
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
              value={post.description}
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
          <div className="flex justify-end">
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

const ContentsCard = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const navigate = useNavigate;
  const [clicked, setClicked] = useState(false);
  useEffect(() => {}, [clicked]);
  const item = props.item;
  const type = props.type;

  const modifyButtonHandler = async () => {
    setShowPopup(true);
  };
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
      alert("item accepted succefully");
      navigate(0);
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
      ) : (
        <td>
          <button
            onClick={async () => {
              await modifyButtonHandler();
            }}
            style={{ margin: "10px 10px 0", fontSize: "15px" }}
          >
            modify
          </button>
        </td>
      )}
      <td>{showPopup && <PopupWindow onClose={handleClosePopup} />}</td>
    </tr>
  );
};

export default ContentsCard;
