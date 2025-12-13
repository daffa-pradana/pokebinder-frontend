import logo from "../../assets/pokebinder-logo.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white rounded-2xl shadow-sm p-4 mb-6">
      <img src={logo} alt="PokeBinder Logo" className="h-8"/>
      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
    </header>
  );
}
