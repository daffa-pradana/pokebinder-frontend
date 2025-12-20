// Icons
import logo from '@/assets/logo/pokebinder-logo.png';
import profilePic from '@/assets/placeholders/profile-picture.png';

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white rounded-2xl p-5 mb-6 shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.1)]">
      <img src={logo} className="w-[120px]"/>
      <div className="w-10 h-10 bg-gray-200 rounded-full cursor-pointer">
        <img src={profilePic}/>
      </div>
    </header>
  );
}
