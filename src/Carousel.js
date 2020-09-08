import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  // Notice that the handleIndexClick function is an arrow function.
  // This is because we need the this in handleIndexClick
  // to be the correct this. An arrow function assures that
  // because it will be the scope of where it was defined.
  // This is common with how to deal with event handlers with class components.
  // (=>: event listeners and functions you will pass into children)

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
