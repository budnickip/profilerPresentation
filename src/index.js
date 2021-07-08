import { render } from 'react-dom'
import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import './index.css'
import ZeroSlide from './components/ZeroSlide/ZeroSlide';
import FirstSlide from './components/FirstSlide/FirstSlide';
import SecondSlide from './components/SecondSlide/SecondSlide';
import ThirthSlide from './components/ThirthSlide/ThirthSlide';
import Optimization from './components/Optimization/Optimization';
import GfOperator from './components/GfOperator/GfOperator';
import GfUser from './components/GfUser/GfUser';
import Boge from './components/Boge/Boge';
import End from './components/End/End';

function Viewpager() {
  const index = useRef(0)
  const [props, set] = useSprings(9, (i) => ({
    x: i * window.innerWidth,
    scale: 1,
    display: 'block'
  }))
  const bind = useDrag(({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
    if (active && distance > window.innerWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, 9 - 1)))
    set((i) => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * window.innerWidth + (active ? mx : 0)
      const scale = active ? 1 - distance / window.innerWidth / 2 : 1
      return { x, scale, display: 'block' }
    })
  })
  return props.map(({ x, display, scale }, i) => (
    <animated.div {...bind()} key={i} style={{ display, x }}>
      <animated.div style={{ scale }} >
        {i === 0 && <FirstSlide />}
        {i === 1 && <ZeroSlide />}
        {i === 2 && <SecondSlide />}
        {i === 3 && <ThirthSlide />}
        {i === 4 && <Optimization />}
        {i === 5 && <GfOperator />}
        {i === 6 && <GfUser />}
        {i === 7 && <Boge />}
        {i === 8 && <End />}
      </animated.div>
    </animated.div>
  ))
}

render(<Viewpager />, document.getElementById('root'))
