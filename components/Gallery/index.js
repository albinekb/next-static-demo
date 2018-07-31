import styled from 'react-emotion'

const Gallery = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export default () => (
  <Gallery>
    <img width="20%" src={require('./images/aaron-birch-758380-unsplash.jpg')} />
    <img width="20%" src={require('./images/johnny-nguyen-758371-unsplash.jpg')} />
    <img width="20%" src={require('./images/klemen-vrankar-757982-unsplash.jpg')} />
  </Gallery>
)
