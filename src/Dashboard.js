import React, { useEffect, useState } from "react";
// import React from 'react'
import Card from './Card'

function Dashboard() {
  const [counter, setCounter] = useState(0)
  useEffect (() => {
  console.log("This code will run on Every Mount");
    }, []);
    useEffect(() => {
    console.log("This code will run on time when the counter changes");
    }, [counter]);
    useEffect(() => {
    return () => {
    
    console.log("This code will run on Every Destroy")
    }
  },[])

  return (
    <div class="container-fluid">
        {/* <!-- Page Heading --> */}
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard {counter}</h1>
                <button
                    onClick={() => setCounter(counter + 1)}
                    class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
                </button>
                    </div>
                    {/* <!-- Content Row --> */}
                    <div class="row">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    
                    </div>
                        
    </div>
  )
}

export default Dashboard