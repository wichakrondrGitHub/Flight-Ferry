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
  const [profileData, setProfileData] = useState<ProfileProps>(profile);
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

  const handleInputChange = (field: keyof ProfileProps, value: string) => {
    setProfileData((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleSave = () => {
    // Perform save operation here (e.g., API call to save profile data)
    console.log("Profile data saved:", profileData);
    // Exit edit mode after saving
    setEditMode({
      name: false,
      email: false,
      password: false,
      phone: false,
      address: false,
      dob: false,
      photo: false,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6">Profile Settings</h1>

      <Tabs disabledKeys={["music"]} aria-label="Disabled Options">
        <Tab key="profileDetail" title="Profile Detail">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-6 justify-center flex-col">
              <img
                className="w-16 h-16 rounded-full"
                src={`${profileData.photo}`}
                alt={profileData.name}
              />
              <div>
                <h2 className="text-2xl font-bold">{profileData.name}</h2>
                <p className="text-gray-600">{profileData.email}</p>
              </div>
            </div>
            <div className="space-y-4">
              {Object.keys(profileData).map((key) => (
                <div key={key} className="flex items-center space-x-4">
                  <label className="w-32 font-semibold capitalize">{key}</label>
                  {editMode[key as keyof ProfileProps] ? (
                    <Input
                      fullWidth
                      initialValue={profileData[key as keyof ProfileProps]}
                      onBlur={(e) =>
                        handleInputChange(
                          key as keyof ProfileProps,
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    <p className="flex-1">
                      {profileData[key as keyof ProfileProps]}
                    </p>
                  )}
                  <Button
                    className=" text-indigo-500	 border-1 bg-transparent border-indigo-500/100 backgrou"
                    auto
                    onClick={() => toggleEditMode(key as keyof EditModeState)}
                  >
                    <FontAwesomeIcon icon={faEdit} /> edit
                  </Button>
                </div>
              ))}
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <Button
                className="bg-indigo-200"
                auto
                flat
                onClick={() => setProfileData(profile)}
              >
                <FontAwesomeIcon icon={faTimes} /> Cancel
              </Button>
              <Button className="bg-indigo-500" auto onClick={handleSave}>
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
