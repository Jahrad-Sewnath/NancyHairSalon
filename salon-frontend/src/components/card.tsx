import React from "react";
import "./componentstyles.css";

type CardProps = {
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

function Card({ title, imageSrc, imageAlt, children, footer }: CardProps) {
  return (
    <div className="card">
      {/* Optional Image */}
      {imageSrc && (
        <div className="card-image">
          <img src={imageSrc} alt={imageAlt || "Card image"} />
        </div>
      )}

      {/* Content */}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        <div className="card-body">{children}</div>
      </div>

      {/* Optional Footer */}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

export default Card;
