export default function Home(props) {
    return (
        <div className={"svg-container"}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 -960 960 960"
                {...props}
            >
                <path
                    d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
            </svg>
        </div>
    )
}