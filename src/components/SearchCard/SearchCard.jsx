import { Button, Select, TextInput, Label, Datepicker } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchCard() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (search.trim()) {
      params.append("q", search.trim());
    }

    if (country) {
      params.append("address.countryIsoCode", country);
    }

    navigate(`/search?${params.toString()}`);
  };

  const handleClear = () => {
    setSearch("");
    setCountry("");
    navigate("/search");
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl px-6 py-8 max-w-6xl mx-auto -mt-12">
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:items-end md:gap-4">
        {/* Search Input */}
        <div className="flex flex-col flex-1 min-w-[180px]">
          <Label
            value="Search"
            className="text-xs uppercase text-gray-500 mb-1"
          />
          <TextInput
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Country Filter */}
        <div className="flex flex-col flex-1 min-w-[180px]">
          <Label
            value="Country"
            className="text-xs uppercase text-gray-500 mb-1"
          />
          <Select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">Select Country</option>
            <option value="EG">Egypt</option>
            <option value="SA">Saudi Arabia</option>
            <option value="AE">UAE</option>
          </Select>
        </div>

        {/* Date Picker */}
        <div className="flex flex-col flex-1 min-w-[180px]">
          <Label
            value="Check-in"
            className="text-xs uppercase text-gray-500 mb-1"
          />
          <Datepicker placeholder="21 Aug '19" />
        </div>

        <div className="flex gap-4 mt-2 md:mt-0 md:ml-auto">
          <Button
            className="bg-transparent hover:bg-gray-100 text-gray-700 font-semibold shadow-none border border-gray-300 cursor-pointer"
            onClick={handleClear}
          >
            Clear Filters
          </Button>
          <Button
            className="bg-[#DF142D] hover:bg-[red-700] text-white rounded-full px-6 py-2 font-semibold cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
