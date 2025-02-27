import NewsItem from './NewsItem';
import { useEffect,useState} from 'react';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import "../Heading.css";
const News = (props)=> {

  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(true);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);
  const [canLoad, setCanLoad] = useState(true);
  
   const updateNews = async ()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e135749841a47d5aecff617641d16f5&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      props.setProgress(40);
      let parsedData = await data.json();
      console.log(parsedData);
      props.setProgress(60);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
  }

  useEffect(()=>{
    document.title = `NewsNest - ${capitalizeFirstLetter(props.category)}`
    updateNews();
    // eslint-disable-next-line
  },[]);

  const fetchMoreData = async() => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e135749841a47d5aecff617641d16f5&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1);
      let data = await fetch(url);
      let parsedData = await data.json();
      if(parsedData.articles.length===0)
        setCanLoad(false);
      else
        setCanLoad(true);
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);   
  };

   const capitalizeFirstLetter =  (str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
    return (
      <>
        <h1 className="news-heading">NewsNest - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={canLoad && articles.length < totalResults ? <Spinner /> : null}
          style={{ overflow: "hidden" }} 
        >
        <div className="container" >
        <div className="row">
        { articles.map((element)=>{
         return <div className="col-md-4 my-2" key={element.url}>
          <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""}imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
}

export default News

News.defaultProps = {
  country: "us",
  pageSize: 6,
  category: "general",
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
