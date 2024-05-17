import React from "react";
import { Input, Button, Select } from "@nextui-org/react";

const Search = () => {
  return (
    <div className="mx-auto max-w-4xl sm:max-md:w-96	">
      <div className="bg-white shadow-md rounded-lg p-6 ">
        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-4">
          <Select placeholder="From" fullWidth className="md:col-span-1">
            {/* <Select.Option value="coimbatore">Coimbatore</Select.Option> */}
            {/* Add other options here */}
          </Select>
          <Select placeholder="To" fullWidth className="md:col-span-1 ">
            {/* <Select.Option value="chennai">Chennai</Select.Option> */}
            {/* Add other options here */}
          </Select>
          <Input
            type="date"
            placeholder="Date"
            fullWidth
            className="md:col-span-1"
          />
          <Select placeholder="Weight" fullWidth className="md:col-span-1">
            {/* <Select.Option value="upto10kg">Up to 10kg</Select.Option> */}
            {/* Add other options here */}
          </Select>
          <Button color="primary" auto className="md:col-span-1">
            Find the traveler
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
