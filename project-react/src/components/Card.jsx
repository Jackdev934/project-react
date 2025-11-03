import React from "react";
import { Link } from "react-router-dom";

// Generic card for tiles (categories, bosses, weapons, characters)
// Usage: <Card title="Bosses" to="/bosses" image="/img/boss.jpg"><p>Desc</p></Card>
export default function Card({ title, to, image, children, footer, onClick, className = "card" }) {
  const Wrapper = to ? Link : "div";
  const wrapperProps = to ? { to } : {};

  return (
    <Wrapper className={`${className}`} {...wrapperProps} onClick={onClick}>
      {image && (
        <div className="card-media">
          <img src={image} alt={title || ""} />
        </div>
      )}
      {title && <h4 className="card-title">{title}</h4>}
      {children && <div className="card-body">{children}</div>}
      {footer && <div className="card-footer">{footer}</div>}
    </Wrapper>
  );
}
