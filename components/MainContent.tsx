import React from "react";
import { Card, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";

const MainContent = () => {
  return (
    <div className="container mx-auto p-4">
      <div
        class="relative w-full	 rounded-3xl h-64 bg-cover bg-center"
        style={{ backgroundImage: "url(bg.png)" }}
      >
        <div class="absolute inset-0  rounded-3xl bg-black bg-opacity-50 flex justify-center items-end">
          <Search />
        </div>
      </div>

      <div className="  rounded-lg p-10 mb-6  sm:max-md:p-0">
        <div className="text-2xl font-bold text-center mb-4">
          Coimbatore - Chennai
        </div>
        <div className="text-center text-gray-600 mb-6">
          Coimbatore, Tamil Nadu, India ➔ Chennai, Tamil Nadu, India
        </div>
        <div className="flex justify-center mb-6">
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
            2 trips available
          </span>
        </div>
        <div className="space-y-6">
          <Card className="flex flex-col md:flex-row items-center justify-between p-6">
            <div className="flex items-center space-x-4">
              <img
                src="/avatars/Ellipse 28.png"
                alt="Thomas David"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <div className="font-bold">Thomas David</div>
                <div className="text-sm text-gray-600">
                  Weight availability: 10kg
                </div>
              </div>
            </div>
            <div className="text-center md:text-left mt-4 md:mt-0">
              <div className="text-sm font-semibold">Trip Details:</div>
              <div className="text-sm">Flight Number: 3536352584</div>
              <div className="text-sm">Booking Reference number: 64683</div>
            </div>
            <div className="text-center mt-4 md:mt-0">
              <div className="text-lg">11:00 pm</div>
              <div className="text-sm text-gray-600">Coimbatore</div>
            </div>
            <div className="text-center mt-4 md:mt-0">
              <FontAwesomeIcon icon={faPlane} className="text-blue-600" />
            </div>
            <div className="text-center mt-4 md:mt-0">
              <div className="text-lg">12:00 am</div>
              <div className="text-sm text-gray-600">Chennai</div>
            </div>
            <Button className="mt-4 md:mt-0" color="primary">
              View Contact
            </Button>
          </Card>
          <Card className="flex flex-col md:flex-row items-center justify-between p-6">
            <div className="flex items-center space-x-4">
              <img
                src="/avatars/Ellipse 28 (1).png"
                alt="Ronald Richards"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <div className="font-bold">Ronald Richards</div>
                <div className="text-sm text-gray-600">
                  Weight availability: 10kg
                </div>
              </div>
            </div>
            <div className="text-center md:text-left mt-4 md:mt-0">
              <div className="text-sm font-semibold">Trip Details:</div>
              <div className="text-sm">Flight Number: 3536352584</div>
              <div className="text-sm">Booking Reference number: 64683</div>
            </div>
            <div className="text-center mt-4 md:mt-0">
              <div className="text-lg">11:00 pm</div>
              <div className="text-sm text-gray-600">Coimbatore</div>
            </div>
            <div className="text-center mt-4 md:mt-0">
              <FontAwesomeIcon icon={faPlane} className="text-blue-600" />
            </div>
            <div className="text-center mt-4 md:mt-0">
              <div className="text-lg">12:00 am</div>
              <div className="text-sm text-gray-600">Chennai</div>
            </div>
            <Button className="mt-4 md:mt-0" color="primary">
              View Contact
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
