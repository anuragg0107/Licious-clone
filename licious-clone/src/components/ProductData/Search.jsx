import React from 'react'
import axios from 'axios'
import { Input,Box, border } from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Search.css'

const Search = () => {

    const [hope,setHope] =useState([])
    const [params,setParams] =useState("")
    const [newid,setNewid] =useState("")
    const [showResult,setShowResult]=useState(false)

    const navigate=useNavigate()
    // const getProducts =(id)=>{
    //     axios.get(`https://licious-api-data.vercel.app/`)
    //     .then((abcd) =>console.log(abcd))  
    //   }

    // async function getUser() {
    //     try {
    //       const response = await fetch('https://licious-api-data.vercel.app/chicken');
    //       let d=await response.json()
    //       console.log(d)
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
  
    //   useEffect=()=>{
    //     getUser()
    //   }

    async function getData(){
        try{
            let url ='https://licious-api-data.vercel.app/chicken';
            let res =await fetch(url);
            let data =await res.json();
            setHope(data)
        }
        catch(err)
        {                      
            console.log(err)
        }
    }

    // useEffect(()=>{
    //     getData()
    //   },[
    //    params
    //   ])

    const show=(e)=>{
        let params=e.target.value
        setParams(params)
        getData()
      }

      const Open=(e)=>{
    let link=e.target.value
    // console.log(link)
    navigate(`/chicken/${link}`)
      }

      const Result=()=>{
        setShowResult((prev)=>!prev)

        setHope([])
      }

// console.log(newid)
// console.log(hope)
console.log(showResult)

// onLoad={showResult?{display:'none'}:{display:'block'} }
// onChange={!showResult && {display:'none'} }
  return (
    <Box w={'100%'} h={'100%'}>
      <Input w={'100%'} border={'1px solid red'}
                className="search_input"
                placeholder="Search for any delicious product"
                type={"search"}
                // value='value'
                onChange={show}
               onClick={Result}
              ></Input>
              
              <Box className='SearchResult' onChange={!showResult && {display:'none'} }  >
                {hope.filter(({title})=>
                title.toLowerCase().includes(params)).slice(0,5).map(({title,id})=>(
                    <li className='title' onClick={Open} value={id}  > {title}</li>
                ))}
              </Box>

              {/* <div>
              {hope.map(({id})=>(
                  <p>{id}</p>
                ))}
              </div> */}

               {/* <Box> */}
             
                  {/* <p>{hope.description}</p> */}
               
              {/* </Box> */}
    </Box>
  )
}

export default Search