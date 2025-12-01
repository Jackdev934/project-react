import { useEffect, useState } from "react";
import "../css/Weapons.css";
import Modal from "../components/Modal";
import BACKEND_URL from "../config";

/* ========= Small presentational components ========= */

const SubclassCard = ({ subclass, onClick }) => (
  <article className="subclass-card" onClick={onClick}>
    {subclass.icon && (
      <img src={`${BACKEND_URL}${subclass.icon}`} alt={subclass.label} />
    )}
    <button className="pill">{subclass.label}</button>
  </article>
);

const WeaponSection = ({ title, subclasses, onSubclassClick }) => (
  <div className="weapon-section">
    <h2 className="weapon-section-title">{title}</h2>
    <div className="weapon-scroll-row">
      {subclasses.map((sub) => (
        <SubclassCard
          key={sub.id}
          subclass={sub}
          onClick={() => onSubclassClick(sub)}
        />
      ))}
    </div>
  </div>
);

/* ========= Main Component ========= */

const Weapons = () => {
  const [weaponSections, setWeaponSections] = useState([]);
  const [selectedSubclass, setSelectedSubclass] = useState(null);
  const [selectedWeaponIndex, setSelectedWeaponIndex] = useState(0);

  // Form + status state
  const [formData, setFormData] = useState({
    name: "",
    label: "",
    category: "",
    subclass: "",
    type: "",
    scaling: "",
    requirements: "",
    description: "",
    img: "" // backend still expects this
  });
  const [formErrors, setFormErrors] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // File preview (for the selected weapon image)
  const [imagePreview, setImagePreview] = useState("");

  // ====== Fetch weapons from backend and group them ======
  const fetchWeapons = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/weapons`);
      const data = await res.json();

      const sectionsMap = new Map();

      data.forEach((w) => {
        if (!sectionsMap.has(w.category)) {
          sectionsMap.set(w.category, new Map());
        }
        const subMap = sectionsMap.get(w.category);

        // Use either imgs[0] or img, whichever exists
        const firstImg = (w.imgs && w.imgs[0]) || w.img || null;

        if (!subMap.has(w.subclass)) {
          subMap.set(w.subclass, {
            id: w.subclass,
            label: w.subclass,
            icon: firstImg,
            weapons: []
          });
        }

        const subclassObj = subMap.get(w.subclass);
        subclassObj.weapons.push({
          id: w.id,
          name: w.name,
          img: firstImg,
          type: w.type,
          scaling: w.scaling,
          requirements: w.requirements,
          description: w.description
        });
      });

      const finalSections = Array.from(sectionsMap.entries()).map(
        ([categoryName, subMap]) => ({
          title: categoryName,
          subclasses: Array.from(subMap.values())
        })
      );

      setWeaponSections(finalSections);
    } catch (err) {
      console.error("Failed to fetch weapons:", err);
    }
  };

  useEffect(() => {
    fetchWeapons();
  }, []);

  // ====== Modal logic ======
  const openSubclassModal = (subclass) => {
    setSelectedSubclass(subclass);
    setSelectedWeaponIndex(0);
  };

  const closeModal = () => {
    setSelectedSubclass(null);
    setSelectedWeaponIndex(0);
  };

  const currentWeapon =
    selectedSubclass?.weapons?.[selectedWeaponIndex] || null;

  const goPrevWeapon = () => {
    if (!selectedSubclass) return;
    const len = selectedSubclass.weapons.length;
    setSelectedWeaponIndex((prev) => (prev - 1 + len) % len);
  };

  const goNextWeapon = () => {
    if (!selectedSubclass) return;
    const len = selectedSubclass.weapons.length;
    setSelectedWeaponIndex((prev) => (prev + 1) % len);
  };

  const selectWeaponByIndex = (index) => {
    setSelectedWeaponIndex(index);
  };

  // ====== Client-side validation ======
  const validateForm = () => {
    const errors = [];

    if (!formData.name.trim()) {
      errors.push("Name is required.");
    }
    if (!formData.label.trim()) {
      errors.push("Label is required.");
    } else if (!/^[a-zA-Z0-9_-]+$/.test(formData.label.trim())) {
      errors.push("Label must be alphanumeric (you can use - or _).");
    }
    if (!formData.category.trim()) {
      errors.push("Category is required.");
    }
    if (!formData.subclass.trim()) {
      errors.push("Subclass is required.");
    }
    if (!formData.type.trim()) {
      errors.push("Type is required.");
    }
    if (!formData.scaling.trim()) {
      errors.push("Scaling is required.");
    }
    if (!formData.requirements.trim()) {
      errors.push("Requirements are required.");
    }
    if (!formData.description.trim()) {
      errors.push("Description is required.");
    }
    if (!formData.img.trim()) {
      errors.push("Please select an image file.");
    }

    return errors;
  };

  // ====== Form handlers ======
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // File selector + preview + populate formData.img
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);

      // Give backend some img value so "img required" is satisfied.
      // Change this path format if your backend expects something else.
      setFormData((prev) => ({
        ...prev,
        img: `/uploads/${file.name}`
      }));
    } else {
      setImagePreview("");
      setFormData((prev) => ({
        ...prev,
        img: ""
      }));
    }
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

      const res = await fetch(`${BACKEND_URL}/api/weapons`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok || data.ok === false || data.success === false) {
        const backendErrors =
          data.details || [data.message || "Failed to add weapon."];
        setFormErrors(backendErrors);
        setStatusMessage("");
        return;
      }

      setStatusMessage("Weapon added successfully!");
      setFormErrors([]);

      setFormData({
        name: "",
        label: "",
        category: "",
        subclass: "",
        type: "",
        scaling: "",
        requirements: "",
        description: "",
        img: ""
      });
      setImagePreview("");
      e.target.reset();

      await fetchWeapons();
    } catch (err) {
      console.error("Error submitting weapon:", err);
      setFormErrors(["Network or server error while adding weapon."]);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ====== Delete current weapon ======
  const handleDeleteCurrentWeapon = async () => {
    if (!currentWeapon || currentWeapon.id == null) return;

    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${currentWeapon.name}"?`
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `${BACKEND_URL}/api/weapons/${currentWeapon.id}`,
        {
          method: "DELETE"
        }
      );

      const data = await res.json();

      if (!res.ok || data.ok === false) {
        console.error("Failed to delete weapon:", data);
        alert(data.message || "Failed to delete weapon.");
        return;
      }

      await fetchWeapons();
      closeModal();
    } catch (err) {
      console.error("Error deleting weapon:", err);
      alert("Network error while deleting weapon.");
    }
  };

  return (
    <section className="page">
      <h2>Weapons &amp; Tools</h2>
      <h2 className="weapon-head-title">Dark Souls III Weapon Classes</h2>

      <div className="weapon-container">
        <div className="weapon-sections">
          {weaponSections.map((section) => (
            <WeaponSection
              key={section.title}
              title={section.title}
              subclasses={section.subclasses}
              onSubclassClick={openSubclassModal}
            />
          ))}
        </div>
      </div>

      {/* Add Weapon Form */}
      <div className="add-weapon-panel">
        <h3>Add a New Weapon</h3>

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

        <form className="weapon-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Name
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Label (no spaces)
              <input
                name="label"
                value={formData.label}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Category
              <input
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Subclass
              <input
                name="subclass"
                value={formData.subclass}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Type
              <input
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Scaling
              <input
                name="scaling"
                value={formData.scaling}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label className="full-width">
              Requirements
              <input
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label className="full-width">
              Description
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                required
              />
            </label>
          </div>

          {/* File selector + preview */}
          <div className="form-row image-row">
            <div className="weapon-img-preview">
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Weapon preview"
                  className="weapon-img-preview-img"
                />
              )}
            </div>
            <label className="full-width">
              Select Image
              <input
                type="file"
                name="weaponImage"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add Weapon"}
          </button>
        </form>
      </div>

      {/* Modal for multi-weapon view inside a subclass */}
      <Modal
        isOpen={!!selectedSubclass}
        onClose={closeModal}
        title={selectedSubclass?.label}
      >
        {selectedSubclass && currentWeapon && (
          <div>
            {currentWeapon.img && (
              <img
                className="weapon-modal-icon"
                src={`${BACKEND_URL}${currentWeapon.img}`}
                alt={currentWeapon.name}
              />
            )}

            <div className="weapon-modal-selector">
              {selectedSubclass.weapons.map((w, index) => (
                <button
                  key={w.name}
                  className={
                    index === selectedWeaponIndex
                      ? "weapon-pill weapon-pill-active"
                      : "weapon-pill"
                  }
                  onClick={() => selectWeaponByIndex(index)}
                >
                  {w.name}
                </button>
              ))}
            </div>

            {selectedSubclass.weapons.length > 1 && (
              <div className="weapon-modal-nav">
                <button onClick={goPrevWeapon}>⟵ Previous</button>
                <span>
                  {selectedWeaponIndex + 1} / {selectedSubclass.weapons.length}
                </span>
                <button onClick={goNextWeapon}>Next ⟶</button>
              </div>
            )}

            <ul className="weapon-modal-details">
              <li>
                <strong>Name:</strong> {currentWeapon.name}
              </li>
              {currentWeapon.type && (
                <li>
                  <strong>Type:</strong> {currentWeapon.type}
                </li>
              )}
              {currentWeapon.scaling && (
                <li>
                  <strong>Scaling:</strong> {currentWeapon.scaling}
                </li>
              )}
              {currentWeapon.requirements && (
                <li>
                  <strong>Requirements:</strong>{" "}
                  {currentWeapon.requirements}
                </li>
              )}
            </ul>

            {currentWeapon.description && (
              <p className="weapon-modal-notes">
                {currentWeapon.description}
              </p>
            )}

            <div className="weapon-modal-actions">
              <button
                type="button"
                className="danger-button"
                onClick={handleDeleteCurrentWeapon}
              >
                Delete This Weapon
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Weapons;
