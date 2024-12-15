import React from "react";
import { useDispatch } from "react-redux";
import { deleteJob, displayJob } from "../../slices/jobSlice";
import axios from "axios";
const JobCard = ({ job }) => {
  const dispatch = useDispatch();

  const deleteClick = () => {
    axios
      .delete(`http://localhost:3000/jobs/${job.id}`)
      .then((res) => {
        console.log(res);
        dispatch(deleteJob(job.id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="job-card">
      <div className="job-card-header">
        <span className="initial">{job.company[0]}</span>
        <div className="company-div">
          <p className="job-title">{job.position}</p>
          <p className="company-name">{job.company}</p>
        </div>
        <button className="delete-btn" onClick={deleteClick}>
          Delete
        </button>
      </div>
      <div className="job-info">
        <p className="city">{job.location}</p>
        <p className="situtation">{job.type}</p>
      </div>
      <div className="job-info">
        <p className="date">
          {new Date(job.date).toLocaleDateString("tr", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className="job-meet">{job.status}</p>
      </div>
    </div>
  );
};

export default JobCard;
