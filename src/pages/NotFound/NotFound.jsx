import notFoundImg from "../../assets/404.png";

function NotFound() {
  return (
    <div className="h-full flex items-center justify-center mb-20">
      <img src={notFoundImg} alt="404 Not Found" className="w-[200px] " />
    </div>
  );
}

export default NotFound;
