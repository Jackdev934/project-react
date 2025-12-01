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
  // user-submitted community art from backend
  const [communityArt, setCommunityArt] = useState([]);

  // controlled form fields (still keep title + optional imageUrl)
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: ""
  });

  const [formErrors, setFormErrors] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // NEW: image preview state (like AddHousePlan example)
  const [prevSrc, setPrevSrc] = useState("");

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
  const validateForm = (hasFile) => {
    const errors = [];
    if (!formData.title.trim()) {
      errors.push("Title is required.");
    }
    // Instructor specifically wanted file picker, so require a file:
    if (!hasFile) {
      errors.push("Please select an image file to upload.");
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

  // NEW: handle file input + preview (like uploadImage in template)
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPrevSrc(URL.createObjectURL(file));
    } else {
      setPrevSrc("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors([]);
    setStatusMessage("");

    const fileInput = e.target.elements.img; // <input id="img" name="img" ... />
    const hasFile = fileInput && fileInput.files && fileInput.files.length > 0;

    const errors = validateForm(hasFile);
    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      setIsSubmitting(true);

      // 🔴 IMPORTANT: use FormData like in AddHousePlan
      const formDataToSend = new FormData(e.target);
      // This will include:
      // - title
      // - imageUrl (optional)
      // - img (the file input)

      const res = await fetch(`${BACKEND_URL}/api/community-art`, {
        method: "POST",
        body: formDataToSend
        // DO NOT set Content-Type, fetch + FormData handle it
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
      setPrevSrc(""); // clear preview
      e.target.reset(); // clear file input

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

            {/* submission form with file picker + preview */}
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

              <form
                className="community-form"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <label>
                  Title
                  <input
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Abyss Watchers Fanart"
                  />
                </label>

                {/* Optional: still let them give a URL if they want */}
                <label>
                  Image URL (optional)
                  <input
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    placeholder="e.g. https://... or leave blank"
                  />
                </label>

                {/* NEW: image preview + file picker (like AddHousePlan) */}
                <section className="community-upload-section">
                  <div className="community-img-preview">
                    {prevSrc !== "" ? (
                      <img
                        src={prevSrc}
                        alt="Preview"
                        className="art-img-preview"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="community-img-upload">
                    <label htmlFor="img">Select Image:</label>
                    <input
                      type="file"
                      id="img"
                      name="img"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </p>
                </section>

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

            {/* User submissions grid */}
            {communityArt.length > 0 && (
              <>
                <h4 className="community-subheading">User Submissions</h4>
                <div className="art-grid">
                  {communityArt.map((art) => (
                    <figure key={art.id || art._id} className="art-user-card">
                      <img
                        src={
                          art.imageUrl && art.imageUrl.startsWith("http")
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
