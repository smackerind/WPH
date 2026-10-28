import { zodResolver } from "@hookform/resolvers/zod";
import { Search as SearchIcon, X } from "lucide-react";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { searchSchema, type SearchFormValues } from "@/schemas/searchSchema";

const DEBOUNCE_MS = 400;

/**
 * Kotak pencarian di navbar (desktop).
 * Kata kunci disimpan di URL (?q=...), jadi kotak ini dan halaman hasil
 * pencarian selalu menampilkan isi yang sama tanpa saling mengoper state.
 */
const NavbarSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const urlQuery = searchParams.get("q") ?? "";

  const { register, handleSubmit, control, setValue } =
    useForm<SearchFormValues>({
      resolver: zodResolver(searchSchema),
      defaultValues: { query: urlQuery },
      mode: "onChange",
    });

  const typedQuery = useWatch({ control, name: "query" }) ?? "";

  // URL berubah dari luar (misal tombol Back) → samakan isi kotak
  useEffect(() => {
    setValue("query", urlQuery);
  }, [urlQuery, setValue]);

  // User mengetik → tunggu sebentar, lalu pindah ke halaman hasil pencarian
  useEffect(() => {
    const trimmed = typedQuery.trim();
    if (trimmed === urlQuery || trimmed.length < 2) return;

    const timer = setTimeout(() => {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`, {
        replace: location.pathname === "/search",
      });
    }, DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [typedQuery, urlQuery, navigate, location.pathname]);

  const onSubmit = handleSubmit((values) => {
    navigate(`/search?q=${encodeURIComponent(values.query.trim())}`);
  });

  return (
    <form onSubmit={onSubmit} className="relative w-[243px]" noValidate>
      <SearchIcon className="absolute top-1/2 left-4 size-6 -translate-y-1/2 text-neutral-500" />
      <input
        {...register("query")}
        type="text"
        inputMode="search"
        placeholder="Search Movie"
        aria-label="Search movie"
        className="h-14 w-full rounded-2xl border border-neutral-800 bg-surface-glass pr-10 pl-12 text-md text-neutral-25 backdrop-blur-[40px] outline-none transition-colors placeholder:text-neutral-500 focus:border-primary-300"
      />
      {typedQuery.length > 0 && (
        <button
          type="button"
          onClick={() => {
            setValue("query", "");
            if (location.pathname === "/search") navigate("/search");
          }}
          aria-label="Clear search"
          className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-neutral-500 transition-colors hover:text-neutral-25"
        >
          <X className="size-4" />
        </button>
      )}
    </form>
  );
};

export default NavbarSearch;
