import { IMAGE_SIZES } from "@/lib/constants";
import { getImageUrl } from "@/lib/utils";
import type { CastMember } from "@/types/movie";

/** Satu pemeran: foto, nama, dan nama karakter */
const CastCard = ({ person }: { person: CastMember }) => (
  <li className="flex items-center gap-3 lg:gap-4">
    {person.profile_path ? (
      <img
        src={getImageUrl(person.profile_path, IMAGE_SIZES.profile.medium)}
        alt={person.name}
        loading="lazy"
        className="size-[55px] shrink-0 rounded-lg object-cover lg:size-[69px] lg:rounded-xl"
      />
    ) : (
      <div className="flex size-[55px] shrink-0 items-center justify-center rounded-lg bg-neutral-900 text-xs text-neutral-500 lg:size-[69px]">
        {person.name.charAt(0)}
      </div>
    )}

    <div className="min-w-0">
      <p className="truncate text-sm font-semibold text-neutral-25 lg:text-md">
        {person.name}
      </p>
      <p className="truncate text-sm text-neutral-400 lg:text-md">
        {person.character}
      </p>
    </div>
  </li>
);

export default CastCard;
