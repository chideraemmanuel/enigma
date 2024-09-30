import React, { FC } from 'react';

interface Props {
  size?: number;
}

const RedditIcon: FC<Props> = ({ size = 48 }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0,0,256,256"
        width={size}
        height={size}
        fillRule="nonzero"
      >
        <g
          fill="#ff4500"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
          //   style="mix-blend-mode: normal"
        >
          <g transform="scale(3.55556,3.55556)">
            <path d="M36,12c-13.255,0 -24,10.745 -24,24c0,13.255 10.745,24 24,24c13.255,0 24,-10.745 24,-24c0,-13.255 -10.745,-24 -24,-24zM37.66797,21.58594c0.09506,-0.01727 0.19492,-0.01639 0.29492,0.00586l5.88281,1.17578c0.375,-0.656 1.0545,-1.09778 1.8125,-1.17578c1.319,-0.143 2.49958,0.81186 2.64258,2.13086c0.143,1.319 -0.80991,2.49958 -2.12891,2.64258c-1.319,0.143 -2.50153,-0.81286 -2.64453,-2.13086l-5.13477,-1.08008l-1.55664,7.48828c3.299,0.072 6.50823,1.09212 9.24023,2.95313c0.621,-0.59 1.43787,-0.94266 2.29688,-0.97266c1.939,-0.065 3.56081,1.44395 3.63281,3.37695c0.024,1.349 -0.73445,2.58841 -1.93945,3.19141c0.024,0.352 0.024,0.70464 0,1.05664c0,5.381 -6.26423,9.74805 -13.99023,9.74805c-7.726,0 -13.98828,-4.37305 -13.98828,-9.74805c-0.024,-0.352 -0.024,-0.70464 0,-1.05664c-0.351,-0.155 -0.66936,-0.37386 -0.94336,-0.63086c-1.414,-1.325 -1.4783,-3.54512 -0.1543,-4.95312c1.325,-1.414 3.54317,-1.4783 4.95117,-0.1543c2.768,-1.873 6.02033,-2.89913 9.36133,-2.95312l1.77148,-8.32812v-0.01367c0.0675,-0.3045 0.30856,-0.52047 0.59375,-0.57227zM30.40625,36c-1.326,0 -2.40039,1.07439 -2.40039,2.40039c0,1.326 1.07439,2.40234 2.40039,2.40234c1.326,0 2.40234,-1.07634 2.40234,-2.40234c0,-1.326 -1.07634,-2.40039 -2.40234,-2.40039zM41.52344,36c-1.326,0 -2.40039,1.07439 -2.40039,2.40039c0,1.326 1.07439,2.40234 2.40039,2.40234c1.326,0 2.40234,-1.07634 2.40234,-2.40234c0,-1.326 -1.07634,-2.40039 -2.40234,-2.40039zM30.58594,43.94141c-0.14538,0 -0.2887,0.04994 -0.4082,0.14844c-0.275,0.227 -0.31684,0.64006 -0.08984,0.91406c1.706,1.282 3.79469,1.93766 5.92969,1.84766c2.136,0.09 4.22369,-0.56466 5.92969,-1.84766v0.09375c0.262,-0.257 0.26872,-0.68622 0.01172,-0.94922c-0.256,-0.263 -0.68527,-0.26872 -0.94727,-0.01172c-1.461,1.044 -3.22853,1.55789 -5.01953,1.46289c-1.789,0.084 -3.54819,-0.45377 -4.99219,-1.50977c-0.122,-0.0985 -0.26869,-0.14844 -0.41406,-0.14844z"></path>
          </g>
        </g>
      </svg>
    </>
  );
};

export default RedditIcon;
