export function ListItemNav({ item }) {
  return (
    <a
      href={item?.Page}
      className="hover:scale-[1.05] transition-all duration-75 flex items-center gap-6"
    >
      <picture className="w-12 h-12 ">
        <img
          src={item?.section_img}
          alt={item?.section_img_alt}
          className=" w-12 h-12"
        />
      </picture>
      <section className="flex flex-col gap-3">
        <div>
          <p className="font-bold text-sm text-blue-800">
            {item?.section_subtitle}
          </p>
          <p className="text-xs">{item?.section_intro}</p>
        </div>
        <p className="text-xs font-semibold max-w-[28ch] text-pretty">
          {item?.section_description}
        </p>
      </section>
    </a>
  );
}
