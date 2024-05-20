export function CentredContainer(props) {
  return (
    <div className="flex min-h-full w-full justify-center bg-white md:bg-slate-200 md:py-3">
      <div className="m-auto flex h-fit w-full max-w-lg flex-col bg-base-100 p-4 md:card md:p-6 md:shadow-xl">
        {props.children}
      </div>
    </div>
  );
}
// Commit on 2024-01-30T16:50:00
// Commit on 2024-03-07T16:36:00
// Commit on 2024-04-13T10:02:00
// Commit on 2024-05-20T10:34:00
