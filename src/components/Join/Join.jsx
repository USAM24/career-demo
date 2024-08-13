import loc from '../../assets/Vector (1).png';

export default function Join() {
  return (
    <div className="h-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
      <div className="col-span-1 flex flex-col items-center md:items-start p-6 md:p-10">
        <h1 className="text-white text-2xl md:text-4xl ml-[40px] mt-[20px] font-bold text-center md:text-left mb-4 md:mb-6">
          Join our newsletter now
        </h1>
        <img src={loc} alt="design" className="w-full h-auto" />
      </div>
      <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start p-6 md:p-12">
        <p className="text-white text-base md:text-lg w-full md:w-[60%] text-center md:text-left mb-6">
          Subscribe to our Newsletter and be the first to know about our amazing
          news
        </p>
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-1">
          <div className="bg-white p-4 flex items-center rounded-lg md:rounded-l-xl w-full md:w-[calc(100%-150px)]">
            <input
              type="text"
              className="p-2.5 border-none w-full text-black focus:outline-none"
              placeholder="Write your email"
            />
          </div>
          <button className="bg-[#FFB941] text-white font-semibold text-base md:text-2xl w-full md:w-[150px] py-2 md:py-3 rounded-lg">
            Join
          </button>
        </div>
      </div>
    </div>
  );
}
