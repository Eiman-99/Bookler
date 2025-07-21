import { Button, Select, TextInput, Label, Datepicker } from "flowbite-react";

export function SearchCard() {
  return (
    <div className="bg-white shadow-md rounded-2xl px-6 py-6 flex flex-col gap-6 max-w-5xl mx-auto lg:flex-row lg:items-center lg:gap-4 lg:-mt-12">
      {/* Search Input */}
      <div className="flex flex-col">
        <Label
          value="Search"
          className="text-xs uppercase text-gray-400 mb-1"
        />
        <TextInput
          type="text"
          placeholder="Hotel Haramain"
          className="w-full lg:w-48"
        />
      </div>

      {/* Country Select */}
      <div className="flex flex-col">
        <Label
          value="Country"
          className="text-xs uppercase text-gray-400 mb-1"
        />
        <Select className="w-full lg:w-48">
          <option>Egypt</option>
          <option>Saudi Arabia</option>
          <option>UAE</option>
        </Select>
      </div>

      {/* Check-in Date */}
      <div className="flex flex-col">
        <Label
          value="Check-in"
          className="text-xs uppercase text-gray-400 mb-1"
        />
        <Datepicker className="w-full lg:w-48" placeholder="21 Aug '19" />
      </div>

      {/* Button group */}
      <div className="flex justify-between items-center gap-4 mt-2 lg:ml-auto lg:mt-0">
        <Button
          color="gray"
          className="font-semibold bg-transparent hover:bg-gray-100 text-black shadow-none"
        >
          Clear Filters
        </Button>

        <Button
          color="failure"
          className="rounded-full px-6 py-2 font-semibold"
        >
          Search
        </Button>
      </div>
    </div>
  );
}
