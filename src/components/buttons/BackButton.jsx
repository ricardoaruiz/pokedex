import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function BackButton({ to }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 text-lg text-slate-200 hover:text-amber-200 transition-colors"
    >
      <ArrowLeft />
      Back
    </Link>
  );
}
