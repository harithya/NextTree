import CardTheme from "@/components/Appearance/CardTheme";
import ImageProfile from "@/components/Appearance/ImageProfile";
import EditorLayout from "@/components/Layout/EditorLayout";
import Section from "@/components/Layout/Section";
import React, { ReactElement } from "react";
import { listTheme } from "../api/dummy";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
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
            <div className="grid grid-cols-3 gap-5">
              {listTheme.map((val, i) => (
                <CardTheme key={i} {...val} />
              ))}
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
