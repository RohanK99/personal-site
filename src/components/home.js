import React, { Component } from 'react';
import { Parallax } from 'react-spring';
import { Link } from 'react-router-dom';
import './home.css'
import resume from '../assets/resume-bold.pdf'
import HackWestern from '../assets/Hack-Western-Bold.svg'
import HackTheNorth from '../assets/Hack-the-North-Bold.svg'
import Canarie from '../assets/Canarie-Bold.svg'
import CriticalMass from '../assets/Critical-Mass-Bold.svg'
import Fitbit from '../assets/Fitbit-Bold.svg'
import Wato from '../assets/Wato-Bold.svg'
import CanarieColor from '../assets/Canarie-App.svg'
import HackWesternColor from '../assets/Hack-Western-App.svg'
import WatoColor from '../assets/Wato-App.svg'
import HackTheNorthColor from '../assets/Hack-the-North-App.svg'
import FitbitColor from '../assets/Fitbit-App.svg'
import CriticalMassColor from '../assets/Critical-Mass-App.svg'

const BLOG_URL   = 'https://rohankce.gitbook.io/lexicon/'
const GITHUB_URL = 'https://github.com/RohanK99'
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src: this.props.src
    }
  }

  mouseOver = () => {
    this.setState({ src: this.props.hoverSrc })
  }

  mouseOut = () => {
    this.setState({ src: this.props.src })
  }

  render() {
    const imgAlt = (name) => {return `${name} Project`}
    return (
      <img
        src={this.state.src}
        alt={imgAlt(this.props.name)}
        className="hoverUp"
        style={{ width: '70%', height: 'auto', transition: 'transform 0.6s ease' }}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      />
    )
  }
}

class ShootingStar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      top: '30%',
      left: '40%',
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ top: (Math.floor(Math.random()*100).toString() + '%'), left: (Math.floor(Math.random()*100).toString() + '%')}), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <span className={"star " + this.props.colour} style={this.state}></span>
    )
  }
}

class Home extends Component {

  render() {
    return (
      <Parallax onScroll={this.handleScroll} ref={ref => (this.parallax = ref)} pages={2} style={{background: '#21292C'}}>
        <Parallax.Layer offset={1} speed={1}/>
        <Parallax.Layer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover', animation: 'shine 10s infinite'}} />

        <Parallax.Layer offset={0} speed={0}>
          <ShootingStar colour="pink" />
          <ShootingStar colour="blue" />
          <ShootingStar colour="yellow" />
          <ShootingStar colour="green" />
          <div className="vertical-center">
            <div className="container text-center">
              <div className="text-group text-white">
                <h1>
                  <span style={{ color: '#F4B447'}}>R</span>
                  <span style={{ color: '#F69233' }}>O</span>
                  <span style={{ color: '#F26E54' }}>H</span>
                  <span style={{ color: '#EE4C7A' }}>A</span>
                  <span style={{ color: '#A066A8' }}>N</span>
                  <span> </span>
                  <span style={{ color: '#4E71B7' }}>K</span>
                  <span style={{ color: '#0B97AC' }}>U</span>
                  <span style={{ color: '#00B199'}}>M</span>
                  <span style={{ color: '#6CB980'}}>A</span>
                  <span style={{ color: '#8CC66A'}}>R</span>
                </h1>
                <hr className="hr-gradient" />
                <h2>3A uwaterloo computer engineering</h2>
                <br/>
                <p>I have an interest in embedded systems, autonomous cars, ai and quant</p>
                <p>In my spare time, you can find me playing guitar or at the climbing gym</p>
                <br/>
                <div className="social-buttons">
                  <a href={BLOG_URL} target="_blank" rel="noopener noreferrer"><button id="blog">blog</button></a>
                  <div className="divider" />
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"><button id="github">Github</button></a>
                  <div className="divider" />
                  <a href="mailto:rohank.ce@gmail.com"><button id="email">email</button></a>
                </div>
              </div>
              <svg className="arrows" onClick={() => this.parallax.scrollTo(1)}>
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
              </svg>
            </div>
          </div>
        </Parallax.Layer>

        <Parallax.Layer offset={1} speed={1}>
          <ShootingStar colour="pink" />
          <ShootingStar colour="blue" />
          <ShootingStar colour="yellow" />
          <ShootingStar colour="green" />
          <div className="vertical-center">
            <div className='container align-center'>
              <div className="row">
                <div className="col text-center">
                  <Link to="/coming-soon"><Project name="hack western" src={HackWestern} hoverSrc={HackWesternColor}/></Link>
                </div>
                <div className="col text-center">
                  <Link to="/coming-soon"><Project name="hack the north" src={HackTheNorth} hoverSrc={HackTheNorthColor}/></Link>
                </div>
                <div className="col text-center">
                  <Link to="/coming-soon"><Project name="fitbit" src={Fitbit} hoverSrc={FitbitColor}/></Link>
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col text-center">
                  <Link to="/coming-soon"><Project name="canarie" src={Canarie} hoverSrc={CanarieColor}/></Link>
                </div>
                <div className="col text-center">
                  <Link to="/coming-soon"><Project name="watonomous" src={Wato} hoverSrc={WatoColor}/></Link>
                </div>
                <div className="col text-center">
                  <Link to="/coming-soon"><Project name="critical mass" src={CriticalMass} hoverSrc={CriticalMassColor}/></Link>
                </div>
              </div>
            </div>
          </div>
        </Parallax.Layer>

      </Parallax>
    );
  }
}

export default Home;
