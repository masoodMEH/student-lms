import Image from "next/image";
import { Button } from "./_components/button";

const page = () => {
  return (
    <>
      <section className="bg-hero-pattern bg-no-repeat bg-center mt-5 xl:mt-20 xl:bg-left">
        <div className="container flex flex-col-reverse items-center xl:flex-row">
          <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
            <h3 className="text-xl dark:text-info xl:text-2xl">
              خوش اومدی به ...
            </h3>
            <h1 className="text-3xl font-black gradient lg:text-5xl xl:text-5xl">
              مسیر سعود به قله های برنامه نویسی
            </h1>
            <p className="text-lg font-bold leading-8">
              هر جای مسیر برنامه نویسی که باشی ، با همراهی استاد های با تجربه
              کلاسبن می تونی بدون محدودیت به قله های بالاتر سعود کنی . ما همیشه
              هواتو داریم
            </p>
            <div className="mt-5 flex gap-4">
              <Button variant="primary" size="large" shape="wide">دوره های ری اکت و نکست</Button>
              <Button variant="neutral" size="large" shape="wide">مشاوره برنامه نویسی</Button>
            </div>
            <Image
              src="/images/frameworks.png"
              width={412}
              height={39}
              alt=""
              className="grayscale mt-4 opacity-70 m-auto xl:m-0"
            />
          </div>
          <Image
            src="/images/programmer-landing.svg"
            width={702}
            height={521}
            alt="کلاسبن"
          />
        </div>
      </section>
      <div className="container">
        <Button variant="info" size="large" shape="wide" animatedIcon={true}>
          ثبت نام
        </Button>
      </div>
    </>
  );
};

export default page;
