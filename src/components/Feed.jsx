import React, { useState, useEffect } from "react";
import Api from "../../api/db.json";
import Post from "./Post";
import "../Style/feed.css";
import Skeleton from "./Skeleton";
function Feed() {
  console.log(Api);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 2000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="feed">
      {Api.videos &&
        Api.videos.map((item) => {
          return (
            <div className="items">
              {isLoading ? <Skeleton /> : <Post post={item} />}
            </div>
          );
        })}
    </div>
  );
}

export default Feed;
