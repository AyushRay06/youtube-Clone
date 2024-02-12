export function VideoCard(props) {
  return (
    <div className="p-2">
      <div>
        <img
          className="object-cover rounded-md cursor-pointer shadow-lg"
          src={props.image}
        ></img>
      </div>
      <div className="flex pt-1">
        <div>
          <img className="rounded-full w-10" src={props.icon}></img>
        </div>
        <div className="pl-4">
          <h4>
            <b>{props.title}</b>
          </h4>
          <h3 className="text-gray-500 flex text-sm">
            {props.author}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </h3>

          <p className="text-gray-500 text-sm">
            {props.views} | {props.days}
          </p>
        </div>
      </div>
    </div>
  )
}
