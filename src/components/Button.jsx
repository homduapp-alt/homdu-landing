// Button.jsx — homdu design-system action button.
// Exported for the DS bundle (window.Homdu_96e706.Button). Styling comes from
// the shared `.btn` tokens in styles.css, so it themes light/dark for free.

export function Button({
  variant = "brand",
  size = "md",
  href,
  target,
  rel,
  type = "button",
  className = "",
  children,
  ...rest
}) {
  const cls = `btn btn--${variant}${size === "lg" ? " btn--lg" : ""}${className ? " " + className : ""}`;

  if (href) {
    const external = /^https?:/i.test(href);
    return (
      <a
        className={cls}
        href={href}
        target={target || (external ? "_blank" : undefined)}
        rel={rel || (external ? "noopener noreferrer" : undefined)}
        {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} type={type} {...rest}>
      {children}
    </button>
  );
}
