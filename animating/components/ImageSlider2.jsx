const imgArr = [...Array(10)].map((e,x)=> x+1)
const imgArrLogos = ['html', 'css', 'js', 'react', 'next', 'ts', 'tailwind', 'node', 'graphql', 'styled', 'material', 'mysql']

const ImageSlider2 = () => {
  return (
    <div className="bg-pink-400 py-10">
      <div className="slider2" style={{'--quantity': 10, '--width': '100px', '--height': '50px'}}>
        <div className="list">
          {imgArr.map(e =>(
            <div className={`item2`} style={{'--position': e}} key={e} ><img src={`images/animation-slider/dragon_${e}.jpg`} alt="" /></div>
          ))}
        </div>
      </div>

      <div className="slider2 py-10" reverse="true" style={{'--quantity': 12, '--width': '200px', '--height': '200px'}}>
        <div className="list ">
          {imgArrLogos.map((e, i) =>(
            <div className={`item2`} style={{'--position': i}} key={e} >
              <img src={`images/animation-slider/${e}.png`} alt="" className="h-[100px] object-contain"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageSlider2