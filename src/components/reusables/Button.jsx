export const Button = ({children, className = ''}) => {
    return <button className={`primarybutton ${className}`}>{children}</button>
}