import "../css/Carousel.css";
import jsonData from "../data/Carousel.json";

export default function Carousel() {
  const { carousel } = jsonData;

  if (!Array.isArray(carousel)) {
    console.error("Expected an array in the JSON file");
    return null;
  }

  return (
    <div
      id="carousel-hero"
      className="carousel slide carousel-custom"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {carousel.map((item, index) => (
          <button
            key={item.id}
            type="button"
            data-bs-target="#carousel-hero"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {carousel.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={item.img_url}
              className="d-block w-100"
              alt={item.title}
            />
            <div className="BG-transparent-carousel">
              <div className="carousel-caption">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel-hero"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel-hero"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
