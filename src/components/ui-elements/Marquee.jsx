const Marquee = ({ data, links }) => {
  return (
    <div className="bg-black p-1">
      {/*eslint-disable-next-line */}
      <marquee className="text-white" behavior="scroll" direction="left">
        {data.map((item, index) => (
          <a
            key={index}
            href={links[index]}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-10 text-md font-semibold bg-black text-white uppercase"
          >
            {item}
          </a>
        ))}
      </marquee>
    </div>
  );
};

export default Marquee;
