import React from 'react';

function SignUpFooter() {
  return (
    <footer className="bg-light text-center text-white">
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Social media */}
        <section className="mb-4">

          {/* Twitter */}
          <a
            className="btn text-white  m-1"
            style={{backgroundColor: "#55acee"}}
            href="https://twitter.com/myCloudBuilders"
            role="button"
            ><i className="fab fa-twitter"></i>
          </a>

          {/* youtube */}
          <a
            className="btn text-white  m-1"
            style={{backgroundColor: "#dd4b39"}}
            href="https://www.youtube.com/@cloudbuilders5082/about"
            role="button"
            ><i className="fab fa-youtube"></i>
          </a>



          {/* Linkedin */}
          <a
            className="btn text-white  m-1"
            style={{backgroundColor: "#0082ca"}}
            href=" https://www.linkedin.com/company/cloudbuilders-technologies/"
            role="button"
            ><i className="fab fa-linkedin-in"></i>
          </a>

          <p className="m-0"style={{color: "black"}}>&copy; 2023 Cloud Builders. All rights reserved.</p>

        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}
    </footer>
  );
}

export default SignUpFooter;
