import { useEffect, useState } from "react";
import "../css/Community.css";
import BACKEND_URL from "../config";

/* ========= Image Imports ========= */
import art1 from "../images/artwork/art1.jpeg";
import art2 from "../images/artwork/art2.jpeg";
import art3 from "../images/artwork/art3.jpeg";
import art4 from "../images/artwork/art4.jpeg";
import art5 from "../images/artwork/art5.jpeg";
import art6 from "../images/artwork/art6.jpeg";
import art7 from "../images/artwork/art7.jpeg";
import art8 from "../images/artwork/art8.jpeg";
import art9 from "../images/artwork/art9.jpeg";
import art10 from "../images/artwork/art10.jpeg";
import art11 from "../images/artwork/art11.jpeg";
import art12 from "../images/artwork/art12.jpeg";
import art13 from "../images/artwork/art13.jpg";
import art14 from "../images/artwork/art14.jpeg";
import art15 from "../images/artwork/art15.jpeg";
import art16 from "../images/artwork/art16.jpg";
import art17 from "../images/artwork/art17.jpg";
import art18 from "../images/artwork/art18.jpg";

const Community = () => {
  // NEW: state for user-submitted community art
  const [communityArt, setCommunityArt] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: ""
  });
  const [formErrors, setFormErrors] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch existing community art from backend
  const fetchCommunityArt = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/community-art`);
      const data = await res.json();
      setCommunityArt(data);
    } catch (err) {
      console.error("Failed to fetch community art:", err);
    }
  };

  useEffect(() => {
    fetchCommunityArt();
  }, []);

  // Simple client-side validation that matches backend
  const validateForm = () => {
    const errors = [];
    if (!formData.title.trim()) {
      errors.push("Title is required.");
    }
    if (!formData.imageUrl.trim()) {
      errors.push("Image URL or path is required.");
    }
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors([]);
    setStatusMessage("");

    const errors = validateForm();
    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await fetch(`${BACKEND_URL}/api/community-art`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok || data.ok === false) {
        const backendErrors = data.details || [data.message || "Failed to add artwork."];
        setFormErrors(backendErrors);
        return;
      }

      setStatusMessage("Artwork submitted successfully!");
      setFormErrors([]);
      setFormData({ title: "", imageUrl: "" });

      // refresh the list
      await fetchCommunityArt();
    } catch (err) {
      console.error("Error submitting artwork:", err);
      setFormErrors(["Network or server error while adding artwork."]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="page">
      <h2>Community</h2>

      <main className="container grid grid-2 community-wrap">
        {/* LEFT SIDE — Community Artwork + User Submissions */}
        <section className="band-dark community-left">
          <div className="community-artwork">
            <h3>Community Artwork</h3>

            {/* NEW: submission form */}
            <div className="community-form-panel">
              {statusMessage && (
                <p className="status-message success">{statusMessage}</p>
              )}

              {formErrors.length > 0 && (
                <ul className="status-message error">
                  {formErrors.map((err, idx) => (
                    <li key={idx}>{err}</li>
                  ))}
                </ul>
              )}

              <form className="community-form" onSubmit={handleSubmit}>
                <label>
                  Title
                  <input
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Abyss Watchers Fanart"
                  />
                </label>
                <label>
                  Image URL or Path
                  <input
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    placeholder="e.g. https://... or /images/artwork/myart.png"
                  />
                </label>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Artwork"}
                </button>
              </form>
            </div>

            {/* Existing curated artwork grid */}
            <h4 className="community-subheading">Featured Artwork</h4>
            <div className="art-grid">
              {[art1, art2, art3, art4, art5, art6, art16, art17, art18].map(
                (src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="art-img"
                    alt={`Community Art ${i + 1}`}
                  />
                )
              )}
            </div>

            {/* NEW: user submissions grid */}
            {communityArt.length > 0 && (
              <>
                <h4 className="community-subheading">User Submissions</h4>
                <div className="art-grid">
                  {communityArt.map((art) => (
                    <figure key={art.id} className="art-user-card">
                      <img
                        src={
                          art.imageUrl.startsWith("http")
                            ? art.imageUrl
                            : `${BACKEND_URL}${art.imageUrl}`
                        }
                        className="art-img"
                        alt={art.title}
                      />
                      <figcaption>{art.title}</figcaption>
                    </figure>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* RIGHT SIDE — Subsections */}
        <aside className="community-right">
          <section className="band-dark">
            <h3>Bosses Artwork</h3>
            <div className="grid grid-3 comm-grid">
              {[art7, art8, art9].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="art-img1"
                  alt={`Boss Art ${i + 1}`}
                />
              ))}
            </div>
          </section>

          <section className="band-dark">
            <h3>In Game Pictures</h3>
            <div className="grid grid-3 comm-grid">
              {[art13, art14, art15].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="art-img1"
                  alt={`In Game ${i + 1}`}
                />
              ))}
            </div>
          </section>

          <section className="band-dark">
            <h3>Characters Artwork</h3>
            <div className="grid grid-3 comm-grid">
              {[art10, art11, art12].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="art-img1"
                  alt={`Character Art ${i + 1}`}
                />
              ))}
            </div>
          </section>
        </aside>
      </main>
    </section>
  );
};

export default Community;
