import { useEffect, useState } from "react";
import Image from "./Image";

const Avatar = ({ name, image }) => {
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    if (image) return;
    if (!name) return;
    const [first, second] = name.split(" ");
    setDisplayName(`${first[0]}${second ? second[0] : ""}`);
  }, [name, image]);

  const generateBg = () => {
    const colors = [
      { bg: "bg-green-600", text: "text-white" },
      { bg: "bg-red-500", text: "text-white" },
      { bg: "bg-orange-400", text: "text-white" },
      { bg: "bg-blue-400", text: "text-white" },
    ];
    const index = Math.floor(Math.random() * 4);

    return ` ${colors[index].bg} ${colors[index].text} `;
  };

  return (
    <>
      {image ? (
        <Image
          src={image}
          alt={name || "provider_img"}
          className="rounded-full object-cover border border-slate-200 border-solid"
        />
      ) : (
        <div
          className={`flex p-2 justify-center items-center rounded-full text-center ${generateBg()}`}
        >
          {displayName}
        </div>
      )}
    </>
  );
};

export default Avatar;
