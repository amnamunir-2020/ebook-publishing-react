
function WhoHandle() {
  const steps = [
    {
      title: "Submit Your Manuscript",
      text: "Send us your manuscript in any format, and we'll review it to understand your genre, goals, and publishing needs before starting.",
    },
    {
      title: "Get a Custom Quote",
      text: "We assess your project's scope and provide transparent pricing based on formatting, design, and distribution needs, with no hidden costs.",
    },
    {
      title: "Approve Design & Formatting",
      text: "Review and approve your cover concept and interior formatting before we finalize anything, so the final ebook matches your vision exactly.",
    },
    {
      title: "Publish & Go Live",
      text: "Once approved, we upload and publish your ebook across your chosen platforms, making it available to readers within days.",
    },
  ];

  return (
    <section className="who-handle-section">
      <div className="container">
        <div className="who-handle-heading">
          <h2>
            Ebook Publishing Experts Who Handle
            <br className="who-handle-break" />
            {" "}the Details You Shouldn't Have To
          </h2>

          <p>
            Once your manuscript is complete, the next step is making
            sure every detail is ready for publication. Our professional
            publishing process covers everything from editing and
            formatting to cover preparation, file conversion, quality
            checks, and final publishing support.
          </p>
        </div>

        <div className="who-handle-steps">
          {steps.map((step, index) => (
            <div className="who-handle-step" key={step.title}>
              <div className="who-handle-icon">
                {/* Apna SVG icon yahan add karein */}
              </div>

              <span className="who-handle-number">
                0{index + 1}
              </span>

              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoHandle;