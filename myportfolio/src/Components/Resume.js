import React from 'react';
// import LinkResume from '';

function Resume () {
        return(
            <section className="landing-grid">
            <article id="Resume">
              <div className="content-title">
                <h2>Resume</h2>
              </div>
              <div className="content-body">
                <p>
                  <h3>Front-End Skills</h3>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                </p>
                <p>
                  {/* click here for my resume <a href={ResumeLink} download="" target="_blank" rel="noopener noreferrer">resume</a>. */}
               </p>
              </div>
            </article>
          </section>
        )
    }


export default Resume;