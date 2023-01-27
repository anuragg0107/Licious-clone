import { Box,Text,Image } from '@chakra-ui/react'
import React, {  useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props){
const {className,style,onClick}=props
return(
        <div className={className}
        style={{...style, display:"block",right:"-8px",
        backgroundColor:"gray", borderRadius:"50%" }}
    onClick={onClick}  > </div>
    )
}

function SamplePrevArrow(props){
    const {className,style,onClick}=props
    return(
        <div className={className}
        style={{...style, display:"block",right:"-37px",
        backgroundColor:"gray", borderRadius:"50%"}}
     onClick={onClick}  > </div>
    )
}

const News = () => {
  const [newsData,setnewsData]=useState([])
    // const breakpoints={
    //     sm:"320px",
    //     md:"786px",
    //     lg:"1001px",
    //     xl:"1100px",
    //     "2xl":"1600px"
    // }

    const boxStyle={
        display:"flex",
        alignItem:"centet",
        justifyContent:"center",
        boxSize:"250px",
        color:"#fff",
        textShadow:"0 0 20px black",
        fontWeight:"bold",
        fontSize:"20px",
    }
    let settings={
        infinite:true,
        speed:500,
        slidesToShow:5,
        slidesToScroll:1,
        initialSlide:0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive:[
            {
                breakpoint:1281,
                settings:{
                    slidesToShow:4,
                    slidesToScroll:1,
                    infinite:true
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:true,
                },
            },
            {
                breakpoint:600,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:2,
                    initialSlide:2,
                    infinite:true
                },
            },
            {
                breakpoint:480,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:1,
                    infinite:true,
                    initialSlide:1,
                },
            },
        ],
    };
  
    useEffect(()=>{
        axios.get('https://licious-database.vercel.app/news').then((res)=>{
          setnewsData(res.data)
        })
      })
    

  return (
    <>
     <Box ml='80px' mt='50px' mb='20px'>
       <Text as='h2' fontSize={"22px"} fontWeight="600" color={'#4a4a4a'}
       display={'inline-block'}>In the News</Text>
   </Box>
    
    <div  style={{margin:"auto", justifyContent:"center", width:"90%"}}>
        <Slider 
        {...settings}>
         {newsData.map((el)=>{
          return(
            <Box key={el.id} margin='auto'  borderWidth={'1px'} borderRadius='lg' overflow={'hidden'}>
               <Image src={el.image} alt={el.title}  /> 
               <Box className='best_seller_item_detail'>
                     <Text className='best_seller_item_weight' pl='25px'>
                     <span>{el.title}</span>
               </Text>
                 </Box>
            </Box>

          )
         })}
        </Slider>
    </div>

    </>
  )
}

export default News