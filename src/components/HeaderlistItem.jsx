import ListItemNav from "./ListItemNav.jsx";
import ArrowIcon from "./icons/ArrowIcon.astro";

export default function HeaderListItem({ section }) {
  const { section_list } = section;
  return (
    <li className="menu__item">
      <div className="flex justify-center items-center">
        <a href={section.Page} className="menu__link ">
          {section?.section_title}
        </a>
        {section_list && (
          <div className="flecha transition-all duration-150 ease-in">
            {/* <ArrowIcon /> */}
          </div>
        )}
      </div>
      {section_list && (
        <ul className="hidden py-2 sm:px-8 sub-menu w-screen max-w-[1310px]   md:justify-between md:items-center md:shadow-md bg-white md:absolute -left-40 top-[40px]  md:h-min">
          {section_list?.map((item, index) => {
            return (
              <li key={index}>
                <ListItemNav item={item} />
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
