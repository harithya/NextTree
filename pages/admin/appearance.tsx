import CardTheme from "@/components/Appearance/CardTheme";
import ImageProfile from "@/components/Appearance/ImageProfile";
import EditorLayout from "@/components/Layout/EditorLayout";
import Section from "@/components/Layout/Section";
import React, { ReactElement } from "react";
import BackgroundForm from "@/components/Appearance/BackgroundForm";
import http from "@/utils/http";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ThemeResult } from "@/types/api";

const Appearance = ({
  theme,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
                  disabled
                  onChange={() => null}
                />
                <textarea
                  className="w-full bg-base-300/30 px-5 py-3 rounded-lg outline-none"
                  placeholder="Bio"
                  rows={3}
                  onChange={() => null}
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
              {theme?.map((val: ThemeResult, i: number) => (
                <CardTheme key={i} {...val} />
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section title="Backgrounds">
        <div className="card w-full bg-base-100 shadow-sm">
          <div className="card-body">
            <BackgroundForm />
          </div>
        </div>
      </Section>
    </div>
  );
};

Appearance.getLayout = (page: ReactElement) => {
  return <EditorLayout>{page}</EditorLayout>;
};

export async function getServerSideProps(context: GetServerSideProps) {
  const req = await http.get("theme");
  return {
    props: {
      theme: req.data.theme,
    },
  };
}

export default Appearance;
