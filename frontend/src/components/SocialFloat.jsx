import { useState } from "react";
import "./SocialFloat.css";

const WHATSAPP_NUMBER = "+919319693858";
const INSTAGRAM_URL = "https://www.instagram.com/move_n_leap?utm_source=qr&igsh=MThwMXd3cnQ4Nm05aQ=="; // Replace with actual handle

export default function SocialFloat() {
  const [open, setOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20Move%20N%20Leap!`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleInstagram = () => {
    window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`social-float-wrapper ${open ? "open" : ""}`}>
      {/* Sub-buttons — appear when open */}
      <div className="social-float-options">
        {/* Instagram */}
        <button
          className="social-float-btn instagram-btn"
          onClick={handleInstagram}
          aria-label="Open Instagram"
          title="Instagram"
          tabIndex={open ? 0 : -1}
        >
          {/* Instagram SVG */}
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.33.014 7.052.072 5.197.16 3.355.65 2.014 1.991.673 3.332.183 5.174.095 7.028.014 8.33 0 8.741 0 12c0 3.259.014 3.668.072 4.948.088 1.854.578 3.696 1.919 5.037 1.341 1.341 3.183 1.831 5.037 1.919C8.33 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.854-.088 3.696-.578 5.037-1.919 1.341-1.341 1.831-3.183 1.919-5.037C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.088-1.854-.578-3.696-1.919-5.037C20.668.65 18.826.16 16.972.072 15.668.014 15.259 0 12 0z" />
            <path d="M12 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
            <circle cx="18.406" cy="5.594" r="1.44" />
          </svg>
        </button>

        {/* WhatsApp */}
        <button
          className="social-float-btn whatsapp-btn"
          onClick={handleWhatsApp}
          aria-label="Open WhatsApp"
          title="WhatsApp"
          tabIndex={open ? 0 : -1}
        >
          {/* WhatsApp SVG */}
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.792 12.792 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
        </button>
      </div>

      {/* Main toggle button */}
      <button
        id="social-float-toggle"
        className="social-float-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close social media links" : "Open social media links"}
        aria-expanded={open}
      >
        <span className="social-float-toggle-icon main-icon">
          {/* Share / chat bubble icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
          </svg>
        </span>
        <span className="social-float-toggle-icon close-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </span>
      </button>
    </div>
  );
}
