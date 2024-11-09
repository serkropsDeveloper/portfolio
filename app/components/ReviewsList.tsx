const ReviewsList = ({ reviews }) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-[20px] w-full h-auto">
      {reviews.map((item, index) => {
        const { image, name, text } = item;
        return (
          <div
            key={index}
            className="flex justify-center items-center gap-[50px] w-full md:w-1/2 h-auto"
          >
            <img
              src={image.url}
              width="50px"
              height="50px"
              className="rounded-full object-contain"
            />
            <div className="flex flex-col justify-start items-start">
              <span className="text-[20px] font-bold">{name[0].text}</span>
              <span className="text-[16px]">{text[0].text}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewsList;
