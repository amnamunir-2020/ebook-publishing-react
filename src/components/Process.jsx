
function Process() {
  const processItems = [
    "Author Consultation",
    "Manuscript Review",
    "Content Structuring",
    "Developmental Editing",
    "Line Editing",
    "Professional Formatting",
    "Cover Branding",
    "Launch & Distribution",
  ];

  return (
    <section className="market-process-section">
      <div className="container">
        <div className="market-process-heading">
          <h2>
            The Process That Turns Manuscripts
            <br className="market-process-break" />
            {" "}Into Market-Ready Books
          </h2>

          <p>
            Once your manuscript is complete, the next step is making
            sure every detail is ready for publication. Our professional
            publishing process covers everything from editing and
            formatting to cover preparation, file conversion, quality
            checks, and final publishing support.
          </p>
        </div>

        <div className="market-process-grid">
          {processItems.map((item, index) => (
            
<div className="market-process-item" key={item}>
  <div className="market-process-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-check-circle-fill"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </svg>
  </div>
  <h3>{item}</h3>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;