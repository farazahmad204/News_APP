import React from "react";


const NewsItem=(props)=>{
  
    let { title, description, imageUrl, url, author, publish, source } =props;

    return (
      <div>
        <div
          className="card "
          style={{
            width: "18rem",
            margin: "auto auto",
            borderTopLeftRadius: "calc(1.25rem - 1px)",
            borderTopRightRadius: "calc(1.25rem - 1px)",
            borderBottomLeftRadius: "calc(1.25rem - 1px)",
            borderBottomRightRadius: "calc(1.25rem - 1px)",
          }}
        >
          <div
            className="container "
            style={{
              justifyContent: "end",
              position: "absolute",
              marginright: "100 px",
            }}
          >
            <span class="translate-middle badge rounded-pill bg-danger">
              {source ? source : "Unknown-source"}
            </span>
          </div>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={{
              height: "180px", // Fixed height for image
              objectFit: "cover", // Ensures aspect ratio is maintained and image is cropped if needed
              width: "100%", // Ensures image stretches to full width of card
              borderTopLeftRadius: "calc(1.25rem - 1px)",
              borderTopRightRadius: "calc(1.25rem - 1px)",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 20)}</h5>
            <p className="card-text">{description.slice(0, 88)}</p>
            <div className="container  d-flex justify-content-center">
              <a
                rel="noreferrer"
                href={url}
                target="_blank"
                className="btn btn-sm btn-dark my-2 text-center"
              >
                Read More..
              </a>
            </div>
            <div class=" text-muted text-center">
              {author ? author : "Unknown"}{" "}
            </div>
            <div class=" text-muted text-center">
              {new Date(publish).toUTCString()}
            </div>
          </div>
        </div>
      </div>
    );

}

export default NewsItem; // Ensure this default export