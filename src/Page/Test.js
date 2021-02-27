import React, { useEffect, useState } from "react";
import { dbService, storageService } from "fbase";

const loading = async (name, type) => {
  let ref;
  ref = dbService.collection(type).doc(name);
  let obj = await (await ref.get()).data();
  return obj;
};

const Test = () => {
  // const x = useMotionValue(10);
  // const y = useTransform(x, (value) => value * 2);
  useEffect(async () => {
    const obj = await loading("CCC", "clubs");
    console.log(obj.introduction);
    console.log(obj.name);
  }, []);
  return <div>My animation will go here</div>;
};
export default Test;
