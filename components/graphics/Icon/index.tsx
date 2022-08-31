import React from 'react';

type Props = {
  className?: string
}

const Icon: React.FC<Props> = ({ className }) => (
  // <svg
  //   className={className}
  //   width="25"
  //   height="25"
  //   viewBox="0 0 25 25"
  //   xmlns="http://www.w3.org/2000/svg"
  // >
  //   <path
  //     d="M11.5293 0L23 6.90096V19.9978L14.3608 25V11.9032L2.88452 5.00777L11.5293 0Z"
  //     fill="#ffffff"
  //   />
  //   <path
  //     d="M10.6559 24.2727V14.0518L2 19.0651L10.6559 24.2727Z"
  //     fill="#ffffff"
  //   />
  // </svg>
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    width="25"
    height="25" 
    viewBox="0 0 589 628">
      <g fill="white" id="Logo" data-name="Logo">
        <path id="Top" d="M0,0V135L295,383,589,135V0L295,259Z"></path>
        <path id="Bottom" d="M0,245V380L295,628,589,380V245L295,504Z"></path>
        <path id="Left_Leg" data-name="Left Leg-good" d="M0,336V491l98,81V458Z"></path>
        <path id="Right_Leg" data-name="Right Leg-good" d="M589,354V489l-97,83V435Z"></path>
        <path id="Lower-Part-WLegs" d="M589,244.884L295,504.05,0,244.884V491l97.75,81.75V462L295,628.25,491.75,462V572.75L589,489V244.884Z"></path>
      </g>
    </svg>
);

export default Icon;
