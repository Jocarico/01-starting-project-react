export default function TabButton({ children, isSelected, ...props }) {
  console.log("TAB COMPONENT RENDERING");
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
    </li>
  );
}
