import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
            <button className="px-5 py-2 text-[#7E90FE] font-extrabold border rounded border-lime-600 mr-4">{remote_or_onsite}</button>
            <button className="px-5 py-2 text-[#7E90FE] font-extrabold border rounded border-blue-700">{job_type}</button>
        </div>
        <div className="my-2 flex">
            <h2 className="flex mr-4 items-center"><CiLocationOn className="text-2xl"></CiLocationOn>{location}</h2>
            <h2 className="flex items-center"><HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>{salary}</h2>
        </div>
        <div className="card-actions justify-start">
         <Link to={`/job/${id}`}>
         <button className="btn btn-primary">View Details</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
