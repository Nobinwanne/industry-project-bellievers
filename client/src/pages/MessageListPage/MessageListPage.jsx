import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function MessageListPage() {
  const [allMoments, setAllMoments] = useState([]);

  const getAllMoments = async () => {
    try {
      const response = await axios.get("http://localhost:8050/moments");
      setAllMoments(response.data);
    } catch (err) {
      console.error("Failed to fetch moments list", err);
    }
  };

  useEffect(() => {
    getAllMoments();
  }, [allMoments]);

  const addMoment = async (event) => {
    try {
      const form = event.target;

      const newMoment = {
        name: form.name.value,
        message: _req.body.message,
        gift: _req.body.gift,
        phone: _req.body.phone,
      };

      await axios.post(`http://localhost:8050/moments`, newMoment);
      setAllMoments([]);
    } catch (err) {
      console.error("Failed to fetch moments list", err);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addMoment(e);
    console.log("Moment added");
  };
  return (
    <div>
      {allMoments.map((currentMoment, key) => (
        <div key={key}>
          <div>
            <p>{currentMoment.id}</p>
            <p>{currentMoment.name}</p>
            <p>{currentMoment.message}</p>
            <p>{currentMoment.gift}</p>
            <p>{currentMoment.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageListPage;
