import ImageProfile from "@/components/Appearance/ImageProfile";
import EditorLayout from "@/components/Layout/EditorLayout";
import Section from "@/components/Layout/Section";
import React, { ReactElement } from "react";

const Appearance = () => {
  return (
    <div className="space-y-10">
      <Section title="Profile">
        <div className="card w-full bg-base-100 shadow-sm ">
          <div className="card-body">
            <ImageProfile />
            <div className="w-full mt-10">
              <form action="#" className="space-y-5">
                <input
                  type="text"
                  className="w-full bg-base-300/30 px-5 py-3 rounded-lg outline-none"
                  placeholder="Username"
                />
                <textarea
                  className="w-full bg-base-300/30 px-5 py-3 rounded-lg outline-none"
                  placeholder="Bio"
                  rows={3}
                ></textarea>
              </form>
            </div>
          </div>
        </div>
      </Section>
      <Section title="Themes">
        <div className="card w-full bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

Appearance.getLayout = (page: ReactElement) => {
  return <EditorLayout>{page}</EditorLayout>;
};

export default Appearance;
