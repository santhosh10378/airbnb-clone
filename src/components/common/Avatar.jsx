import AvatarIcon from "../icons/AvatarIcon";

const Avatar = ({ src }) => {
  return (
    <>
      {src ? (
        <img
          src={src}
          alt="user image"
          className="rounded-full size-7 object-cover"
        />
      ) : (
        <AvatarIcon className="size-6 text-secondary-600" />
      )}
    </>
  );
};

export default Avatar;
