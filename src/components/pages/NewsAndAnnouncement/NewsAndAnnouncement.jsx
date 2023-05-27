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
  const newsArray = [
    { link: '/', descript: 'Lorem ipsum dolor sit' },
    { link: '/', descript: 'Lorem ipsum dolor sit' },
    { link: '/', descript: 'Lorem ipsum dolor sit' },
    { link: '/', descript: 'Lorem ipsum dolor sit' },
    { link: '/', descript: 'Lorem ipsum dolor sit' },
    { link: '/', descript: 'Lorem ipsum dolor sit' },
    { link: '/', descript: 'Lorem ipsum dolor sit' },
    { link: '/', descript: 'Lorem ipsum dolor sit' },
    { link: '/', descript: 'Lorem ipsum dolor sit' },
    { link: '/', descript: 'Lorem ipsum dolor sit' },
    { link: '/', descript: 'Lorem ipsum dolor sit' },
    { link: '/', descript: 'Lorem ipsum dolor sit' },
    { link: '/', descript: 'Lorem ipsum dolor sit' },
    { link: '/', descript: 'Lorem ipsum dolor sit' },
  ];
  return (
    <>
      <div className="first">
        {/* <img src="https://i.postimg.cc/zGycZBWm/images.jpg" className="img" alt="NEWS"></img> */}
        <div className="heading">
          <h3>News And Announcement</h3>
          <div className="news" style={myComponent}>
            <div></div>
            <table className="newstable">
              {newsArray.map(({ link, descript }) => (
                <tr>
                  <Tablerow />
                  <a href="link">
                    <p>{descript}</p>
                  </a>{' '}
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
      {/* <h1 className="consulting">NewsAndAnnouncement</h1> */}
    </>
  );
}
