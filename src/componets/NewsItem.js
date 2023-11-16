import React from 'react'

const  NewsItem =(props) =>{

   let  container = {
      boxShadow: "0px 0px 10px 1px black"

        };
        
    // Class main props aaise use karte hai
    let {title,description,imageUrl,newsUrl,author ,date,source} =props;
    return (
      <div className="my-3">
        <div className="card text-bg-light mb-3" style ={container} >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style ={{left:'90%',zindex:'1'}}>{source} </span>
  <img src={!imageUrl?"https://tse3.mm.bing.net/th?id=OIP.6Hec0K-YQL1hL-sfqyPHBwAAAA&pid=Api&P=0&h=180":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{description}</p>
    <p class ="card-text"><small class ="text-danger">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a  rel="noreferrer" href={newsUrl}  target="_blank"className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>

      </div>
    )
  }


export default NewsItem
