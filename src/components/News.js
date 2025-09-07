import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general',
  }
   static propTypes = {
    country:PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
   }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
    };
  }

  // 
  async componentDidMount() {
  this.setState({ loading: true });

  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=100`;

  let data = await fetch(url);
  let parsedData = await data.json();

  console.log("API Response:", parsedData); 

  this.setState({
    articles: parsedData.articles || [], 
    totalArticles: parsedData.articles ? parsedData.articles.length : 0,
    loading: false,
  });
}


  handlePrevClick = () => {
    this.setState({ page: this.state.page - 1, loading: true }, () => {
      setTimeout(() => this.setState({ loading: false }), 500); 
    });
  };

  handleNextClick = () => {
    this.setState({ page: this.state.page + 1, loading: true }, () => {
      setTimeout(() => this.setState({ loading: false }), 500); 
    });
  };

  render() {
    const { page, articles, loading } = this.state;
    const { pageSize } = this.props;

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentArticles = articles.slice(startIndex, endIndex);

    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: '30px 0px'}}>NewsApp - Top headlines</h1>

        {loading ? (
          <div className="text-center">
            <Spinner />
          </div>
        ) : (
          <div className="row">
            {currentArticles.map((element, index) => (
              <div className="col-md-4" key={index}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))}
          </div>
        )}

        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1 || loading}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={page >= Math.ceil(this.state.totalArticles / pageSize) || loading}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
