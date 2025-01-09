import { SparklesCore } from "../../../components/ui/sparkles/SparklesCore";
 
export default function Sparkles() {
  return (
    <div className="h-[40rem] relative w-full bg-white flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={2.4}
          particleDensity={500}
          className="w-full h-full"
          particleColor="#AA4A44"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Build great products
      </h1>
    </div>
  );
}