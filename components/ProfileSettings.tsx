"use client";
import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

interface ProfileProps {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  dob: string;
  photo: string;
}

interface EditModeState {
  name: boolean;
  email: boolean;
  password: boolean;
  phone: boolean;
  address: boolean;
  dob: boolean;
  photo: boolean;
}

const ProfileSettings = ({ profile }: { profile: ProfileProps }) => {
  const [editMode, setEditMode] = useState<EditModeState>({
    name: false,
    email: false,
    password: false,
    phone: false,
    address: false,
    dob: false,
    photo: false,
  });

  const toggleEditMode = (field: keyof EditModeState) => {
    setEditMode((prevState) => ({ ...prevState, [field]: !prevState[field] }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6">Profile Settings</h1>

      <Tabs disabledKeys={["music"]} aria-label="Disabled Options">
        <Tab key="profileDetail" title="Profile Detail">
          <div className="bg-white shadow-md rounded-lg p-6 ">
            <div className="flex items-center space-x-4 mb-6 justify-center flex-col">
              <img
                className="w-16 h-16 rounded-full"
                src={`${profile.photo}`}
                alt={profile.name}
              />
              <div>
                <h2 className="text-2xl font-bold">{profile.name}</h2>
                <p className="text-gray-600">{profile.email}</p>
              </div>
            </div>
            <div className="space-y-4">
              {Object.keys(profile).map((key) => (
                <div key={key} className="flex items-center space-x-4">
                  <label className="w-32 font-semibold capitalize">{key}</label>
                  {editMode[key as keyof ProfileProps] ? (
                    <Input
                      fullWidth
                      initialValue={profile[key as keyof ProfileProps]}
                      onBlur={() => toggleEditMode(key as keyof EditModeState)}
                    />
                  ) : (
                    <p className="flex-1">
                      {profile[key as keyof ProfileProps]}
                    </p>
                  )}
                  <Button
                    auto
                    onClick={() => toggleEditMode(key as keyof EditModeState)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </div>
              ))}
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <Button auto flat>
                <FontAwesomeIcon icon={faTimes} /> Cancel
              </Button>
              <Button auto>
                <FontAwesomeIcon icon={faSave} />
                Save
              </Button>
            </div>
          </div>
        </Tab>

        <Tab key="myTips" title="My Tips">
          <Card>
            <CardBody>My Tips tab</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProfileSettings;
