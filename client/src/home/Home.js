import './Home.css';
import Location from '../location/Locations';
import DateTime from '../date-and-time/DateTime';
import imageSrc from '../assets/design.png';

function Home() {
  return (
    <div className="app_root">
      <div className="margin">
        <div className="background-container">
          <div style={{ color: '#fff', display: 'flex', justifyContent: 'center', margin: '40px', marginTop: 'auto' }}>||श्री:||</div>
          <div className="level1"><b>Chethan S D & Saniha R Jois</b></div>
          <div className="level2">Inviting you to the</div>
          {/* <div className='nameHeader'> */}
          {/* <div className="level3">Naming Ceremony</div> */}
          {/* </div> */}

          <div className='level3'>
            <img src={imageSrc} height="155px" width="200px" style={{
                animation: 'blink 3s',
            }}/>
          </div>
          
          <div className="level4">of their daughter</div>
          <div className="level5">Seeking your Blessings</div>
          <div className="level6">On</div>
          <div className="level8">
            <DateTime />
          </div>
          <div className="level7">At</div>
          <div className="level8">
            <Location />
          </div>
          <div>
            <p>
              <span className='signTitle'>Best Compliments from <br /></span>
              <span className='signContent'>Jois & Seethur Family</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;