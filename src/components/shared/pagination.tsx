/* import { router, usePage } from "@inertiajs/react"; */
import { useSearchParams } from "react-router";
import { cn } from "tr-cn";

export const Pagination = ({
  currentPage,
  lastPage,
  step = 2,
  position = "center",
}: {
  currentPage?: number;
  lastPage?: number;
  step?: number;
  position?: "center" | "start" | "end";
}) => {
  const [, setSearchParams] = useSearchParams();
  const _lastPage = lastPage;
  const _currentPage = currentPage;

  const active = _currentPage;
  const size = _lastPage;
  const showingNumbers: number = step * 2 + 1;
  let startNumber: number = 2;
  let startArrayNumber: number = step;

  let needStartDots: boolean = false;
  let needEndDots: boolean = false;

  if (active && active > step) {
    startArrayNumber = active - step;
    needStartDots = active > step + startNumber ? true : false;
  }

  if (active && size && size > showingNumbers) {
    needEndDots = size > active + step + 1 ? true : false;

    if (active && size < active + step + 1) {
      startArrayNumber = size - showingNumbers;
    }
  }

  let contentNumber: number;

  const onPaginate = (page: string) => {
    setSearchParams({ page });
  };

  return (
    _lastPage &&
    _currentPage &&
    _lastPage > 1 && (
      <div
        className={cn(
          "flex mt-4",
          position === "center" && "justify-center",
          position === "end" && "justify-end"
        )}
      >
        <ul className="inline-flex items-center gap-x-1">
          <li>
            <Button
              type="button"
              onClick={() =>
                _currentPage > 1 && onPaginate(`${_currentPage - 1}`)
              }
              disabled={_currentPage === 1}
            >
              {"<"}
            </Button>
          </li>
          {size && size > showingNumbers + startNumber ? (
            <>
              <li>
                <Button
                  type="button"
                  active={_currentPage === 1}
                  onClick={() => onPaginate("1")}
                >
                  1
                </Button>
              </li>

              {needStartDots && <span>...</span>}
              {[...Array(showingNumbers)].map((_, i) => {
                contentNumber = needStartDots ? startArrayNumber : startNumber;
                startNumber++;
                startArrayNumber++;
                return (
                  <li key={i}>
                    <Button
                      type="button"
                      active={_currentPage === contentNumber}
                      onClick={(e) =>
                        onPaginate(`${e.currentTarget.textContent || "0"}`)
                      }
                    >
                      {contentNumber}
                    </Button>
                  </li>
                );
              })}
              {needEndDots && <span>...</span>}
              {/* <li
                                className={`inline-flex h-10 w-10 cursor-pointer items-center justify-center border ${
                                    active === size
                                        ? "bg-primary text-primary-foreground"
                                        : ""
                                }`}
                                onClick={(e) =>
                                    setPage(e.currentTarget.textContent || "0")
                                }
                            >
                                {size}
                            </li> */}
              <li>
                <Button
                  type="button"
                  active={_currentPage === size}
                  onClick={(e) =>
                    onPaginate(`${e.currentTarget.textContent || "0"}`)
                  }
                >
                  {size}
                </Button>
              </li>
            </>
          ) : (
            (() => {
              startArrayNumber = 1;
              return [...Array(size)].map((_, i) => (
                <li key={i}>
                  <Button
                    type="button"
                    active={_currentPage === startArrayNumber}
                    onClick={(e) =>
                      onPaginate(`${e.currentTarget.textContent || "0"}`)
                    }
                  >
                    {startArrayNumber++}
                  </Button>
                </li>
              ));
            })()
          )}

          <li>
            <Button
              type="button"
              onClick={() =>
                _currentPage < _lastPage && onPaginate(`${_currentPage + 1}`)
              }
              disabled={_currentPage === _lastPage}
            >
              {">"}
            </Button>
          </li>
        </ul>
      </div>
    )
  );
};

const Button = ({
  active,
  ...rest
}: { active?: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary",
        active && "bg-primary text-white"
      )}
      {...rest}
    />
  );
};
