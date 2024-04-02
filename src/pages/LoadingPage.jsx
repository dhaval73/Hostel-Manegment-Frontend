
export default function LoadingPage() {
  return (
    <div className=" animate-pulse bg-gray-200 w-full min-h-screen flex justify-center items-center">
  <div className="  flex min-h-screen w-full items-center justify-center bg-gray-200">
    <div className=" delay-1000 animate-spin flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 ">
      <div className=" mr-6 h-4 w-4 rounded-full bg-gray-200" />
    </div>
  </div>
</div>
  );
}