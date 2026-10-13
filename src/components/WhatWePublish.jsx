
function WhatWePublish() {
  const categories = [
    {
      number: '01',
      title: 'Fiction',
      text: 'Bring imaginative stories, novels, and captivating fiction to readers worldwide.'
    },
    {
      number: '02',
      title: 'Non-Fiction',
      text: 'Publish informative, educational, and thought-provoking books.'
    },
    {
      number: '03',
      title: "Children's Books",
      text: 'Create engaging and inspiring books designed especially for young readers.'
    },
    {
      number: '04',
      title: 'Business & Finance',
      text: 'Share your professional knowledge, business ideas, and financial expertise.'
    },
    {
      number: '05',
      title: 'Romance',
      text: 'Publish memorable love stories and romance books for passionate readers.'
    },
    {
      number: '06',
      title: 'Self-Help',
      text: 'Turn your experience and knowledge into books that inspire positive change.'
    }
  ]

  return (
    <section className="what-publish-section" id="services">

      <div className="container">

        {/* Heading */}

        <div className="what-publish-heading">

          <span>WHAT WE PUBLISH</span>

          <h2>
            Your Story Deserves
            <strong>To Be Published</strong>
          </h2>

          <p>
            Whatever your genre or publishing goal, we help transform
            your manuscript into a professionally published book.
          </p>

        </div>


        {/* Cards */}

        <div className="publish-grid">

          {categories.map((category, index) => (

            <div className="publish-card" key={index}>

              <div className="publish-number">
                {category.number}
              </div>

              <div className="publish-card-content">

                <h3>{category.title}</h3>

                <p>{category.text}</p>

                <a href="#contact">
                  Get Started <span>→</span>
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default WhatWePublish

