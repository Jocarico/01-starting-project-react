export default function TabButton({ children, onSelect }) {
  console.log("TAB COMPONENT RENDERING");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
