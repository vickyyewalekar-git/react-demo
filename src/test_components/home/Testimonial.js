import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { TestimonialContext } from "../../contexts/TestContexts/TestimonialContext";

// HOC
function withBorder(WrappedComponent) {
  return function NewComponent(props) {
    return (
      <div className="border border-primary rounded p-3 shadow-sm">
        <WrappedComponent {...props} />
      </div>
    );
  };
}

function Greeting({ name }) {
  return <h5 className="mb-0">{name}</h5>;
}

const GreetingWithBorder = withBorder(Greeting);

function Testimonial() {
  const { id } = useParams();
  const { testimonials } = useContext(TestimonialContext);

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title mb-2">Testimonial Details</h4>
          <p className="mb-1">
            <strong>Testimonial ID:</strong> {id}
          </p>

          <div className="d-flex gap-3 mt-3">
            <Link className="btn btn-outline-primary btn-sm" to="../testimonial/2">
              Testimonial 2
            </Link>
            <Link className="btn btn-outline-primary btn-sm" to="../testimonial/3">
              Testimonial 3
            </Link>
          </div>
        </div>
      </div>

      {/* HOC Example */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">Higher Order Component (HOC)</h5>

          <div className="mb-3">
            <Greeting name="I am original <Greeting />" />
          </div>

          <GreetingWithBorder name="I am wrapped with Border HOC" />
        </div>
      </div>

      {/* Context API Example */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-4">
            Testimonials from Context API
          </h5>

          <div className="row g-3">
            {testimonials.map((feedback) => (
              <div className="col-md-4 col-sm-6" key={feedback.id}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-primary">
                      {feedback.name}
                    </h6>
                    <p className="mb-1">
                      <strong>Rating:</strong> {feedback.rating} ⭐
                    </p>
                    <p className="text-muted mb-0">
                      {feedback.comment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Testimonial;