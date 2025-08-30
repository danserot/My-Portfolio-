import React from "react";

function footer() {
  return (
    <div className="footer">
      <div className="footer_text">
        <div className="footer_header">
          <h1>Contact</h1>
        </div>
        <div className="footer_1text">
          <p>
            Artem Khloptsev - your frontend developer <br />
            <br />
          </p>
        </div>
        <div className="footer_2text">
          <p className="footer_3text">tema324756@gmail.com</p>
        </div>
        <div className="footer_socities">
          <div className="socities">
            <a
              href="https://www.instagram.com/artemkhloptsev?igsh=MWp2ejV1a2RxcTUxbg%3D%3D&utm_source=qr "
              target="_blank"
              rel="noreferrer">
              <img src="Images/instagram (1).png" alt="" />
            </a>
          </div>
          <div className="socities">
            <a
              href="https://www.youtube.com/@artemkhloptsev7088"
              target="_blank"
              rel="noreferrer">
              <img src="Images/youtube.png" alt="" />
            </a>
          </div>
          <div className="socities">
            <a
              href="https://x.com/artemkhlop54519"
              target="_blank"
              rel="noreferrer">
              <img src="Images/x.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default footer;
