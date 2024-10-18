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

  return (
    <div>
      {allMoments.map((currentMoment, key) => (
        <div key={key}>
          <div className="form__container">
            <p className="form__name">{currentMoment.name}</p>
            <p className="form__message">{currentMoment.message}</p>
            <p className="form__gift">{currentMoment.gift}</p>
            <p className="form__phone">{currentMoment.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageListPage;
