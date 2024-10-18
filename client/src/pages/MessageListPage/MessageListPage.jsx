import { useState } from "react";
import { useEffect } from "react";
import { formatDate } from "../../utils/utils";
import axios from "axios";
import "./MessageListPage.scss";

function MessageListPage() {
  const [allMoments, setAllMoments] = useState([]);

  const getAllMoments = async () => {
    try {
      const response = await axios.get("http://localhost:8080/moments");
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
        <div className="moments__section" key={key}>
          <p className="moments__message">{currentMoment.message}</p>
          <div className="moments__container">
            <p className="form__gift"> Gift: {currentMoment.gift}</p>
            <p className="moments__name"> From: {currentMoment.name}</p>
            <p className="moments__timestamp">
              Posted: {formatDate(currentMoment.timestamp)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageListPage;
