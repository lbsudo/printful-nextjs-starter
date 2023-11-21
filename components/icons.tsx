import * as React from "react";
import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (

  <svg
    fill="currentColor"
    width={size || width}
    height={size || height}
    viewBox="0 0 35 35"
    {...props}
  >
    <g transform="translate(-2.2237 -1.2781)">
      <path d="m9.6295 6.1157c-2.0572 2.3226-3.0857 5.4017-3.0857 9.2373 0 3.8223 1.1281 7.1071 3.3844 9.8544 2.2695 2.7473 5.3486 4.1209 9.2373 4.1209 2.1235 0 4.0546-0.63042 5.7932-1.8913 1.4874-1.0705 2.7021-2.3466 3.6442-3.8285 0.16754-0.26353 0.47675-0.8101 0.47675-0.8101s-11.625-20.012-11.731-20.196c-3.2941 0.061926-5.8211 1.3701-7.7189 3.5127zm20.147 16.802c0 0.15926-0.03981 0.31189-0.11945 0.45788l-2.7473 6.052c-0.06636 0.10618-0.23226 0.13272-0.4977 0.07963-0.25217-0.06636-0.55078-0.09954-0.89586-0.09954-0.34507 0-0.83613 0.073-1.4732 0.21899-0.62378 0.13272-1.6125 0.34507-2.9663 0.63705-1.3537 0.30526-2.588 0.45789-3.7029 0.45789-2.5217 0-4.9704-0.59061-7.346-1.7718-2.3624-1.1945-4.2537-2.88-5.6738-5.0566-1.4201-2.1899-2.1302-4.7248-2.1302-7.6048 0-2.88 0.71005-5.488 2.1302-7.8238 2.0704-3.4242 5.1893-5.6539 9.3567-6.6891 1.3272-0.3318 2.6544-0.4977 3.9816-0.4977 1.8183 0 3.975 0.30525 6.4701 0.91577 0.7565 0.1858 1.3936 0.37825 1.9112 0.57733 0.53088 0.19908 0.85604 0.29862 0.97549 0.29862l0.59724-0.15926h0.61714c0.15926 0 0.23889 0.11281 0.23889 0.33843v6.1914c0 0.13272-0.11944 0.19908-0.35834 0.19908-0.23889 0-0.37825-0.02656-0.41807-0.07963-0.03981-0.06636-0.07963-0.13935-0.11944-0.21898-0.03981-0.09291-0.08627-0.18581-0.13936-0.27871-0.03981-0.09291-0.08627-0.17917-0.13936-0.25881-0.03981-0.07963-0.06635-0.13935-0.07962-0.17917-1.9908-3.9949-5.131-6.1373-9.1994-6.0302 0.07692 0.13321 11.728 20.165 11.728 20.324z" />
      <g transform="matrix(.03984 0 0 .03984 6.0399 6.0399)">
        <path d="m250 380.06c0 1.7e-4 3.2e-4 -65.03-32.515-97.546-32.516-32.516-97.544-32.516-97.544-32.516s65.031 3.2e-4 97.545-32.514 32.514-97.545 32.514-97.545 3.3e-4 65.029 32.516 97.544c32.516 32.516 97.546 32.515 97.546 32.515s-65.03 3.3e-4 -97.546 32.516c-32.516 32.516-32.516 97.546-32.516 97.546z" />
      </g>
    </g>
  </svg>


);

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};


export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);


export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

