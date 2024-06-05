import TodayHighlights from "../Components/main/todayhighlights";
import WeekCards from "../Components/main/weekcards";

export const MainContent = () => {
  return (
    <div className="flex flex-col space-y-16 w-auto h-full p-10">
      <p className=" text-2xl font-extrabold font-mono underline underline-offset-8">
        Week
      </p>
      <WeekCards />
      <TodayHighlights />
    </div>
  );
};
