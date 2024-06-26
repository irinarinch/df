
interface IMovieProps {
    image: string,
    title: string,
    duration: string,
}
const Movie = () => {
  return (
    // <div className="conf-step__movie">
    //     <img className="conf-step__movie-poster" alt="poster" src={props.image}/>
    //     <h3 className="conf-step__movie-title">{props.title}</h3>
    //     <p className="conf-step__movie-duration">{props.duration}</p>
    // </div>
    <div className="conf-step__movie">
        <img className="conf-step__movie-poster" alt="poster" src="./public/admin/i/poster.png"/>
        <h3 className="conf-step__movie-title">Миссия выполнима</h3>
        <p className="conf-step__movie-duration">120 минут</p>
    </div>
  )
}

export default Movie