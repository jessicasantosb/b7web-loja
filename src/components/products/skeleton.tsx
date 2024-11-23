import { Skeleton } from "@/components/ui/skeleton";

export function TabsSkeleton() {
  return (
    <>
      <Skeleton className="w-full h-10 rounded-xl" />

      <div className="my-6 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
        {Array.from({ length: 8 }, (item, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 &>*[w-full rounded-xl]"
          >
            <Skeleton className="h-32" />
            <Skeleton className="h-7" />
            <Skeleton className="w-16 h-5" />
            <Skeleton className="h-9" />
          </div>
        ))}
      </div>
    </>
  );
}
