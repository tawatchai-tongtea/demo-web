"use client"

import React,{useEffect,useState} from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import axios from 'axios'

export default function Home() {

  const [dataList,setDataList] = useState({data:[]})

  useEffect(() =>{

    axios.get("http://localhost:3000/user").then(response =>{

    console.log("response",response.data)
    setDataList(response.data)

    }).catch(error =>{

      console.error("error",error)

    })


  },[])

  return (
    <main className={styles.main}>

      <from>

        <div className='title'>Login</div>
        <input type='text' placeholder='Input here' className='intput'></input>

        {dataList.data.map((element,index) =>{

          return(
            <div style={{marginTop:4,display:'flex'}} key={index} className='card'>
              <img src={element.avatar} style={{width:100}}/>
              <div>
                {`${element.first_name} ${element.last_name}`}
              </div>
            </div>
          )
        })}

      </from>


    </main>
  )
}
