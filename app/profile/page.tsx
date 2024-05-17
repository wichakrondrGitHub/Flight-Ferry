import ProfileSettings from "@/components/ProfileSettings";

const profileData = {
  name: "John Doe",
  email: "john.doe@gmail.com",
  password: "********",
  phone: "+1 000-000-0000",
  address: "St 32 main downtown, Los Angeles, California, USA",
  dob: "01-01-1992",
  photo: "/avatars/Ellipse 28 (1).png",
};

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ProfileSettings profile={profileData} />
    </div>
  );
};

export default ProfilePage;
