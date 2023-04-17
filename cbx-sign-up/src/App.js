import './App.css';
import SignUp from './components/SignUp';
import SignUpData from './components/SignUp_data';
import SignUpFooter from './components/SignUp_footer'
import TrustedLogos from './components/Trusted_logos';


function App() {
  return (
    <div>
    <section
      className="first-fold signup-form-overlap gradient-dark-blue-2 font-color-light banner-form clearfix-md"
      id=""
    >
      <div className="App">
        <div className='row' style={{ height: "auto" }}>
          <div className='company_info col-12 col-md-6'style={{ paddingLeft: "auto" }}>
            <SignUpData />
          </div>
          <div className='col-12 col-md-6'style={{ paddingBottom:"10px"  }} >
            <SignUp />
          </div>
          <div className='col-md-12'style={{ paddingBottom:"10px"  }} >
            <TrustedLogos />
          </div>

        </div>
      </div>
    </section>
    <div >
      <SignUpFooter />
    </div>
  </div>
  );
}

export default App;
