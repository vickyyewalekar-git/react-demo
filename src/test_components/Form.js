import { useState } from "react";

function BasicForm() {
  const [submittedData, setSubmittedData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("First Name");
  const [mytxt, setMytxt] = useState("");
  const [city, setCity] = useState("pune");
  const [selectedFruit, setSelectedFruit] = useState("banana");

  const [inputs, setInputs] = useState({
    firstname: "john",
    lastname: "Doe",
    tomato: true,
    onion: false,
  });

  function handleChange(e) {
    setName(e.target.value);
    setSelectedFruit(e.target.value);
  }

  function handleObjectChange(e) {
    const { name, type, checked, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let fillings = "";
    if (inputs.tomato) fillings += "tomato";
    if (inputs.onion) {
      if (inputs.tomato) fillings += " and ";
      fillings += "onion";
    }
    if (fillings === "") fillings = "no fillings";

    setSubmittedData({
      fullname: inputs.firstname + " " + inputs.lastname,
      tomato: inputs.tomato,
      onion: inputs.onion,
      fillings,
    });

    setShowModal(true);
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-3">
        <h4 className="text-center fw-bold mb-1">🍔 Burger Order Form</h4>
        <p className="text-center text-muted mb-3">
          Fill in your details below
        </p>

        <form onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Display Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">City</label>
              <select
                className="form-select"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">Select</option>
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstname"
                className="form-control"
                value={inputs.firstname}
                onChange={handleObjectChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastname"
                className="form-control"
                value={inputs.lastname}
                onChange={handleObjectChange}
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="2"
              value={mytxt}
              onChange={(e) => setMytxt(e.target.value)}
            />
          </div>

          {/* Preferences */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Burger Fillings</label>
              {["tomato", "onion"].map((item) => (
                <div className="form-check" key={item}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name={item}
                    checked={inputs[item]}
                    onChange={handleObjectChange}
                  />
                  <label className="form-check-label text-capitalize">
                    {item}
                  </label>
                </div>
              ))}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Favorite Fruit</label>
              {["apple", "banana", "cherry"].map((fruit) => (
                <div className="form-check" key={fruit}>
                  <input
                    type="radio"
                    className="form-check-input"
                    name="fruit"
                    value={fruit}
                    checked={selectedFruit === fruit}
                    onChange={handleChange}
                  />
                  <label className="form-check-label text-capitalize">
                    {fruit}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="text-center mt-3">
            <button type="submit" className="btn btn-primary px-5">
              Submit Order
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">📋 Order Summary</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <p><strong>Name:</strong> {submittedData?.fullname}</p>
                <p><strong>City:</strong> {city}</p>
                <p><strong>Fruit:</strong> {selectedFruit}</p>
                <p><strong>Fillings:</strong> {submittedData?.fillings}</p>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MyForm() {
  return <BasicForm />;
}