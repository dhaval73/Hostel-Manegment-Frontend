import React from 'react'

function Home() {
  return (
    <section className="flex  overflow-hidden relative flex-col px-36 py-12 font-semibold min-h-[680px] max-md:px-5">
      <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/41775042478fb64ec542cbee1270ab94371fea3a01ff2a216962922c16b78d18?apiKey=1c15e4263ea04cadbb20c639335d52ba&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/41775042478fb64ec542cbee1270ab94371fea3a01ff2a216962922c16b78d18?apiKey=1c15e4263ea04cadbb20c639335d52ba&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/41775042478fb64ec542cbee1270ab94371fea3a01ff2a216962922c16b78d18?apiKey=1c15e4263ea04cadbb20c639335d52ba&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/41775042478fb64ec542cbee1270ab94371fea3a01ff2a216962922c16b78d18?apiKey=1c15e4263ea04cadbb20c639335d52ba&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/41775042478fb64ec542cbee1270ab94371fea3a01ff2a216962922c16b78d18?apiKey=1c15e4263ea04cadbb20c639335d52ba&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/41775042478fb64ec542cbee1270ab94371fea3a01ff2a216962922c16b78d18?apiKey=1c15e4263ea04cadbb20c639335d52ba&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/41775042478fb64ec542cbee1270ab94371fea3a01ff2a216962922c16b78d18?apiKey=1c15e4263ea04cadbb20c639335d52ba&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/41775042478fb64ec542cbee1270ab94371fea3a01ff2a216962922c16b78d18?apiKey=1c15e4263ea04cadbb20c639335d52ba&"
        className="object-cover absolute inset-0 size-full w-full" />

      <header className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 mt-3 fill-stone-900 fill-opacity-70 min-h-[357px] stroke-[1px] stroke-black max-md:px-5 max-md:max-w-full">
        <div className='bg-zinc-950/50 w-full flex items-center justify-center '>

          <div className="flex flex-col mt-3.5 mb-11 max-w-full w-[900px] max-md:mb-10   size-full text-center">
            <h1 className="text-4xl text-white max-md:max-w-full"> A Seamless Blend of Comfort and Campus Living </h1>
            <p className="self-center mt-14 text-2xl text-center text-zinc-300 max-md:mt-10 max-md:max-w-full"> Welcome to Rk Hostel, the exclusive residence nestled within the RK University campus. We provide a comfortable, convenient, and student-friendly environment designed to enhance your experience as an RKU student. </p>
          </div>
        </div>

        <div className=' w-full flex items-center justify-center  mt-12 h-24'>
          <div className=" w-[30%] h-full flex justify-center items-center flex-col 
     shadow-lg  mb-0 bg-zinc-950/50 p-5
    [clip-path:polygon(100%_0%,85%_50px,100%_100%,0%_100%,0%_0%)]
    [shape-outside:polygon(100%_0%,85%_50%,100%_100%,0%_100%,0%_0%)]
    [shape-inside:polygon(100%_0%,85%_50%,100%_100%,0%_100%,0%_0%)]
    " >
            <h1 className=' text-3xl text-white font-bold text-start w-full'>Rk Hostel</h1>

            <p className="self-center  text-l text-start w-full text-zinc-300 max-md:mt-10 max-md:max-w-full"> Discover Comfort and Community</p>
          </div>

          <div className=" w-[70%] h-full  flex items-center justify-evenly
     shadow-lg  mb-0 bg-zinc-950/50
     [clip-path:polygon(100%_0%,100%_50%,100%_100%,7%_100%,0%_50%,7%_0%)]
     [shape-outside:polygon(100%_0%,85%_50%,100%_100%,0%_100%,0%_0%)]
     [shape-inside:polygon(100%_0%,85%_50%,100%_100%,0%_100%,0%_0%)]
    ">
          
            <div className=" text-center text-lg text-white">
              <p>Students</p>
              <p>849+</p>
            </div>
            <div className=" text-center text-lg text-white">
              <p>Hostels</p>
              <p>4</p>
            </div>
            <div className=" text-center text-lg text-white">
              <p>Avelable Space</p>
              <p>259+</p>
            </div>
           
          </div>
        </div>



      </header>
    </section>
  )
}

export default Home