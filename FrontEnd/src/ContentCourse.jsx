

export default function ContentCourse() {
  return (
    <div> 
         <nav className="bg-zinc-500 px-4 py-3 flex justify-between">
    <div className="flex items-center text-xl">
      <span className="text-white font-semibold">Study Buddy</span>
      
    </div>
    <div className="flex items-center text-2xl  ">
      <span className="text-white font-semibold text-xl">Content Courses</span>
    </div>
    <div className="flex items-center gap-x-5">
  
    </div>
  </nav>
  <div className="h-screen w-64 bg-zinc-500 text-white p-4 fixed">
      <ul>
        <li className="mb-2">
          <a href="#" className="block p-2 hover:bg-gray-700 rounded">
            Home
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="block p-2 hover:bg-gray-700 rounded">
            Course videos
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="block p-2 hover:bg-gray-700 rounded">
            Course Pdf
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="block p-2 hover:bg-gray-700 rounded">
            Course Pt
          </a>
        </li>
      </ul>
    </div>


</div>
  )
}
