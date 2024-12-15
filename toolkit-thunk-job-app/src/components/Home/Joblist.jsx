import React from "react";
import JobCard from "./jobCard";
import { useSelector } from "react-redux";
const Joblist = () => {
  const { jobList, loading, error } = useSelector((store) => store.jobReducer);

  return (
    <section className="joblist">
      <div className="container">
        {jobList.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default Joblist;
