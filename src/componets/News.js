import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{
     const [articles, setarticles] = useState([]);
     const [loading, setloading] = useState(true);
     const [page, setpage] = useState(1);
     const [totalResults, settotalResults] = useState(0);
  
     const capitalizeletters = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    //ye method hai api ke ley
   const updateNews= async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=248443a359534e4a84e95d38aebbeef2&page=${page}&pagesize=${props.pagesize}`; 
        setloading(true);
        let data = await fetch(url); //promise
        props.setProgress(30);
        let parsedData = await data.json();
    
        setarticles(parsedData.articles); 
        settotalResults(parsedData.totalResults);
        setloading(false);
        props.setProgress(100);
    }

    useEffect(() => {
           document.title = `${capitalizeletters(props.category)} -NewsDaily`;
        updateNews();
        //eslint-disable-next-line
    }, [])
    
    const fetchMoreData = async() => {
      
    
     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=248443a359534e4a84e95d38aebbeef2&page=${page+1}&pagesize=${props.pagesize}`;
     setpage(page+1)
     let data = await fetch(url); //promise
     let parsedData = await data.json();
     setarticles(articles.concat(parsedData.articles))
     settotalResults(parsedData.totalResults)
    };
    

 
        return (
            <>
            
                <div className="container my-3">
                    <div className="text-center" style={{ margin: '35px 0px',marginTop:'56px' }}><h1>NewsDaily -Wake and Just Read </h1></div>
                    {loading && <Spinner />}

                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !==totalResults}
                        loader={<Spinner/>}
                    >
                        <div className="container">
                        <div className="row">
                            {articles.map((element) => {

                                return <div className="col-md-3" key={element.url} >
                                     <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>

                            })}

                        </div>
                        </div>
                    </InfiniteScroll>
                </div>
            </>
        )
    }


News.defaultProps = {
    country: 'in',
    pagesize: 8,
    category: 'general',
}



News.propTypes = {
    county: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
};



export default News
