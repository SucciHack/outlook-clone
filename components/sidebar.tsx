import { Home, Calendar, Users, Check, FileText, FileSpreadsheet, AppWindow, Presentation } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="fixed mr-20 left-0 top-0 h-screen w-12 z-50 bg-gray-100 flex flex-col items-center py-4 shadow-md">
      <button className="mb-4 p-2 hover:bg-gray-200 rounded-lg">
        <AppWindow className="w-6 h-6 text-blue-600" />
      </button>
      <button className="mb-4 p-2 hover:bg-gray-200 rounded-lg">
        <Home className="w-6 h-6 text-blue-500" />
      </button>
      <button className="mb-4 p-2 hover:bg-gray-200 rounded-lg">
        <Calendar className="w-6 h-6 text-blue-400" />
      </button>
      <button className="mb-4 p-2 hover:bg-gray-200 rounded-lg">
        <Users className="w-6 h-6 text-blue-500" />
      </button>
      <button className="mb-4 p-2 hover:bg-gray-200 rounded-lg">
        <Check className="w-6 h-6 text-blue-500" />
      </button>
      <button className="mb-4 p-2 hover:bg-gray-200 rounded-lg">
        <FileText className="w-6 h-6 text-blue-700" />
      </button>
      <button className="mb-4 p-2 hover:bg-gray-200 rounded-lg">
        <FileSpreadsheet className="w-6 h-6 text-green-600" />
      </button>
      <button className="mb-4 p-2 hover:bg-gray-200 rounded-lg">
        <Presentation className="w-6 h-6 text-orange-500" />
      </button>
    </div>
  );
};
export default Sidebar;