import React, {useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const fcapitalize = (str) => {
    // Check if the string is empty
    if (!str) return str;

    // Capitalize the first letter and make the rest lowercase
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  

  const UpdateNews = async () => {
    setpage(page + 1);
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=${props.api_key}&Page=${page}&PageSize=${props.pagesize}`;
    console.log(`url is ${url}`);
    setloading(true);

    let data = await fetch(url);
    props.setProgress(50);
    let parseData = await data.json();
    props.setProgress(70);
    console.log(parseData);

    setarticles(parseData.articles);
    setloading(false);
    settotalResults(parseData.totalResults);

    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    setpage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.api_key}&Page=${page}&PageSize=${props.pagesize}`;

    setloading(true);

    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    setarticles(articles.concat(parseData.articles));
    setloading(false);
    settotalResults(parseData.totalResults);

    console.log(articles.length);
  };

  useEffect (() => {
    document.title = `${fcapitalize(props.category)}`;
    console.log("fetching from use effect")
    console.log(articles.length);
    UpdateNews();
    console.log(articles.length);
    // eslint-disable-next-line
  },[])

  return (
    <>
      <h1 className="text-center my-5" style={{ margin: "35px 60px" }}>
        NewsApp----- Top headlines from {`${fcapitalize(props.category)}`}
      </h1>

      {/* {this.state.loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container my-3 ">
          <div className="row">
            { articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://goodkarma.media.clients.ellingtoncms.com/img/croppedphotos/2025/01/10/deshaunwatsonachillesinjury_t670.jpg?b3f6a5d7692ccc373d56e40cf708e3fa67d9af9d"
                    }
                    url={element.url}
                    author={element.author}
                    publish={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  pagesize: 5,
  country: "us",
  category: "science",
};

News.propTypes = {
  pagesize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
