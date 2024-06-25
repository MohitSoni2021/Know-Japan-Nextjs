"use client"
import React, { Suspense, useEffect } from "react";
import ImageDisplayerComponent from "./components/ImageDisplayer";
import axios from "axios";
import ImageCard from "./components/ImageCard";
import ImagedisplayerCard from './components/test'

function ImagePage() {
    const [FetchImageCards, setFetchImageCards] = React.useState([]);

    const FetchImagesFromDatabase = async ()=>{
        const response = await axios.get("https://sheets.googleapis.com/v4/spreadsheets/1nMbARVy5X1xGFZjzObizQOI7FHKlPfEyAaieCwpeJi0/values/Sheet1?key=AIzaSyAKC5-3dr0JTBSzfVpRAr1CCBKlWXhqLno")
        console.log(response.data.values[0][0])
        setFetchImageCards(
            response.data.values.map((url:string, i:Number)=>{
                return url[0]
            })
        )
    }

    useEffect(()=>{
        FetchImagesFromDatabase()
    }, [])

    return ( 
        <>
        <Suspense fallback="loading..">
            <ImageDisplayerComponent data={FetchImageCards}/>
        </Suspense>
        </>
     );
}

export default ImagePage;