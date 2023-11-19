import React, { useEffect, useState } from "react";
import { Cards } from "../components/Cards";

export const Blog = () => {
  const [fileNameList, setFileNameList] = useState([]);
  
  const getMarkdownMetadata = async () => {
    const res = await fetch("assets/markdownMetadata.json");
    const { ...resList } = await res.json();
    return Object.values(resList);
  };
  
  const handleMetadata = async () => {
    const markdownMetadata = await getMarkdownMetadata();
    setFileNameList(markdownMetadata);
  };

  useEffect(() => {
    handleMetadata();
  }, []);

  return (
    <div className="py-44 flex flex-col px-44 max-[1500px]:px-32 max-[800px]:px-16 max-[600px]:px-4">
      <main className="mb-20">
        <h1 className="text-5xl font-semibold mb-10 text-primary max-[700px]:text-4xl">
          Blog name placeholder
        </h1>
        <p className="max-[700px]:text-[.9rem]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, quo
          aliquam? Doloremque aliquam molestias ipsam laudantium labore magnam
          beatae molestiae quidem architecto est, autem quaerat eius eveniet
          vitae, eos ea. Obcaecati illum ratione eveniet. Laudantium
          voluptatibus cum dignissimos fuga dolorum sed consequuntur dolores?
          Hic ipsum eligendi modi? Sit, ipsa! Rem repudiandae possimus
          distinctio libero, ut et voluptas delectus corrupti ullam?
        </p>
      </main>
      <Cards posts={fileNameList} />
    </div>
  );
};
