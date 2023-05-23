import React, { Component, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

const NewsComponent = (props)=> {
  // static defaultProps = {
  //   pageSize: 8,
  //   country: "in",
  //   category: "general",
  // };
  // static propTypes = {
  //   pageSize: PropTypes.string,
  //   country: PropTypes.string,
  //   category: PropTypes.string,
  // };

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = `${props.category.toUpperCase()} | NewsMonkey`;

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //     totalResults: 0,
  //   };
  // }
  
  useEffect(() => {
    updateClick();
  }, [])
  

  // async componentDidMount() {
  //   this.updateClick();
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d7ff08a7ead34e6896929146fa9ac228&page=1&pageSize=${props.pageSize}`;
    //   this.setState({
    //     loading:true
    //   })
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading:false
    // });
  // }

  const updateClick = async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    // this.setState({
    //   loading: true,
    // });
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    console.log(parsedData);
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    // this.setState({
    //   // page: this.state.page + 1,
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);
  }

  const handleNextClick = async () => {
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d7ff08a7ead34e6896929146fa9ac228&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    //   this.setState({
    //     loading:true
    //   })
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedData.articles,
    //   loading:false
    // });
    setPage(page+1)
    updateClick();
  };
  const handlePrevClick = async () => {
    // console.log("HEloo")
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d7ff08a7ead34e6896929146fa9ac228&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    //   this.setState({
    //     loading:true
    //   })
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading:false
    // });
    setPage(page-1)
    updateClick();
  };

  const fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    // this.setState({ page: this.state.page + 1 });
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
    setLoading(true);
    // this.setState({
    //   loading: true,
    // });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
  };

    return (
      <>
        <h1 className="text-center" style={{marginTop : '80px'}}>
          NewsMonkey - Top News Headlines | {props.category.toUpperCase()}
        </h1>
        {loading && <Spinner />}
        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        > */}
          <div className="container">
            <div className="row my-3">
              {!loading &&
                articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 45) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 88)
                            : ""
                        }
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        {/* </InfiniteScroll> */}
        <div className="container d-flex justify-content-between my-3">
        <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous </button>
        <button disabled={(page + 1 > Math.ceil(totalResults/props.pageSize))} type="button" className="btn btn-dark" onClick={handleNextClick}> Next &rarr;</button>
      </div>
      </>
    );
  }

NewsComponent.defaultProps = {
  pageSize: 8,
  country: "in",
  category: "general",
};
NewsComponent.propTypes = {
  pageSize: PropTypes.string,
  country: PropTypes.string,
  category: PropTypes.string,
};

export default NewsComponent
