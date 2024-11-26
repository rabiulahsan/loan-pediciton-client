const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white text-center py-4">
      &copy; {new Date().getFullYear()} All rights reserved by{" "}
      <a href="https://www.linkedin.com/in/rabiul-ahsan/" target="blank">
        <span className="text-orange-500 font-semibold hover:underline">
          Rabiul Ahsan
        </span>
      </a>
    </footer>
  );
};

export default Footer;
