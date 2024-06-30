
const Session = () => {
  return (
    <div className="conf-step__seances-hall">
      <h3 className="conf-step__seances-title">Зал 1</h3>
      <div className="conf-step__seances-timeline">
        <div className="conf-step__seances-movie" style={{width: '60px', backgroundColor: 'rgb(133, 255, 137)', left: '0'}}>
          <p className="conf-step__seances-movie-title">Миссия выполнима</p>
          <p className="conf-step__seances-movie-start">00:00</p>
        </div>
        <div className="conf-step__seances-movie" style={{width: '60px', backgroundColor: 'rgb(133, 255, 137)', left: '360px'}}>
          <p className="conf-step__seances-movie-title">Миссия выполнима</p>
          <p className="conf-step__seances-movie-start">12:00</p>
        </div>
        <div className="conf-step__seances-movie" style={{width: '65px', backgroundColor: 'rgb(202, 255, 133)', left: '420px'}}>
          <p className="conf-step__seances-movie-title">Звёздные войны XXIII: Атака клонированных клонов</p>
          <p className="conf-step__seances-movie-start">14:00</p>
        </div>              
      </div>
    </div>
  )
}

export default Session