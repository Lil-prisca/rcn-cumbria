import { useState } from "react";

// Keeps its space with a placeholder colour, then fades the image in once loaded.
export default function FadeImage({
  src,
  alt = "",
  className = "",
  wrapperClassName = "",
  bgClassName = "bg-rcn-ice", // placeholder colour while loading
  delay = 0, // ms, to stagger tiles
  priority = false, // true for images at the top of the page
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${bgClassName} ${wrapperClassName}`}
    >
      {src && (
        <img
          key={src}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          ref={(el) => {
            // image was already cached, so onLoad won't fire
            if (el?.complete) setLoaded(true);
          }}
          style={{ transitionDelay: loaded ? `${delay}ms` : "0ms" }}
          className={`transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${className}`}
        />
      )}
    </div>
  );
}
