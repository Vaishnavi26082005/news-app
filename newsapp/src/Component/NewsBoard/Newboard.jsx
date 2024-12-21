import { useState,useEffect } from "react"
import Newsitem from "../Newsitem/Newsitem";

const Newboard = ({category}) => {
  const [articles,setarticle]=useState([]);
  useEffect(()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=0fa17203cc2b4bf18a438c066d174bf7`;
    fetch(url).then(response=>response.json())
    .then(data=>setarticle(data.articles))
  },[category])
  return (
    <div>
        <h2 className="text-center ">Latest <span className=" badge bg-danger">News</span></h2>
        <p className="text-center">Get Daily Updates from Khabar Express!</p>
        {articles?.map((news,index)=>{
          return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })}
    </div>
  )
}

export default Newboard
