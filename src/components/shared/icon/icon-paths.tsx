/* eslint-disable max-len */

const iconsPaths = {
  profileCircle: (
    <path
      id="profileCircle"
      d="M12.12 12.78C12.0403 12.77 11.9597 12.77 11.88 12.78C11.032 12.7515 10.2282 12.3944 9.63856 11.7842C9.04891 11.174 8.71953 10.3585 8.72001 9.51C8.72001 7.7 10.18 6.23 12 6.23C12.8594 6.22851 13.6851 6.56481 14.2988 7.1664C14.9126 7.768 15.2654 8.58669 15.2811 9.44599C15.2969 10.3053 14.9743 11.1364 14.383 11.76C13.7917 12.3837 12.9789 12.75 12.12 12.78ZM18.74 19.38C16.9023 21.0691 14.496 22.0044 12 22C9.40001 22 7.04001 21.01 5.26001 19.38C5.36001 18.44 5.96001 17.52 7.03001 16.8C9.77001 14.98 14.25 14.98 16.97 16.8C18.04 17.52 18.64 18.44 18.74 19.38Z M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  keyboardOpen: (
    <path
      id="keyboardOpen"
      d="M13.58 8.32H17.26M6.73999 14.11H17.27M6.99999 22H17M7.25999 2H16.73C17.38 2 17.96 2.02 18.48 2.09C21.25 2.4 22 3.7 22 7.26V13.58C22 17.14 21.25 18.44 18.48 18.75C17.96 18.82 17.39 18.84 16.73 18.84H7.25999C6.60999 18.84 6.02999 18.82 5.50999 18.75C2.73999 18.44 1.98999 17.14 1.98999 13.58V7.26C1.98999 3.7 2.73999 2.4 5.50999 2.09C6.02999 2.02 6.60999 2 7.25999 2Z M7.19495 8.3H7.20395M10.4949 8.3H10.5039"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  huobitoken: (
    <path
      id="huobitoken"
      d="M13.8001 7.8C13.8001 5.5 12.9001 3.4 12.0001 2.2C11.7001 1.9 11.2001 2 11.1001 2.4C10.7001 3.9 9.50005 7.1 6.60005 10.9C2.90005 15.7 6.30005 20.9 9.80005 21.9C11.7001 22.4 9.30005 20.9 9.00005 17.8C8.70005 13.9 13.8001 11 13.8001 7.8Z M16.2 10C16.2 10 16 11 13 15C10.1 18.8 14.3 21.6 14.8 22H14.9C15.5 21.5 23.1 16.7 16.2 10Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  user: (
    <path
      id="user"
      d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26003 15 3.41003 18.13 3.41003 22M12 12C13.3261 12 14.5979 11.4732 15.5356 10.5355C16.4733 9.59785 17 8.32608 17 7C17 5.67392 16.4733 4.40215 15.5356 3.46447C14.5979 2.52678 13.3261 2 12 2C10.674 2 9.40218 2.52678 8.4645 3.46447C7.52682 4.40215 7.00003 5.67392 7.00003 7C7.00003 8.32608 7.52682 9.59785 8.4645 10.5355C9.40218 11.4732 10.674 12 12 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  star: (
    <path
      id="star"
      d="M12.73 2.51L14.49 6.03C14.73 6.52 15.37 6.99 15.91 7.08L19.1 7.61C21.14 7.95 21.62 9.43 20.15 10.89L17.67 13.37C17.25 13.79 17.02 14.6 17.15 15.18L17.86 18.25C18.42 20.68 17.13 21.62 14.98 20.35L11.99 18.58C11.45 18.26 10.56 18.26 10.01 18.58L7.02003 20.35C4.88003 21.62 3.58003 20.67 4.14003 18.25L4.85003 15.18C4.98003 14.6 4.75003 13.79 4.33003 13.37L1.85003 10.89C0.390031 9.43 0.860031 7.95 2.90003 7.61L6.09003 7.08C6.62003 6.99 7.26003 6.52 7.50003 6.03L9.26003 2.51C10.22 0.599999 11.78 0.599999 12.73 2.51Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  setting: (
    <path
      id="setting"
      d="M22 6.5H16M6 6.5H2M22 17.5H18M8 17.5H2M10 10C10.4596 10 10.9148 9.90947 11.3394 9.73358C11.764 9.55769 12.1499 9.29988 12.4749 8.97487C12.7999 8.64987 13.0577 8.26403 13.2336 7.83939C13.4095 7.41475 13.5 6.95963 13.5 6.5C13.5 6.04037 13.4095 5.58525 13.2336 5.16061C13.0577 4.73597 12.7999 4.35013 12.4749 4.02513C12.1499 3.70012 11.764 3.44231 11.3394 3.26642C10.9148 3.09053 10.4596 3 10 3C9.07174 3 8.1815 3.36875 7.52513 4.02513C6.86875 4.6815 6.5 5.57174 6.5 6.5C6.5 7.42826 6.86875 8.3185 7.52513 8.97487C8.1815 9.63125 9.07174 10 10 10ZM14 21C14.9283 21 15.8185 20.6313 16.4749 19.9749C17.1313 19.3185 17.5 18.4283 17.5 17.5C17.5 16.5717 17.1313 15.6815 16.4749 15.0251C15.8185 14.3687 14.9283 14 14 14C13.0717 14 12.1815 14.3687 11.5251 15.0251C10.8687 15.6815 10.5 16.5717 10.5 17.5C10.5 18.4283 10.8687 19.3185 11.5251 19.9749C12.1815 20.6313 13.0717 21 14 21Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  exit: (
    <path
      id="exit"
      d="M11.592 14.8122L14.152 12.2522L11.592 9.69215M3.91199 12.2522L14.082 12.2522 M12.0895 4.03201C16.5095 4.03201 20.0895 7.03201 20.0895 12.032C20.0895 17.032 16.5095 20.032 12.0895 20.032"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  arrowUp: (
    <path
      id="arrowUp"
      d="M19.92 15.05L13.4 8.53C12.63 7.76 11.37 7.76 10.6 8.53L4.07996 15.05"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  book: (
    <path
      id="book"
      d="M12 5.49V20.49M7.75 8.49H5.5M8.5 11.49H5.5M22 16.74V4.67C22 3.47 21.02 2.58 19.83 2.68H19.77C17.67 2.86 14.48 3.93 12.7 5.05L12.53 5.16C12.24 5.34 11.76 5.34 11.47 5.16L11.22 5.01C9.44 3.9 6.26 2.84 4.16 2.67C2.97 2.57 2 3.47 2 4.66V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  bubble: (
    <path
      id="bubble"
      d="M15.59 12.26C16.9506 12.26 18.2554 11.7195 19.2175 10.7575C20.1795 9.7954 20.72 8.49056 20.72 7.13C20.72 5.76944 20.1795 4.4646 19.2175 3.50254C18.2554 2.54048 16.9506 2 15.59 2C14.2295 2 12.9246 2.54048 11.9626 3.50254C11.0005 4.4646 10.46 5.76944 10.46 7.13C10.46 8.49056 11.0005 9.7954 11.9626 10.7575C12.9246 11.7195 14.2295 12.26 15.59 12.26ZM6.36003 19.44C7.1769 19.44 7.96031 19.1155 8.53792 18.5379C9.11553 17.9603 9.44003 17.1769 9.44003 16.36C9.44003 15.5431 9.11553 14.7597 8.53792 14.1821C7.96031 13.6045 7.1769 13.28 6.36003 13.28C5.54316 13.28 4.75975 13.6045 4.18214 14.1821C3.60453 14.7597 3.28003 15.5431 3.28003 16.36C3.28003 17.1769 3.60453 17.9603 4.18214 18.5379C4.75975 19.1155 5.54316 19.44 6.36003 19.44ZM16.62 22C16.9562 22 17.2891 21.9338 17.5997 21.8051C17.9103 21.6765 18.1925 21.4879 18.4302 21.2502C18.6679 21.0125 18.8565 20.7303 18.9852 20.4197C19.1138 20.1091 19.18 19.7762 19.18 19.44C19.18 19.1038 19.1138 18.7709 18.9852 18.4603C18.8565 18.1497 18.6679 17.8675 18.4302 17.6298C18.1925 17.3921 17.9103 17.2035 17.5997 17.0749C17.2891 16.9462 16.9562 16.88 16.62 16.88C15.9411 16.88 15.2899 17.1497 14.8098 17.6298C14.3297 18.1099 14.06 18.761 14.06 19.44C14.06 20.119 14.3297 20.7701 14.8098 21.2502C15.2899 21.7303 15.9411 22 16.62 22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  ),
  folder: (
    <path
      id="folder"
      d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  ),
  arrowDown: (
    <path
      id="arrowDown"
      d="M19.92 8.95L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07996 8.95"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  arrowLeft: (
    <path
      id="arrowLeft"
      d="M15 19.92L8.47997 13.4C7.70997 12.63 7.70997 11.37 8.47997 10.6L15 4.08"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  arrowRight: (
    <path
      id="arrowRight"
      d="M8.91003 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91003 4.08"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  line: (
    <path
      id="line"
      d="M4 22L21 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  ),
  arrow: (
    <path
      id="arrow"
      d="M3.44107 21.4999C3.16487 21.8086 3.19121 22.2827 3.4999 22.5589C3.80859 22.8351 4.28274 22.8088 4.55893 22.5001L3.44107 21.4999ZM21.7488 2.9584C21.7259 2.54482 21.372 2.22818 20.9584 2.25115L14.2188 2.62558C13.8052 2.64855 13.4886 3.00245 13.5115 3.41603C13.5345 3.8296 13.8884 4.14624 14.302 4.12327L20.2928 3.79045L20.6256 9.78121C20.6486 10.1948 21.0024 10.5114 21.416 10.4885C21.8296 10.4655 22.1462 10.1116 22.1233 9.698L21.7488 2.9584ZM4.55893 22.5001L21.5589 3.5001L20.4411 2.4999L3.44107 21.4999L4.55893 22.5001Z"
      fill="currentColor"
    />
  ),
  circle: (
    <circle
      id="circle"
      cx="12"
      cy="12"
      r="9.25"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  ),
  square: (
    <rect
      id="square"
      x="2.75"
      y="2.75"
      width="18.5"
      height="18.5"
      rx="3.25"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  ),
  triangle: (
    <path
      id="triangle"
      d="M4.38308 17.1314L10.4231 4.60399C11.1389 3.11928 13.2426 3.08922 14.0006 4.55288L20.488 17.0803C21.1774 18.4116 20.2112 20 18.712 20H6.18461C4.7104 20 3.74283 18.4593 4.38308 17.1314Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  ),
  add: (
    <path
      id="add"
      d="M6 12H18M12 18V6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  done: (
    <path
      id="done"
      d="M20 6L9 17L4 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  close: (
    <path
      id="close"
      d="M6 18L18 6M18 18L6 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  edit: (
    <path
      id="edit"
      d="M13.26 3.6L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.74C20.12 7.24 20.76 5.53 18.55 3.44C16.35 1.37 14.68 2.1 13.26 3.6Z M11.89 5.05C12.0996 6.39085 12.7486 7.62413 13.735 8.55625C14.7214 9.48836 15.9894 10.0665 17.34 10.2M3 22H21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  trash: (
    <path
      id="trash"
      d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5H13.66M9.5 12.5H14.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  hamburger: (
    <path
      id="hamburger"
      d="M3 7H21M3 12H21M3 17H21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  ),
  searchzoomin: (
    <path
      id="searchzoomin"
      d="M9.2 11.7H14.2M11.7 14.2V9.2M22 22L20 20M11.5 21C12.7476 21 13.9829 20.7543 15.1355 20.2769C16.2881 19.7994 17.3354 19.0997 18.2175 18.2175C19.0997 17.3354 19.7994 16.2881 20.2769 15.1355C20.7543 13.9829 21 12.7476 21 11.5C21 10.2524 20.7543 9.0171 20.2769 7.86451C19.7994 6.71191 19.0997 5.66464 18.2175 4.78249C17.3354 3.90033 16.2881 3.20056 15.1355 2.72314C13.9829 2.24572 12.7476 2 11.5 2C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  searchzoomout: (
    <path
      id="searchzoomout"
      d="M9 11.7H14M22 22L20 20M11.5 21C12.7476 21 13.9829 20.7543 15.1355 20.2769C16.2881 19.7994 17.3354 19.0997 18.2175 18.2175C19.0997 17.3354 19.7994 16.2881 20.2769 15.1355C20.7543 13.9829 21 12.7476 21 11.5C21 10.2524 20.7543 9.0171 20.2769 7.86451C19.7994 6.71191 19.0997 5.66464 18.2175 4.78249C17.3354 3.90033 16.2881 3.20056 15.1355 2.72314C13.9829 2.24572 12.7476 2 11.5 2C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
}

export interface IconPathProps extends React.ReactElement<SVGGraphicsElement> {
  id: string
  children?: React.ReactElement<SVGGraphicsElement>[]
}

export type IconPathsType = typeof iconsPaths

export type IconNameTypes = keyof IconPathsType
export default iconsPaths