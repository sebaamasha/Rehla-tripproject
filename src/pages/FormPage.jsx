import { useState } from "react";

function FormPage() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  function validateForm() {
    const newErrors = {};

    if (title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters.";
    }

    if (location.trim().length === 0) {
      newErrors.location = "Location is required.";
    }

    if (description.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault(); 

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
      return;
    }

    const formData = {
      title,
      location,
      description,
    };

    console.log("New travel story:", formData);

    setErrors({});
    setSuccessMessage("Story submitted successfully!");

    setTitle("");
    setLocation("");
    setDescription("");
  }

  return (
    <div style={styles.container}>
      <h1>Add a New Travel Story</h1>
      <p>Share your experience with other travelers.</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Title */}
        <div style={styles.field}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Trip Title"
          />
          {errors.title && <p style={styles.error}>{errors.title}</p>}
        </div>

        {/* Location */}
        <div style={styles.field}>
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Location"
          />
          {errors.location && <p style={styles.error}>{errors.location}</p>}
        </div>

        {/* Description */}
        <div style={styles.field}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="4"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Tell us about your experience..."
          />
          {errors.description && (
            <p style={styles.error}>{errors.description}</p>
          )}
        </div>

        <button type="submit" style={styles.button}>
          Submit Story
        </button>

        {successMessage && (
          <p style={styles.success}>{successMessage}</p>
        )}
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "16px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginTop: "16px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  error: {
    color: "red",
    fontSize: "0.9rem",
  },
  success: {
    color: "green",
    marginTop: "8px",
  },
  button: {
    padding: "8px 16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
};

export default FormPage;
