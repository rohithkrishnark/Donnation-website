import React, { useState, useCallback, useEffect } from 'react'
import './Filter.css'

export default function FIlter() {

  const filteredItems = ["All", "Education", "Orphange", "HomeLess", "Animals"];
  const [current, setCurrent] = useState("All")
  const handleclick = (value) => {


    setCurrent(value)
  }
  const fetchdata = async() =>{
    let respose = await fetch("http://localhost:4000/main/findalleducation")
    // return respose.data
    console.log(respose.data);
    
  }

  useEffect(()=>{
    fetchdata()
  },[])

  // const Allinformation = useCallback(() => {
  //   fetchdata()
  // }, [current])




  return (
    <div className='row d-flex shadow py-2' style={{
      width: '50%', height: '45px', borderRadius:
        10,
    }}>
      {
        filteredItems.map((value) => {
          return (
            <div className="col h-100 d-flex align-items-center justify-content-center">
              <div onClick={() => handleclick(value)} style={{ width: '90%', height: "90%", borderRadius: 30, border: '1px solid grey', cursor: 'pointer' }} className={current === value ? `filter-items d-flex align-items-center justify-content-center bg-secondary text-white` : `filter-items d-flex align-items-center justify-content-center`}>
                {value}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
