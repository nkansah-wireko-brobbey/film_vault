'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import AnimeCard, { AnimeProp } from "./AnimeCard";
import { fetchMovieData } from "@/app/action";

let page: number = 1;

function LoadMore() {
  
  const [data, setData] = useState<AnimeProp[]>([])
  const { ref, inView } = useInView({
    threshold: 1,
  });


  useEffect(()=>{
    if(inView){
      console.log("Load More")
      fetchMovieData(page).then((res) => {
        setData([...data,...res])
      })
      page++;
    }
  
  },[inView,data])

  return (
    <>
          <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index:number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
