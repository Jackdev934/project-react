import { useEffect, useState } from "react";
import "../css/Community.css";
import BACKEND_URL from "../config";
import Modal from "../components/Modal";

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
  const [communityArt, setCommunityArt] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    imageUrl: ""
  });

  const [formErrors, setFormErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [prevSrc, setPrevSrc] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalImageTitle, setModalImageTitle] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  // 🔔 Toast popup state
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

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

  const validateForm = () => {
    const errors = [];
    if (!formData.title.trim()) {
      errors.push("Title is required.");
    }
    if (!formData.imageUrl.trim()) {
      errors.push("Please select an image file.");
    }
    return errors;
  };

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      title: value
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPrevSrc(previewUrl);
      setFormData((prev) => ({
        ...prev,
        imageUrl: previewUrl
      }));
    } else {
      setPrevSrc("");
      setFormData((prev) => ({
        ...prev,
        imageUrl: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors([]);

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
        const backendErrors =
          data.details || [data.message || "Failed to add artwork."];
        setFormErrors(backendErrors);
        return;
      }

      triggerToast("Artwork submitted successfully!");
      setFormErrors([]);
      setFormData({ title: "", imageUrl: "" });
      setPrevSrc("");
      e.target.reset();

      await fetchCommunityArt();
    } catch (err) {
      console.error("Error submitting artwork:", err);
      setFormErrors(["Network or server error while adding artwork."]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openImageModal = (src, title) => {
    setModalImageSrc(src);
    setModalImageTitle(title || "Artwork");
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
    setModalImageTitle("");
  };

  const startEdit = (art) => {
    const id = art.id || art._id;
    setEditingId(id);
    setEditingTitle(art.title || "");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingTitle("");
  };

  const saveEdit = async (id) => {
    if (!editingTitle.trim()) {
      alert("Title cannot be empty.");
      return;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/api/community-art/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: editingTitle })
      });

      const data = await res.json();

      if (!res.ok || data.ok === false) {
        console.error("Failed to update artwork:", data);
        alert(data.message || "Failed to update artwork.");
        return;
      }

      setCommunityArt((prev) =>
        prev.map((art) => {
          const artId = art.id || art._id;
          if (artId === id) {
            return { ...art, title: editingTitle };
          }
          return art;
        })
      );

      setEditingId(null);
      setEditingTitle("");
      triggerToast("Artwork title updated.");
    } catch (err) {
      console.error("Error updating artwork:", err);
      alert("Network error while updating artwork.");
    }
  };

  const handleDeleteArt = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this artwork?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${BACKEND_URL}/api/community-art/${id}`, {
        method: "DELETE"
      });

      const data = await res.json();

      if (!res.ok || data.ok === false) {
        console.error("Failed to delete artwork:", data);
        alert(data.message || "Failed to delete artwork.");
        return;
      }

      setCommunityArt((prev) =>
        prev.filter((art) => {
          const artId = art.id || art._id;
          return artId !== id;
        })
      );

      if (editingId === id) {
        setEditingId(null);
        setEditingTitle("");
      }

      triggerToast("Artwork deleted.");
    } catch (err) {
      console.error("Error deleting artwork:", err);
      alert("Network error while deleting artwork.");
    }
  };

  return (
    <section className="page">
      <h2>Community</h2>

      <main className="container grid grid-2 community-wrap">
        <section className="band-dark community-left">
          <div className="community-artwork">
            <h3>Community Artwork</h3>

            <div className="community-form-panel">
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
                    onChange={handleTitleChange}
                    placeholder="e.g. Abyss Watchers Fanart"
                  />
                </label>

                <section className="community-upload-section">
                  <div className="community-img-preview">
                    {prevSrc !== "" && (
                      <img
                        src={prevSrc}
                        alt="Preview"
                        className="art-img"
                        onClick={() =>
                          openImageModal(prevSrc, formData.title || "Preview")
                        }
                      />
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

            <h4 className="community-subheading">Featured Artwork</h4>
            <div className="art-grid">
              {[art1, art2, art3, art4, art5, art6, art16, art17, art18].map(
                (src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="art-img"
                    alt={`Community Art ${i + 1}`}
                    onClick={() =>
                      openImageModal(src, `Featured Artwork ${i + 1}`)
                    }
                  />
                )
              )}
            </div>

            {communityArt.length > 0 && (
              <>
                <h4 className="community-subheading">User Submissions</h4>
                <div className="art-grid">
                  {communityArt.map((art) => {
                    let imgSrc = "";

                    if (!art.imageUrl) {
                      imgSrc = "";
                    } else if (
                      art.imageUrl.startsWith("http://") ||
                      art.imageUrl.startsWith("https://") ||
                      art.imageUrl.startsWith("blob:")
                    ) {
                      imgSrc = art.imageUrl;
                    } else {
                      imgSrc = `${BACKEND_URL}${art.imageUrl}`;
                    }

                    const id = art.id || art._id;

                    return (
                      <figure key={id} className="art-user-card">
                        {imgSrc && (
                          <img
                            src={imgSrc}
                            className="art-img"
                            alt={art.title}
                            onClick={() =>
                              openImageModal(imgSrc, art.title || "User Artwork")
                            }
                          />
                        )}
                        {editingId === id ? (
                          <div className="community-edit-row">
                            <input
                              className="community-edit-input"
                              value={editingTitle}
                              onChange={(e) =>
                                setEditingTitle(e.target.value)
                              }
                            />
                            <button
                              type="button"
                              className="community-edit-save"
                              onClick={() => saveEdit(id)}
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              className="community-edit-cancel"
                              onClick={cancelEdit}
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <>
                            <figcaption>{art.title}</figcaption>
                            <div className="community-actions">
                              <button
                                type="button"
                                className="community-edit-button"
                                onClick={() => startEdit(art)}
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                className="community-delete-button"
                                onClick={() => handleDeleteArt(id)}
                              >
                                Delete
                              </button>
                            </div>
                          </>
                        )}
                      </figure>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </section>

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
                  onClick={() =>
                    openImageModal(src, `Boss Artwork ${i + 1}`)
                  }
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
                  onClick={() =>
                    openImageModal(src, `In Game Picture ${i + 1}`)
                  }
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
                  onClick={() =>
                    openImageModal(src, `Character Artwork ${i + 1}`)
                  }
                />
              ))}
            </div>
          </section>
        </aside>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={closeImageModal}
        title={modalImageTitle}
      >
        {modalImageSrc && (
          <div className="community-modal-body">
            <img
              src={modalImageSrc}
              alt={modalImageTitle}
              className="community-modal-img"
            />
          </div>
        )}
      </Modal>

      {showToast && <div className="toast-notice">{toastMessage}</div>}
    </section>
  );
};

export default Community;
