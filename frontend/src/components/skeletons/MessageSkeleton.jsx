const MessageSkeleton = () => {
  return (
    <>
      <div className="flex animate-pulse items-center gap-3 p-2">
        <div className="skeleton h-10 w-10 shrink-0 rounded-full bg-gray-600"></div>
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-40 rounded bg-gray-600"></div>
          <div className="skeleton h-4 w-40 rounded bg-gray-600"></div>
        </div>
      </div>
      <div className="flex animate-pulse items-center justify-end gap-3 p-2">
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-40 rounded bg-gray-600"></div>
        </div>
        <div className="skeleton h-10 w-10 shrink-0 rounded-full bg-gray-600"></div>
      </div>
    </>
  );
};

export default MessageSkeleton;
