import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewDonor = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://host-demo-app.onrender.com/api/donors")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {data.map((value) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={value.id}
          >
            <div className="card shadow h-100">
              <div className="card-body">
                <h4 className="text-danger text-center mb-3">
                  🩸 Blood Donor
                </h4>

                <p>
                  <strong>Name:</strong> {value.donor_name}
                </p>

                <p>
                  <strong>Age:</strong> {value.age}
                </p>

                <p>
                  <strong>Gender:</strong> {value.gender}
                </p>

                <p>
                  <strong>Blood Group:</strong> {value.blood_group}
                </p>

                <p>
                  <strong>Phone:</strong> {value.phone}
                </p>

                <p>
                  <strong>Email:</strong> {value.email}
                </p>

                <p>
                  <strong>City:</strong> {value.city}
                </p>

                <p>
                  <strong>Weight:</strong> {value.weight_kg} kg
                </p>

                <p>
                  <strong>Last Donation:</strong>{" "}
                  {value.last_donation_date}
                </p>

                <p>
                  <strong>Created At:</strong>{" "}
                  {new Date(value.created_at).toLocaleString()}
                </p>

                <button className="btn btn-danger w-100">
                  Contact Donor
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewDonor;