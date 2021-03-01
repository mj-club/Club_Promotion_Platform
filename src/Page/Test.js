import React, { useEffect, useState } from "react";
import { dbService, storageService } from "fbase";
import ReactPlayer from "react-player";

const loading = async (name, type) => {
  let ref;
  ref = dbService.collection(type).doc(name);
  let obj = await (await ref.get()).data();
  return obj;
};

const loadFiles = async (clubName, fileType) => {
  const urls = [];
  const arr = await storageService
    .ref()
    .child(clubName)
    .child(fileType)
    .listAll();

  for (let i = 0; i < arr.items.length; i++) {
    let url = await arr.items[i].getDownloadURL();
    urls.push(url);
  }
  return urls;
};

const Test = () => {
  // const x = useMotionValue(10);
  // const y = useTransform(x, (value) => value * 2);
  const [fileList, setFileList] = useState([]);
  useEffect(async () => {
    // const obj = await loading("CCC", "clubs");
    // console.log(obj.introduction);
    // console.log(obj.name);
    const urls = await loadFiles("COA", "content_video");
    console.log(urls);
    setFileList(urls);
  }, []);
  return fileList.length !== 0 ? (
    <>
      <ReactPlayer url={fileList[0]} controls={true} />
      {console.log(fileList)}
    </>
  ) : (
    <></>
  );
};
export default Test;
