import React, { Component } from "react";

const NewsItem = (props)=> {
  // render() {
    // let { title, description, imageUrl, newsUrl, author, date} = props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              props.imageUrl
                ? props.imageUrl
                : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/whatsapp_image_2023-05-04_at_16.30.25-sixteen_nine.jpeg?VersionId=WBysVB4wcoMrjDG_Monp3iKcMYTOtr2U"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}....</h5>
            <p className="card-text">{props.description}....</p>
            <p class="card-text"><small class="text-body-secondary">By {!props.author?"Unknown":props.author} On {new Date(props.date).toGMTString()}</small></p>
            <a href={props.newsUrl} target="_blank" className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
// }

export default NewsItem
