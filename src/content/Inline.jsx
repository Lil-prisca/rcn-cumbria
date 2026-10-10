export default function Inline({ text = "" }) {
  return text.split("**").map((part, i) =>
    i % 2 ? (
      <strong key={i} className="text-primary font-semibold">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}
