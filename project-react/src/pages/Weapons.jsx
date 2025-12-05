import { useEffect, useState } from "react";
import "../css/Weapons.css";
import Modal from "../components/Modal";
import BACKEND_URL from "../config";

/* ========= Small presentational components ========= */

const SubclassCard = ({ subclass, onClick, uploadPreviews }) => {
  let iconSrc = null;

  if (subclass.icon) {
    if (
      subclass.icon.startsWith("http://") ||
      subclass.icon.startsWith("https://")
    ) {
      iconSrc = subclass.icon;
    } else if (subclass.icon.startsWith("/uploads/")) {
      // Use stored blob URL from uploads map
      iconSrc = uploadPreviews[subclass.icon] || null;
    } else {
      iconSrc = `${BACKEND_URL}${subclass.icon}`;
    }
  }

  return (
    <article className="subclass-card" onClick={onClick}>
      {iconSrc && <img src={iconSrc} alt={subclass.label} />}
      <button className="pill">{subclass.label}</button>
    </article>
  );
};

const WeaponSection = ({
  title,
  subclasses,
  onSubclassClick,
  uploadPreviews
}) => (
  <div className="weapon-section">
    <h2 className="weapon-section-title">{title}</h2>
    <div className="weapon-scroll-row">
      {subclasses.map((sub) => (
        <SubclassCard
          key={sub.id}
          subclass={sub}
          onClick={() => onSubclassClick(sub)}
          uploadPreviews={uploadPreviews}
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

  const [formData, setFormData] = useState({
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
  const [formErrors, setFormErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [imagePreview, setImagePreview] = useState("");
  const [uploadPreviews, setUploadPreviews] = useState({}); // { [imgPath]: blobUrl }

  const [isEditing, setIsEditing] = useState(false);
  const [editFields, setEditFields] = useState({
    name: "",
    type: "",
    scaling: "",
    requirements: "",
    description: ""
  });

  const [editImagePath, setEditImagePath] = useState("");
  const [editImagePreview, setEditImagePreview] = useState("");

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

  const openSubclassModal = (subclass) => {
    setSelectedSubclass(subclass);
    setSelectedWeaponIndex(0);
    setIsEditing(false);
    setEditFields({
      name: "",
      type: "",
      scaling: "",
      requirements: "",
      description: ""
    });
    setEditImagePath("");
    setEditImagePreview("");
  };

  const closeModal = () => {
    setSelectedSubclass(null);
    setSelectedWeaponIndex(0);
    setIsEditing(false);
    setEditFields({
      name: "",
      type: "",
      scaling: "",
      requirements: "",
      description: ""
    });
    setEditImagePath("");
    setEditImagePreview("");
  };

  const currentWeapon =
    selectedSubclass?.weapons?.[selectedWeaponIndex] || null;

  const goPrevWeapon = () => {
    if (!selectedSubclass) return;
    const len = selectedSubclass.weapons.length;
    setSelectedWeaponIndex((prev) => (prev - 1 + len) % len);
    setIsEditing(false);
  };

  const goNextWeapon = () => {
    if (!selectedSubclass) return;
    const len = selectedSubclass.weapons.length;
    setSelectedWeaponIndex((prev) => (prev + 1) % len);
    setIsEditing(false);
  };

  const selectWeaponByIndex = (index) => {
    setSelectedWeaponIndex(index);
    setIsEditing(false);
  };

  const validateForm = () => {
    const errors = [];

    if (!formData.name.trim()) errors.push("Name is required.");
    if (!formData.label.trim()) {
      errors.push("Label is required.");
    } else if (!/^[a-zA-Z0-9_-]+$/.test(formData.label.trim())) {
      errors.push("Label must be alphanumeric (you can use - or _).");
    }
    if (!formData.category.trim()) errors.push("Category is required.");
    if (!formData.subclass.trim()) errors.push("Subclass is required.");
    if (!formData.type.trim()) errors.push("Type is required.");
    if (!formData.scaling.trim()) errors.push("Scaling is required.");
    if (!formData.requirements.trim())
      errors.push("Requirements are required.");
    if (!formData.description.trim())
      errors.push("Description is required.");
    if (!formData.img.trim()) errors.push("Please select an image file.");

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      const imgPath = `/uploads/${file.name}`;

      setImagePreview(previewUrl);

      setFormData((prev) => ({
        ...prev,
        img: imgPath
      }));

      // Store blob URL mapped to this /uploads path
      setUploadPreviews((prev) => ({
        ...prev,
        [imgPath]: previewUrl
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
        return;
      }

      triggerToast("Weapon added successfully!");
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

      triggerToast("Weapon deleted.");
      await fetchWeapons();
      closeModal();
    } catch (err) {
      console.error("Error deleting weapon:", err);
      alert("Network error while deleting weapon.");
    }
  };

  const startEditCurrentWeapon = () => {
    if (!currentWeapon) return;
    setIsEditing(true);
    setEditFields({
      name: currentWeapon.name || "",
      type: currentWeapon.type || "",
      scaling: currentWeapon.scaling || "",
      requirements: currentWeapon.requirements || "",
      description: currentWeapon.description || ""
    });

    // Initialize image edit fields
    const imgPath = currentWeapon.img || "";
    setEditImagePath(imgPath);

    let initialPreview = "";
    if (imgPath) {
      if (imgPath.startsWith("/uploads/")) {
        initialPreview = uploadPreviews[imgPath] || "";
      } else if (
        imgPath.startsWith("http://") ||
        imgPath.startsWith("https://")
      ) {
        initialPreview = imgPath;
      } else {
        initialPreview = `${BACKEND_URL}${imgPath}`;
      }
    }
    setEditImagePreview(initialPreview);
  };

  const cancelEditCurrentWeapon = () => {
    setIsEditing(false);
    setEditImagePath("");
    setEditImagePreview("");
  };

  const handleEditFieldChange = (field, value) => {
    setEditFields((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEditImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      const imgPath = `/uploads/${file.name}`;

      setEditImagePreview(previewUrl);
      setEditImagePath(imgPath);

      setUploadPreviews((prev) => ({
        ...prev,
        [imgPath]: previewUrl
      }));
    }
  };

  const saveEditCurrentWeapon = async () => {
    if (!currentWeapon || currentWeapon.id == null) return;

    if (
      !editFields.name.trim() ||
      !editFields.type.trim() ||
      !editFields.scaling.trim() ||
      !editFields.requirements.trim() ||
      !editFields.description.trim()
    ) {
      alert("All fields must be filled out.");
      return;
    }

    try {
      const res = await fetch(
        `${BACKEND_URL}/api/weapons/${currentWeapon.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: editFields.name,
            type: editFields.type,
            scaling: editFields.scaling,
            requirements: editFields.requirements,
            description: editFields.description,
            img: editImagePath || currentWeapon.img || ""
          })
        }
      );

      const data = await res.json();

      if (!res.ok || data.ok === false) {
        console.error("Failed to update weapon:", data);
        alert(data.message || "Failed to update weapon.");
        return;
      }

      // Update local state so modal shows new values immediately
      setWeaponSections((prev) =>
        prev.map((section) => ({
          ...section,
          subclasses: section.subclasses.map((sub) => {
            const updatedWeapons = sub.weapons.map((w) =>
              w.id === currentWeapon.id
                ? {
                    ...w,
                    name: editFields.name,
                    type: editFields.type,
                    scaling: editFields.scaling,
                    requirements: editFields.requirements,
                    description: editFields.description,
                    img: editImagePath || w.img
                  }
                : w
            );

            const containsWeapon = sub.weapons.some(
              (w) => w.id === currentWeapon.id
            );

            return containsWeapon
              ? {
                  ...sub,
                  weapons: updatedWeapons,
                  icon: updatedWeapons[0]?.img || sub.icon
                }
              : sub;
          })
        }))
      );

      setSelectedSubclass((prev) =>
        prev
          ? {
              ...prev,
              weapons: prev.weapons.map((w) =>
                w.id === currentWeapon.id
                  ? {
                      ...w,
                      name: editFields.name,
                      type: editFields.type,
                      scaling: editFields.scaling,
                      requirements: editFields.requirements,
                      description: editFields.description,
                      img: editImagePath || w.img
                    }
                  : w
              )
            }
          : prev
      );

      setIsEditing(false);
      setEditImagePath("");
      setEditImagePreview("");
      triggerToast("Weapon updated successfully!");
    } catch (err) {
      console.error("Error updating weapon:", err);
      alert("Network error while updating weapon.");
    }
  };

  let modalImageSrc = null;

  if (currentWeapon && currentWeapon.img && currentWeapon.img.trim() !== "") {
    if (
      currentWeapon.img.startsWith("http://") ||
      currentWeapon.img.startsWith("https://")
    ) {
      modalImageSrc = currentWeapon.img;
    } else if (currentWeapon.img.startsWith("/uploads/")) {
      // Use stored blob URL for uploaded images (or current edit preview)
      modalImageSrc =
        uploadPreviews[currentWeapon.img] || editImagePreview || null;
    } else {
      modalImageSrc = `${BACKEND_URL}${currentWeapon.img}`;
    }
  } else if (imagePreview) {
    modalImageSrc = imagePreview;
  }

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
              uploadPreviews={uploadPreviews}
            />
          ))}
        </div>
      </div>

      {/* Add Weapon Panel */}
      <div className="add-weapon-panel">
        <h3>Add a New Weapon</h3>

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

      {/* Weapon Modal (View & Edit) */}
      <Modal
        isOpen={!!selectedSubclass}
        onClose={closeModal}
        title={selectedSubclass?.label}
      >
        {selectedSubclass && currentWeapon && (
          <div className="weapon-modal-content">
            {/* Top image - shrinks while editing */}
            {modalImageSrc && (
              <img
                className={`weapon-modal-icon ${
                  isEditing ? "edit-mode" : ""
                }`}
                src={editImagePreview || modalImageSrc}
                alt={currentWeapon.name}
              />
            )}

            {isEditing && (
              <div className="weapon-edit-image-row">
                {(editImagePreview || modalImageSrc) && (
                  <img
                    src={editImagePreview || modalImageSrc}
                    alt="Weapon preview"
                    className="weapon-edit-img-small"
                  />
                )}
                <label className="weapon-change-image-label">
                  Change Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleEditImageChange}
                  />
                </label>
              </div>
            )}

            {/* Weapon selector pills */}
            <div className="weapon-modal-selector">
              {selectedSubclass.weapons.map((w, index) => (
                <button
                  key={w.id ?? w.name}
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

            {/* Aligned fields */}
            <div className="weapon-modal-details">
              <div className="weapon-modal-field-row">
                <label className="weapon-edit-label">
                  Name
                  {isEditing ? (
                    <input
                      className="weapon-edit-input"
                      value={editFields.name}
                      onChange={(e) =>
                        handleEditFieldChange("name", e.target.value)
                      }
                    />
                  ) : (
                    <span className="weapon-view-value">
                      {currentWeapon.name}
                    </span>
                  )}
                </label>

                <label className="weapon-edit-label">
                  Type
                  {isEditing ? (
                    <input
                      className="weapon-edit-input"
                      value={editFields.type}
                      onChange={(e) =>
                        handleEditFieldChange("type", e.target.value)
                      }
                    />
                  ) : (
                    <span className="weapon-view-value">
                      {currentWeapon.type}
                    </span>
                  )}
                </label>
              </div>

              <div className="weapon-modal-field-row">
                <label className="weapon-edit-label">
                  Scaling
                  {isEditing ? (
                    <input
                      className="weapon-edit-input"
                      value={editFields.scaling}
                      onChange={(e) =>
                        handleEditFieldChange("scaling", e.target.value)
                      }
                    />
                  ) : (
                    <span className="weapon-view-value">
                      {currentWeapon.scaling}
                    </span>
                  )}
                </label>

                <label className="weapon-edit-label">
                  Requirements
                  {isEditing ? (
                    <input
                      className="weapon-edit-input"
                      value={editFields.requirements}
                      onChange={(e) =>
                        handleEditFieldChange(
                          "requirements",
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    <span className="weapon-view-value">
                      {currentWeapon.requirements}
                    </span>
                  )}
                </label>
              </div>

              <div className="weapon-modal-notes">
                <label className="weapon-edit-label weapon-edit-description">
                  Description
                  {isEditing ? (
                    <textarea
                      className="weapon-edit-textarea"
                      rows={5}
                      value={editFields.description}
                      onChange={(e) =>
                        handleEditFieldChange(
                          "description",
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    <p>{currentWeapon.description}</p>
                  )}
                </label>
              </div>
            </div>

            <div className="weapon-modal-actions">
              {isEditing ? (
                <>
                  <button
                    type="button"
                    onClick={saveEditCurrentWeapon}
                    className="weapon-edit-button"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={cancelEditCurrentWeapon}
                    className="weapon-edit-cancel"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={startEditCurrentWeapon}
                  className="weapon-edit-button"
                >
                  Edit Info
                </button>
              )}

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

      {showToast && <div className="toast-notice">{toastMessage}</div>}
    </section>
  );
};

export default Weapons;
