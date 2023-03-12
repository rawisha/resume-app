import React from "react";
import Sydney from "../templates/Sydney";
import InputFields from "./InputFields";
import Levo from "../templates/Levo";
function SingleTemplate() {
  return (
    <div className="flex flex-row ">
      <div className="border p-10 w-[50vw] border-sky-300 ">
        <div className="flex justify-center flex-col">
          <h1 className="text-center text-2xl text-black font-normal">
            Ingen titel
          </h1>

          <div className="flex flex-col  mt-10  w-full justify-center items-center">
            <form className="flex flex-col justify-center items-center ">
              <InputFields />

              <div className="flex flex-col w-full gap-2">
                <div>
                  <h1 className="text-2xl font-bold">Profil</h1>
                  <textarea />
                </div>

                <div>
                  <h1 className="text-2xl font-bold">Arbetslivserfarenhet</h1>
                  <p>add button</p>
                </div>

                <div>
                  <h1 className="text-2xl font-bold">
                    Hemsidor & Sociala länkar
                  </h1>
                  <p>add button</p>
                </div>

                <div>
                  <h1 className="text-2xl font-bold">Färdigheter</h1>
                  <p>add button</p>
                </div>

                <div>
                  <h1 className="text-2xl font-bold">Hobbies</h1>
                  <p>add button</p>
                </div>

                <div>
                  <h1 className="text-2xl font-bold">Kurser</h1>
                  <p>add button</p>
                </div>

                <div>
                  <h1 className="text-2xl font-bold">Praktikplatser</h1>
                  <p>add button</p>
                </div>

                <div>
                  <h1 className="text-2xl font-bold">Språk</h1>
                  <p>add button</p>
                </div>

                <div>
                  <h1 className="text-2xl font-bold">Referenser</h1>
                  <p>add button</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="border w-[50vw] border-sky-300 ">
        <div className="templateView p-20 bg-slate-300 w-full h-full">
          <Levo />
        </div>
      </div>
    </div>
  );
}

export default SingleTemplate;
