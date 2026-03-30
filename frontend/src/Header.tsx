import cobaLogo from "./imgs/coba.png";

const Header: React.FC = () => {
  return (
    <header className="h-30 bg-ocean-petrol flex">
      <img src={cobaLogo} className="p-5" />
      <div className="content-center">
        <h1 className="text-5xl text-white font-medium">Commerzbank</h1>
      </div>
    </header>
  );
};

export default Header;
