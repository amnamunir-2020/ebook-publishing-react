import { useState } from 'react'

function BookCarousel() {
  const books = [
    {
      title: 'The Silent Garden',
      category: 'Fiction',
      image: 'src/assets/afternoon-of-life-book.webp'
    },
    {
      title: 'Journey Within',
      category: 'Self Help',
      image: 'src/assets/build-book.webp'
    },
    {
      title: 'The Last Chapter',
      category: 'Novel',
      image: 'src/assets/even-the-ashes-bloom.webp'
    },
    {
      title: 'Dreams & Destiny',
      category: 'Inspirational',
      image: 'src/assets/kinder-und-karriere-book.webp'
    },
    {
      title: 'Beyond The Stars',
      category: 'Adventure',
      image: 'src/assets/the-cover-up-book.webp'
    },
    {
      title: 'A New Beginning',
      category: 'Biography',
      image: 'src/assets/zeitreisen-sind-verboten.webp'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev < books.length - 4 ? prev + 1 : 0
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : books.length - 4
    )
  }

  return (
    <section className="book-carousel-section">

      <div className="container">

        {/* Heading */}
        <div className="book-carousel-heading">

          <div>
            <span>OUR PORTFOLIO</span>

            <h2>
              Explore Our
              <strong>Published Books</strong>
            </h2>
          </div>

          <div className="book-carousel-arrows">

            <button onClick={prevSlide}>
              ←
            </button>

            <button onClick={nextSlide}>
              →
            </button>

          </div>

        </div>


        {/* Carousel */}
        <div className="book-carousel-wrapper">

          <div
            className="book-carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`
            }}
          >

            {books.map((book, index) => (

              <div className="book-slide" key={index}>

                <div className="book-card">

                  <div className="book-image">
                    <img
                      src={book.image}
                      alt={book.title}
                    />
                  </div>

                  <div className="book-info">

                    <span>{book.category}</span>

                    <h3>{book.title}</h3>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default BookCarousel