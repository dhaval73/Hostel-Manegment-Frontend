import React from 'react'

function Home() {
  return (
    <section className="flex overflow-hidden relative flex-col px-12 py-12 font-semibold min-h-[680px] max-md:px-5">
      <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/41775042478fb64ec542cbee1270ab94371fea3a01ff2a216962922c16b78d18?apiKey=1c15e4263ea04cadbb20c639335d52ba&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/41775042478fb64ec542cbee1270ab94371fea3a01ff2a216962922c16b78d18?apiKey=1c15e4263ea04cadbb20c639335d52ba&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/41775042478fb64ec542cbee1270ab94371fea3a01ff2a216962922c16b78d18?apiKey=1c15e4263ea04cadbb20c639335d52ba&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/41775042478fb64ec542cbee1270ab94371fea3a01ff2a216962922c16b78d18?apiKey=1c15e4263ea04cadbb20c639335d52ba&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/41775042478fb64ec542cbee1270ab94371fea3a01ff2a216962922c16b78d18?apiKey=1c15e4263ea04cadbb20c639335d52ba&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/41775042478fb64ec542cbee1270ab94371fea3a01ff2a216962922c16b78d18?apiKey=1c15e4263ea04cadbb20c639335d52ba&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/41775042478fb64ec542cbee1270ab94371fea3a01ff2a216962922c16b78d18?apiKey=1c15e4263ea04cadbb20c639335d52ba&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/41775042478fb64ec542cbee1270ab94371fea3a01ff2a216962922c16b78d18?apiKey=1c15e4263ea04cadbb20c639335d52ba&" className="object-cover absolute inset-0 size-full" />

      <header className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 mt-3 fill-stone-900 fill-opacity-70 min-h-[357px] stroke-[1px] stroke-black max-md:px-5 max-md:max-w-full">
        <div className='bg-gray-950/50 w-full flex items-center justify-center p-5'>

          <div className="flex flex-col mt-3.5 mb-11 max-w-full w-[900px] max-md:mb-10   size-full text-center">
            <h1 className="text-4xl text-white max-md:max-w-full"> A Seamless Blend of Comfort and Campus Living </h1>
            <p className="self-center mt-14 text-2xl text-center text-zinc-300 max-md:mt-10 max-md:max-w-full"> Welcome to Rk Hostel, the exclusive residence nestled within the RK University campus. We provide a comfortable, convenient, and student-friendly environment designed to enhance your experience as an RKU student. </p>
          </div>
        </div>

        <div className='bg-gray-950/50 w-full flex items-center justify-center p-5 mt-12 h-24'>
          <div className=" w-[50%] 
     shadow-lg object-cover object-center mb-0 bg-red-400 
    [clip-path:polygon(0%_0%,100%_50%,50%_100%,0%_100%)]" >

            <p className="self-center mt-14 text-2xl text-center text-zinc-300 max-md:mt-10 max-md:max-w-full"> Welcome to Rk Hostel</p>
          </div>

          <div className=" w-[30%]  flex items-center justify-center
     shadow-lg  mb-0 bg-red-400 
    [clip-path:polygon(75%_0%, 75%_100%, 0%_100%, 0_50%, 0%_0%)]
    [shape-outside:polygon(75%_0%,  75%_100%, 0%_100%, 0_50%, 0%_0%)]
    ">

            <p className="self-center mt-14 text-2xl  text-zinc-300 max-md:mt-10 max-md:max-w-full"> Welcome to Rk Hostel</p>
          </div>
        </div>



      </header>
      <img className="w-64 float-left aspect-[1/1] lg:aspect-[1/2] 
    rounded-lg shadow-lg object-cover object-center mb-0 mr-6 
    [clip-path:polygon(0%_0%,100%_50%,50%_100%,0%_100%)]

    "

        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"

        alt="John Doe Avatar"
      />

    </section>
  )
}

export default Home