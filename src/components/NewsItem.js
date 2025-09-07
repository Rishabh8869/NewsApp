import React, { Component } from 'react'


export class NewsItem extends Component {
  render() {
    let {title, description, newsUrl, imageUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://media.npr.org/assets/img/2024/01/29/ap24029148205025_wide-abf87b38a8d4fd042e015b5729ffe77668324f4e.jpg?s=1400&c=100&f=jpeg": imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>

          </div>
        </div>
        
      </div>
    )
  }
}

export default NewsItem
