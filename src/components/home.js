import React, { Component } from 'react';
import { Parallax } from 'react-spring';
import './home.css'

const BLOG_URL   = 'https://rohankce.gitbook.io/lexicon/'
const GITHUB_URL = 'https://github.com/RohanK99'
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

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
      <Parallax onScroll={this.handleScroll} ref={ref => (this.parallax = ref)} pages={1} style={{background: '#21292C'}}>
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
            </div>
          </div>
        </Parallax.Layer>
      </Parallax>
    );
  }
}

export default Home;
