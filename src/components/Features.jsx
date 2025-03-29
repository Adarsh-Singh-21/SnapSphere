import { GrRobot } from "react-icons/gr";
import { IoChatbubbleOutline } from "react-icons/io5";
import { TbTools } from "react-icons/tb";

const Features = ({}) => {
  return (
    <>
      <div class="px-4 py-5 my-5 text-center">
        <img
          class="hero-image d-block mx-auto mb-4"
          src="./src/assets/linear-app-icon.png"
          alt="hero-features"
        />
        <h1 class="display-5 fw-bold text-body-emphasis">Features</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Where Innovation Meets Convenience: Features That Work for You.
          </p>
        </div>
      </div>

      <div class="container px-4 py-5" id="hanging-icons">
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg class="bi" width="1em" height="1em">
                <GrRobot />
              </svg>
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis">AI-Powered Assistance</h3>
              <p>
                Get intelligent recommendations and automation to simplify your
                workflow.
              </p>
              <a href="#" class="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg class="bi" width="1em" height="1em">
                <IoChatbubbleOutline />
              </svg>
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis">Instant Collaboration</h3>
              <p>Communicate and collaborate with your team in real time.</p>
              <a href="#" class="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg class="bi" width="1em" height="1em">
                <TbTools />
              </svg>
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis">Intuitive User Experience</h3>
              <p>
                A sleek, user-friendly interface designed for effortless
                navigation.
              </p>
              <a href="#" class="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;

// refrences: https://saaslandingpage.com/features/
