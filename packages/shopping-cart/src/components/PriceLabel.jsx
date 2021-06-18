export const PriceLabel = ({ label, bold, value }) => {
  return (
    <div className="d-flex">
      <p className={bold ? "price-label fw-bold" : "price-label"}>{label} </p>
      <p
        className={bold ? "price-value ms-auto fw-bold" : "price-value ms-auto"}
      >
        ${value}
      </p>
    </div>
  );
};
