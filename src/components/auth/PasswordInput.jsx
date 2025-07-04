import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export function PasswordInput(params) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <input
        {...params.inputParams}
        className={
          "input input-bordered w-full pr-9" +
          (params.hasError ? " input-error" : "")
        }
        type={showPassword ? "text" : "password"}
      />
      <div
        className="absolute bottom-0 right-0 top-0 flex cursor-pointer items-center pr-3"
        onClick={() => setShowPassword((show) => !show)}
      >
        {showPassword ? (
          <EyeIcon size={15} className="stroke-slate-400" />
        ) : (
          <EyeOffIcon size={15} className="stroke-slate-400" />
        )}
      </div>
    </div>
  );
}
// Commit on 2024-01-31T12:07:00
// Commit on 2024-03-08T17:18:00
// Commit on 2024-04-14T15:54:00
// Commit on 2024-05-21T13:02:00
// Commit on 2024-06-27T16:18:00
// Commit on 2024-08-03T12:33:00
// Commit on 2024-09-09T14:51:00
// Commit on 2024-10-16T14:41:00
// Commit on 2024-11-22T17:25:00
// Commit on 2024-12-29T12:01:00
