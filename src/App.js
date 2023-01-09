import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const[loading,setLoading] = useState(true)
  const [value,setValue] = useState(0)
  const [jobs,setJobs] = useState([])

  const fetchjobs = async () => {
    const response = await fetch(url)
    const jobs = await response.json() 
    setLoading(false)
    setJobs(jobs)
  }
useState(()=>{
fetchjobs()
},[])
  

  if(loading){             
    return (
      <h1>Loading...</h1>
    )
}
const {title,dates,duties,company} = jobs[value]
  return (
   <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
    )
}

export default App

