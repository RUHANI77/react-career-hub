import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(()=>{
        fetch('../../../public/data/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[])

    return (
        <div>
            <div className="text-center">
            <div className="text-5xl">Featured Jobs: {jobs.length}</div>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
            {
                jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
            }
        </div>
        <div className={dataLength === jobs.length ? 'hidden' : ''}>
            <button 
            onClick={()=>setDataLength(jobs.length)}
            className="btn btn-primary">Show All Jobs</button>
        </div>
        </div>
    );
};

export default FeaturedJobs;