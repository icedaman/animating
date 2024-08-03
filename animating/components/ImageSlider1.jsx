const imgArr = [...Array(10)].map((e,x)=> x+1)

const ImageSlider1 = () => {
  return (
    <div className="banner">
      <div className="slider animate-spi n " style={{'--quantity': 10}}>
        {imgArr.map(e =>(
          <div className={`item`} style={{'--position': e}} key={e} ><img src={`images/animation-slider/dragon_${e}.jpg`} alt="" /></div>
        ))}
      </div>
      <div className="content">
          <h1 data-content="Pick Yours">
              Pick Yours
          </h1>
          <div className="model"></div>
      </div>
    </div>
  )
}

export default ImageSlider1