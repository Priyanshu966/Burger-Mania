const ItemMenu = ({title, lists}) => {
  return (
    <div>
      <h3 className="py-1.5 text-white capitalize text-lg line pr-10">
        {title}
      </h3>
      <div className="grid justify-start gap-y-2 text-white/70 py-3">
        {lists.map((item) => {
          return <button className="capitalize text-start">{item}</button>;
        })}
      </div>
    </div>
  );
};
export default ItemMenu;
