import { useRouter } from "next/router";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className={`absolute bottom-0 w-full`}>
      <div className="grid w-full grid-cols-1 p-10 md:grid-cols-2 md:p-16">
        <div className="">
          <p className="pb-10 text-center text-white md:pb-0 md:text-left">
            324 Grand St
            <br />
            Storefront A<br />
            New York, NY 10002
          </p>
        </div>
        <div className={``}>
          <div
            className={`flex h-full items-center justify-center md:float-right md:justify-end`}
          >
            <Link href="https://www.instagram.com/eternaltilidie">
              <a target="_blank" rel="noreferrer">
                <svg
                  className={` h-10 w-8 md:h-8 md:w-10`}
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="0.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46V5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88V7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65626 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87V6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33V15.33Z"
                    fill="white"
                  />
                </svg>
              </a>
            </Link>
            <Link href="https://www.tiktok.com/@eternaltilidie">
              <a target="_blank" rel="noreferrer">
                <svg
                  className={` h-10 w-8 md:h-8 md:w-10`}
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="0.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.2001 10.8402V8.00023C17.8701 8.00023 16.8551 7.64523 16.2001 6.95523C15.5278 6.16776 15.1512 5.17051 15.1351 4.13523V3.93023L12.4501 3.86523C12.4501 3.86523 12.4501 3.98023 12.4501 4.13523V15.4002C12.3579 15.9035 12.1136 16.3664 11.7501 16.7265C11.3866 17.0865 10.9214 17.3263 10.4172 17.4136C9.91308 17.5008 9.3943 17.4313 8.93092 17.2144C8.46755 16.9974 8.08189 16.6436 7.82601 16.2005C7.57013 15.7574 7.45634 15.2465 7.50002 14.7368C7.5437 14.227 7.74273 13.7429 8.07025 13.3498C8.39777 12.9568 8.83801 12.6737 9.33153 12.5387C9.82505 12.4038 10.3481 12.4235 10.8301 12.5952V9.84523C10.549 9.79919 10.2648 9.77578 9.98005 9.77523C8.95554 9.77523 7.95404 10.079 7.1022 10.6482C6.25035 11.2174 5.58642 12.0264 5.19436 12.9729C4.80229 13.9195 4.69971 14.961 4.89958 15.9658C5.09945 16.9706 5.5928 17.8936 6.31724 18.618C7.04167 19.3425 7.96466 19.8358 8.96948 20.0357C9.9743 20.2356 11.0158 20.133 11.9624 19.7409C12.9089 19.3489 13.7179 18.6849 14.2871 17.8331C14.8563 16.9812 15.1601 15.9797 15.1601 14.9552C15.1595 14.743 15.1461 14.5309 15.1201 14.3202V9.74523C16.341 10.5077 17.7614 10.8889 19.2001 10.8402Z"
                    fill="white"
                  />
                </svg>
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCchXPz-p-NglPn-xHU0W_NQ">
              <a target="_blank" rel="noreferrer">
                <svg
                  className={` h-10 w-8 md:h-8 md:w-10`}
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="0.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 9.70998C23.0495 8.27864 22.7365 6.858 22.09 5.57998C21.6514 5.05558 21.0427 4.70169 20.37 4.57998C17.5875 4.32751 14.7936 4.22403 12 4.26998C9.21667 4.22194 6.43274 4.32208 3.66003 4.56998C3.11185 4.6697 2.60454 4.92683 2.20003 5.30998C1.30003 6.13998 1.20003 7.55998 1.10003 8.75998C0.954939 10.9175 0.954939 13.0824 1.10003 15.24C1.12896 15.9154 1.22952 16.5858 1.40003 17.24C1.5206 17.745 1.76455 18.2123 2.11003 18.6C2.51729 19.0034 3.03641 19.2752 3.60003 19.38C5.75594 19.6461 7.92824 19.7564 10.1 19.71C13.6 19.76 16.67 19.71 20.3 19.43C20.8775 19.3316 21.4112 19.0595 21.83 18.65C22.11 18.3699 22.3191 18.0271 22.44 17.65C22.7977 16.5526 22.9733 15.4041 22.96 14.25C23 13.69 23 10.31 23 9.70998ZM9.74003 14.85V8.65998L15.66 11.77C14 12.69 11.81 13.73 9.74003 14.85Z"
                    fill="white"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
