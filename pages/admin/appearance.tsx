import CardTheme from "@/components/Appearance/CardTheme";
import EditorLayout from "@/components/Layout/EditorLayout";
import Section from "@/components/Layout/Section";
import React, { ReactElement } from "react";
import http from "@/utils/http";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ThemeResult } from "@/types/api";
import ProfileForm from "@/components/Appearance/ProfileForm";

const Appearance = ({
  theme,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="space-y-10">
      <Section title="Profile">
        <div className="card w-full bg-base-100 shadow-sm ">
          <div className="card-body">
            <ProfileForm />
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
