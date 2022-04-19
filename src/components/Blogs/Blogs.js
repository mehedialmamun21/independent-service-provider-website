import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blog-details">
      <h2>Difference between authorization and authentication</h2>
      <h5>
        authentication is the process of verifying who someone is, whereas
        authorization is the process of verifying what specific applications,
        files, and data a user has access to.
      </h5>
      <br />
      <br />
      <h2>Why are you using firebase?</h2>
      <h5>
        Firebase by Google can be used for the following: Firebase manages all
        data real-time in the database. So, the exchange of data to and fro from
        the database is easy and quick. Hence, if you are looking to develop
        mobile apps such as live streaming, chat messaging, etc
      </h5>
      <br />
      <br />
      <h2>
        What other services does firebase provide other than authentication ?
      </h2>
      <h5>
        Cloud Firestore, Cloud Functions, Authentication, Hosting, Cloud
        Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links,
        Remote Config etc
      </h5>
    </div>
  );
};

export default Blogs;
