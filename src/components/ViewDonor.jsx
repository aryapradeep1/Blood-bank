import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NaviBar from './NaviBar'

const ViewDonor = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/donors")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="container mt-4">
            <NaviBar/>
            <div className="row">

                {data.map((value, index) => {
                    return (
                        <div
                            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                            key={index}
                        >
                            <div className="card h-100 shadow">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {value.name}
                                    </h5>

                                    <p className="card-text">
                                        <strong>Blood Group:</strong> {value.bloodGroup}
                                    </p>

                                    <p className="card-text">
                                        <strong>Age:</strong> {value.age}
                                    </p>

                                    <p className="card-text">
                                        <strong>Phone:</strong> {value.phone}
                                    </p>

                                    <p className="card-text">
                                        <strong>Place:</strong> {value.place}
                                    </p>

                                    <button className="btn btn-primary w-100">
                                        Contact
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default ViewDonor