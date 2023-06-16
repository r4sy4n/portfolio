import portfolio from '../assets/images/portfolio.png';

const Portfolio = () => {
  return (
    <div>
      <a href='#projects'>First <strong>Portfolio</strong></a>
      <img src={portfolio} alt='portfolio' className='' />
    </div>
  )
}

export default Portfolio;