// import React from 'react';
// import './NewsAndAnnouncement.css';
// export default function NewsAndAnnouncement() {
//   return (
//     <>
//       <h1 className="consulting">NewsAndAnnouncement</h1>
//     </>
//   );
// }
import React from 'react';
import './NewsAndAnnouncement.css';
import Tablerow from './Tablerow';
const myComponent = {
  width: '100%',
  height: '300px',
  overflowX: 'hidden',
  overflowY: 'scroll',
};
export default function NewsAndAnnouncement() {
  return (
    <>
      <div className="first">
        {/* <img src="https://i.postimg.cc/zGycZBWm/images.jpg" className="img" alt="NEWS"></img> */}
        <div className="heading">
          <h3>News And Announcement</h3>
          <div className="news" style={myComponent}>
            <div></div>
            <table className="newstable">
              <tr>
                <Tablerow />
                <a href='/'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat
                </a>{' '}
              </tr>
              <tr>
                <Tablerow />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat{' '}
              </tr>
              <tr>
                <Tablerow />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat{' '}
              </tr>
              <tr>
                <Tablerow />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat{' '}
              </tr>
              <tr>
                <Tablerow />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat{' '}
              </tr>
              <tr>
                <Tablerow />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat{' '}
              </tr>
              <tr>
                <Tablerow />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat{' '}
              </tr>
              <tr>
                <Tablerow />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat{' '}
              </tr>
              <tr>
                <Tablerow />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat{' '}
              </tr>
              <tr>
                <Tablerow />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat{' '}
              </tr>
              <tr>
                <Tablerow />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat{' '}
              </tr>
            </table>
          </div>
        </div>
      </div>
      {/* <h1 className="consulting">NewsAndAnnouncement</h1> */}
    </>
  );
}
