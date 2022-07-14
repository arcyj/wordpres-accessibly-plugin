interface Props {
  color: string | "#D0DEE6",
}
const InvertColors = (props: Props) => {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="58" height="58" rx="4" fill="white" stroke={props.color} strokeWidth="2"/>
      <path d="M39.7388 42.9853H20.2612C19.3651 42.9853 18.6 42.6683 17.9659 42.0342C17.3319 41.4002 17.0149 40.6351 17.0149 39.739V20.2614C17.0149 19.3653 17.3319 18.6002 17.9659 17.9662C18.6 17.3322 19.3651 17.0151 20.2612 17.0151H39.7388C40.6349 17.0151 41.4 17.3322 42.034 17.9662C42.668 18.6002 42.985 19.3653 42.985 20.2614V39.739C42.985 40.6351 42.668 41.4002 42.034 42.0342C41.4 42.6683 40.6349 42.9853 39.7388 42.9853ZM39.7388 23.5077C39.7388 22.6116 39.4175 21.8423 38.775 21.1998L35.7317 24.2685C34.9877 23.5077 34.1212 22.9201 33.1321 22.5059C32.143 22.0917 31.099 21.8845 30 21.8845C28.529 21.8845 27.1722 22.2481 25.9295 22.9751C24.6867 23.7021 23.7019 24.687 22.9748 25.9297C22.2478 27.1724 21.8843 28.5292 21.8843 30.0002C21.8843 31.0992 22.0914 32.1433 22.5057 33.1324C22.9199 34.1215 23.5074 34.988 24.2683 35.7319L21.1995 38.8006C21.842 39.4262 22.6113 39.739 23.5074 39.739H36.4925C37.3886 39.739 38.1537 39.422 38.7877 38.788C39.4218 38.1539 39.7388 37.3889 39.7388 36.4927V23.5077ZM30 38.1159C27.7512 38.1159 25.8407 37.3212 24.2683 35.7319L35.7317 24.2685C36.4925 25.0125 37.08 25.879 37.4943 26.8681C37.9085 27.8572 38.1156 28.9012 38.1156 30.0002C38.1156 31.4712 37.7521 32.828 37.0251 34.0707C36.2981 35.3134 35.3132 36.2983 34.0705 37.0253C32.8278 37.7524 31.4709 38.1159 30 38.1159Z" fill={props.color}/>
    </svg>
  )
}
export default InvertColors;