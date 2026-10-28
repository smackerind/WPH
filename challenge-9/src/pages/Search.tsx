import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "framer-motion";
import { ArrowLeft, Search as SearchIcon, X } from "lucide-react";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import MovieListItem from "@/components/movie/MovieListItem";
import MovieListSkeleton from "@/components/movie/MovieListSkeleton";
import StateMessage from "@/components/movie/StateMessage";
import PageTransition from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { useSearchMovies } from "@/hooks/useMovies";
import { searchSchema, type SearchFormValues } from "@/schemas/searchSchema";

const DEBOUNCE_MS = 400;

const Search = () => {
  // Kata kunci disimpan di URL (?q=...) supaya hasil pencarian bisa dibagikan
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: { query },
    mode: "onChange",
  });

  const typedQuery = useWatch({ control, name: "query" }) ?? "";

  // URL berubah dari luar (search di navbar desktop, tombol Back) → samakan isi
  // kotak, supaya debounce di bawah tidak menimpa URL dengan kata kunci lama
  useEffect(() => {
    const current = getValues("query").trim();
    const currentAsUrl = current.length >= 2 ? current : "";
    if (currentAsUrl !== query) setValue("query", query);
  }, [query, getValues, setValue]);

  // Tunggu user berhenti mengetik sebelum memperbarui URL & memanggil API
  useEffect(() => {
    const timer = setTimeout(() => {
      const trimmed = typedQuery.trim();
      if (trimmed === query) return;

      setSearchParams(trimmed.length >= 2 ? { q: trimmed } : {}, {
        replace: true,
      });
    }, DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [typedQuery, query, setSearchParams]);

  const { data, isLoading, isError, error, refetch } = useSearchMovies(query);
  const results = data?.results ?? [];

  const onSubmit = handleSubmit((values) => {
    setSearchParams({ q: values.query.trim() }, { replace: true });
  });

  const clearQuery = () => {
    setValue("query", "", { shouldValidate: false });
    setSearchParams({}, { replace: true });
  };

  return (
    <PageTransition>
      <section className="container-page flex flex-col gap-6 py-4 lg:gap-8 lg:py-12">
        {/* ---------- Form pencarian (React Hook Form + Zod) ---------- */}
        <form
          onSubmit={onSubmit}
          className="flex items-center gap-4 lg:hidden"
          noValidate
        >
          <Link
            to="/"
            aria-label="Back to home"
            className="shrink-0 text-neutral-25 transition-opacity hover:opacity-70"
          >
            <ArrowLeft className="size-6" />
          </Link>

          <div className="relative flex-1">
            <SearchIcon className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-neutral-500" />
            <input
              {...register("query")}
              type="text"
              inputMode="search"
              autoFocus
              placeholder="Search Movie"
              aria-label="Search movie"
              aria-invalid={Boolean(errors.query)}
              className="h-11 w-full rounded-xl border border-neutral-800 bg-surface-glass pr-11 pl-11 text-sm text-neutral-25 backdrop-blur-[40px] outline-none transition-colors placeholder:text-neutral-500 focus:border-primary-300"
            />
            {typedQuery.length > 0 && (
              <button
                type="button"
                onClick={clearQuery}
                aria-label="Clear search"
                className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-neutral-500 transition-colors hover:text-neutral-25"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
        </form>

        {errors.query && typedQuery.length > 0 && (
          <p role="alert" className="text-sm text-primary-200">
            {errors.query.message}
          </p>
        )}

        {/* ---------- Hasil pencarian ---------- */}
        {query.length < 2 && !errors.query && (
          <StateMessage
            icon="/icons/ClipSearch.png"
            title="Cari film favoritmu"
            description="Ketik judul film di kolom pencarian di atas."
          />
        )}

        {isLoading && query.length >= 2 && <MovieListSkeleton count={3} />}

        {isError && (
          <StateMessage
            title="Pencarian gagal"
            description={error.message}
            action={<Button onClick={() => refetch()}>Coba Lagi</Button>}
          />
        )}

        {data && results.length === 0 && (
          <StateMessage
            icon="/icons/ClipSearch.png"
            title="Data Empty"
            description={`Tidak ada film yang cocok dengan "${query}".`}
            action={
              <Button asChild className="w-[200px] lg:h-13 lg:w-[220px] lg:text-md">
                <Link to="/">Explore Movie</Link>
              </Button>
            }
          />
        )}

        {results.length > 0 && (
          <>
            <p className="text-sm text-neutral-400 lg:text-md">
              {data?.total_results} hasil untuk “{query}”
            </p>
            <ul className="flex flex-col">
              <AnimatePresence initial={false}>
                {results.map((movie, index) => (
                  <li
                    key={movie.id}
                    className={
                      index > 0
                        ? "mt-6 border-t border-neutral-800 pt-6 lg:mt-8 lg:pt-8"
                        : ""
                    }
                  >
                    <MovieListItem movie={movie} />
                  </li>
                ))}
              </AnimatePresence>
            </ul>
          </>
        )}
      </section>
    </PageTransition>
  );
};

export default Search;
