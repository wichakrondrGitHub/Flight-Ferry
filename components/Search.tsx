"use client";
import React from "react";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";

const Search = () => {
  return (
    <div className="mx-auto max-w-4xl sm:max-md:w-96">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-4">
          <Select placeholder="From" fullWidth className="md:col-span-1">
            <SelectItem key="us" value="us">
              United States
            </SelectItem>
            <SelectItem key="ca" value="ca">
              Canada
            </SelectItem>
            <SelectItem key="mx" value="mx">
              Mexico
            </SelectItem>
            <SelectItem key="fr" value="fr">
              France
            </SelectItem>
            <SelectItem key="de" value="de">
              Germany
            </SelectItem>
            <SelectItem key="jp" value="jp">
              Japan
            </SelectItem>
            <SelectItem key="in" value="in">
              India
            </SelectItem>
            <SelectItem key="cn" value="cn">
              China
            </SelectItem>
            <SelectItem key="br" value="br">
              Brazil
            </SelectItem>
            <SelectItem key="za" value="za">
              South Africa
            </SelectItem>
          </Select>
          <Select placeholder="To" fullWidth className="md:col-span-1">
            <SelectItem key="us" value="us">
              United States
            </SelectItem>
            <SelectItem key="ca" value="ca">
              Canada
            </SelectItem>
            <SelectItem key="mx" value="mx">
              Mexico
            </SelectItem>
            <SelectItem key="fr" value="fr">
              France
            </SelectItem>
            <SelectItem key="de" value="de">
              Germany
            </SelectItem>
            <SelectItem key="jp" value="jp">
              Japan
            </SelectItem>
            <SelectItem key="in" value="in">
              India
            </SelectItem>
            <SelectItem key="cn" value="cn">
              China
            </SelectItem>
            <SelectItem key="br" value="br">
              Brazil
            </SelectItem>
            <SelectItem key="za" value="za">
              South Africa
            </SelectItem>
          </Select>
          <Input
            type="date"
            placeholder="Date"
            fullWidth
            className="md:col-span-1"
          />
          <Select placeholder="Weight" fullWidth className="md:col-span-1">
            <SelectItem key="upto10kg" value="upto10kg">
              Up to 10kg
            </SelectItem>
            <SelectItem key="10to20kg" value="10to20kg">
              10kg to 20kg
            </SelectItem>
            <SelectItem key="20to30kg" value="20to30kg">
              20kg to 30kg
            </SelectItem>
            <SelectItem key="30to40kg" value="30to40kg">
              30kg to 40kg
            </SelectItem>
            <SelectItem key="40to50kg" value="40to50kg">
              40kg to 50kg
            </SelectItem>
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
