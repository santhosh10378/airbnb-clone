import Avatar from "../common/Avatar";

const ListingHostInfo = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar src="https://a0.muscache.com/im/pictures/user/User-290639154/original/ae2f44d9-f61f-4f18-b39d-7e72ad1afd5d.png?im_w=240" />
      <div>
        <p className="font-medium text-sm">
          <span>Hosted by </span>
          <span>Hostizzy</span>
        </p>
        <p className="text-sm text-gray-600">5 years hosting</p>
      </div>
    </div>
  );
};

export default ListingHostInfo;
