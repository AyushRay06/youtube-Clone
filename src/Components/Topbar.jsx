export function Topbar() {
  return (
    <div className="flex justify-between pt-4 bg-white">
      <div>
        <img className="w-16  pl-4" src="ytlogo.avif"></img>
      </div>
      <div>
        <input
          className="px-10 py-2 border-black"
          type="text"
          placeholder="Search"
        ></input>
      </div>
      <div className="flex justify-between">
        <div>log out</div>
        <img className="w-10 h-10 rounded-full" src="profile.jpg"></img>
      </div>
    </div>
  )
}
