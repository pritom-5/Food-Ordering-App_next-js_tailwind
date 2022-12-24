import Item from "./Item";

export default function Items({ items }) {
  return (
    <div
      id="items"
      className="py-24 max-w-6xl grid grid-cols-[360px] gap-4 md:grid-cols-[360px_360px] xl:grid-cols-[360px_360px_360px] w-full justify-center mx-auto"
    >
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
