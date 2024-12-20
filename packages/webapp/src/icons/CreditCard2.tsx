import React from 'react';

interface CreditCard2IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const CreditCard2Icon: React.FC<CreditCard2IconProps> = ({
  size = 16,
  ...props
}) => (
  <span className={'bp4-icon bp4-icon-credit-card-2'}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g id="credit_card_2_">
        <g>
          <path
            d="M14.99,2.95h-14c-0.55,0-1,0.45-1,1v1h16v-1C15.99,3.4,15.54,2.95,14.99,2.95z M-0.01,12.95c0,0.55,0.45,1,1,1h14
            c0.55,0,1-0.45,1-1v-6h-16C-0.01,6.95-0.01,12.95-0.01,12.95z M5.49,10.95h5c0.28,0,0.5,0.22,0.5,0.5s-0.22,0.5-0.5,0.5h-5
            c-0.28,0-0.5-0.22-0.5-0.5S5.22,10.95,5.49,10.95z M2.49,10.95h1c0.28,0,0.5,0.22,0.5,0.5s-0.22,0.5-0.5,0.5h-1
            c-0.28,0-0.5-0.22-0.5-0.5S2.22,10.95,2.49,10.95z"
          />
        </g>
      </g>
    </svg>
  </span>
);