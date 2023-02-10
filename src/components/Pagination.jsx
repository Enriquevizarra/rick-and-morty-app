function Pagination({prev, next, onPrevious, onNext}) {

  const handlePrevious = () => {
    console.log("previus")
    onPrevious()
  }
  const handleNext = () => {
    console.log("next")
    onNext()
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {
          prev ? 
          (<li className="page-item">
            <button 
              className="page-link"
              onClick={handlePrevious}
            >Previous</button>
          </li>)
          : null
        }
        {
          next ? 
          (<li className="page-item">
            <button 
              className="page-link"
              onClick={handleNext}
            >Next</button>
          </li>)
          : null
        }
      </ul>
      
    </nav>
  )
}

export { Pagination }
