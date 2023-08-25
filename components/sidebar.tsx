import Link from "next/link";
import { Clock, Home, Idea, Love, VideoCamera } from "./icons/icons";

const SideBar = () => {
  return (
    <>
      <aside className="sm:flex hidden sm:flex-col sm:w-[200px] sm:min-h-screen sm:border-r">
        <div className="flex items-center">
          <VideoCamera />
        </div>
        <div className="flex flex-col gap-4 border-b p-4 m-2">
          <h2 className="font-bold text-xl">Menu</h2>
          <div className="text-gray-500">
            <ul>
              <li className="flex items-center gap-2">
                <Home />
                <Link href="/">Home</Link>
              </li>
              <li className="flex items-center gap-2">
                <Clock />
                <Link href="/upcoming">Coming soon</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-b p-4 m-2">
          <h2 className="font-bold text-xl">Library</h2>
          <div className="text-gray-500">
            <ul>
              <li className="flex items-center gap-2">
                <Love />
                <Link href="#">Favourite</Link>
              </li>
              <li className="flex items-center gap-2">
                <Idea />
                <Link href="#">Recommended</Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
