import React from "react"
import styled from "styled-components"

export const PlusMin = ({ size, color, isPlus, ...rest }) => (
  <svg
    width={size || 27}
    height={size || 27}
    viewBox={`0 0 ${size || 27} ${size || 27}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    {isPlus && (
      <path d="M13.5 0V27" stroke={color || "#000"} strokeMiterlimit="10" />
    )}
    <path d="M0 13.5H27" stroke={color || "#000"} strokeMiterlimit="10" />
  </svg>
)

export const MenuHamburger = styled(({ active, ...rest }) => (
  <svg
    {...rest}
    width="27"
    height="27"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <line
      y1={active ? "0" : "6.75"}
      x2="27"
      y2={active ? "27" : "6.75"}
      stroke="black"
    />
    <line
      y1="13.5"
      x2="27"
      y2="13.5"
      stroke="black"
      style={{ opacity: active ? 0 : 1 }}
    />
    <line
      y1={active ? "27" : "20.25"}
      x2="27"
      y2={active ? "0" : "20.25"}
      stroke="black"
    />
  </svg>
))`
  line {
    transition: all 0.5s ease-in-out;
  }
`

export const MenuNearMe = props => (
  <svg
    {...props}
    width="27"
    height="28"
    viewBox="0 0 27 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.5413 1C9.63981 1 6.4762 4.09494 6.4762 7.91177C6.4762 11.7286 13.5413 21.7353 13.5413 21.7353C13.5413 21.7353 20.6065 11.7286 20.6065 7.91177C20.6065 4.09494 17.4429 1 13.5413 1Z"
      stroke="black"
      strokeMiterlimit="10"
    />
    <path
      d="M10.2953 16.7339C5.04161 17.331 1.17737 19.343 1.17737 21.7353C1.17737 24.5979 6.71369 26.9191 13.5414 26.9191C20.369 26.9191 25.9054 24.5979 25.9054 21.7353C25.9054 19.343 22.0411 17.331 16.7874 16.7339"
      stroke="black"
      strokeMiterlimit="10"
    />
    <path
      d="M13.5414 9.63971C14.8171 9.63971 15.8513 8.62797 15.8513 7.37994C15.8513 6.13191 14.8171 5.12018 13.5414 5.12018C12.2656 5.12018 11.2314 6.13191 11.2314 7.37994C11.2314 8.62797 12.2656 9.63971 13.5414 9.63971Z"
      stroke="black"
      strokeMiterlimit="10"
    />
  </svg>
)

export const ChevronDown = ({ color }) => (
  <svg
    width="15"
    height="9"
    viewBox="0 0 15 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.24316 1.24341L7.49651 7.50583L13.7498 1.24341"
      stroke={color || "#000"}
      strokeMiterlimit="10"
    />
  </svg>
)

export const TBudder = ({ active }) => (
  <svg
    width="81"
    height="80"
    viewBox="0 0 81 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g opacity={active ? 1 : 0.5}>
      <path
        d="M7.0348 51.256C-4.85867 41.0905 1.94315 30.5355 17.1015 25.5111C17.1015 25.5111 17.8011 11.3339 42.6764 0.895752C42.6764 0.895752 38.6341 15.6572 57.9902 23.4079C69.2618 27.9259 78.4345 26.9912 79.9115 40.8568C81.5051 55.7351 57.9902 60.5647 57.9902 60.5647C57.9902 60.5647 48.6231 77.702 25.7301 78.9873C25.7301 78.9873 36.03 71.0418 31.2104 64.7711C23.4758 54.6835 15.1193 58.1109 7.0348 51.256Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="bevel"
      />
      <path
        d="M17.0239 25.3943C16.8295 40.8957 36.7686 36.183 44.7753 49.2696C51.3828 60.0584 48.6621 74.1577 25.7302 78.9873"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="bevel"
      />
      <path
        d="M57.9897 60.6036C67.007 53.1645 73.8088 37.0009 57.601 31.8597C47.4955 28.627 29.9273 29.2502 42.0151 2.21997"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="bevel"
      />
      <path
        d="M40.9274 1.98633C21.3381 21.6942 22.2321 28.7828 39.9557 33.4566C58.3401 38.2862 61.9936 52.5024 58.0291 60.6037"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="bevel"
      />
      <path
        d="M25.7686 79.0261C44.8137 70.9638 42.2484 61.0319 34.5138 52.9696C29.3055 47.5558 19.9773 46.5821 13.6808 41.1683C6.91783 35.326 16.2072 26.0173 16.2072 26.0173"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="bevel"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0H81V80H0V0Z" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const TDiamonds = ({ active }) => (
  <svg
    width="80"
    height="71"
    viewBox="0 0 80 71"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g opacity={active ? 1 : 0.5}>
      <path
        d="M19.8999 1.00684V69.9932L79.0008 35.6813L19.8999 1.00684Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M0.999023 35.2383L60.2997 69.7516L60.3397 1.00684L0.999023 35.2383Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M19.9001 1.00684H60.3397L79.001 35.6813L60.2997 69.7516L19.9001 69.9932L0.999023 35.2383L19.9001 1.00684Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0H80V71H0V0Z" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const TSauce = ({ active }) => (
  <svg
    width="77"
    height="78"
    viewBox="0 0 77 78"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g opacity={active ? 1 : 0.5}>
      <path
        d="M48.1592 38.6591C48.1592 43.5654 43.8763 48.3353 38.5 48.5624C33.1692 48.7896 28.8408 44.0196 28.8408 38.6591C28.8408 33.2532 33.1237 29.7552 38.5 29.9824C43.8763 30.2549 48.1592 33.7529 48.1592 38.6591Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="bevel"
      />
      <path
        d="M75.8614 29.3465C75.9981 45.8823 60.1881 72.8211 38.5005 76.5008C16.8129 80.4985 1.00286 53.5596 1.13955 29.3465C1.00286 4.8153 16.8129 -1.54463 38.5005 2.08962C60.1881 6.08729 76.0437 12.4472 75.8614 29.3465Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="bevel"
      />
      <path
        d="M66.9767 33.7075C67.0223 46.8816 54.6749 65.1437 38.5004 67.188C22.3258 69.414 9.97849 51.1519 10.0241 33.7075C9.97849 16.036 22.3258 9.31263 38.5004 11.4023C54.6749 13.6283 67.0223 20.3516 66.9767 33.7075Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="bevel"
      />
      <path
        d="M57.6822 36.7967C57.6822 46.064 49.2076 56.9668 38.5005 57.8753C27.7934 58.8748 19.3188 47.972 19.3188 36.7967C19.3188 25.5305 27.7934 19.7612 38.5005 20.6697C49.2532 21.6692 57.7277 27.4385 57.6822 36.7967Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="bevel"
      />
    </g>
  </svg>
)

export const TShatter = ({ active }) => (
  <svg
    width="98"
    height="93"
    viewBox="0 0 98 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g opacity={active ? 1 : 0.5}>
      <path
        d="M68.3379 17.7935L74.7945 7.3606"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M50.5662 0.0639648L50.1826 12.289"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M7.35107 23.1699L17.7712 29.6345"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M74.7945 7.3606L68.3379 17.7935"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M81.3789 31.6826L92.1826 25.9221"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M92.1826 25.9221L81.3789 31.6826C84.3835 37.3791 85.9177 43.7797 85.7259 50.2442L97.936 50.6282"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M97.9356 50.6284L85.7256 50.2444"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M80.2285 68.4219L90.5847 74.8864"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M50.1826 12.289L50.5662 0.0639648"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M72.1099 92.2959L66.3564 81.479"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M0.0639648 47.492L12.274 47.876C12.4658 41.6035 14.2557 35.331 17.7717 29.6345L7.35164 23.1699"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M90.5847 74.8864L80.2285 68.4219"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M66.3564 81.479L72.1099 92.2959"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M16.6205 66.4377L5.81689 72.1982"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M12.274 47.876L0.0639648 47.4919"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M5.81689 72.1982L16.6205 66.4377"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M50.1829 12.2888L49.7993 24.5779"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M61.8809 28.2264L68.3375 17.7935"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M37.4609 27.4585L31.6436 16.6416"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M17.772 29.6345L28.1921 36.0991"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M31.6436 16.6412L37.4609 27.4581C41.2326 25.4099 45.5157 24.4499 49.7988 24.5779L50.1824 12.2888"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M28.1912 36.0991L17.7712 29.6345C14.2552 35.331 12.4652 41.6035 12.2734 47.8761L24.5474 48.2601"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M68.3375 17.7935L61.8809 28.2264C65.6525 30.5946 68.5932 33.7948 70.511 37.5072L81.3146 31.6827"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M73.4519 49.8602L85.7259 50.2442C85.9177 43.7797 84.4473 37.3791 81.3788 31.6826L70.5752 37.5071"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M80.2286 68.4218L69.8085 61.9573C67.4432 65.7336 64.2468 68.6778 60.5391 70.598L66.3564 81.4149"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M85.7254 50.2444L73.4514 49.8604C73.3236 54.0207 72.1729 58.1811 69.8076 62.0214L80.2277 68.4859"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M66.3564 81.479L60.5391 70.6621"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M16.6211 66.4378L27.4247 60.6133"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M24.5474 48.26L12.2734 47.876"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M36.0552 69.8938L29.5986 80.3267"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M29.5983 80.327L36.0549 69.8941C32.2832 67.5259 29.3426 64.3256 27.4247 60.6133L16.6211 66.4378"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M38.6118 42.5636C42.1917 36.8031 49.7351 35.0109 55.4885 38.5953L61.9451 28.1624"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M49.7993 24.5782L49.3518 36.8032L49.7993 24.5782ZM49.7993 24.5782C45.4523 24.4502 41.2331 25.4103 37.4614 27.4584L43.2149 38.2754L37.4614 27.4584"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M27.4248 60.6133L38.2285 54.8528L27.4248 60.6133ZM27.4248 60.6133C29.4065 64.2616 32.2833 67.5259 36.0549 69.8941L42.5116 59.4612C36.7581 55.8769 34.9682 48.3242 38.5481 42.5637"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M24.5479 48.2603L36.7579 48.6443L24.5479 48.2603Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M70.575 37.5074L59.7714 43.2679L70.575 37.5074ZM70.575 37.5074C68.5933 33.859 65.7166 30.5948 61.9449 28.2266L55.4243 38.6595C61.1777 42.2438 62.9677 49.7964 59.3878 55.5569"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M69.8084 61.9572C72.1737 58.1809 73.3244 53.9565 73.4522 49.7961L61.2422 49.4121L73.4522 49.7961"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M60.5391 70.6621L54.7856 59.8452L60.5391 70.6621ZM60.5391 70.6621C64.1829 68.678 67.4432 65.7977 69.8085 62.0214"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M59.3875 55.4927C55.8076 61.2532 48.2642 63.0453 42.5108 59.461L36.0542 69.8939"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M48.9683 61.3171C55.747 61.3171 61.2423 55.8151 61.2423 49.0281C61.2423 42.241 55.747 36.739 48.9683 36.739C42.1896 36.739 36.6943 42.241 36.6943 49.0281C36.6943 55.8151 42.1896 61.3171 48.9683 61.3171Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M69.8083 61.9572L59.3882 55.4927"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M28.1914 36.0991L38.6115 42.5637"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </g>
  </svg>
)

export const TSugar = ({ active }) => (
  <svg
    width="87"
    height="69"
    viewBox="0 0 87 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g opacity={active ? 1 : 0.5}>
      <path
        d="M74.654 55.6216H70.1943V59.997H74.654V55.6216Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M48.2487 53.4497H43.7891V57.8252H48.2487V53.4497Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M65.7668 63.8376H61.3071V68.2131H65.7668V63.8376Z"
        stroke="#212721"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M82.3543 44.4785V40.103H78.6647V35.759H75.0071V31.3836H71.3174V27.0081H67.6277V22.6327H63.9702V18.2572H60.2805V13.8818H56.5908V9.53778H52.9332V5.16232H49.2436V0.786865H45.5539H41.8963H38.2067V5.16232H34.517V9.53778H30.8273V13.8818H27.1697V18.2572H23.4801V22.6327H19.7904V27.0081H16.1328V31.3836H12.4432V35.759H8.7535V40.103H5.09592V44.4785H1.40625V48.8539H5.09592H8.7535H12.4432H16.1328H19.7904H23.4801H27.1697H30.8273H34.517H38.2067H41.8963H45.5539H49.2436H52.9332H56.5908H60.2805H63.9702H67.6277H71.3174H75.0071H78.6647H82.3543H86.044V44.4785H82.3543Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect x="0.604492" width="86.242" height="69" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const TThca = ({ active }) => (
  <svg
    width="82"
    height="79"
    viewBox="0 0 82 79"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g opacity={active ? 1 : 0.5}>
      <path
        d="M43.4531 23.2947L49.5697 76.8476"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M9.81201 9.68498L43.453 23.2948L79.5789 1.89893"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M1.78418 56.2747L9.81215 9.68498L79.5791 1.89893L49.5697 76.8476L1.78418 56.2747Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M49.5696 76.8477L9.81201 9.68506"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M1.78418 56.2747L13.3164 50.1345L49.5697 76.8477"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M13.3163 50.1346L9.81201 9.68506"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </g>
  </svg>
)

export const TVapes = ({ active }) => (
  <svg
    width="87"
    height="84"
    viewBox="0 0 87 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g opacity={active ? 1 : 0.5}>
      <path
        d="M81.6284 58.9831C81.6284 58.9831 81.6284 48.8588 81.6284 41.568C81.6284 34.2772 78.6442 30.1653 70.1829 30.1653C69.586 30.1653 69.0945 30.1307 68.1817 30.1307C60.8439 29.8198 57.333 27.2282 57.333 17.8296C57.333 7.7054 57.333 0.86377 57.333 0.86377"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M86.1226 61.5055C86.1226 61.5055 86.1226 47.0966 86.1226 39.8058C86.1226 33.828 82.4713 25.8115 70.6045 25.8115C70.0076 25.8115 69.5161 25.777 68.6033 25.777C61.5815 25.777 61.8272 23.1163 61.8272 12.5775C61.8272 2.45324 61.8272 0.86377 61.8272 0.86377"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M77.1693 56.1152C77.1693 56.1152 77.1693 51.6232 77.1693 44.367C77.1693 38.6311 77.9768 34.5192 70.1124 34.5192C69.972 34.5192 68.2868 34.4846 68.1112 34.4846C58.2105 34.4846 52.8037 29.1633 52.8037 18.0025C52.8037 7.87828 52.8037 0.898438 52.8037 0.898438"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M42.166 63.7516L50.4868 49.239L84.8936 68.3472C86.0171 68.9692 86.4384 70.3859 85.7713 71.4916L79.7677 81.9613C79.1357 83.0671 77.6963 83.4817 76.5728 82.8252L42.166 63.7516Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M50.5569 49.2389L42.236 63.7514L17.9406 50.2409C16.8171 49.619 16.3958 48.2023 17.0629 47.0966L23.0665 36.6268C23.6985 35.5211 25.138 35.1064 26.2615 35.7629L50.5569 49.2389Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M62.5293 65.4791C63.9687 62.9567 67.2339 62.0583 69.7968 63.475L85.4203 72.1479L80.154 81.3047L64.5305 72.6317C61.9675 71.215 61.0547 67.9669 62.5293 65.4791Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M45.3511 58.3378L47.4399 54.697L21.1473 40.0856L19.0584 43.7264L45.3511 58.3378Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M15.9326 49.1508L24.2534 34.6477L9.51729 26.4585L1.19649 40.9616L15.9326 49.1508Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0H87V84H0V0Z" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const Facebook = ({ dark }) => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.8039 0.317383C9.76362 0.317383 0 10.0886 0 22.1528C0 34.2169 9.76362 43.9999 21.8039 43.9999C33.8441 43.9999 43.6077 34.2169 43.6077 22.1528C43.6077 10.0886 33.8441 0.317383 21.8039 0.317383ZM27.1903 15.2035H25.2422C23.7049 15.2035 23.4116 15.9326 23.4116 17.0026V19.366H27.0612L26.5801 23.0582H23.3998V32.5472H19.5977V23.0582H16.4174V19.366H19.5977V16.6381C19.5977 13.4751 21.5222 11.7583 24.3386 11.7583C25.6882 11.7583 26.85 11.8641 27.1903 11.8994V15.2035Z"
      fill={dark ? "#000" : "#FFF"}
    />
  </svg>
)

export const Twitter = ({ dark }) => (
  <svg
    width="45"
    height="44"
    viewBox="0 0 45 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.7712 0.317383C10.7309 0.317383 0.967308 10.1004 0.967308 22.1645C0.967308 34.2287 10.7309 44.0117 22.7712 44.0117C34.8114 44.0117 44.575 34.2169 44.575 22.1528C44.575 10.0886 34.8114 0.317383 22.7712 0.317383ZM31.4317 19.0133C31.4434 19.1779 31.4434 19.3425 31.4434 19.5071C31.4434 24.5515 27.606 30.3719 20.6002 30.3719C18.4526 30.3719 16.4459 29.7369 14.7561 28.6552C15.0495 28.6904 15.3546 28.714 15.6597 28.714C17.4434 28.714 19.0863 28.1025 20.3889 27.0795C18.7225 27.0443 17.3143 25.939 16.8332 24.4221C17.0679 24.4692 17.3026 24.4927 17.549 24.4927C17.9011 24.4927 18.2297 24.4457 18.5583 24.3633C16.8097 24.0106 15.4954 22.4702 15.4954 20.6124C15.4954 20.6007 15.4954 20.5771 15.4954 20.5654C16.0117 20.8476 16.5985 21.024 17.2205 21.0475C16.1995 20.3655 15.5189 19.1896 15.5189 17.8727C15.5189 17.1672 15.7066 16.5205 16.0352 15.9561C17.9128 18.2725 20.7293 19.7893 23.8977 19.9422C23.8273 19.66 23.8039 19.366 23.8039 19.0721C23.8039 16.9673 25.5055 15.2506 27.6178 15.2506C28.7091 15.2506 29.7066 15.7092 30.399 16.4617C31.2674 16.2853 32.0889 15.9678 32.8164 15.5328C32.5348 16.4264 31.9246 17.179 31.1383 17.6493C31.9128 17.5552 32.6404 17.3553 33.3328 17.0496C32.8282 17.8022 32.1827 18.4724 31.4317 19.0133Z"
      fill={dark ? "#000" : "#FFF"}
    />
  </svg>
)

export const Instagram = ({ dark }) => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.2079 18.437C20.3303 18.437 18.8164 19.9656 18.8164 21.8352C18.8164 23.7165 20.342 25.2334 22.2079 25.2334C24.0855 25.2334 25.5993 23.7048 25.5993 21.8352C25.5993 19.9656 24.0738 18.437 22.2079 18.437Z"
      fill={dark ? "#000" : "#FFF"}
    />
    <path
      d="M30.1408 15.8268C29.953 15.3447 29.7301 15.0155 29.378 14.6509C29.026 14.2864 28.6856 14.0748 28.2045 13.8866C27.8407 13.7455 27.3009 13.5809 26.3152 13.5339C25.2355 13.4869 24.9187 13.4751 22.1961 13.4751C19.4736 13.4751 19.1567 13.4869 18.0771 13.5339C17.0796 13.5809 16.5398 13.7455 16.1878 13.8866C15.7066 14.0748 15.378 14.2982 15.0142 14.6509C14.6505 15.0037 14.4392 15.3447 14.2515 15.8268C14.1106 16.1913 13.9463 16.7322 13.8994 17.7199C13.8525 18.8017 13.8407 19.1191 13.8407 21.8471C13.8407 24.575 13.8525 24.8925 13.8994 25.9743C13.9463 26.9738 14.1106 27.5146 14.2515 27.8674C14.4392 28.3495 14.6622 28.6787 15.0142 29.0432C15.3663 29.4078 15.7066 29.6194 16.1878 29.8075C16.5515 29.9486 17.0914 30.1133 18.0771 30.1603C19.1567 30.2073 19.4736 30.2191 22.1961 30.2191C24.9187 30.2191 25.2355 30.2073 26.3152 30.1603C27.3126 30.1133 27.8525 29.9486 28.2045 29.8075C28.6856 29.6194 29.0142 29.396 29.378 29.0432C29.7418 28.6905 29.953 28.3495 30.1408 27.8674C30.2816 27.5029 30.4459 26.962 30.4929 25.9743C30.5398 24.8925 30.5515 24.575 30.5515 21.8471C30.5515 19.1191 30.5398 18.8017 30.4929 17.7199C30.4459 16.7204 30.2816 16.1795 30.1408 15.8268ZM22.2079 27.0913C19.321 27.0913 16.974 24.7397 16.974 21.8471C16.974 18.9545 19.321 16.6028 22.2079 16.6028C25.0947 16.6028 27.4417 18.9545 27.4417 21.8471C27.43 24.7397 25.0947 27.0913 22.2079 27.0913ZM27.6412 17.6141C26.9606 17.6141 26.4208 17.0614 26.4208 16.3912C26.4208 15.7092 26.9723 15.1683 27.6412 15.1683C28.3219 15.1683 28.8617 15.721 28.8617 16.3912C28.8617 17.0732 28.3101 17.6141 27.6412 17.6141Z"
      fill={dark ? "#000" : "#FFF"}
    />
    <path
      d="M22.2079 0C10.1676 0 0.404022 9.783 0.404022 21.8471C0.404022 33.9113 10.1676 43.6943 22.2079 43.6943C34.2481 43.6943 44.0117 33.9113 44.0117 21.8471C44 9.783 34.2481 0 22.2079 0ZM32.3236 26.0567C32.2766 27.1384 32.1006 27.891 31.8541 28.5377C31.596 29.2079 31.2439 29.7723 30.6806 30.3485C30.1173 30.9129 29.5423 31.2656 28.8734 31.5243C28.228 31.7712 27.4887 31.9476 26.3973 31.9947C25.306 32.0417 24.9656 32.0534 22.1961 32.0534C19.4267 32.0534 19.0863 32.0417 17.995 31.9947C16.9153 31.9476 16.1643 31.7712 15.5189 31.5243C14.85 31.2656 14.2867 30.9129 13.7116 30.3485C13.1484 29.7841 12.7963 29.2079 12.5381 28.5377C12.2917 27.891 12.1157 27.1502 12.0687 26.0567C12.0218 24.9631 12.0101 24.6221 12.0101 21.8471C12.0101 19.0722 12.0218 18.7312 12.0687 17.6376C12.1157 16.5559 12.2917 15.8033 12.5381 15.1566C12.7963 14.4864 13.1484 13.922 13.7116 13.3458C14.2749 12.7814 14.85 12.4286 15.5189 12.17C16.1643 11.923 16.9036 11.7467 17.995 11.6996C19.0863 11.6526 19.4267 11.6408 22.1961 11.6408C24.9656 11.6408 25.306 11.6526 26.3973 11.6996C27.477 11.7467 28.228 11.923 28.8734 12.17C29.5423 12.4286 30.1056 12.7814 30.6806 13.3458C31.2439 13.9102 31.596 14.4864 31.8541 15.1566C32.1006 15.8033 32.2766 16.5441 32.3236 17.6376C32.3705 18.7312 32.3822 19.0722 32.3822 21.8471C32.394 24.6104 32.3822 24.9631 32.3236 26.0567Z"
      fill={dark ? "#000" : "#FFF"}
    />
  </svg>
)

export const Play = ({ size, color }) => (
  <svg
    width={ size || 100 }
    height={ size || 100 }
    viewBox="0 0 101 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50.4927 0C22.605 0 0 22.605 0 50.4927C0 78.3804 22.605 100.985 50.4927 100.985C78.3804 100.985 100.985 78.3804 100.985 50.4927C100.985 22.605 78.395 0 50.4927 0ZM38.9348 68.1214V32.8786L74.163 50.4927L38.9348 68.1214Z"
      fill={color || "white"}
    />
  </svg>
)

export const Collab = ({ size, borderColor, ...rest }) => (
  <svg
    width={size || 32}
    height={size || 32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}>
    <path
      d="M15.6131 30.9912C15.7409 30.9934 15.8708 31 15.9985 31C16.1263 31 16.2562 30.9934 16.3839 30.9912C24.4903 30.7863 31 24.1542 31 15.9956C31 7.837 24.4925 1.20705 16.3861 1C20.3501 1.20044 23.5015 4.47797 23.5015 8.49339C23.5015 12.6366 20.1431 15.9956 16.0007 15.9956C11.8584 15.9956 8.5 19.3546 8.5 23.4978C8.4978 27.5132 11.6492 30.7907 15.6131 30.9912Z"
      stroke={borderColor || "black"}
      strokeMiterlimit="10"
    />
    <path
      d="M15.6147 31C11.6511 30.7996 8.5 27.522 8.5 23.5066C8.5 19.3634 11.858 16.0044 16 16.0044C20.142 16.0044 23.5 12.6454 23.5 8.5022C23.5 4.48899 20.3489 1.20925 16.3853 1.00881C16.2576 1.00661 16.1277 1 16 1C15.8723 1 15.7424 1.00661 15.6147 1.00881C7.5091 1.21586 1 7.84802 1 16.0044C1 24.1608 7.5091 30.7952 15.6147 31Z"
      stroke={borderColor || "black"}
      strokeMiterlimit="10"
    />
  </svg>
)

export const Arrow = styled(({ left, borderColor, className, ...rest }) => (
  <svg
    width="28"
    height="19"
    viewBox="0 0 28 19"
    fill="none"
    className={`arrow ${className}`}
    {...rest}
    xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path
        d="M18 0.349976L27 9.34998L18 18.35"
        stroke={borderColor}
        strokeMiterlimit="10"
      />
      <path d="M0 9.34998H27" stroke={borderColor} strokeMiterlimit="10" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="27.71" height="18.71" fill={borderColor} />
      </clipPath>
    </defs>
  </svg>
))`
  position: relative;
  top: 3px;
  left: ${props => props.left || "35px"};
`
