import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Levo() {
  return (
    <div id="template__Container" className="max-w-[1400px] mt-4 mr-auto ">
      <div id="col__Container " className="flex flex-row gap-2 ">
        {/* LEFT COLUMN */}
        <div id="left__Col" className=" shadow-xl rounded-sm bg-white w-2/4 ">
          <div id="image__Container" className="relative ">
            <img
              className="w-full"
              src="https://www.w3schools.com/w3images/avatar_hat.jpg"
              alt="alt text here"
            />
            <div id="name__Container" className="absolute bottom-2 left-2 ">
              <h2 className="text-xl">Jane Doe</h2>
            </div>
          </div>

          <div id="pernsonalInfo__Container" className="ml-1 font-light">
            <p>
              <i className="fa fa-briefcase fa-fw text-teal-500" />
              Desinger
            </p>
            <p>
              <i className="fa fa-home fa-fw text-teal-500" />
              Gothenburg, Sweden
            </p>
            <p>
              <i className="fa fa-envelope fa-fw text-teal-500" />
              exp@domain.com
            </p>
            <p>
              <i className="fa fa-phone fa-fw text-teal-500" />
              +46070000000
            </p>

            <hr />

            <div id="leftCol__meritContainer">
              <h3 id="skills__Container">
                {" "}
                <i class="fa fa-asterisk fa-fw text-teal-500 " />
                Skills
              </h3>
              <p>Adobe Photoshop</p>
              <div id="skillLevel__Container" className="w-full">
                <div className="w-[90%] h-6 bg-teal-500 flex justify-center items-center text-white border rounded-xl">
                  90%
                </div>
              </div>
              <p>Photography</p>
              <div id="skillLevel__Container" className="w-full">
                <div className="w-[80%] h-6 bg-teal-500 flex justify-center items-center text-white border rounded-xl">
                  80%
                </div>
              </div>
              <p>Illustrator</p>
              <div id="skillLevel__Container" className="w-full">
                <div className="w-[75%] h-6 bg-teal-500 flex justify-center items-center text-white border rounded-xl">
                  75%
                </div>
              </div>
              <p>Media</p>
              <div id="skillLevel__Container" className="w-full">
                <div className="w-[50%] h-6 bg-teal-500 flex justify-center items-center text-white border rounded-xl">
                  50%
                </div>
              </div>
            </div>

            <div id="leftCol__meritContainer">
              <h3 id="skills__Container">
                {" "}
                <i class="fa fa-globe fa-fw text-teal-500" />
                Languages
              </h3>
              <p>English</p>
              <div id="skillLevel__Container" />
              <p>Spanish</p>
              <div id="skillLevel__Container" />
              <p>German</p>
              <div id="skillLevel__Container" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div id="Right__Col" className="shadow-xl bg-white rounded-sm w-3/4">
          <div id="experince__Container">
            <h2 id="experince__Title">Work Experience</h2>

            <div id="experinceCard__Container">
              <h5 id="experinceCardJob__Title">Front End Developer</h5>
              <h6 id="experinceCardJob__Date">Jun 2010 - Mar 2012</h6>
              <p id="experinceCardJob__Description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>

          <div id="experince__Container">
            <h2 id="experince__Title">Work Experience</h2>

            <div id="experinceCard__Container">
              <h5 id="experinceCardJob__Title">Front End Developer</h5>
              <h6 id="experinceCardJob__Date">Jun 2010 - Mar 2012</h6>
              <p id="experinceCardJob__Description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </p>
            </div>

            <div id="experinceCard__Container">
              <h5 id="experinceCardJob__Title">Front End Developer</h5>
              <h6 id="experinceCardJob__Date">Jun 2010 - Mar 2012</h6>
              <p id="experinceCardJob__Description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>

          <div id="experince__Container">
            <h2 id="experince__Title">Education</h2>

            <div id="experinceCard__Container">
              <h5 id="experinceCardJob__Title">Jensen yrkeshögskola</h5>
              <h6 id="experinceCardJob__Date">Jun 2021 - Mar 2023</h6>
              <p id="experinceCardJob__Description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </p>
            </div>

            <div id="experinceCard__Container">
              <h5 id="experinceCardJob__Title">IT gymnasiet</h5>
              <h6 id="experinceCardJob__Date">Jun 2014 - Mar 2017</h6>
              <p id="experinceCardJob__Description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </p>
            </div>

            <div id="experinceCard__Container">
              <h5 id="experinceCardJob__Title">SFI tääck såå mikii</h5>
              <h6 id="experinceCardJob__Date">Jun 2010 - Mar 2013</h6>
              <p id="experinceCardJob__Description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Levo;
